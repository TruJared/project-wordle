import React from "react";
import Guesses from "../Guesses";
import Form from "../Form";
import Banner from "../Banner";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [showBanner, setShowBanner] = React.useState(false);
	const [answer, setAnswer] = React.useState(sample(WORDS));

	React.useEffect(() => {
		if (guesses.length === NUM_OF_GUESSES_ALLOWED || guesses.includes(answer)) {
			setShowBanner(true);
		}
	}, [guesses]);

	function handleReset() {
		setGuesses([]);
		setAnswer(sample(WORDS));
		setShowBanner(false);
	}

	function handleSubmitGuess(guess) {
		if (guess.length !== 5) {
			alert("Guess must be 5 letters long!");
			return;
		}
		if (!guesses.includes(guess)) setGuesses([...guesses, guess]);
		return;
	}
	return (
		<>
			<Guesses guesses={guesses} answer={answer} />
			{showBanner ? (
				<Banner
					type={guesses.includes(answer) ? "happy" : "sad"}
					message={
						guesses.includes(answer)
							? `You solved it in ${guesses.length} guesses.`
							: `The answer was ${answer}.`
					}
					reset={handleReset}
				/>
			) : (
				<Form handleSubmitGuess={handleSubmitGuess} />
			)}
		</>
	);
}

export default Game;
