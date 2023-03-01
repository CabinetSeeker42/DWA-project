import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVideoCreationPath } from "../../redux/actions/uploadActions";

/**
 *
 * React component to switch between different states
 *
 * @return a switch component for upload/record pages
 */
function SwitchUploadRecord() {
  const dispatch = useDispatch();
  const videoCreationPath = useSelector(
    (state) => state.uploads.videoCreationPath
  );

  return (
    <div className="form-switch-alignment">
      <div className="form-control-lg form-check form-switch border border-primary">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={() =>
            dispatch(
              setVideoCreationPath(
                videoCreationPath === "upload" ? "record" : "upload"
              )
            )
          }
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          &nbsp;{videoCreationPath === "upload" ? "Record" : "Upload"}
        </label>
      </div>
    </div>
  );
}

export default SwitchUploadRecord;
