import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
	const [greeting, setGreeting] = useState();
	function updateGreeting() {
		// Có thể đặt dòng này bên ngoài và gọi tham số cho hàm update
		const currentHour = new Date().getHours();

		if ((currentHour >= 1) & (currentHour <= 12)) {
			setGreeting(`Xin chào buổi sáng!`);
		} else if ((currentHour > 12) & (currentHour <= 18)) {
			setGreeting("Xin chào buổi chiều!");
		} else {
			setGreeting("Xin chào buổi tối!");
		}
	}

	return (
		<>
			<section id="center">
				<div className="hero">
					<img src={heroImg} className="base" width="170" height="179" alt="" />
					<img src={reactLogo} className="framework" alt="React logo" />
					<img src={viteLogo} className="vite" alt="Vite logo" />
				</div>
				<div>
					<h1>Update Greeting</h1>
				</div>
				{greeting}
				<button
					className="counter"
					onClick={() => {
						updateGreeting();
					}}
				>
					Cập nhật lời chào
				</button>
			</section>

			<div className="ticks"></div>
			<section id="spacer"></section>
		</>
	);
}

export default App;
