import vanillaJs from "/vanillajs.jpeg";

// Cách quản lí Component: https://youtu.be/NASBca0ym7U?si=6CA2UZRUdYr-fIyo

// cấu trúc 1 component (đây là gốc)
// tên hàm viết hoa chữ cái đầu (quy tắc jsx)
// sử dụng {} với js trong pt html
function App() {
	return (
		<>
			<h1>Học cách gọi component</h1>

			{/* Gọi component khác, được gọi nhiều lần */}
			{/* cách 1: gọi như thẻ html */}
			<Header></Header>
			<Header></Header>

			{/* cách gọi 2: thẻ đóng */}
			<Header />
			<Header />
			<Header />

			{/* Chữ cái đầu viết hoa giúp phân biệt thẻ tùy chỉnh react với thẻ html thường */}
			<header>Thẻ html header thường</header>

			<MainContent />
		</>
	);
}

// tạo thêm các component khác dựa trên cấu trúc gốc
function Header() {
	return (
		<>
			<h2>Hello world!</h2>
			<p>
				Hôm nay là ngày <strong>11/3/2026</strong>, vào lúc{" "}
				<strong>9:35</strong>
			</p>
			<p>Có thể gọi nhiều component và nhiều function App ở main jsx</p>
		</>
	);
}

// bài tập
function MainContent() {
	return (
		<>
			<img src={vanillaJs} alt="" />
			<h1>Danh sách công việc của tôi</h1>
			<ul>
				<li>Học React</li>
				<li>Học tiếng anh</li>
				<li>Chạy deadline</li>
			</ul>
			<p>Chúc bạn hoàn thành công việc suôn sẻ!</p>
		</>
	);
}

export default App;
