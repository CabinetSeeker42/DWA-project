const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");
require("../model/uploadModel");

const Uploads = mongoose.model("UploadSchema");

/**
 * if textCode exists, it will fetch data from that textCode record
 */
router.get("/:textCode", async (req, res) => {
  const video = await Uploads.findOne({
    textCode: req.params.textCode,
  }).exec();

  if (video !== null) {
    res.json(video);
  } else {
    res.json({ status: "error", message: "No textcode found" });
  }
});

/**
 * if videoName exists, it will fetch data from that videoName record
 */
router.get("/video/:videoName", async (req, res) => {
  if (path.join(__dirname, "../", "videos/", req.params.videoName) !== null) {
    res.sendFile(path.join(__dirname, "../", "videos/", req.params.videoName));
  } else {
    res.json({ status: "error", message: "No video found" });
  }
});

module.exports = router;
