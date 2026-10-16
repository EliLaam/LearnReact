import { useState } from "react";

export default function TodoBasic() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// fetch api
	const handleFetchData = async () => {
		setLoading(true);
		setError(null);

		try {
			const res = await fetch(
				"https://jsonplaceholder.typicode.com/todos?_limit=5",
			);

			if (!res.ok) {
				throw new Error(`Loi khi ket noi ${res.status}`);
			}
			const data = await res.json();
			setPosts(data);
			console.log(data);
		} catch (err) {
			setError(err.message || "There is a err");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="todo-app">
				<div className="search-header">
					<section className="input-form">
						<input
							type="text"
							placeholder="What is the task today?"
							className="input"
						/>
						<button
							className="button-add"
							onClick={handleFetchData}
							disabled={loading}
						>
							Fetch
						</button>
					</section>
				</div>

				<div className="show-list">
					{error && <p>{error}</p>}

					{posts.length > 0 && (
						<ul>
							{posts.map((post) => (
								<li key={post.id}>
									<p>{post.title}</p>

									<p className={post.completed ? "done-status" : "not-done"}>
										{post.completed ? "Done" : "X"}
									</p>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
}
