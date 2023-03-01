# Data

## Algemene informatie

De data wordt opgeslagen in MongoDB onder de databasenaam 'Giftle' en heeft op het moment maar één collectie, genaamd 'uploadschemas'.

## Database schema

[Wat is een Schema?](https://docs.mongodb.com/realm/schemas/)

    const uploadSchema = new mongoose.Schema({
      emailGifter: {
        type: String,
        required: true,
        validate: [
          validator.isEmail,
          "Het e-mailadres is niet in het juiste formaat. 
           Gebruik een @ met een domein (b.v. @hotmail.com)",
        ],
      },
      firstNameGifter: {
        type: String,
        required: true,
        max: 300,
      },
      lastNameGifter: {
        type: String,
        required: true,
        max: 300,
      },
      emailReceiver: {
        type: String,
        validate: [
         validator.isEmail,
         "Het e-mailadres is niet in het juiste formaat. 
         Gebruik een @ met een domein (b.v. @hotmail.com)",
        ],
      },
      firstNameReceiver: {
        type: String,
        required: true,
        max: 300,
      },
      lastNameReceiver: {
        type: String,
        required: true,
        max: 300,
      },
      videoName: {
        type: String,
        default: undefined,
        sparse: true,
      },
      videoDuration: {
        type: String,
        default: 0,
        sparse: true,
      },
      textCode: {
        type: String,
        unique: true,
        min: 6,
        max: 6,
      },
      prePrinted: {
        type: Boolean,
        required: true,
        default: false,
      },
      printed: {
        type: Boolean,
        required: true,
        default: false,
      },
      textcodeSent: {
        type: Boolean,
        required: true,
        default: false,
      },
      answerVideo: {
        type: String,
      },
      answerVideoDuration: {
        type: String,
      },
      answerText: {
        type: String,
        default: "",
        max: 280,
      },
      answerSent: {
        type: Boolean,
        required: true,
        default: false,
      },
    });

## Data opslaan
Hieronder staat vermeld hoe bepaalde data die wij hebben opgeslagen wordt.

### Opslaan video's
Wij slaan de videobestanden op in de ```Express``` map onder de map ```videos```. Dit is de meest gebruikelijke manier voor het opslaan van de video's.

### Mongoose built-in validators
Mongoose heeft [built-in validators](https://mongoosejs.com/docs/validation.html) waarvan wij gebruik kunnen maken. Op het moment valideren wij alleen de e-mailadressen met de built-in functie ```validate``` van Mongoose. De voor- en achternaam van zowel de koper als de ontvanger hebben een maximale lengte van 300 karakters d.m.v. de built-in functie ```max```. De tekstcode heeft een ```min``` lengte van zes en een ```max``` lengte van zes voor de code in cijfers. 

**Uiteraard voor in de toekomst is het goed om te zorgen voor extra beveiliging dat Mongoose alle velden controleert wanneer dit nodig is.**
