/**
 * This page has no special functionality.
 * @returns the final html page for the buyer.
 */
function FinalPage() {
  return (
    <div className="vertical-center colored-background">
      <div
        className="container text-center rounded p-3 bg-light"
        id="thankYouMessage"
      >
        <h1>Bedankt voor het versturen van je Giftle!</h1>
        <p>
          Hou je mail in de gaten om te zien wanneer jouw Giftle is bekeken.
        </p>
      </div>
    </div>
  );
}

export default FinalPage;
