const fileExtensionChecker = require("./fileExtensionChecker");

/**
 *
 * Function that generates a random video filename
 *
 * @param {string} originalFileName the orginal filename from the database
 * @param {string} random random string
 * @returns the final filename and the upload path
 */
const generateRandomFileName = (
  originalFileName,
  random,
  finalExtension = "mp4"
) => {
  const originalFileNameArray = originalFileName.split(".");
  const extension = originalFileNameArray.pop();
  const fileNameWithoutExtension = originalFileNameArray.join(".");
  const finalFileName = `${fileNameWithoutExtension}${random}.${
    fileExtensionChecker(extension) ? extension : finalExtension
  }`;
  const uploadPath = "videos/";

  return { finalFileName, uploadPath };
};

module.exports = generateRandomFileName;
