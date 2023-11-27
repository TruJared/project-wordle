import React from "react";

function Banner({ type, message, reset }) {
	const style = `${type} banner`;
	return (
		<div className={style}>
      <p>
        {type === "happy" ? <strong>🧁 Congratulations! 🧁</strong> : <strong>☠️ Game Over! ☠️</strong>} {message}
      </p>
      <button onClick={reset}>PLAY AGAIN</button>
		</div>
	);
}

export default Banner;
