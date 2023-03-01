import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getVideo } from "../../redux/actions/videoActions";

import ShareMenu from "../Common/ShareMenu";

// import SVG as ReactComponent for easier use
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import { ReactComponent as ShareIcon } from "../../assets/share-fill.svg";

// Reused Common components
import VideoPlayer from "../Common/VideoPlayer";
import { useDispatch, useSelector } from "react-redux";

/**
 *
 * Page showing the video (by textCode) for the receiver
 *
 * @return the front-end for the VideoPage
 */
function VideoPage() {
  const { textCode } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPopUp, setIsPopUp] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const videoData = useSelector((state) => state.videos.video);

  /**
   *  useEffect to collect all video data from the database using Redux State
   */
  useEffect(() => {
    dispatch(getVideo(textCode));
  }, [textCode, dispatch]);

  /**
   *
   * Videoplayer to show the video.
   *
   * @returns video by textCode if fetching from DB succeeds or error message if fetching from DB fails
   */
  const videoPlayer = () => {
    return (
      <>
        <VideoPlayer
          title={`Videoboodschap voor ${
            videoData.firstNameReceiver && videoData.lastNameReceiver
              ? videoData.firstNameReceiver + " " + videoData.lastNameReceiver
              : "jou"
          }`}
          url={`${process.env.REACT_APP_SERVERHOSTNAME}/api/videos/video/`}
          videoData={videoData}
          videoName={videoData.videoName}
          videoDuration={videoData.videoDuration}
          setFullScreen={() =>
            setFullScreen(
              (prevScreenState) => (prevScreenState = !prevScreenState)
            )
          }
        />
        <button
          className="btn btn-primary reactionButton"
          onClick={() => navigate(`/receiver/reaction/${textCode}`)}
        >
          Verstuur een reactie&nbsp;
          <RightArrow />
        </button>
        <hr />
        <div className="text-start float-start">
          <h3>Afzender:</h3>
          {videoData.firstNameGifter && videoData.lastNameGifter ? (
            <h5>
              {videoData.firstNameGifter} {videoData.lastNameGifter}
            </h5>
          ) : null}
          {videoData.emailGifter ? <h5>{videoData.emailGifter}</h5> : null}
        </div>
        <div className="float-end shareButtonPlacement popup">
          <ShareMenu
            url={`${process.env.REACT_APP_CLIENTHOSTNAME}/receiver/watchSharedVideo/${textCode}`}
            message="Wow kijk, ik heb deze Giftle ontvangen! Klik op de link om de Giftle ook te bekijken."
            isOpen={isPopUp}
          />
          <button
            className="btn btn-primary"
            onClick={() => setIsPopUp((prevState) => (prevState = !prevState))}
          >
            Delen &nbsp;
            <ShareIcon />
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="vertical-center colored-background">
      <div
        className={`${
          fullScreen ? `container-flex` : `container`
        } text-center rounded p-3 bg-light`}
      >
        {videoPlayer()}
      </div>
    </div>
  );
}

export default VideoPage;
