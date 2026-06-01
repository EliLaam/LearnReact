// Bài học này về State (Trang thai)
import { useState } from "react";
import { myData } from "../data.js";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Tabbutton from "./components/Tabbutton.jsx";

// return app======================================================
function App() {
	// Syntax: const [Giá trị hiện tại, Function để cập nhật state] = useState(Giá trị khởi tạo)
	// Lưu ý: phải để hàm useState trên bậc cao nhất và không nằm trong các hàm if else
	const [selectedTopic, setSelectedTopic] = useState("Vui lòng click vào nút");
	// hàm handleSelect nhận vào tham số và hàm cập nhật state sử dụng tham số đó
	function handleSelect(selectButton) {
		setSelectedTopic(`Đã click vào ${selectButton}`);
	}

	// Trong function dù bạn thay đổi giá trị tabContent nhưng chúng vẫn kh được update trên giao diện

	// let tabContent = "Nội dung được hiển thị";       *Nằm bên ngoài hàm handleSelect
	// function handleSelect(selectButton) {
	// 	alert(`${selectButton} được chọn`);
	// 	tabContent = selectButton;
	// }

	/* Lý do là các hàm chỉ được gọi 1 lần khi chạy chương trình, khi click vào nút thì hàm handleSelect được gọi, nhưng App() thì không được gọi lại vì vậy nó không thể gán giá trị lại cho tabContent */

	return (
		<>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Khái niệm chính trong React</h2>
					<ul>
						<MainContent {...myData[0]} />
						<MainContent {...myData[1]} />
						<MainContent {...myData[2]} />
						<MainContent {...myData[3]} />
					</ul>
				</section>

				<section id="examples">
					<h2>Examples</h2>
					{/* prettier-ignore */}
					<menu>
						<Tabbutton onSelect={() => {handleSelect("Component");}}>Component</Tabbutton>
						<Tabbutton onSelect={() => {handleSelect("JSX");}}>JSX</Tabbutton>
						<Tabbutton onSelect={() => {handleSelect("Props");}}>Props</Tabbutton>
						<Tabbutton onSelect={() => {handleSelect("State");}}>State</Tabbutton>
					</menu>
					{/* gọi giá trị hiện tại */}
					{selectedTopic}
				</section>
			</main>
		</>
	);
}

export default App;
