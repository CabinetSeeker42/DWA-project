/**
 * Message function to describe the message and runs a callback function.
 *
 * @param {String} message Text to describe the message
 * @param cb Callback to run a function
 * @param color has default value of danger for styling
 * @return Message with text and a callback function
 */
const Message = (message, cb, color = "danger") => {
  return (
    <div
      className={`alert alert-${color} d-flex align-items-center`}
      role="alert"
    >
      <div>{message}</div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => cb()}
      ></button>
    </div>
  );
};

export default Message;
