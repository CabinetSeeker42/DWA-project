/**
 *
 * React component for the spinner loader or text loader.
 *
 * @return the spinner in text or icon
 */
const Spinner = () => {
  return (
    <>
      <div className="spinner-border my-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="loading-text" role="status">
        <h5>Een moment geduld a.u.b.</h5>
      </div>
    </>
  );
};

export default Spinner;
