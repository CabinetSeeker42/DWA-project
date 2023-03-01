import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setVideoCreationPath } from "../../redux/actions/uploadActions";

// import SVG as ReactComponent for easier use
import { ReactComponent as FileUpload } from "../../assets/file-upload.svg";
import { ReactComponent as RecordCircle } from "../../assets/record-circle.svg";

/**
 * This component creates the starting page for the buyer proces.
 * @returns the html for the start of the buyer video upload proces.
 */
function HomeBuyerPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const textCode = useSelector((state) => state.orders.textCode);

  // Navigation functionality to send the user to a different page after a certain action.
  if (!textCode) {
    return navigate("/noTextCode");
  }

  return (
    <div className="vertical-center colored-background">
      <div className="container text-center rounded p-3 bg-light">
        <h1>Welkom op Giftle!</h1>
        <p className="mt-3 mb-5">
          Wilt u een video meesturen met uw cadeau? Als u een video heeft, kunt
          u deze uploaden. Er kan ook een video worden opgenomen.
        </p>
        <button
          className="btn btn-primary mx-4 mb-4"
          id="recordVideo"
          onClick={() => {
            dispatch(setVideoCreationPath("record"));
            return navigate("/buyer/create");
          }}
        >
          Opnemen&nbsp;
          <RecordCircle />
        </button>
        <button
          className="btn btn-primary mx-4 mb-4"
          id="uploadVideo"
          onClick={() => {
            dispatch(setVideoCreationPath("upload"));
            return navigate("/buyer/create");
          }}
        >
          Uploaden&nbsp;
          <FileUpload />
        </button>
      </div>
    </div>
  );
}

export default HomeBuyerPage;
