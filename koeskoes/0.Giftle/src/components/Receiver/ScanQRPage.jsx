import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QrReader from "react-qr-reader";
import Message from "../Common/CreateMessage";

// import SVG as ReactComponent for easier use
import { ReactComponent as LeftArrow } from "../../assets/arrow-left.svg";

/**
 *
 * Functional component for scanning the QR-code
 *
 * @return the front-end for the scanning page
 */
function ScanQRPage() {
  const navigate = useNavigate();
  const delay = 100;
  const previewStyle = { height: "17em", width: "17em" };

  // Creates the state for delay, style and errors that can occur for the QR-scanner.
  const [isDevicesChecked, setIsDevicesChecked] = useState(false);
  const [error, setError] = useState(null);

  /**
   * UseEffect to check if  video is available for the webcam module.
   */
  useEffect(() => {
    const checkCamera = async () => {
      try {
        const videoAccess = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoAccess.getVideoTracks().length < 1) {
          setError(
            Message(
              "Er is geen webcam gevonden. Controleer of er een webcam aangesloten is.",
              () => setError(null)
            )
          );
        }
      } catch (e) {
        setError(
          Message(
            "Er is geen webcam gevonden. Controleer of er een webcam aangesloten is.",
            () => setError(null)
          )
        );
      }
      setIsDevicesChecked(true);
    };
    if (isDevicesChecked !== true) {
      checkCamera();
    }
  });

  return (
    <div className="vertical-center colored-background">
      <div className="errorBox">{error}</div>
      <div className="mainBox container text-center rounded p-3 bg-light">
        <h1 className="my-2">Scan uw QR-code</h1>
        <div className="scanContainer">
          <QrReader
            delay={delay}
            style={previewStyle}
            onError={Message("Fout met de camera of het scannen!", () =>
              setError(null)
            )}
            onScan={(data) => {
              if (data) {
                if (!data.includes("localhost")) {
                  setError(
                    Message("De QR-code verwijst niet naar deze site!", () =>
                      setError(null)
                    )
                  );
                } else {
                  window.location.href = data;
                }
              }
            }}
          />
          <button
            className="btn btn-primary my-3 mx-4"
            onClick={() => navigate("/receiver/qr-code")}
          >
            {<LeftArrow />}
            &nbsp;Terug naar keuzemenu
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScanQRPage;
