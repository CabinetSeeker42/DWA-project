const axios = require("axios");
const mongoose = require("mongoose");
const fileExtensionChecker = require("../commonFunctions/fileExtensionChecker");
const generateRandomFileName = require("../commonFunctions/generateRandomFileName");
const MailModule = require("../commonFunctions/sendMails");
require("../model/uploadModel");

require("dotenv").config();

const Uploads = mongoose.model("UploadSchema");

let order = {
  _id: "619b7c66d79dad758c1e5519",
  emailGifter: "gifter@mail.com",
  firstNameGifter: "firstnameGifter",
  lastNameGifter: "lastnameGifter",
  firstNameReceiver: "firstnameReceiver",
  lastNameReceiver: "lastnameReceiver",
  textcodeSent: false,
  videoName: "video.mp4",
  prePrinted: false,
  printed: false,
  textCode: "123abc",
  answerSent: false,
};

beforeAll(async () => {
  await mongoose.connect("mongodb://localhost:27017/giftle", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  await Uploads.deleteMany({});
});

beforeEach(async () => {
  await Uploads.create(order);
});

afterEach(async () => {
  await Uploads.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Express route tests", () => {
  test("get orders from mongoose route", async () => {
    const orders = await axios.get(
      "http://localhost:4000/api/orders/all/?printed=false"
    );

    expect(orders.data).toEqual([order]);
  });

  test("create new order without file route", async () => {
    const orders = await axios.patch(
      `http://localhost:4000/api/orders/order/video/${order.textCode}`
    );

    expect(orders.data).toEqual({
      status: "error",
      message: "No file has been uploaded",
    });
  });

  test("set order to printed route", async () => {
    const orderChange = await axios.patch(
      "http://localhost:4000/api/orders/" + order.textCode
    );

    expect(orderChange.data).toEqual({
      status: "success",
      message: "Order change saved",
    });
  });
});

describe("Database tests", () => {
  test("create new order in database", async () => {
    const duplicateOrder = {
      ...order,
      _id: "619b7c66d79dad758c1e5520",
      videoName: "duplicateVideo.mp4",
      textCode: "456def",
    };

    const createdOrder = await Uploads.create(duplicateOrder);

    expect(!!createdOrder).toEqual(true);
  });

  test("check if video is mp4", async () => {
    const orderWithMp4 = await Uploads.findOne(
      {
        videoName: {
          $exists: true,
          $regex: /.*.mp4.*/,
        },
      },
      {
        _id: 1,
        emailGifter: 1,
        firstNameGifter: 1,
        lastNameGifter: 1,
        firstNameReceiver: 1,
        lastNameReceiver: 1,
        videoName: 1,
        prePrinted: 1,
        printed: 1,
        textCode: 1,
      }
    ).lean();

    orderWithMp4._id = orderWithMp4._id.toString();

    expect({ ...orderWithMp4 }).toEqual({
      _id: "619b7c66d79dad758c1e5519",
      emailGifter: "gifter@mail.com",
      firstNameGifter: "firstnameGifter",
      lastNameGifter: "lastnameGifter",
      firstNameReceiver: "firstnameReceiver",
      lastNameReceiver: "lastnameReceiver",
      videoName: "video.mp4",
      prePrinted: false,
      printed: false,
      textCode: "123abc",
    });
  });

  test("check if video is not mp4", async () => {
    const duplicateOrder = {
      ...order,
      _id: "619b7c66d79dad758c1e5520",
      videoName: "video.mov",
      textCode: "456def",
    };

    await Uploads.create(duplicateOrder);

    const orderWithNoMp4 = await Uploads.findOne(
      {
        videoName: {
          $exists: true,
          $not: /.*.mp4.*/,
        },
      },
      {
        _id: 1,
        emailGifter: 1,
        firstNameGifter: 1,
        lastNameGifter: 1,
        emailReceiver: 1,
        firstNameReceiver: 1,
        lastNameReceiver: 1,
        videoName: 1,
        textCode: 1,
        printed: 1,
        prePrinted: 1,
        textcodeSent: 1,
        answerSent: 1,
      }
    ).lean();

    orderWithNoMp4._id = orderWithNoMp4._id.toString();

    expect({ ...orderWithNoMp4 }).toEqual(duplicateOrder);
  });

  test("get order by id from database", async () => {
    const findOrderById = await Uploads.findOne(
      {
        _id: order._id,
      },
      {
        _id: 1,
        emailGifter: 1,
        firstNameGifter: 1,
        lastNameGifter: 1,
        firstNameReceiver: 1,
        lastNameReceiver: 1,
        videoName: 1,
        prePrinted: 1,
        printed: 1,
        textCode: 1,
        textcodeSent: 1,
        answerSent: 1,
      }
    ).lean();

    findOrderById._id = findOrderById._id.toString();

    expect(findOrderById).toEqual(order);
  });

  test("get order by textcode from database", async () => {
    const findOrderByTextCode = await Uploads.findOne(
      {
        textCode: order.textCode,
      },
      {
        _id: 1,
        emailGifter: 1,
        firstNameGifter: 1,
        lastNameGifter: 1,
        firstNameReceiver: 1,
        lastNameReceiver: 1,
        videoName: 1,
        prePrinted: 1,
        printed: 1,
        textCode: 1,
        textcodeSent: 1,
        answerSent: 1,
      }
    ).lean();

    findOrderByTextCode._id = findOrderByTextCode._id.toString();

    expect(findOrderByTextCode).toEqual(order);
  });

  test("get order by emailGifter from database", async () => {
    const findOrderByEmailGifter = await Uploads.findOne(
      {
        emailGifter: order.emailGifter,
      },
      {
        _id: 1,
        emailGifter: 1,
        firstNameGifter: 1,
        lastNameGifter: 1,
        firstNameReceiver: 1,
        lastNameReceiver: 1,
        videoName: 1,
        prePrinted: 1,
        printed: 1,
        textCode: 1,
        textcodeSent: 1,
        answerSent: 1,
      }
    ).lean();

    findOrderByEmailGifter._id = findOrderByEmailGifter._id.toString();

    expect(findOrderByEmailGifter).toEqual(order);
  });

  test("get order by printed from database", async () => {
    const findOrderByPrinted = await Uploads.findOne(
      {
        printed: order.printed,
      },
      {
        _id: 1,
        emailGifter: 1,
        firstNameGifter: 1,
        lastNameGifter: 1,
        firstNameReceiver: 1,
        lastNameReceiver: 1,
        videoName: 1,
        prePrinted: 1,
        printed: 1,
        textCode: 1,
        textcodeSent: 1,
        answerSent: 1,
      }
    ).lean();

    findOrderByPrinted._id = findOrderByPrinted._id.toString();

    expect(findOrderByPrinted).toEqual(order);
  });

  test("get order by pre printed from database", async () => {
    const findOrderByPrePrinted = await Uploads.findOne(
      {
        prePrinted: order.prePrinted,
      },
      {
        _id: 1,
        emailGifter: 1,
        firstNameGifter: 1,
        lastNameGifter: 1,
        firstNameReceiver: 1,
        lastNameReceiver: 1,
        videoName: 1,
        prePrinted: 1,
        printed: 1,
        textCode: 1,
        textcodeSent: 1,
        answerSent: 1,
      }
    ).lean();

    findOrderByPrePrinted._id = findOrderByPrePrinted._id.toString();

    expect(findOrderByPrePrinted).toEqual(order);
  });

  test("set printed model method (printed false -> true)", async () => {
    const newOrder = await new Uploads({
      ...order,
      _id: "619b7c66d79dad758c1e5521",
      textCode: "456def",
      videoName: "newVideo.mp4",
    });

    await newOrder.setPrinted();

    const printedOrders = await Uploads.find(
      {
        printed: true,
      },
      {
        _id: 1,
        emailGifter: 1,
        firstNameGifter: 1,
        lastNameGifter: 1,
        firstNameReceiver: 1,
        lastNameReceiver: 1,
        videoName: 1,
        videoDuration: 1,
        prePrinted: 1,
        printed: 1,
        textCode: 1,
        textcodeSent: 1,
        answerSent: 1,
        answerText: 1,
        __v: 1,
      }
    ).lean();

    expect(printedOrders).toEqual([newOrder.toObject()]);
  });

  test("set pre printed model method (prePrinted false -> true)", async () => {
    const newOrder = await new Uploads({
      ...order,
      _id: "619b7c66d79dad758c1e5521",
      textCode: "456def",
      videoName: "newVideo.mp4",
    });

    await newOrder.setPrePrinted();

    const prePrintedOrders = await Uploads.find(
      {
        prePrinted: true,
      },
      {
        _id: 1,
        emailGifter: 1,
        firstNameGifter: 1,
        lastNameGifter: 1,
        firstNameReceiver: 1,
        lastNameReceiver: 1,
        videoName: 1,
        videoDuration: 1,
        prePrinted: 1,
        printed: 1,
        textCode: 1,
        textcodeSent: 1,
        answerSent: 1,
        answerText: 1,
        __v: 1,
      }
    ).lean();

    expect(prePrintedOrders).toEqual([newOrder.toObject()]);
  });

  test("method setCode test", async () => {
    const setCodeTest = await Uploads.findOne(
      {
        _id: order._id,
      },
      {
        _id: 1,
        emailGifter: 1,
        firstNameGifter: 1,
        lastNameGifter: 1,
        firstNameReceiver: 1,
        lastNameReceiver: 1,
        videoName: 1,
        prePrinted: 1,
        printed: 1,
        textCode: 1,
      }
    ).exec();

    await setCodeTest.setCode();

    expect(setCodeTest).not.toEqual(order);
  });

  test("order is less than 280 characters", async () => {
    const newOrder = await new Uploads({
      ...order,
      _id: "619b7c66d79dad758c1e5522",
      textCode: "456def",
      videoName: "newVideo.mp4",
      answerText:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    });

    await newOrder.save();

    const answeredOrders = await Uploads.findOne({
      _id: newOrder._id,
    }).lean();

    expect(answeredOrders).toEqual(newOrder.toObject());
  });

  test("order is more than 280 characters", async () => {
    const newOrder = await new Uploads({
      ...order,
      _id: "619b7c66d79dad758c1e5522",
      textCode: "456def",
      videoName: "newVideo.mp4",
      answerText:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    });

    await newOrder.save();

    const answeredOrders = await Uploads.find(
      {
        answerText:
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
      {
        _id: 1,
        emailGifter: 1,
        firstNameGifter: 1,
        lastNameGifter: 1,
        firstNameReceiver: 1,
        lastNameReceiver: 1,
        videoName: 1,
        prePrinted: 1,
        printed: 1,
        textCode: 1,
        textcodeSent: 1,
        answerSent: 1,
        answerText: 1,
        __v: 1,
      }
    ).lean();

    expect(answeredOrders.answerText).not.toEqual([newOrder.toObject()]);
  });
});

describe("CommonFunctions tests", () => {
  test("check extension (allowed extension)", () => {
    const checkedExtension = fileExtensionChecker("mp4");
    expect(checkedExtension).toEqual(true);
  });

  test("check extension (not allowed extension)", () => {
    const checkedExtension = fileExtensionChecker("avi");
    expect(checkedExtension).toEqual(false);
  });

  test("generate filename", () => {
    const files = generateRandomFileName(
      "videoname.mp4.mp3.avi",
      "randomNumber123"
    );

    expect(files).toEqual({
      finalFileName: "videoname.mp4.mp3randomNumber123.mp4",
      uploadPath: "videos/",
    });
  });
});

describe("Mail tests", () => {
  let mail;

  const convertMailData = (response) => {
    if (response.status === "success") {
      return {
        status: response.status,
        message: {
          accepted: response.message.accepted,
          rejected: response.message.rejected,
          envelope: response.message.envelope,
        },
      };
    } else {
      return {
        status: response.status,
        message: response.message,
      };
    }
  };

  beforeAll(async () => {
    mail = new MailModule();
  });

  describe("Send mail with textcode", () => {
    test("send mail with textcode (happy path)", async () => {
      const happyMailPath = await mail.sendTextCode(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer",
        "firstNameReceiver",
        "lastNameReceiver",
        "123abc"
      );

      const checkableData = convertMailData(happyMailPath);

      expect(checkableData).toEqual({
        status: "success",
        message: {
          accepted: ["mail@mail.com"],
          rejected: [],
          envelope: { from: "info@giftle.nl", to: ["mail@mail.com"] },
        },
      });
    });
    test("send mail with textcode (no receiver mail)", async () => {
      const noReceiverMailPath = await mail.sendTextCode(
        "",
        "firstNameBuyer",
        "lastNameBuyer",
        "firstNameReceiver",
        "lastNameReceiver",
        "123abc"
      );

      const checkableData = convertMailData(noReceiverMailPath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Mail not included",
      });
    });
    test("send mail with textcode (no receiver name)", async () => {
      const noReceiverMailPath = await mail.sendTextCode(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer",
        "",
        "",
        "123abc"
      );

      const checkableData = convertMailData(noReceiverMailPath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Firstname receiver not included",
      });
    });
    test("send mail with textcode (no buyer name)", async () => {
      const noReceiverMailPath = await mail.sendTextCode(
        "mail@mail.com",
        "",
        "",
        "firstNameReceiver",
        "lastNameReceiver",
        "123abc"
      );

      const checkableData = convertMailData(noReceiverMailPath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Firstname buyer not included",
      });
    });
    test("send mail with textcode (no textcode)", async () => {
      const noReceiverMailPath = await mail.sendTextCode(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer",
        "firstNameReceiver",
        "lastNameReceiver",
        ""
      );

      const checkableData = convertMailData(noReceiverMailPath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Textcode not included",
      });
    });
  });

  describe("Send mail with notification that video has been watched by the receiver", () => {
    test("send mail (happy path)", async () => {
      const happyMailPath = await mail.sendReminderVideoWatched(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer",
        "firstNameReceiver",
        "lastNameReceiver"
      );

      const checkableData = convertMailData(happyMailPath);

      expect(checkableData).toEqual({
        status: "success",
        message: {
          accepted: ["mail@mail.com"],
          rejected: [],
          envelope: { from: "info@giftle.nl", to: ["mail@mail.com"] },
        },
      });
    });
    test("send mail (no buyer mail)", async () => {
      const noBuyerMailPath = await mail.sendReminderVideoWatched(
        "",
        "firstNameBuyer",
        "lastNameBuyer",
        "firstNameReceiver",
        "lastNameReceiver"
      );

      const checkableData = convertMailData(noBuyerMailPath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Mail not included",
      });
    });
    test("send mail (no buyer name)", async () => {
      const noBuyerNamePath = await mail.sendReminderVideoWatched(
        "mail@mail.com",
        "",
        "",
        "firstNameReceiver",
        "lastNameReceiver"
      );

      const checkableData = convertMailData(noBuyerNamePath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Firstname buyer not included",
      });
    });
    test("send mail (no receiver name)", async () => {
      const noReceiverNamePath = await mail.sendReminderVideoWatched(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer",
        "",
        ""
      );

      const checkableData = convertMailData(noReceiverNamePath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Firstname receiver not included",
      });
    });
  });

  describe("Send mail with notification that no video has been uploaded", () => {
    test("send mail (happy path)", async () => {
      const happyMailPath = await mail.sendReminderUploadVideo(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer",
        "123abc"
      );

      const checkableData = convertMailData(happyMailPath);

      expect(checkableData).toEqual({
        status: "success",
        message: {
          accepted: ["mail@mail.com"],
          rejected: [],
          envelope: { from: "info@giftle.nl", to: ["mail@mail.com"] },
        },
      });
    });
    test("send mail (no buyer mail)", async () => {
      const noBuyerMailPath = await mail.sendReminderUploadVideo(
        "",
        "firstNameBuyer",
        "lastNameBuyer",
        "123abc"
      );

      const checkableData = convertMailData(noBuyerMailPath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Mail not included",
      });
    });
    test("send mail (no buyer name)", async () => {
      const noBuyerNamePath = await mail.sendReminderUploadVideo(
        "mail@mail.com",
        "",
        "",
        "123abc"
      );

      const checkableData = convertMailData(noBuyerNamePath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Buyer firstname not included",
      });
    });
  });

  describe("Send mail with notification of order", () => {
    test("send mail (happy path)", async () => {
      const happyMailPath = await mail.sendMailOrderPlaced(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer"
      );

      const checkableData = convertMailData(happyMailPath);

      expect(checkableData).toEqual({
        status: "success",
        message: {
          accepted: ["mail@mail.com"],
          rejected: [],
          envelope: { from: "info@giftle.nl", to: ["mail@mail.com"] },
        },
      });
    });
    test("send mail (no buyer mail)", async () => {
      const noBuyerMailPath = await mail.sendMailOrderPlaced("", "buyer");

      const checkableData = convertMailData(noBuyerMailPath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Mail not included",
      });
    });
    test("send mail (no buyer name)", async () => {
      const noBuyerNamePath = await mail.sendMailOrderPlaced(
        "mail@mail.com",
        "",
        "",
        "123abc"
      );

      const checkableData = convertMailData(noBuyerNamePath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Firstname buyer not included",
      });
    });
    test("send mail (w/ textCode)", async () => {
      const textCodeMailPath = await mail.sendMailOrderPlaced(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer",
        "123abc"
      );

      const checkableData = convertMailData(textCodeMailPath);

      expect(checkableData).toEqual({
        status: "success",
        message: {
          accepted: ["mail@mail.com"],
          rejected: [],
          envelope: {
            from: "info@giftle.nl",
            to: ["mail@mail.com"],
          },
        },
      });
    });
  });

  describe("Send text reaction mail", () => {
    test("send mail (happy path)", async () => {
      const happyMailPath = await mail.sendTextReaction(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer",
        "firstNameReceiver",
        "lastNameReceiver",
        "123abc"
      );

      const checkableData = convertMailData(happyMailPath);

      expect(checkableData).toEqual({
        status: "success",
        message: {
          accepted: ["mail@mail.com"],
          rejected: [],
          envelope: { from: "info@giftle.nl", to: ["mail@mail.com"] },
        },
      });
    });
    test("send mail (no buyer mail)", async () => {
      const noBuyerMailPath = await mail.sendTextReaction(
        "",
        "firstNameBuyer",
        "lastNameBuyer",
        "firstNameReceiver",
        "lastNameReceiver",
        "123abc"
      );

      const checkableData = convertMailData(noBuyerMailPath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Mail not included",
      });
    });
    test("send mail (no buyer name)", async () => {
      const noBuyerNamePath = await mail.sendTextReaction(
        "mail@mail.com",
        "",
        "",
        "firstNameReceiver",
        "lastNameReceiver",
        "123abc"
      );

      const checkableData = convertMailData(noBuyerNamePath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Firstname buyer not included",
      });
    });
    test("send mail (no receiver name)", async () => {
      const noReceiverNamePath = await mail.sendTextReaction(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer",
        "",
        "",
        "123abc"
      );

      const checkableData = convertMailData(noReceiverNamePath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Firstname receiver not included",
      });
    });
    test("send mail (no textCode)", async () => {
      const noTextReactionPath = await mail.sendTextReaction(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer",
        "firstNameReceiver",
        "lastNameReceiver",
        ""
      );

      const checkableData = convertMailData(noTextReactionPath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Textcode not included",
      });
    });
  });

  describe("Send mail with video reaction", () => {
    test("send mail (happy path)", async () => {
      const happyMailPath = await mail.sendVideoReaction(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer",
        "firstNameReceiver",
        "lastNameReceiver",
        "123abc"
      );

      const checkableData = convertMailData(happyMailPath);

      expect(checkableData).toEqual({
        status: "success",
        message: {
          accepted: ["mail@mail.com"],
          rejected: [],
          envelope: { from: "info@giftle.nl", to: ["mail@mail.com"] },
        },
      });
    });
    test("send mail (no buyer mail)", async () => {
      const noBuyerMailPath = await mail.sendVideoReaction(
        "",
        "firstNameBuyer",
        "lastNameBuyer",
        "firstNameReceiver",
        "lastNameReceiver",
        "123abc"
      );

      const checkableData = convertMailData(noBuyerMailPath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Mail not included",
      });
    });
    test("send mail (no buyer name)", async () => {
      const noBuyerNamePath = await mail.sendVideoReaction(
        "mail@mail.com",
        "",
        "",
        "firstNameReceiver",
        "lastNameReceiver",
        "123abc"
      );

      const checkableData = convertMailData(noBuyerNamePath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Firstname buyer not included",
      });
    });
    test("send mail (no receiver name)", async () => {
      const noReceiverNamePath = await mail.sendVideoReaction(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer",
        "",
        "",
        "123abc"
      );

      const checkableData = convertMailData(noReceiverNamePath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Firstname receiver not included",
      });
    });
    test("send mail (no textcode)", async () => {
      const noTextcodePath = await mail.sendVideoReaction(
        "mail@mail.com",
        "firstNameBuyer",
        "lastNameBuyer",
        "firstNameReceiver",
        "lastNameReceiver",
        ""
      );

      const checkableData = convertMailData(noTextcodePath);

      expect(checkableData).toEqual({
        status: "error",
        message: "Textcode not included",
      });
    });
  });
});
