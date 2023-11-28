import React from "react";

function Banner({ type, reset, children}) {
	const style = `${type} banner`;
	return (
		<div className={style}>
			{children}
      <button onClick={reset}>PLAY AGAIN</button>
		</div>
	);
}

export default Banner;
