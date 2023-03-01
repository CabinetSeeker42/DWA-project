/**
 *
 * React component to get and set the progress bar.
 *
 * @return the progress bar with calculations
 */
const ProgressBar = (props) => {
  return (
    <div className="progress">
      <div
        title="Tijd"
        className="progress-bar"
        role="progressbar"
        aria-valuenow="1"
        style={{ width: (100 / props.max) * props.current + "%" }}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default ProgressBar;
