import React from "react";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

const HomePage = () => {
	let history = useHistory();
	const handleClick = () => {
		const cookies = new Cookies();
		cookies.set("version", "payment", { path: "/" });
		// history.push("/payment");
		window.location.href = "/payment";
		// window.history.pushState({}, "", "/payment");
		// window.location.reload();
	};
	return (
		<div>
			<h2>Home App Version - {process.env.REACT_APP_VERSION}</h2>
			<button onClick={handleClick}>Navigate to Payment App</button>
		</div>
	);
};

export default HomePage;
