/**
 *
 * This component has no special functionality.
 * @returns the front-end after an reaction has been send.
 */
function ReactionSentPage() {
  return (
    <div className="vertical-center colored-background">
      <div className="container text-center rounded p-3 bg-light">
        <h1 id="reaction-sent">Bedankt voor het versturen van een reactie!</h1>
        <p>Wij hebben de reactie naar de desbetreffende persoon gestuurd.</p>
      </div>
    </div>
  );
}

export default ReactionSentPage;
