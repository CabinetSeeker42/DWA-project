import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getVideo, resetVideo } from "../../redux/actions/videoActions";
import Message from "../Common/CreateMessage";

// import SVG as ReactComponent for easier use
import { ReactComponent as QRCode } from "../../assets/qr-code.svg";
import { ReactComponent as PersonVideo } from "../../assets/person-video.svg";

/**
 *
 * Functional component for receiving a textCode
 *
 * @returns the front-end for the TextCodePage
 */
const TextCodePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const video = useSelector((state) => state.videos.video || null);
  const [givenTextCode, setGivenTextCode] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (video) {
      if (!video.textCode) {
        dispatch(resetVideo());
        return setError(
          Message(
            "Je hebt geen geldige tekstcode ingevuld. Vul de tekstcode opnieuw in.",
            () => setError(null),
          ),
        );
      }

      navigate("/receiver/watchvideo/" + video.textCode);
    }
  }, [video, navigate, dispatch]);

  /**
   * This function will redirect the user to the video page.
   * If the textcode isn't recognized or if the textcode field is empty, an error will be displayed.
   */
  const checkTextcode = () => {
    if (givenTextCode === null || givenTextCode === "") {
      return setError(
        Message(
          "Voer een tekstcode in. Een tekstcode bestaat uit een 6-cijferige code.",
          () => setError(null),
        ),
      );
    } else {
      dispatch(getVideo(givenTextCode));
    }
  };

  return (
    <div className="vertical-center colored-background">
      {error}
      <div className="container text-center rounded p-3 bg-light">
        <h1 className="my-2">Tekstcode invullen</h1>
        <p className="mt-4">
          Vul hieronder de door u ontvangen tekstcode in om de video te kunnen
          bekijken.
        </p>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2"></div>
          <div className="col-lg-8 col-md-8 col-sm-8">
            <input
              type="textcode"
              className="form-control"
              id="givenTextcode"
              name="givenTextcode"
              onChange={(e) => setGivenTextCode(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2"></div>
        <button
          className="btn btn-primary my-3 mx-4"
          onClick={() => navigate("/receiver/qr-code")}
        >
          QR code scannen&nbsp;
          <QRCode />
        </button>
        <button
          className="btn btn-primary my-3 mx-4"
          onClick={() => checkTextcode()}
        >
          Bekijk video&nbsp;
          {<PersonVideo />}
        </button>
      </div>
    </div>
  );
};

export default TextCodePage;
