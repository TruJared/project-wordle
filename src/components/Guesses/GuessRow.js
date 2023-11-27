import React from "react";
import { checkGuess } from "../../game-helpers/";
import { range } from "../../utils";

function GuessRow({ word = null, answer }) {
	// placeholder will be an int
	const result = word.length === 5 ? checkGuess(word, answer) : null;

	return (
		<p className="guess">
			{range(0, 5).map((_, i) => {
				const style = result ? result[i].status + " cell" : "cell";
				const letter = result ? result[i].letter : "";
				return (
					<span key={i} className={style}>
						{letter}
					</span>
				);
			})}
		</p>
	);
}

export default GuessRow;
