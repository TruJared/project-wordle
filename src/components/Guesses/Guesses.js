import React from "react";
import GuessResults from "./GuessResults";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guesses({ guesses, answer }) {
	const guessesPlaceholder = range(NUM_OF_GUESSES_ALLOWED - guesses.length);


	return (
		<div className="guess-results">
			{[...guesses, ...guessesPlaceholder].map((guess, index) => {
				return <GuessResults key={index} guess={guess} answer={answer} />;
			})}
		</div>
	);
}

export default Guesses;
