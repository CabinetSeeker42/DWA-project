# Data

## Algemene informatie

De data wordt opgeslagen in MongoDB onder de databasenaam 'Giftle' en heeft op het moment maar één collectie, genaamd 'uploadschemas'.

## Database schema

[Wat is een Schema?](https://docs.mongodb.com/realm/schemas/)

    const mongoose = require("mongoose");

    const uploadSchema = new mongoose.Schema({
      nameGifter: {
        type: String,
        required: true,
      },
      emailGifter: {
        type: String,
        required: true,
      },
      nameReceiver: {
        type: String,
      },
      emailReceiver: {
        type: String,
      },
      videoName: {
        type: String,
        default: undefined,
        unique: true,
        sparse: true,
      },
      textCode: {
        type: String,
        unique: true,
      },
      prePrinted: {
        type: Boolean,
      },
      printed: {
        type: Boolean,
        required: true,
      },
      textCodeSend: {
        type: Boolean,
        required: true,
        default: false,
      },
      answerVideo: {
        type: String,
      },
    });

<!--
Intent

The purpose of the data section is to record anything that is important from a data perspective, answering the following types of questions:

• What does the data model look like?
• Where is data stored?
• Who owns the data?
• How much storage space is needed for the data? (e.g. especially if you’re dealing with “big data”)
• What are the archiving and back-up strategies?
• Are there any regulatory requirements for the long term archival of business data?
• Likewise for log files and audit trails?
• Are flat files being used for storage? If so, what format is being used?
-->
