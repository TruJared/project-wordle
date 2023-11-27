import React from "react";

import GuessRow from "./GuessRow";

function GuessResults({guess, answer}) {
	return (
		<div className="guess-results">
			<GuessRow word={guess} answer={answer} />
		</div>
	);
}

export default GuessResults;
