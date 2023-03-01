const mongoose = require("mongoose");
const validator = require("validator");

/**
 * This schema is used to store all orders that have been sent from Giftle
 */
const uploadSchema = new mongoose.Schema({
  emailGifter: {
    type: String,
    required: true,
    validate: [
      validator.isEmail,
      "Het e-mailadres is niet in het juiste formaat. Gebruik een @ met een domein (b.v. @hotmail.com)",
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
      "Het e-mailadres is niet in het juiste formaat. Gebruik een @ met een domein (b.v. @hotmail.com)",
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

/**
 * SetCode is a function to set the text code in the database
 * The code is randomly generated and doesn't yet exist.
 * NOTE: Don't change this function to an arrow function. Thank you <3
 *
 * @returns database save command
 */
uploadSchema.methods.setCode = async function () {
  const Uploads = mongoose.model("UploadSchema", uploadSchema);

  const generateUniqueRandomCode = async () => {
    while (true) {
      const createRandomCode = () =>
        (Math.random() + 1).toString(36).substr(2, 6);

      const generatedRandomCode = createRandomCode();

      const randomCode = await Uploads.findOne(
        {
          textCode: generatedRandomCode,
        },
        {
          textCode: 1,
        }
      ).exec();

      if (randomCode === null) {
        return generatedRandomCode;
      }
    }
  };

  const randomCode = await generateUniqueRandomCode();

  this.textCode = randomCode;

  return await this.save();
};

/**
 * SetPrinted is a function to set the printed value to true in the database
 *
 * @returns database save command
 */
uploadSchema.methods.setPrinted = async function () {
  this.printed = true;

  return await this.save();
};

/**
 * SetPrePrinted is a function to set the prePrinted value to true in the database
 *
 * @returns database save command
 */

uploadSchema.methods.setPrePrinted = async function () {
  this.prePrinted = true;

  return await this.save();
};

mongoose.model("UploadSchema", uploadSchema);
