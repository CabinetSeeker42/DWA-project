import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getVideo } from "../../redux/actions/videoActions";

// Re-used common components
import VideoPlayer from "../Common/VideoPlayer";

/**
 *
 * Page showing the video (by textCode) for the receiver
 *
 * @return the front-end for the shared video page
 */
function SharedVideoPage() {
  const dispatch = useDispatch();
  const { textCode } = useParams();
  const video = useSelector((state) => state.videos.video);
  const [fullScreen, setFullScreen] = useState(false);

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
          title={`Videoboodschap voor ${video.firstNameReceiver} ${video.lastNameReceiver}`}
          url={`${process.env.REACT_APP_SERVERHOSTNAME}/api/videos/video/`}
          videoData={video}
          videoName={video.videoName}
          videoDuration={video.videoDuration}
          setFullScreen={() =>
            setFullScreen(
              (prevScreenState) => (prevScreenState = !prevScreenState),
            )
          }
        />
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

export default SharedVideoPage;
