import React from "react";
import GuessResults from "./GuessResults";
import Keyboard from "../Keyboard";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guesses({ guesses, answer }) {
	const guessesPlaceholder = range(NUM_OF_GUESSES_ALLOWED - guesses.length);


	return (
		<>
		<div className="guess-results">
			{[...guesses, ...guessesPlaceholder].map((guess, index) => {
				const isGuessValid = guess && guess.length === 5; // placeholder guesses are not length 5
				return <GuessResults key={index} guess={isGuessValid ? guess : ''} answer={answer} />;
			})}
			</div>
			<Keyboard guesses={guesses} answer={ answer} />
		</>
	);
}

export default Guesses;
