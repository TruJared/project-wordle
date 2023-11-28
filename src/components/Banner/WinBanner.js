import React from "react";
import Banner from "./Banner";

function WinBanner({tries, reset}) {
  return (
    <Banner type="happy" reset={reset}>
          <p>
        <strong>🧁 Congratulations! 🧁</strong> You win!
        <br />
        {`You solved it in ${tries} guesses.`}
      </p>
    </Banner>
  );
}

export default WinBanner;
