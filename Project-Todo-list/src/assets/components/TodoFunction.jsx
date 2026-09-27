import { useState } from "react";

export default function TodoFunction() {
	// 1. Chuyển tasks thành mảng các object
	const [tasks, setTasks] = useState([
		{ text: "Job", completed: false },
		{ text: "Learn", completed: false },
	]);
	const [newTask, setNewTask] = useState("");

	function handleInputChange(e) {
		setNewTask(e.target.value);
	}

	function addTask() {
		if (newTask.trim() === "") return; // Tránh thêm task rỗng

		// Thêm task mới dưới dạng object
		setTasks([{ text: newTask, completed: false }, ...tasks]);
		setNewTask("");
	}

	function deleteTask(index) {
		const updatedTasks = tasks.filter((_, i) => i !== index);
		setTasks(updatedTasks);
	}

	// 2. Đảo ngược trạng thái completed của task được chọn
	function toggleCompletedTask(index) {
		const updatedTasks = tasks.map((task, i) => {
			if (i === index) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(updatedTasks);
	}

	return (
		<>
			<div>
				<input
					type="text"
					placeholder="enter a task..."
					value={newTask}
					onChange={handleInputChange}
				/>
				<button onClick={addTask}>Add</button>
			</div>

			<ol>
				{tasks.map((task, index) => (
					<li key={index}>
						<button onClick={() => toggleCompletedTask(index)}>
							{task.completed ? "Undo" : "Done"}
						</button>

						{/* 3. Đổi class dựa trên thuộc tính completed của từng task */}
						<p className={task.completed ? "done" : undefined}>{task.text}</p>

						<button onClick={() => deleteTask(index)}>Delete</button>
					</li>
				))}
			</ol>
		</>
	);
}
