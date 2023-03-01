import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getVideoInOrder } from "../../redux/actions/orderActions";
import { setReactionCreationPath } from "../../redux/actions/reactionActions";

// import SVG as ReactComponent for easier use
import { ReactComponent as PencilSquare } from "../../assets/pencil-square.svg";
import { ReactComponent as CameraVideo } from "../../assets/camera-video.svg";

/**
 *
 * Functional component start the watch video proces.
 *
 * @return the front-end for the receiver homepage.
 */
function ReactionHomePage() {
  const { textCode } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const video = useSelector((state) => state.videos.video);

  /**
   * useEffect activates when the textCode changes.
   * Converts the textCode in the URL to a textCode in the state.
   */
  useEffect(() => {
    dispatch(getVideoInOrder(textCode));
  }, [textCode, dispatch]);

  /**
   * This useEffect activates when a reaction is already sent.
   * If no reaction has been uploaded yet, the user stays on the current page.
   */
  useEffect(() => {
    if (video.answerSent) {
      navigate("/receiver/reaction-already-sent");
    }
  }, [video, navigate]);

  return (
    <div className="vertical-center colored-background">
      <div className="container text-center rounded p-3 bg-light">
        <h1>Jouw keuze om een reactie te geven</h1>
        <p>
          Om degene die jou de Giftle heeft gestuurd te kunnen bedanken, kies je
          hieronder tussen een tekstreactie of videoreactie. Het is niet
          verplicht om een reactie te geven.
        </p>
        <button
          className="btn btn-primary mx-2 text-reaction-button"
          onClick={() => navigate(`/receiver/text-reaction/` + textCode)}
        >
          Tekstreactie&nbsp;
          <PencilSquare />
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            navigate(`/receiver/video-reaction/` + textCode);
            dispatch(setReactionCreationPath("upload"));
          }}
        >
          Videoreactie&nbsp;
          <CameraVideo />
        </button>
      </div>
    </div>
  );
}

export default ReactionHomePage;
