import { Outlet } from "react-router"; // import Outlet từ react-router để hiển thị các route con của route dashboard [Nested Routes]

export default function Dashboard() {
	return (
		<>
			<h1>
				Hello! This is the Dashboard.
				<Outlet />{" "}
				{/* Outlet sẽ hiển thị tại đây các route con của route dashboard, nếu không có route con nào được truy cập thì Outlet sẽ không hiển thị gì cả */}
			</h1>
		</>
	);
}
