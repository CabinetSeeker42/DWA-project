const mongoose = require("mongoose");
require("./model/uploadModel");

const db = mongoose.connection;

const uploads = mongoose.model("UploadSchema");

mongoose
  .connect(`mongodb://localhost:27017/giftle`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    return seedE2ETests();
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log('The seed has successfully been planted');
    db.close();
  });

async function seedE2ETests() {
  await uploads.deleteMany();

  await uploads.insertMany([
    {
      emailGifter: "gifter@mail.com",
      firstNameGifter: "VoornaamGifter",
      lastNameGifter: "AchternaamGifter",
      emailReceiver: "receiver@mail.com",
      firstNameReceiver: "VoornaamReceiver",
      lastNameReceiver: "AchternaamReceiver",
      videoName: "",
      prePrinted: false,
      printed: false,
      textCode: "abc123",
    },
  ]);
}
