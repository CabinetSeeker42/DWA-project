const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

/**
 *
 * Function that converts file size into a string
 *
 * @param {string} x file size
 * @returns string version from the file size
 */
const fileSizeToStringConverter = (x) => {
  let l = 0;
  let n = parseInt(x, 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
};

module.exports = fileSizeToStringConverter;
