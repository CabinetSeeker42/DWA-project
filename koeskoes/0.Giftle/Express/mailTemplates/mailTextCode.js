/**
 * Mail template for the receiver when an order is placed
 * containing the textcode
 *
 * @param {string} firstNameBuyer
 * @param {string} lastNameBuyer
 * @param {string} firstNameReceiver
 * @param {string} lastNameReceiver
 * @param {string} textCode
 * @returns Mail preset
 */
const mailTextCode = (firstNameBuyer, lastNameBuyer, firstNameReceiver, lastNameReceiver, textCode) => {
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
        span {
          border: 2px dotted black;
          padding: 0.5rem;
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
          <p>Beste ${firstNameReceiver} ${lastNameReceiver},</p>
        </div>
        <div class="row">
          <p>${firstNameBuyer} ${lastNameBuyer} heeft jou een Giftle gestuurd!</p>
        </div>
        <div class="row mb">
          <p>Om deze Giftle te kunnen openen, klik je op de knop hieronder. Hiervoor heb je een speciale tekstcode nodig.</p>
          <p>Jouw tekstcode is: <span><b><i>${textCode}</i></b></span></p>
        </div>
        <div class="row">
          <a href="${process.env.CLIENTHOSTNAME}/receiver/watchvideo/${textCode}" class="btn" style="color: #fffffe !important;">Bekijk de Giftle!</a>
        </div>
        <div class="row note">
          <p>Werkt de knop niet? Dan kun je onze pagina ook vinden door op deze link te klikken:</p>
          <a href="${process.env.CLIENTHOSTNAME}/receiver/watchvideo/${textCode}" class="link">${process.env.CLIENTHOSTNAME}/receiver/watchvideo/${textCode}</a>
          <p>of ga naar de volgende link:</p>
          <a href="${process.env.CLIENTHOSTNAME}/receiver/textcode" class="link">${process.env.CLIENTHOSTNAME}/receiver/textcode</a>
        </div>
        <div>
          <p>Met vriendelijke groet,</p>
          <p>Giftle</p>
        </div>
      </div>
    </body>
  </html>`;
};

module.exports = mailTextCode;
