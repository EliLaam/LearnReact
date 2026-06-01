import { useState } from "react";
import MainContent from "./components/MainContent/MainContent.jsx";
import Header from "./components/Header/Header.jsx";
import { myData, EXAMPLES } from "../data.js";
import TabButton from "./components/TabButton.jsx";

//  Ứng Dụng State Để Hiển Thị Dữ Liệu Thực
function App() {
	// set khởi tạo hiển thị nội dung phần components trước
	// sau đó update render qua chuỗi được truyền vào handleSelect
	const [selectedTopic, setSelectedTopic] = useState("components");
	console.log("App được gọi");

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
	}
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
            <TabButton onSelect={()=>{handleSelect('components')}}>Components</TabButton>
            <TabButton onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
            <TabButton onSelect={()=>{handleSelect('props')}}>Props</TabButton>
            <TabButton onSelect={()=>{handleSelect('state')}}>State</TabButton>
          			</menu>

					{/* render UI */}
					<div id="tab-content">
						{/* dùng bracket notation cho biến, chuỗi đặc biệt */}
						<h3>{EXAMPLES[selectedTopic].title}</h3>
						<p>{EXAMPLES[selectedTopic].desc}</p>
						<pre>
							<code>{EXAMPLES[selectedTopic].code}</code>
						</pre>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
