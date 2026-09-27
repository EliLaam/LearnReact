import Title from "./components/Title/Title.jsx";
import { listArray } from "../data.js";
import List from "./components/List/List.jsx";

// module chỉ được áp dụng riêng ở các thư mục components
// cần install tailwind lại khi đã xóa module
// npm install tailwind và chỉ cần sử dụng class có sẵn
// tất cả được style bằng tailwind kể cả reset css (mặc định)
// https://tailwindcss.com/docs/installation/using-vite
function App() {
	return (
		<>
			{/* thêm class trực tiếp để style từ tailwind */}
			<h1 className="text-4xl text-white bg-taupe-500">
				How to Styling in React?
			</h1>

			<section>
				<Title title="1. Internal CSS" />
				<p>{listArray[0].p1}</p>
				<p>{listArray[0].p2}</p>
				<pre>{listArray[0].code}</pre>
			</section>

			<section>
				<Title title="2. External CSS" />
				<p>{listArray[1].p1}</p>
				<p>{listArray[1].p2}</p>
				<pre>{listArray[1].code}</pre>
			</section>

			<section>
				<Title title="3. CSS Module" />
				<p>{listArray[2].p1}</p>
				<p>{listArray[2].p2}</p>
				<pre>{listArray[2].code}</pre>
			</section>

			<section>
				<Title title="4. Tailwind CSS" />
				<p>{listArray[3].p1}</p>
				<List
					link="https://tailwindcss.com/docs/installation/using-vite"
					title="GET STARTED"
				/>

				<h2 className="text-2xl">Example</h2>

				{/* mix color tailwind */}
				<div class="flex justify-center -space-x-14">
					<div class="bg-blue-500 mix-blend-multiply"></div>
					<div class="bg-pink-500 mix-blend-multiply "></div>
				</div>
			</section>

			<section>
				<Title title="5. MUI & Cha-kra UI (Option)" />

				<p>{listArray[4].p1}</p>
				<p>{listArray[4].p2}</p>

				<List
					link="https://www.chakra-ui.com/docs/components/concepts/overview"
					title="Chakra UI Component"
				/>
				<List
					link="https://mui.com/material-ui/all-components/"
					title="MUI Component"
				/>
			</section>
		</>
	);
}

export default App;
