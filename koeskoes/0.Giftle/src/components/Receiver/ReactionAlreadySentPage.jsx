/**
 *
 * This component has no special functionality.
 * @returns the front-end after an reaction has been send.
 */
function ReactionAlreadySentPage() {
  return (
    <div className="vertical-center colored-background">
      <div className="container text-center rounded p-3 bg-light">
        <h1 id="reaction-already-sent">Er is al een reactie verstuurd.</h1>
        <p>Wij hebben de reactie al naar de desbetreffende persoon gestuurd!</p>
      </div>
    </div>
  );
}

export default ReactionAlreadySentPage;
