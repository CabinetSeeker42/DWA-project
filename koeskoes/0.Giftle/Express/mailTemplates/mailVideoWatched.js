/**
 * Mail template for the mail when a video is watched
 * mail will be send to the buyer.
 *
 * @param {string} firstNameBuyer
 * @param {string} lastNameBuyer
 * @param {string} firstNameReceiver
 * @param {string} lastNameReceiver
 * @returns Mail preset
 */
const mailVideoWatched = (firstNameBuyer, lastNameBuyer, firstNameReceiver, lastNameReceiver) => {
  return `<html>
    <head>
      <style>
        body {
          margin: 0rem;
        }
        p {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
        .container {
          background-color: #e8e8e8;
          padding: 1rem 5rem 1rem 5rem;
        }
        .row {
          margin-bottom: 2rem;
        }
        .row > p {
          margin-bottom: 0rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="row">
          <p>Beste ${firstNameBuyer} ${lastNameBuyer},</p>
        </div>
        <div class="row">
          <p>${firstNameReceiver} ${lastNameReceiver} heeft jouw Giftle ontvangen en bekeken!</p>
        </div>
        <div class="row">
          <p>Heel erg bedankt voor het bestellen van <b><i>een Giftle</i></b> en wie weet krijg jij er binnenkort wel eentje als cadeau!</p>
        </div>
        <div>
          <p>Met vriendelijke groet,</p>
          <p>Giftle</p>
        </div>
      </div>
    </body>
  </html>`;
};

module.exports = mailVideoWatched;
