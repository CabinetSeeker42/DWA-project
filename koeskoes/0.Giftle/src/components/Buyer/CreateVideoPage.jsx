import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Camera from "../Common/Camera";
import UploadVideo from "../Common/UploadVideo";
import VideoPlayer from "../Common/VideoPlayer";
import PersonalizationForm from "../Common/PersonalizationForm";
import SwitchUploadRecord from "../Common/SwitchUploadRecord";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  setVideoUploaded,
  setPersonalized,
  changeUploadVisualState,
} from "../../redux/actions/uploadActions";

// import SVG as ReactComponent for easier use
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";

/**
 *
 * React component to record video's from the webcam.
 *
 * @return the front-end for the recording page
 */
function CreateVideoPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);
  const textCode = useSelector((state) => state.orders.textCode);
  const videoCreationPath = useSelector(
    (state) => state.uploads.videoCreationPath
  );
  const videoUploaded = useSelector((state) => state.uploads.videoUploaded);
  const uploadVisualState = useSelector(
    (state) => state.uploads.uploadVisualState
  );
  const personalized = useSelector((state) => state.uploads.personalized);
  const video = useSelector((state) => state.videos.video);
  const videoName = useSelector((state) => state.videos.video.videoName);

  /**
   *
   * Events to navigate to different pages.
   *
   */
  useEffect(() => {
    if (!textCode) {
      return navigate("/buyer/noTextCode");
    }
  }, [textCode, navigate]);

  useEffect(() => {
    if (videoName !== "" && videoName !== undefined) {
      dispatch(setVideoUploaded());
      dispatch(changeUploadVisualState(2));
    }
  }, [videoName, dispatch]);

  useEffect(() => {
    setError(null);
  }, [videoCreationPath]);

  const goToPersonalization = () => {
    setFullScreen(false);
    dispatch(setPersonalized());
    dispatch(changeUploadVisualState(3));
  };

  return (
    <div className="vertical-center colored-background">
      {error}
      <div
        className={`${
          fullScreen
            ? `container-flex`
            : `container container-w40 ` +
              (personalized ? "container-wide" : null)
        } text-center rounded p-3 bg-light mt-4 mb-4`}
      >
        <div className="row">
          <div className="col-xl-3 col-lg-5 col-md-6 col-6">
            {uploadVisualState !== 1 ? (
              <button
                className="btn btn-primary float-start"
                onClick={() => {
                  setFullScreen(false);
                  dispatch(changeUploadVisualState(1));
                }}
              >
                Opnieuw{" "}
                {videoCreationPath === "upload" ? "uploaden" : "opnemen"}
              </button>
            ) : (
              <SwitchUploadRecord />
            )}
          </div>
          {videoUploaded && uploadVisualState === 1 ? (
            <div className="col-xl-9 col-lg-7 col-md-6 col-6">
              <button
                className="btn btn-primary float-end"
                onClick={() => dispatch(changeUploadVisualState(2))}
              >
                Gebruik vorige video&nbsp;
                {<RightArrow />}
              </button>
            </div>
          ) : uploadVisualState === 2 ? (
            <div className="col-xl-9 col-lg-7 col-md-6 col-4 text-end">
              <button
                className="btn btn-primary float-end"
                id="personalize"
                onClick={() => goToPersonalization()}
              >
                Personaliseren&nbsp;
                {<RightArrow />}
              </button>
            </div>
          ) : null}
        </div>
        <div className="row">
          <div
            className={`${
              personalized && !fullScreen ? "col-lg-6" : "col-lg-12"
            } col-md-12 col-sm-12 mt-4 ${personalized ? "item-center" : null}`}
          >
            {uploadVisualState === 1 ? (
              videoCreationPath === "upload" ? (
                <>
                  <div className="row mb-5">
                    <div className="col-12 mb-3 text-center">
                      <h1>Uploaden</h1>
                    </div>
                  </div>
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
                    uploadPath={`${process.env.REACT_APP_SERVERHOSTNAME}/api/orders/order/video/${textCode}`}
                    setError={setError}
                  />
                </>
              ) : (
                <>
                  <div className="row">
                    <div className="col-12 mb-3 text-center">
                      <h1>Opnemen</h1>
                    </div>
                  </div>
                  <Camera
                    uploadPath={`${process.env.REACT_APP_SERVERHOSTNAME}/api/orders/order/video/${textCode}`}
                    setError={setError}
                  />
                </>
              )
            ) : (
              <VideoPlayer
                title="Video terugkijken en geluid controleren"
                url={`${process.env.REACT_APP_SERVERHOSTNAME}/api/videos/video/`}
                videoData={video}
                videoName={video.videoName}
                videoDuration={video.videoDuration}
                created={true}
                setFullScreen={() =>
                  setFullScreen(
                    (prevScreenState) => (prevScreenState = !prevScreenState)
                  )
                }
                setError={setError}
              />
            )}
            {uploadVisualState === 1 ? (
              <p className="mt-4">
                Door een video{" "}
                {videoCreationPath === "upload" ? "te uploaden" : "op te nemen"}{" "}
                gaat u akkoord met de{" "}
                <a
                  href="#algemene-voorwaarden"
                  className="terms-and-conditions"
                >
                  algemene voorwaarden
                </a>
                .
              </p>
            ) : null}
          </div>
          {personalized && fullScreen ? <div className="col-lg-3"></div> : null}
          <div
            className="col-lg-6 col-md-12 col-sm-12 mt-4"
            id="personalizationForm"
          >
            {personalized ? (
              <PersonalizationForm
                next={() => navigate("/buyer/thankyou")}
                setError={setError}
                disabled={uploadVisualState !== 3}
              />
            ) : null}
          </div>
          {personalized && fullScreen ? <div className="col-lg-3"></div> : null}
        </div>
      </div>
    </div>
  );
}

export default CreateVideoPage;
