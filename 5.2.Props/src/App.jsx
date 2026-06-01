// Bài học này về Truyền hàm sự kiện (đã tóm gọn code bài trước)

import { myData } from "../data.js";

// COMPONENT - Tách component sang thư mục riêng để dễ quản lí (trong thư mục src)
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Tabbutton from "./components/Tabbutton.jsx";

// ****** BÀI TẬP: Sử dụng function declaration, function expression
// Lưu ý: LUÔN LUÔN định nghĩa các function component của bạn ở cấp cao nhất (top level) của file, hoặc import chúng từ một file khác.
// tạo component cha
function HandleSelect({ buttonName }) {
	const handleAlert = function () {
		alert(`${buttonName} pressed`);
	};
	return (
		<>
			{/* truyền dữ liệu qua prop về component con */}
			<Tabbutton onSelect={handleAlert}>JSX</Tabbutton>
		</>
	);
}

// return app======================================================
// Không bao giờ định nghĩa một component (một function bắt đầu bằng chữ viết hoa) bên trong một component khác
function App() {
	// ***Truyền hàm sự kiện từ Component cha vào Component con
	// 1. Định nghĩa hàm xử lí sự kiện tại App.jsx (component cha)
	function handleSelect() {
		alert("button pressed!");
	}

	// (nếu dùng prop) Sử Dụng Arrow Function
	function handleSelect2(selectButton) {
		alert(`${selectButton} pressed!`);
	}

	// 2. Truyền hàm xử lí sự kiện đó qua prop vào TabButton (component con)

	return (
		<>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Khái niệm chính trong React</h2>
					{/* ul bọc các component */}
					<ul>
						<MainContent {...myData[0]} />
						<MainContent {...myData[1]} />
						<MainContent {...myData[2]} />
						<MainContent {...myData[3]} />
					</ul>
				</section>

				<section id="examples">
					<h2>Examples</h2>
					{/* 2. Truyền hàm xử lí sự kiện qua prop*/}
					<menu>
						{/* truyền hàm thông thường */}
						<Tabbutton onSelect={handleSelect}>Component</Tabbutton>

						{/* truyền hàm sử dụng arrow function */}
						{/* bị định dạng prettier xuống dòng */}
						<Tabbutton
							onSelect={() => {
								handleSelect2("JSX");
							}}
						>
							JSX
						</Tabbutton>

						<Tabbutton
							onSelect={() => {
								handleSelect2("props");
							}}
						>
							props
						</Tabbutton>

						{/* Sử dụng keyword sau để không định dạng prettier(tác dụng lên thẻ đứng ngay sau nó) */}
						{/* prettier-ignore */}
						<Tabbutton onSelect={() => {handleSelect2("State");}}>State</Tabbutton>
					</menu>

					<h2>Luyện tập</h2>
					{/* prettier-ignore */}
					<menu>
						<HandleSelect buttonName="JSX"/>
					</menu>
					{/* Phân tích:
						App truyền chuỗi "JSX" cho HandleSelect qua prop buttonName.
						HandleSelect nhận prop buttonName và sử dụng nó bên trong hàm handleAlert.
						HandleSelect truyền chính hàm handleAlert (đã biết về buttonName) cho Tabbutton qua prop onSelect.
						Khi Tabbutton được bấm, nó gọi onSelect (tức là handleAlert), và alert chính xác sẽ được hiển thị. */}
				</section>
			</main>
		</>
	);
}

export default App;
