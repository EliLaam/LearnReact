import pic1 from "./assets/pic1.png";
import { myData } from "../data.js";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Note from "./components/Lists/Note.jsx";
import Lists from "./components/Lists/Lists.jsx";

function App() {
	// render mapping array to JSX
	// cách 1: render mảng trực tiếp (không cần component)
	// const notes = ["dev", "learn", "practice", "repeat"];
	// const listsNotes = notes.map((note)=><li>{note}</li>);   // =>> return listsNotes ở dưới để hiển thị ra giao diện

	// cách 2: render mảng/object bằng cách sử dụng component (cần tạo component Note để render từng phần tử trong mảng)
	const notes = [
		{ id: 1, title: "dev" },
		{ id: 2, title: "learn" },
		{ id: 3, title: "practice" },
		{ id: 4, title: "repeat" },
	];

	return (
		<>
			{/* Jsx có khả năng hiển thị mảng và đối tượng */}
			{["Component", "JSX", "Props", "State"]}
			{[<p>Component</p>, <p>JSX</p>, <p>Props</p>, <p>State</p>]}

			<Header />

			<main>
				<section id="core-concepts">
					<h2>Khái niệm chính trong React</h2>

					<ul>
						{/* Cách 1: truyền tham số trực tiếp =============*/}
						<MainContent
							image={pic1}
							title="Components"
							desc="Khối xây dựng giao diện cơ bản - kết hợp nhiều thành phần để tạo nên ứng dụng."
						/>

						{/* Cách 2: Destructing js =====================*/}
						<MainContent
							image={myData[2].image}
							title={myData[2].title}
							desc={myData[2].desc}
						/>

						{/* Cách 3: Spread Operator (trải data) ========*/}
						<MainContent {...myData[3]} />

						{/* Các cách trên chỉ render được một số phần tử nhất định */}
						{/* Cách 4: .map mảng dữ liệu (render danh sách) =====================*/}
						{myData.map((item) => (
							<MainContent key={item.title} {...item} />
						))}

						{/* {...item} trải mảng myData */}
						{/* .map là phương thức của mảng trong JavaScript dùng để tạo ra một mảng mới bằng cách áp dụng một hàm cho từng phần tử của mảng gốc */}
						{/* Lưu ý: Khi sử dụng map để render danh sách component, cần cung cấp một thuộc tính key duy nhất cho mỗi phần tử (dùng để phân biệt các phần tử) để giúp React theo dõi và tối ưu hóa việc cập nhật giao diện. */}

						{/* {myData.map((item, index) => (
							<MainContent key={index} {...item} />
						))} */}
						{/* Trong ví dụ trên, index của phần tử trong mảng được sử dụng làm key. Tuy nhiên, nếu có thể, nên sử dụng một giá trị duy nhất và ổn định hơn (như id) thay vì index để tránh các vấn đề khi danh sách thay đổi. */}

						{/* Ví dụ: <MainContent key={item.id} {...item} /> */}
						{/* Nếu không có giá trị duy nhất nào, có thể sử dụng index như một giải pháp tạm thời, nhưng cần cẩn thận khi thêm hoặc xóa phần tử trong danh sách. */}
						{/* Nếu không cung cấp key, React sẽ hiển thị cảnh báo và có thể gặp vấn đề về hiệu suất khi cập nhật giao diện. */}
					</ul>
				</section>

				<section id="examples">
					<h2>Bai tap: Render Lists </h2>

					<h4>Render note list</h4>
					{/* render danh sách note */}
					{notes.map((note) => (
						<Note key={note.id} title={note.title} />
					))}

					<h4>Sort lists</h4>
					{/* sắp xếp danh sách note (lưu ý: phải dùng ol mới sắp xếp đc dạng số)*/}

					{notes
						.sort((a, b) => a.title.localeCompare(b.title))
						.map((note) => (
							<Note key={note.id} title={note.title} />
						))}

					<h4>Filter note lists</h4>
					{/* lọc danh sách note */}
					{notes
						.filter((note) => note.title.includes("learn"))
						.map((note) => (
							<Note key={note.id} title={note.title} />
						))}

					{/* Cách 3: Gọn hơn cách 2 khi gom tất cả mọi thứ vào chung 1 component */}
					<h2>Render Lists (Components)</h2>
					<Lists />
					<Lists category="Fruits" />
				</section>
			</main>
		</>
	);
}

export default App;
