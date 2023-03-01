import { ReactComponent as PauseButton } from "../../assets/pause.svg";
import { ReactComponent as PlayButton } from "../../assets/play-circle.svg";
import { ReactComponent as ReplayButton } from "../../assets/replay.svg";
import { ReactComponent as FullScreenButton } from "../../assets/fullscreen.svg";

/**
 * Play button state to check video replay, is playing or is paused.
 * @returns null by default or one of three buttons depending on the state.
 */
const PlayerPlayPauseButtons = (props) => {
  const playPauseButtons = () => {
    const buttonClasses = `btn btn-primary btn-round btn-record`;

    switch (props.state) {
      case 1:
        return (
          <button
            className={buttonClasses}
            onClick={() => props.setVideoState(2)}
          >
            <PlayButton className="text-dark" />
          </button>
        );
      case 2:
        return (
          <button
            className={buttonClasses}
            onClick={() => props.setVideoState(1)}
          >
            <PauseButton className="text-dark" />
          </button>
        );
      case 3:
        return (
          <button
            className={buttonClasses}
            onClick={() => props.setVideoState(1)}
          >
            <ReplayButton className="text-dark" />
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {playPauseButtons()}
      {props.setFullScreen ? (
        <button
          className="btn btn-primary btn-round btn-record btn-record-right"
          id="fullscreen"
          onClick={() => props.setFullScreen()}
        >
          <FullScreenButton className="text-dark" />
        </button>
      ) : null}
    </>
  );
};

export default PlayerPlayPauseButtons;
