/* 
export default function Tabbutton({ children }) {
	// Trong Javascript===
	// const btn = document.querySelector("button");
	// btn.addEventListener("click", () => {
	// 	// làm việc gì đó
	// });

	// Trong React===
	function handleClick() {
		alert("button pressed!");
	}
	return (
		<>
			<li>
				<button onClick={handleClick}>{children}</button>
			</li>
		</>
	);
} */

// onClick và các event handler khác: Là các props đặc biệt được React hỗ trợ để gắn sự kiện vào
// Bạn cần truyền một hàm xử lý sự kiện vào onClick để xác định hành động khi người dùng click
// Lưu ý chúng ta truyền tên hàm handleClick, chứ không truyền hàm thực thi handleClick()
// hãy tạo thói quen đặt tên hàm có ý nghĩa, dùng {} khi lồng js vào html

// *** Truyền hàm sự kiện từ Component cha vào Component con ***
// 1. Định nghĩa hàm xử lí sự kiện tại App.jsx (component cha)
// 2. Truyền hàm xử lí sự kiện đó qua prop vào TabButton
export default function Tabbutton({ children, onSelect }) {
	return (
		<>
			<li>
				<button onClick={onSelect}>{children}</button>
			</li>
		</>
	);
}

// Khác với children là prop đặc biệt (cần ghi đúng chính tả), prop tuỳ chỉnh onSelect có thể đặt tuỳ ý
