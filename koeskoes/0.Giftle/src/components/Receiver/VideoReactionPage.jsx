import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

import { sendReaction } from "../../redux/actions/uploadActions";
import { getVideoInOrder } from "../../redux/actions/orderActions";

import Camera from "../Common/Camera";
import UploadVideo from "../Common/UploadVideo";
import VideoPlayer from "../Common/VideoPlayer";
import {
  setReactionCreationPath,
  setReactionUploaded,
  changeReactionUploadVisualState,
} from "../../redux/actions/reactionActions";

// import SVG as ReactComponent for easier use
import { ReactComponent as LeftArrow } from "../../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";

/**
 *
 * Functional component for video reaction page
 *
 * @returns the front-end for the VideoReactionPage
 */
function VideoReactionPage() {
  const { textCode } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);
  const reactionCreationPath = useSelector(
    (state) => state.reaction.reactionCreationPath
  );
  const reactionUploaded = useSelector(
    (state) => state.reaction.reactionUploaded
  );
  const reactionUploadVisualState = useSelector(
    (state) => state.reaction.reactionUploadVisualState
  );
  const reaction = useSelector((state) => state.uploads.reaction);
  const reactionVideo = useSelector((state) => state.videos.video);
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
      navigate("/receiver/reaction-sent");
    }
  }, [video, navigate]);

  /**
   * This useEffect activates when the e-mail has been succesfully sent.
   * If something goes wrong, the user stays on the current page.
   */
  useEffect(() => {
    if (reaction.status === "success") {
      navigate("/receiver/reaction-sent");
    }
  }, [reaction, navigate]);

  /**
   * These useEffects are used for correctly uploading the videofile.
   */
  useEffect(() => {
    if (reactionVideo.answerVideo !== "" && reactionVideo.answerVideo !== undefined) {
      dispatch(setReactionUploaded());
      dispatch(changeReactionUploadVisualState(2));
    }
  }, [reactionVideo, dispatch]);

  useEffect(() => {
    setError(null);
  }, [reactionCreationPath]);

  /**
   * This async function dispatches sendReaction, which sends the e-mail to the buyer.
   */
  const saveMessageData = () => {
    dispatch(sendReaction(textCode, "video"));
  };

  return (
    <div className="vertical-center colored-background">
      {error}
      <div
        className={`${
          fullScreen ? `container-flex` : `container container-w40 `
        } text-center rounded p-3 bg-light mt-4 mb-4`}
      >
        <div className="row">
          <div className="col-4 text-start" id="text-reaction-switch">
            {reactionUploadVisualState === 1 ? (
              <div className="form-switch-alignment">
                <div className="form-control-lg form-check form-switch border border-primary">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={() => {
                      navigate(`/receiver/text-reaction/` + textCode);
                    }}
                  />
                  <h6 className="switch-text">&nbsp;Tekstreactie versturen</h6>
                </div>
              </div>
            ) : null}
          </div>
          <div className="col-4">
            {reactionUploaded && reactionUploadVisualState === 1 ? (
              <button
                className="btn btn-primary"
                onClick={() => dispatch(changeReactionUploadVisualState(2))}
              >
                Gebruik vorige video
              </button>
            ) : null}
          </div>
          {reactionUploadVisualState === 1 ? (
            reactionCreationPath ? (
              <div className="col-4 text-start form-switch-alignment">
                <div className="form-control-lg form-check form-switch border border-primary">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={() => {
                      setFullScreen(false);
                      dispatch(
                        setReactionCreationPath(
                          reactionCreationPath === "upload"
                            ? "record"
                            : "upload"
                        )
                      );
                    }}
                  />
                  <h6 className="switch-text">
                    &nbsp;
                    {reactionCreationPath === "upload" ? "Opnemen" : "Uploaden"}
                  </h6>
                </div>
              </div>
            ) : null
          ) : null}
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
            <div className="row d-none">
              <h1 id="video-reaction-title">Videoreactie verzenden</h1>
            </div>
            {reactionUploadVisualState === 1 ? (
              reactionCreationPath === "upload" ? (
                <>
                  <div className="row">
                    <p>
                      Klik op <b>Bestand kiezen</b> en selecteer een video of
                      sleep een bestand in hetzelfde vakje.
                      <br />
                      Om de video te uploaden moet je vervolgens op de{" "}
                      <b>Upload video</b> knop klikken.
                      <br />
                      De video moet de volgende resoluties hebben: <i>
                        1080p
                      </i>{" "}
                      of <i>720p</i>.
                    </p>
                  </div>
                  <UploadVideo
                    uploadPath={`${process.env.REACT_APP_SERVERHOSTNAME}/api/orders/reaction/video/${textCode}`}
                    setError={setError}
                  />
                </>
              ) : (
                <>
                  <Camera
                    uploadPath={`${process.env.REACT_APP_SERVERHOSTNAME}/api/orders/reaction/video/${textCode}`}
                    setError={setError}
                  />
                </>
              )
            ) : (
              <div>
                <VideoPlayer
                  title="Video terugkijken"
                  url={`${process.env.REACT_APP_SERVERHOSTNAME}/api/videos/video/`}
                  videoData={reactionVideo}
                  videoName={reactionVideo.answerVideo}
                  videoDuration={reactionVideo.answerVideoDuration}
                  created={true}
                  setFullScreen={() =>
                    setFullScreen(
                      (prevScreenState) => (prevScreenState = !prevScreenState)
                    )
                  }
                  setError={setError}
                />

                <div
                  className="d-flex justify-content-between"
                  id="send-video-message"
                >
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(changeReactionUploadVisualState(1))}
                  >
                    <LeftArrow />
                    &nbsp;Opnieuw{" "}
                    {reactionCreationPath === "record" ? "opnemen" : "uploaden"}
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => saveMessageData()}
                  >
                    Versturen&nbsp;
                    {<RightArrow />}
                  </button>
                </div>
              </div>
            )}
            {reactionUploadVisualState === 1 ? (
              <>
                <p className="mt-4">
                  Door een video{" "}
                  {reactionCreationPath === "upload"
                    ? "te uploaden"
                    : "op te nemen"}{" "}
                  gaat u akkoord met de{" "}
                  <a
                    href="#algemene-voorwaarden"
                    className="terms-and-conditions"
                  >
                    algemene voorwaarden
                  </a>
                  .
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoReactionPage;
