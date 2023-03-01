require("dotenv").config();

/**
 *
 * Function that checks the file extension
 *
 * @param {string} value takes an available video format for testing or we use the format.split(",") to create an array with "availableFormats"
 * @returns an available video format
 */
const fileExtensionChecker = (value) => {
  const videoFormats =
    process.env.ACCEPTEDVIDEOFORMATS || "3gp f4v mkv mov mp4 ogg ogv webm m4v";
  const availableFormats = videoFormats
    .split(" ")
    .some((element) => value.includes(element));
  return availableFormats;
};

module.exports = fileExtensionChecker;
