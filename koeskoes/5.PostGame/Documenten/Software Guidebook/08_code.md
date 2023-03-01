# Code

In dit product is gebruikgemaakt van [React](https://reactjs.org/) en voor de state control is gebruik gemaakt van [Redux](https://react-redux.js.org/). Voor het maken van asynchrone action creators is er gebruikgemaakt van [Redux-Thunk](https://www.npmjs.com/package/redux-thunk). Deze aspecten maken samen de frontend van de webapplicatie. Voor de backend is [Express](https://expressjs.com/) gebruikt. Deze twee verschillende applicaties zijn verbonden met de REST API. Voor de database is er gebruik gemaakt van [MongoDB](https://www.mongodb.com/). Door middel van [Mongoose](https://mongoosejs.com/) maakt Express gebruik van deze database.

Voor het responsive design en het stylen van de website is er gebruik gemaakt van [Bootstrap V5.1.3](https://getbootstrap.com/docs/5.1/getting-started/introduction/).

Voor het maken van de QR-codes maken wij gebruik van de node module [qr-code-styling](https://www.npmjs.com/package/qr-code-styling). Om deze QR-codes vervolgens te kunnen scannen gebruiken wij de node module [react-qr-reader](https://www.npmjs.com/package/react-qr-reader). Voor het uploaden van bestanden gebruiken wij de node module [express-fileupload](https://www.npmjs.com/package/express-fileupload). Om video's op te nemen op de website is er gebruikgemaakt van de node module [react-webcam](https://www.npmjs.com/package/react-webcam). Voor het versturen van een request naar de Express server is er gebruikgemaakt van de node module [axios](https://www.npmjs.com/package/axios).

Voor het unit- & integratie testen van de applicatie is er gebruikgemaakt van [jest](https://www.npmjs.com/package/jest). Voor het end-to-end testen is gebruik gemaakt van [puppeteer](https://www.npmjs.com/package/puppeteer).

## Belangrijke informatie voor volgende developers
Hieronder staan voor developers belangrijke informatie waarmee zij rekening moeten houden. Deze informatie moet uiteindelijk wel aangepast worden, omdat dit niet de juiste manier is om het te doen en dus alleen iets tijdelijks is.

### Employee tabel filteren
Bij de url ```/employee/checkorders``` is er een tabel te vinden met alle bestellingen van Giftle. Deze bestellingen worden nu alleen op de frontend gefilterd, wat niet de bedoeling is en dus iets tijdelijks is. Dit moet dus verandert worden en hiervoor moet een betere (backend) oplossing voor komen.

