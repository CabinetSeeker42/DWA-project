import QRCodeStyling from "qr-code-styling";
import logo from "../../assets/favicon.png";

/**
 * Function to create a QR-code. The size, image, dots data and margin are customised.
 *
 * @param {String} data Callback to run a function
 * @return QR-code with the correct URL and styling
 */
const qrcode = (data) => {
  return new QRCodeStyling({
    width: 300,
    height: 300,
    image: logo,
    dotsOptions: {
      color: "#000000",
      type: "rounded",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 10,
    },
    data,
    margin: 8,
  });
};

export default qrcode;
