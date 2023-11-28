import React from "react";
import Key from "./Key";
import { KEYBOARD } from "../../constants";
import { checkGuess } from "../../game-helpers/";

function Keyboard({ guesses, answer }) {
	// [[{letter: 'a', status: 'default'}], [{letter: 'b', status: 'default'}...] status: unused, correct, misplaced, incorrect
	const [keyboard, setKeyboard] = React.useState(
		KEYBOARD.map((row) => row.map((letter) => ({ letter, status: "unused" })))
	);

	React.useEffect(() => {
		const newKeyboard = KEYBOARD.map((row) =>
			row.map((letter) => ({ letter, status: "unused" }))
		);
		guesses.forEach((guess) => {
			const result = checkGuess(guess, answer);
			result.forEach(({ letter, status }) => {
				const row = newKeyboard.find((row) =>
					row.find((o) => o.letter === letter)
				);
				const key = row.find((o) => o.letter === letter);
				key.status = status;
			});
		});
		setKeyboard(newKeyboard);
	}, [guesses, answer]);

	return (
		<div className="keyboard">
			{keyboard.map((row) => {
				return (
					<div className="keyboard-row">
						{row.map((o) => {
							return (
								<Key
									key={`keyboard_${o.letter}`}
									letter={o.letter}
									modifier={o.status}
								/>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default Keyboard;
