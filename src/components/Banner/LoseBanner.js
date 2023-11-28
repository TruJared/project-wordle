import React from "react";
import Banner from "./Banner";

function LoseBanner({ answer, reset }) {
	return (
		<Banner type="sad" reset={reset}>
			<p>
				<strong>☠️ Game Over! ☠️</strong>
				<br />
				{`The answer was ${answer}.`}
			</p>
		</Banner>
	);
}

export default LoseBanner;
