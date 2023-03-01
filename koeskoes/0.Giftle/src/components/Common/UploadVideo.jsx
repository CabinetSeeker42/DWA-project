import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Message from "./CreateMessage";
import { setVideo } from "../../redux/actions/videoActions";
import Spinner from "./Spinner";

// import SVG as ReactComponent for easier use
import { ReactComponent as FileUpload } from "../../assets/file-upload.svg";

/**
 *
 * React component for video upload.
 *
 * @return a component to upload a video
 */
const UploadVideo = (props) => {
  const dispatch = useDispatch();
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploading, setUploading] = useState(false);

  /**
   *
   * This function will send the uploaded video file to the server.
   * If this file is not a video format it will generate an error.
   *
   */
  const convertVideo = async () => {
    if (uploadedVideo === null) {
      return props.setError
        ? props.setError(
            Message(
              "Kies een geldige videoformaat bestand (bijvoorbeeld .mp4 of .mov).",
              () => props.setError(null)
            )
          )
        : null;
    }
    const sourceVideoFile = uploadedVideo.files[0];

    setUploading(true);

    const formData = new FormData();

    formData.append("video", sourceVideoFile, sourceVideoFile.name);

    const uploadResponse = await axios.patch(props.uploadPath, formData);

    if (uploadResponse.data.status === "error") {
      setUploading(false);
      return props.setError
        ? props.setError(
            Message(uploadResponse.data.message, () => props.setError(null))
          )
        : null;
    } else {
      return dispatch(setVideo(uploadResponse.data));
    }
  };

  return (
    <>
      {!uploading ? (
        <>
          <div className="row video-rem5">
            <input
              type="file"
              name="uploadedVideo"
              accept="video/*"
              className="form-control mx-auto mb-3"
              id="fileInput"
              onChange={(e) => setUploadedVideo(e.target)}
            />
          </div>
          <div className="row mb-5">
            <button
              className="btn btn-primary mx-auto"
              style={{ width: "51%" }}
              id="upload"
              onClick={convertVideo}
            >
              Upload video&nbsp;
              <FileUpload />
            </button>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default UploadVideo;
