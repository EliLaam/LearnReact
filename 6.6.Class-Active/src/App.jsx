import { useState } from "react";
import MainContent from "./components/MainContent/MainContent.jsx";
import Header from "./components/Header/Header.jsx";
import { myData, EXAMPLES } from "../data.js";
import TabButton from "./components/TabButton.jsx";

// Học cách toggle class + bài tập
function App() {
	const [selectedTopic, setSelectedTopic] = useState();
	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	// Bai tap: toggle button
	const [toggleButton, setToggleButton] = useState(false);
	// pre là tham số nhận kiểu true false của toggleButton
	// Khi click thì setToggleButton sẽ phủ định boolean toggleButton
	// toggleButton mặc định là false thì click => true; đang true => false
	function clickButton() {
		setToggleButton((pre) => !pre);
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

					{/* nếu selectedTopic nhận chuỗi chính xác thì => isSelected = true */}
					{/* Sau đó truyền true vào component TabButton */}
					<menu>
						<TabButton
							isSelected={selectedTopic === "components"}
							onSelect={() => {
								handleSelect("components");
							}}
						>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "jsx"}
							onSelect={() => {
								handleSelect("jsx");
							}}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "props"}
							onSelect={() => {
								handleSelect("props");
							}}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "state"}
							onSelect={() => {
								handleSelect("state");
							}}
						>
							State
						</TabButton>
					</menu>

					{!selectedTopic ? (
						<p>Vui lòng chọn thông tin </p>
					) : (
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].desc}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)}
				</section>

				{/* Bai tap toggle button */}
				<div id="exercise">
					<p className={toggleButton ? "active" : undefined}>Click me!</p>
					<button onClick={clickButton}>Toggle btn</button>
				</div>
			</main>
		</>
	);
}

export default App;
