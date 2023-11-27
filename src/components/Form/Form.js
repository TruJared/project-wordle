import React from "react";

function Form({ handleSubmitGuess }) {
	const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");

  }

	return (
		<form
			className="guess-input-wrapper"
      onSubmit={handleSubmit}
		>
			<label htmlFor="guess-input">Enter Guess (5 letters):</label>
			<input
				required
				type="text"
				name="guess-input"
				id="guess-input"
				placeholder="Enter Guess"
				value={guess}
				onChange={(event) => setGuess(event.target.value.toUpperCase())}
				pattern="^[a-zA-Z]{5}$"
			/>
		</form>
	);
}

export default Form;
