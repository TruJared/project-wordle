function Key({ letter, modifier }) {
	return (
		<span className={`keyboard-key ${modifier}`}>
			{letter}
		</span>
	);
}

export default Key;
