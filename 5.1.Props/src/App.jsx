// Cách 1: Truyền tham số trực tiếp
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";

// Cách 2: Tối ưu hoá code với Destructuring js (object, array + object)
import { myData } from "../data.js";

// COMPONENT - Tách component sang thư mục riêng để dễ quản lí (trong thư mục src)
// Bài học trong mỗi component
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import { Tabbutton, Tabbutton2 } from "./components/Tabbutton.jsx";

// return app======================================================
function App() {
	// console thử ra myData (mảng và đối tượng)
	console.log(myData[0]);
	console.log(myData[0].title);
	console.log(myData[1].desc);
	console.log(myData[2].image);

	return (
		<>
			<Header />

			<main>
				{/*=========Cách sử dụng props: Truyền tham số==========*/}
				<section id="core-concepts">
					<h2>Khái niệm chính trong React</h2>

					{/* ul bọc các component */}
					<ul>
						{/* Cách 1: truyền tham số trực tiếp =============*/}
						<MainContent
							image={pic1}
							title="Components"
							desc="Khối xây dựng giao diện cơ bản - kết hợp nhiều thành phần để tạo nên ứng dụng."
						/>
						<MainContent
							image={pic2}
							title="JSX"
							desc="Kết hợp HTML và JavaScript để tạo giao diện động và mạnh mẽ."
						/>

						{/* Cách 2: Destructing js =====================*/}
						<MainContent
							image={myData[2].image}
							title={myData[2].title}
							desc={myData[2].desc}
						/>
						<MainContent
							image={myData[3].image}
							title={myData[3].title}
							desc={myData[3].desc}
						/>

						{/* Cách 3: Spread Operator (trải data) ========*/}
						<MainContent {...myData[0]} />
						<MainContent {...myData[1]} />
						<MainContent {...myData[2]} />
						<MainContent {...myData[3]} />
					</ul>
				</section>

				{/*=========Cách sử dụng jsx như thẻ html (props.children)========= */}
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						{/* button thường html */}
						<li>
							<button>Component</button>
							<button>JSX</button>
							<button>Props</button>
							<button>State</button>
						</li>

						{/* props children (prop đặc biệt): hiển thị nội dung giữa thẻ component như html */}
						<Tabbutton>Component</Tabbutton>
						<Tabbutton>JSX</Tabbutton>

						{/* Đối với props tùy chỉnh (kh sử dụng keyword) ta cần truyền vào tham số như các component khác */}
						<Tabbutton2 propsbatky="Props"></Tabbutton2>
						<Tabbutton2 propsbatky="State"></Tabbutton2>
					</menu>
				</section>
			</main>
		</>
	);
}

export default App;
