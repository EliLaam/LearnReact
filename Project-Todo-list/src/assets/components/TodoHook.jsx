import { useEffect, useState } from "react";
import Quote from "./Quote";

export default function TodoHook() {
	// [] vì giá trị nhận là mảng object
	const [todos, setTodos] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [inputTitle, setInputTitle] = useState("");

	// fetch api
	const handleTodos = async () => {
		setError(null);
		setLoading(true);

		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos?_limit=8",
			);
			if (!response.ok) {
				throw new Error(`Sever return  error ${response.status}`);
			}

			const data = await response.json();
			setTodos(data);
		} catch (err) {
			setError(err.message || `Failed to fetch task from sever`);
		} finally {
			setLoading(false);
		}
	};

	// fetch when re-render
	useEffect(() => {
		// Trì hoãn 0ms để chuyển sang chu kỳ event loop tiếp theo, hết ngay lỗi setState synchronously
		const timer = setTimeout(() => {
			handleTodos();
		}, 0);

		return () => clearTimeout(timer);
	}, []);

	// add task
	const handleAddTasks = (e) => {
		e.preventDefault();
		if (!inputTitle.trim()) return;

		const newTodo = {
			id: Date.now(),
			title: inputTitle.trim(),
			completed: false,
		};

		// phải để trong [] vì giá trị nhận vào là mảng
		setTodos([newTodo, ...todos]);
		setInputTitle("");
	};

	// delete task
	const handleDeleteTask = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	// pending & completed
	const pending = todos.length;

	return (
		<>
			{/* container */}
			<div className="container">
				{/* header */}
				<header className="header-todo">
					<div className="text-header">
						<h2>Task Flow</h2>
						<p>Syncing with JSONPlaceholder API</p>
					</div>
					<div className="right-button">
						<button
							className="button-reset"
							onClick={handleTodos}
							disabled={loading}
						>
							Reset API
						</button>
					</div>
				</header>

				<Quote />

				{/* Input form */}
				<form className="form-input " onSubmit={handleAddTasks}>
					<input
						type="text"
						placeholder="What needs to be done today?"
						className="input-todo"
						value={inputTitle}
						onChange={(e) => setInputTitle(e.target.value)}
					/>
					<button
						className="button-add"
						type="submit"
						disabled={!inputTitle.trim()}
					>
						+ Add
					</button>
				</form>

				{/* Status summary */}
				<div className="status-summary">
					<span>Pending:{pending}</span>
					<span>Completed:</span>
				</div>

				{/* render list */}
				{!loading && !error && (
					<div className="container-list">
						{todos.length === 0 ? (
							<p>No tasks found</p>
						) : (
							todos.map((todo) => (
								<div className="todo-task" key={todo.id}>
									{todo.title}

									<span
										className="delete-button"
										onClick={() => handleDeleteTask(todo.id)}
									>
										x
									</span>
								</div>
							))
						)}
					</div>
				)}
			</div>
		</>
	);
}
