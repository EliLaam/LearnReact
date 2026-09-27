import "./App.css";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	const [value, setValue] = useState("");
	const [task, setTask] = useState("");

	const increment = () => setCount((count) => count + 1);
	const decrement = () => setCount((count) => count - 1);

	const handleSubmit = (e) => {
		e.preventDefault();
		setTask(value);
	};

	return (
		<>
			<h2>Counter :</h2>
			<div style={{ gap: "1rem", textAlign: "center" }}>
				<p>{count}</p>
				<button onClick={increment}>+</button>
				<button onClick={() => setCount(0)}>Reset</button>
				<button onClick={decrement}>-</button>
			</div>

			<h2>Todo list :</h2>
			<form action="" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="What is the task today?"
					onChange={(e) => setValue(e.target.value)}
				/>
				<button type="submit">Add</button>
				<p>{task}</p>
			</form>
		</>
	);
}

export default App;
