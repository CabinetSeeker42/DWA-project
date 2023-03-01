const puppeteer = require("puppeteer");
const path = require("path");

// Set the timeout to 1 minute so it'll wait a little longer for e.g. websockets
jest.setTimeout(60000);

// Bundles all the E2E tests into one
describe("Giftle E2E tests", () => {
  // Creates four variables, two for each client.
  // We use two clients to test websocket messages later on.
  let browserA, pageA;
  let browserB, pageB;

  // Before all the tests we'll create our first client and set some usefull parameters.
  beforeAll(async () => {
    browserA = await puppeteer.launch({
      headless: false,
      slowMo: 5,
      args: ["--window-size=700,800", "--window-position=0,0"],
    });
    pageA = await browserA.newPage();
  });

  // After all tests we'll close both clients so they don't stay open.
  afterAll(async () => {
    await browserA.close();
    await browserB.close();
  });

  // This bundle will test the order creation.
  describe("Order creation tests", () => {
    // The happy path will create an order with the correct data.
    test("Create new order (happy path)", async () => {
      // The first client gets sent to the checkout page.
      await pageA.goto("http://localhost:3000/checkout");

      // Some data gets filled in, like email addresses and names.
      // Buyer information.
      await pageA.type("#emailBuyer", "buyer@mail.com");
      await pageA.type("#firstnameBuyer", "firstnameBuyer");
      await pageA.type("#lastnameBuyer", "lastnameBuyer");

      // Receiver information.
      await pageA.type("#emailReceiver", "receiver@mail.com");
      await pageA.type("#firstnameReceiver", "firstnameReceiver");
      await pageA.type("#lastnameReceiver", "lastnameReceiver");

      // The client will click on a checkbox that enables the user to upload a video.
      const checkBoxGiftle = await pageA.$('input[id="checkBoxGiftle"]');
      expect(checkBoxGiftle).toBeDefined();
      await checkBoxGiftle.evaluate((b) => b.click());

      // The client will click on the create order button.
      const createOrder = await pageA.$('div[id="createOrder"] button');
      expect(createOrder).toBeDefined();
      await createOrder.evaluate((b) => b.click());

      // After all the changes it'll check for a specific message on screen.
      // If that message appears, the test will be successfull
      await pageA.waitForSelector("h1");
      const h1 = await pageA.$("h1");
      const value = await pageA.evaluate((el) => el.textContent, h1);
      expect(value).toBe("Bedankt voor het kopen van een Giftle!");
    });

    // This alternative path will test an error message when no email address has been filled in.
    test("Create new order without an e-mail (alternate path), when error is fixed create happy path", async () => {
      await pageA.goto("http://localhost:3000/checkout");

      // buyer information without e-mail
      await pageA.type("#firstnameBuyer", "firstnameBuyer");
      await pageA.type("#lastnameBuyer", "lastnameBuyer");

      // receiver information without e-mail
      await pageA.type("#firstnameReceiver", "firstnameReceiver");
      await pageA.type("#lastnameReceiver", "lastnameReceiver");

      const checkBoxGiftle = await pageA.$('input[id="checkBoxGiftle"]');
      expect(checkBoxGiftle).toBeDefined();
      await checkBoxGiftle.evaluate((b) => b.click());

      const createOrder = await pageA.$('div[id="createOrder"] button');
      expect(createOrder).toBeDefined();
      await createOrder.evaluate((b) => b.click());

      await pageA.waitForSelector("div.alert");
      const alert = await pageA.$("div.alert > div");
      let value = await pageA.evaluate((el) => el.textContent, alert);
      expect(value).toBe(
        "Uw e-mailadres is helaas niet geldig. Een e-mailadres moet op dit formaat lijken: naam@domein.com"
      );

      // After error message comes happy path again
      await pageA.type("#emailBuyer", "buyer@mail.com");
      await pageA.type("#emailReceiver", "receiver@mail.com");

      expect(checkBoxGiftle).toBeDefined();
      await checkBoxGiftle.evaluate((b) => b.click());

      expect(createOrder).toBeDefined();
      await createOrder.evaluate((b) => b.click());

      await pageA.waitForSelector("h1");
      const h1 = await pageA.$("h1");
      value = await pageA.evaluate((el) => el.textContent, h1);
      expect(value).toBe(
        "Bedankt voor het plaatsen van een bestelling bij onze webshop!"
      );
    });
  });

  // This bundle will test the video upload proces.
  describe("Buyer tests", () => {
    // Before all the tests in this bundle, it'll launch the second client.
    // This client will act as the employee.
    beforeAll(async () => {
      browserB = await puppeteer.launch({
        headless: false,
        slowMo: 5,
        args: ["--window-size=1100,800", "--window-position=350,0"],
      });
      pageB = await browserB.newPage();
    });

    afterAll(async () => {
      await browserB.close();
    });

    // This test will upload a file called `testFile1.webm`.
    test("Upload testFile1.webm", async () => {
      // Both clients get send to their pages.
      await pageA.goto("http://localhost:3000/ordercontrol/abc123");
      await pageB.goto("http://localhost:3000/employee/checkorders");

      // The first client will put the file into the file input.
      const fileInput = await pageA.$("#fileInput");
      expect(fileInput).toBeDefined();
      await fileInput.uploadFile(path.join(__dirname, "testFile1.webm"));

      // After that it'll click on the upload button.
      const upload = await pageA.$("#upload");
      expect(upload).toBeDefined();
      await upload.evaluate((b) => b.click());

      // On the next page, the first client will wait for the rewatch video page to appear.
      await pageA.waitForSelector("#rewatchVideoComponent");
      const rewatchVideoComponent = await pageA.$("#rewatchVideoComponent");
      const value = await pageA.evaluate(
        (el) => el.textContent,
        rewatchVideoComponent
      );
      expect(value).toBe("Video terugkijken en geluid controleren");

      // On this page the first client will test the fullscreen functionality.
      await pageA.waitForSelector("#fullscreen");
      const fullscreen = await pageA.$("#fullscreen");
      expect(fullscreen).toBeDefined();
      await fullscreen.evaluate((b) => b.click());

      // Here it'll check if the screen has gone fullscreen.
      const fullScreenState = await pageA.evaluate(() => {
        return !!document.querySelector(".container-flex");
      });
      expect(fullScreenState).toEqual(true);

      // After that, it'll make the screen go back to the original size.
      await fullscreen.evaluate((b) => b.click());

      // And check if that has really happened
      const newFullScreenState = await pageA.evaluate(() => {
        return !!document.querySelector(".container");
      });
      expect(newFullScreenState).toEqual(true);

      // After testing the fullscreen functionality, the first client will move on to the personlization form.
      const personalize = await pageA.$("#personalize");
      expect(personalize).toBeDefined();
      await personalize.evaluate((b) => b.click());

      // After clicking on the personalize button, it'll wait for the form to open up.
      await pageA.waitForSelector("#personalizationForm");
      const row = await pageA.$("#personalizationForm > div");
      const personalizeState = await pageA.evaluate(
        (el) => el.textContent,
        row
      );
      expect(personalizeState).toBe("Personaliseren");

      // Now the second client will check if the table is empty.
      await pageB.waitForSelector("#checkOrdersTable");
      const pageBResult = await pageB.$$eval("#checkOrdersTable tr", (rows) => {
        return Array.from(rows, (row) => {
          const columns = row.querySelectorAll("td");
          return Array.from(columns, (column) => column.innerText);
        });
      });

      expect(pageBResult[1]).toEqual([]);

      // The first client will send the video message.
      const sendVideoMessage = await pageA.$("#sendVideoMessage");
      expect(sendVideoMessage).toBeDefined();
      await sendVideoMessage.evaluate((b) => b.click());

      // After sending the message, the first client will wait for the thank you message.
      await pageA.waitForSelector("#thankYouMessage");
      const h1 = await pageA.$("#thankYouMessage > h1");
      const h1Value = await pageA.evaluate((el) => el.textContent, h1);
      expect(h1Value).toBe("Bedankt voor het versturen van je Giftle!");

      // Some data to check the order.
      const checkableTableData = [
        "VoornaamGifter AchternaamGifter",
        "gifter@mail.com",
        "VoornaamReceiver AchternaamReceiver",
        "receiver@mail.com",
      ];

      // The second client will check if the order has come in correctly.
      const pageBResultAfter = await pageB.$$eval(
        "#checkOrdersTable tr",
        (rows) => {
          return Array.from(rows, (row) => {
            const columns = row.querySelectorAll("td");
            return Array.from(columns, (column) => column.innerText);
          });
        }
      );

      pageBResultAfter[1].pop();

      expect(pageBResultAfter[1]).toEqual(checkableTableData);
    });
  });

  // A bundle for employee testing.
  describe("Employee tests", () => {
    // Before all tests, it'll start the second client.
    beforeAll(async () => {
      browserB = await puppeteer.launch({
        headless: false,
        slowMo: 5,
        args: ["--window-size=1100,800", "--window-position=350,0"],
      });
      pageB = await browserB.newPage();
    });

    afterAll(async () => {
      await browserB.close();
    });

    // This test will check if the websocket message work correctly.
    test("Employee check order page (websocket)", async () => {
      // Both clients get send to the employee page.
      await pageA.goto("http://localhost:3000/employee/checkorders");
      await pageB.goto("http://localhost:3000/employee/checkorders");
      // Some data to check the original data with.
      const checkableTableData = [
        "VoornaamGifter AchternaamGifter",
        "gifter@mail.com",
        "VoornaamReceiver AchternaamReceiver",
        "receiver@mail.com",
      ];

      // The first client checks if the data is visible.
      await pageA.waitForSelector("#checkOrdersTable");
      const pageAResult = await pageA.$$eval("#checkOrdersTable tr", (rows) => {
        return Array.from(rows, (row) => {
          const columns = row.querySelectorAll("td");
          return Array.from(columns, (column) => column.innerText);
        });
      });

      pageAResult[1].pop();

      expect(pageAResult[1]).toEqual(checkableTableData);

      // The second client checks if the data is visible.
      await pageB.waitForSelector("#checkOrdersTable");
      const pageBResult = await pageB.$$eval("#checkOrdersTable tr", (rows) => {
        return Array.from(rows, (row) => {
          const columns = row.querySelectorAll("td");
          return Array.from(columns, (column) => column.innerText);
        });
      });

      pageBResult[1].pop();

      expect(pageBResult[1]).toEqual(checkableTableData);

      // The first client will click on the print button.
      await pageA.waitForSelector("#prePrintOrder");
      const pageAPrePrintOrder = await pageA.$$("#prePrintOrder");
      await pageAPrePrintOrder[0].evaluate((b) => b.click());

      // The second client will wait for the button to change.
      await pageB.waitForSelector("#printFinalOrder");
      const pageBPrintFinalOrderCheck = await pageB.$$("#printFinalOrder");

      expect(!!pageBPrintFinalOrderCheck[0]).toEqual(true);

      // The first client will click on the print button again.
      await pageA.waitForSelector("#printFinalOrder");
      const pageAPrintFinalOrder = await pageA.$$("#printFinalOrder");
      await pageAPrintFinalOrder[0].evaluate((b) => b.click());

      // Both clients check if the order has disappeared from the table.
      await pageA.waitForSelector("#checkOrdersTable");
      const pageAResultAfter = await pageA.$$eval(
        "#checkOrdersTable tr",
        (rows) => {
          return Array.from(rows, (row) => {
            const columns = row.querySelectorAll("td");
            return Array.from(columns, (column) => column.innerText);
          });
        }
      );

      expect(pageAResultAfter[1]).toEqual([]);

      // Both clients check if the order has disappeared from the table.
      await pageB.waitForSelector("#checkOrdersTable");
      const pageBResultAfter = await pageB.$$eval(
        "#checkOrdersTable tr",
        (rows) => {
          return Array.from(rows, (row) => {
            const columns = row.querySelectorAll("td");
            return Array.from(columns, (column) => column.innerText);
          });
        }
      );

      expect(pageBResultAfter[1]).toEqual([]);
    });
  });

  // A bundle of tests that checks the proces for the receiver.
  describe("Receiver tests", () => {
    // This test will watch the video.
    test("Switch to videoreaction", async () => {
      await pageA.goto("http://localhost:3000/receiver/watchvideo/abc123");

      const sendReaction = await pageA.$(".reactionButton");
      expect(sendReaction).toBeDefined();
      await sendReaction.evaluate((b) => b.click());

      const goTextReaction = await pageA.$(".text-reaction-button");
      expect(goTextReaction).toBeDefined();
      await goTextReaction.evaluate((b) => b.click());

      const goVideoReactionSwitch = await pageA.$(
        'div[id="video-reaction-switch"] input'
      );
      expect(goVideoReactionSwitch).toBeDefined();
      await goVideoReactionSwitch.evaluate((b) => b.click());

      await pageA.waitForSelector('h1[id="video-reaction-title"]');
      const h1Text = await pageA.$("h1");
      const valueText = await pageA.evaluate((el) => el.textContent, h1Text);
      expect(valueText).toBe("Videoreactie verzenden");
    });

    // This test will send a textreaction.
    test("Send textreaction", async () => {
      await pageA.goto("http://localhost:3000/receiver/watchvideo/abc123");

      const sendReaction = await pageA.$(".reactionButton");
      expect(sendReaction).toBeDefined();
      await sendReaction.evaluate((b) => b.click());

      const goTextReaction = await pageA.$(".text-reaction-button");
      expect(goTextReaction).toBeDefined();
      await goTextReaction.evaluate((b) => b.click());

      await pageA.type(
        "#textfield-reaction",
        "Heel erg bedankt voor de video!"
      );

      const createReaction = await pageA.$(
        'div[id="send-text-message"] button'
      );
      expect(createReaction).toBeDefined();
      await createReaction.evaluate((b) => b.click());

      await pageA.waitForSelector('h1[id="reaction-sent"]');
      const h1 = await pageA.$("h1");
      const value = await pageA.evaluate((el) => el.textContent, h1);
      expect(value).toBe("Bedankt voor het versturen van een reactie!");
    });

    // This test will try to send a textreaction.
    test("Send textreaction (reaction has already been sent)", async () => {
      await pageA.goto("http://localhost:3000/receiver/watchvideo/abc123");

      const sendReaction = await pageA.$(".reactionButton");
      expect(sendReaction).toBeDefined();
      await sendReaction.evaluate((b) => b.click());

      await pageA.waitForSelector('h1[id="reaction-already-sent"]');
      const h1Text = await pageA.$("h1");
      const valueText = await pageA.evaluate((el) => el.textContent, h1Text);
      expect(valueText).toBe("Er is al een reactie verstuurd.");
    });
  });
});
