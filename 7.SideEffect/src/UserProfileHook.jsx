import { useState, useEffect } from "react";

export default function UserProfileHook({ userId }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Sử dụng state để quản lý loading và dữ liệu user, thay vì phải so sánh props cũ và mới như trong class component
	// useEffect(() => {
	// 	fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
	// 		.then((res) => {
	// 			if (!res.ok) throw new Error("Lỗi " + res.status);
	// 			return res.json();
	// 		})
	// 		.then((data) => {
	// 			setUser(data);
	// 			setLoading(false);
	// 		})
	// 		.catch((err) => {
	// 			console.error("Fetch thất bại:", err);
	// 			setLoading(false);
	// 		});

	// 	//  Cleanup function (tương đương componentWillUnmount)
	// 	return () => {
	// 		console.log("Cleaning up UserProfileHook for userId:", userId);
	// 		//  Nếu có subscription, timer, event listener → hủy ở đây
	// 	};
	// }, [userId]);
	//  useEffect với dependency là userId → chỉ chạy khi userId thay đổi
	//  Tương đương componentDidMount + componentDidUpdate (khi userId thay đổi)
	//  Không cần so sánh userId trước khi gọi API, React đã đảm bảo chỉ chạy effect khi userId thay đổi

	// ==========>> Sử dụng async/await để viết code rõ ràng hơn
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await fetch(
					`https://jsonplaceholder.typicode.com/users/${userId}`,
				);
				if (!res.ok) throw new Error("Lỗi " + res.status);
				const data = await res.json();
				setUser(data);
				setLoading(false);
			} catch (err) {
				console.error("Fetch thất bại:", err);
				setLoading(false);
			} 
		};
		fetchUser();

		return () => {
			console.log("Cleaning up UserProfileHook for userId:", userId);
			//  Nếu có subscription, timer, event listener → hủy ở đây
		};
	}, [userId]);

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : user ? (
				<div>
					<h2>{user.name}</h2>
					<p>{user.email}</p>
				</div>
			) : (
				<p>User not found</p>
			)}
		</div>
	);
}
