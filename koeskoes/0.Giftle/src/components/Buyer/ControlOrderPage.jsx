import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoInOrder } from "../../redux/actions/orderActions";

/**
 * A page that checks if order has a video
 * @returns the front end of the ControlOrder page
 */
function ControlOrderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { textCode } = useParams();
  const video = useSelector((state) => state.videos.video);

  /**
   * Useeffect activates when the textCode changes.
   * Converts the textCode in the URL to a textCode in the state.
   */
  useEffect(() => {
    dispatch(getVideoInOrder(textCode));
  }, [textCode, dispatch]);

  /**
   * This useEffect activates when the video in the Redux state changes.
   * If no video has been uploaded yet, the user gets sent to the upload page.
   */
  useEffect(() => {
    if (video.videoName === "") {
      navigate("/buyer/create");
    }
  }, [video, navigate]);

  /**
   * Check if order has video. If true show message, if false navigate to /buyer
   * @returns the front end of the ControlOrder page
   */
  const videoInOrderExists = () => {
    return (
      <div className="vertical-center colored-background">
        <div className="container text-center rounded p-3 bg-light">
          <h2>
            Er is al een video geupload of opgenomen die in de bestelling staat.
          </h2>
          <p>
            Uw bestellingsnummer is:{" "}
            <b>
              <i>
                <span style={{ fontSize: "1.5em" }}>{textCode}</span>
              </i>
            </b>
          </p>
        </div>
      </div>
    );
  };

  return videoInOrderExists();
}

export default ControlOrderPage;
