import React from "react";

/**
 * This page has no special functionality other than showing some simple html.
 * @returns the html when the textcode isn't available in the state.
 */
function NoTextCodePage() {
  return (
    <div className="vertical-center">
      <h1>
        Wij kunnen uw order niet vinden,
        <br />
        probeer opnieuw door het upload proces heen te gaan.
      </h1>
    </div>
  );
}

export default NoTextCodePage;
