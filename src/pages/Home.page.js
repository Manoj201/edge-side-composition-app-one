import React from "react";
import Cookies from "universal-cookie";

const HomePage = () => {
	const handleClick = () => {
		const cookies = new Cookies();
		cookies.set("version", "payment", { path: "/" });
		// window.location.href = "/payment";
		window.location.reload();
	};
	return (
		<div>
			<h2>Home App Version - {process.env.REACT_APP_VERSION}</h2>
			<button onClick={handleClick}>Navigate to Payment App</button>
		</div>
	);
};

export default HomePage;
