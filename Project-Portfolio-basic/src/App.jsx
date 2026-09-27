// import { useState } from "react";
import "./index.css";
import Header from "./assets/components/Header";
import About from "./assets/components/About";
import Card from "./assets/components/Card";
import Footer from "./assets/components/Footer";

function App() {
	return (
		<>
			<Header />

			<About
				name={"Eli"}
				age={20}
				subtitle={`This is my first project in react`}
			/>

			<h2>Cac khai niem trong React</h2>

			<ul className="list-card">
				<Card
					title={"JSX"}
					subtitle={
						"Kết hợp Html và Javascript để tạo nên giao diện động và mạnh mẽ"
					}
				/>
				<Card
					title={"Component"}
					subtitle={
						"Khối xây dựng giao diện cơ bản. Kết hợp nhiều thành phần để tạo nên ứng dụng"
					}
				/>
				<Card />
				<Card
					title={"Props"}
					subtitle={
						"Truyền dữ liệu vào thành phần để làm nó linh hoạt và tái sử dụng"
					}
				/>
				<Card />
				<Card
					title={"State"}
					subtitle={
						"Dữ liệu được React quản lí, khi thay đổi tự động làm mới giao diện"
					}
				/>
				<Card />
			</ul>

			<Footer>Contact me</Footer>
		</>
	);
}

export default App;
