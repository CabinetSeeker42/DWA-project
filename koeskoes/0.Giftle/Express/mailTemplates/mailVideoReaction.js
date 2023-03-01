/**
 * Mail template for the buyer when the receiver sent a video reaction
 *
 * @param {string} firstNameBuyer
 * @param {string} lastNameBuyer
 * @param {string} firstNameReceiver
 * @param {string} lastNameReceiver
 * @param {string} textCode
 * @returns Mail preset
 */
const mailVideoReaction = (firstNameBuyer, lastNameBuyer, firstNameReceiver, lastNameReceiver, textCode) => {
  return `<html>
    <head>
      <style>
        body {
          margin: 0rem;
        }
        p {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
        a {
          color: #ffffff;
          text-decoration: none;
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
        .mb {
          margin-bottom: 3rem;
        }
        .btn {
          background-color: #0d6efd;
          border-radius: 0.25rem;
          margin-bottom: 2rem;
          padding: 0.575rem 1.5rem;
        }
        .btn:hover {
          opacity: 0.8;
        }
        .note > p, .note > a {
          font-size: 12px;
        }
        .link {
          color: #1c0dfd;
          font-style: italic;
        }
        .link:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="row">
          <p>Beste ${firstNameBuyer} ${lastNameBuyer},</p>
        </div>
        <div class="row mb">
          <p>
            ${firstNameReceiver} ${lastNameReceiver} heeft gereageerd op de Giftle die je hebt gestuurd!
            <br><br>
            Klik op de knop hieronder om de videoreactie van ${firstNameReceiver} ${lastNameReceiver} te bekijken.
          </p>
        </div>
        <div class="row">
          <a href="${process.env.CLIENTHOSTNAME}/buyer/reaction/${textCode}" class="btn" style="color: #fffffe !important;">Bekijk de reactie!</a>
        </div>
        <div class="row note">
          <p>Werkt de knop niet? Dan kun je de reactie ook bekijken door op deze link te klikken:</p>
          <a href="${process.env.CLIENTHOSTNAME}/buyer/reaction/${textCode}" class="link">${process.env.CLIENTHOSTNAME}/watchvideo/${textCode}</a>
        </div>
        <div>
          <p>Met vriendelijke groet,</p>
          <p>Giftle</p>
        </div>
      </div>
    </body>
  </html>`;
};

module.exports = mailVideoReaction;
