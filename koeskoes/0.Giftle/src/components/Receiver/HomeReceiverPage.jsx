import React from "react";
import { useNavigate } from "react-router-dom";

// import SVG as ReactComponent for easier use
import { ReactComponent as QRCode } from "../../assets/qr-code.svg";
import { ReactComponent as PencilSquare } from "../../assets/pencil-square.svg";

/**
 *
 * Functional component start the watch video proces.
 *
 * @return the front-end for the receiver homepage.
 */
function HomeReceiverPage() {
  const navigate = useNavigate();

  return (
    <div className="vertical-center colored-background">
      <div className="container text-center rounded p-3 bg-light">
        <h1>Welkom op Giftle!</h1>
        <p>
          Wat leuk dat je een Giftle hebt ontvangen! Je kunt hem bekijken door
          de QR-code te scannen of door de tekstcode in te vullen.
          <br />
          <br />
          Ik heb een...
        </p>
        <button
          className="btn btn-primary mx-2 mb-4"
          onClick={() => navigate("/receiver/qr-code")}
        >
          QR-code&nbsp;
          <QRCode />
        </button>
        <button
          className="btn btn-primary mx-2 mb-4"
          onClick={() => navigate("/receiver/textcode")}
        >
          Tekstcode&nbsp;
          <PencilSquare />
        </button>
      </div>
    </div>
  );
}

export default HomeReceiverPage;
