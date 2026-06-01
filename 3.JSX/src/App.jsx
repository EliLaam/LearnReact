// gọi các file bên ngoài
import { useState } from "react";
import explainjsx from "./assets/jsx.jpeg";
import explainfragment from "./assets/fragment.jpeg";
// nhận style css
import "./App.css";

// phần nội dung hiển thị trên trang web chính
// đây là 1 hàm viết bằng javascript nhưng lại return về 1 pt html (jsx)
// jsx là phần mở rộng javascript giúp viết html lồng vào js (HTML trong JavaScript)
// đặt tên hàm viết hoa chữ đầu
function App() {
	const [count, setCount] = useState(0);

	// trả về 1 pt html
	return (
		// fragment: pt rỗng
		<>
			{/* Phải bọc javaScript trong {} */}
			<div>
				{/* Quy tắc của JSX (chỉ trả về một element cha, dùng className thay vì class...). */}
				<img src={explainjsx} className="explain-jsx" alt="" />

				<img src={explainfragment} className="explain-fragment" alt="" />
			</div>

			<h1>Thay đổi text</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>

			<p className="read-the-docs">Thay đổi nội dung</p>
		</>
	);
}

// xuất app
export default App;
