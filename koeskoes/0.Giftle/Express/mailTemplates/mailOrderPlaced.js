/**
 * Mail template for the mail when an order is placed
 *
 * @param {string} firstNameBuyer
 * @param {string} lastNameBuyer
 * @param {string} textCode
 * @returns Mail preset
 */
const mailOrderPlaced = (firstNameBuyer, lastNameBuyer, textCode) => {
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
          color: #000000;
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
          text-decoration: none;
        }
        .link:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="row">
          <p>Beste ${firstNameBuyer + " " + lastNameBuyer},</p>
        </div>
        <div class="row">
          <p>Wat leuk dat je een Giftle hebt besteld!</p>
        </div>
        <div class="row">
          <p>Als je hieronder op de knop drukt, wordt je doorgeleid naar onze upload pagina.
          Hier kun je een video uploaden of opnemen. Vervolgens kan je een e-mailadres van de ontvanger invoeren mocht je dit nog niet gedaan hebben.</p>
        </div>
        <div class="row">
          <a href="${process.env.CLIENTHOSTNAME}/ordercontrol/${textCode}" class="btn" style="color: #fffffe !important;">Ga naar Giftle!</a>
        </div>
        <div class="row note">
          <p>Werkt de knop niet? Dan kun je onze pagina ook vinden door op deze link te klikken:</p>
          <a href="${process.env.CLIENTHOSTNAME}/ordercontrol/${textCode}" class="link">${process.env.CLIENTHOSTNAME}/ordercontrol/${textCode}</a>
        </div>
        <div>
          <p>Met vriendelijke groet,</p>
          <p>Giftle</p>
        </div>
      </div>
    </body>
  </html>`;
};

module.exports = mailOrderPlaced;
