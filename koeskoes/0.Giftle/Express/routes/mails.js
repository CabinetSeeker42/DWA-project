const express = require("express");
const router = express.Router();
const MailModule = require("../commonFunctions/sendMails");
const mail = new MailModule();
const mongoose = require("mongoose");
require("../model/uploadModel");

const Uploads = mongoose.model("UploadSchema");

/**
 * This post request will send a mail with a textCode to the receiver of a specific order.
 */
router.post("/:textCode", async (req, res) => {
  const order = await Uploads.findOne({
    textCode: req.params.textCode,
  }).exec();

  order.textcodeSent = true;

  const orderSave = await order.save();

  if (orderSave) {
    const mailInfo = await mail.sendTextCode(
      order.emailReceiver,
      order.firstNameGifter,
      order.lastNameGifter,
      order.firstNameReceiver,
      order.lastNameReceiver,
      order.textCode
    );

    if (mailInfo.status === "error") {
      order.textcodeSent = false;

      await order.save();
    }

    return res.json(mailInfo);
  }

  return res.json({
    status: "error",
    message: "Tekstcode is niet verstuurd, probeer het later opnieuw",
  });
});

/**
 * This post request will send a mail to the buyer of a specific order when the video has been watched.
 */
router.post("/notification/video/:textCode/watched", async (req, res) => {
  const order = await Uploads.findOne({
    textCode: req.params.textCode,
  }).exec();

  const mailInfo = await mail.sendReminderVideoWatched(
    order.emailGifter,
    order.firstNameGifter,
    order.lastNameGifter,
    order.firstNameReceiver,
    order.lastNameReceiver
  );

  res.send(mailInfo);
});

/**
 * This post request will send a mail to the buyer of a specific order if a video hasn't been uploaded yet.
 */
router.post("/notification/video/:textCode/upload", async (req, res) => {
  const order = await Uploads.findOne({
    textCode: req.params.textCode,
  }).exec();

  const mailInfo = await mail.sendReminderUploadVideo(
    order.emailGifter,
    order.firstNameGifter,
    order.lastNameGifter
  );

  res.send(mailInfo);
});

/**
 * This post request will send a mail to the buyer when they received a textCode.
 */
router.post("/reaction/text/:textCode", async (req, res) => {
  const order = await Uploads.findOne({
    textCode: req.params.textCode,
  }).exec();

  const mailInfo = await mail.sendTextReaction(
    order.emailGifter,
    order.firstNameGifter,
    order.lastNameGifter,
    order.firstNameReceiver,
    order.lastNameReceiver,
    order.textCode
  );

  res.send(mailInfo);
});

/**
 * This post request will send a mail to the buyer with a link to the videoReactonPage.
 */
router.post("/reaction/video/:textCode", async (req, res) => {
  const order = await Uploads.findOne({
    textCode: req.params.textCode,
  }).exec();

  const mailInfo = await mail.sendVideoReaction(
    order.emailGifter,
    order.firstNameGifter,
    order.lastNameGifter,
    order.firstNameReceiver,
    order.lastNameReceiver,
    order.textCode
  );

  res.send(mailInfo);
});

/**
 * This patch request will send a mail to the buyer with a link to the textReactonPage.
 */
router.patch("/reaction/sent/:textCode", async (req, res) => {
  const order = await Uploads.findOne({
    textCode: req.params.textCode,
  }).exec();

  order.answerSent = true;

  await order.save();

  res.json({ status: "success", message: "Reaction has been sent" });
});

module.exports = router;
