import React from "react";
import Cookies from "universal-cookie";

const HomePage = () => {
	const handleClick = () => {
		const cookies = new Cookies();
		cookies.set("version", "newApp", { path: "/" });
		window.location.reload();
	};
	return (
		<div>
			<h2>App Version - {process.env.REACT_APP_VERSION}</h2>
			<button onClick={handleClick}>Navigate to Second App</button>
		</div>
	);
};

export default HomePage;
