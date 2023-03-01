import React from "react";
import { useNavigate } from "react-router-dom";

// import SVG as ReactComponent for easier use
import { ReactComponent as PencilSquare } from "../../assets/pencil-square.svg";
import { ReactComponent as QRCodeScan } from "../../assets/qr-code-scan.svg";

/**
 *
 * Functional component for letting the user know that they are about to scan a QR-code
 *
 * @return the front-end for the QR page
 */
function QRPage() {
  const navigate = useNavigate();

  return (
    <div className="vertical-center colored-background">
      <div className="container text-center rounded p-3 bg-light">
        <h1 className="my-2">Scan uw QR-code</h1>
        <p className="mt-4">
          U kunt de QR-code scannen door op de knop hieronder te klikken.
        </p>
        <button
          className="btn btn-primary my-3 mx-4"
          onClick={() => navigate("/receiver/textcode")}
        >
          Tekstcode invullen&nbsp;
          {<PencilSquare />}
        </button>
        <button
          className="btn btn-primary my-3 mx-4"
          onClick={() => navigate("/receiver/scan")}
        >
          Scan QR-code&nbsp;
          <QRCodeScan />
        </button>
      </div>
    </div>
  );
}

export default QRPage;
