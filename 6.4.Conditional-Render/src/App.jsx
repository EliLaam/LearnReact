import { useState } from "react";
import MainContent from "./components/MainContent/MainContent.jsx";
import Header from "./components/Header/Header.jsx";
import { myData, EXAMPLES } from "../data.js";
import TabButton from "./components/TabButton.jsx";

//  Ứng Dụng State Hiển Thị Nội Dung Theo Điều Kiện
// Toán tử 3 ngôi: let variable = conditional ? truthy : falsy
// Toán tử AND &&: Truthy && Truthy ; Falsy && Truthy
// If else

function App() {
	// để trống nhận kiểu dữ liệu là falsy Value
	const [selectedTopic, setSelectedTopic] = useState();

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	// Cách 3: Khai báo biến riêng biệt - If else
	// mặc định
	let tabContent = <p>Vui lòng chọn bài học (cách 3)</p>;
	// nếu selectedTopic được click thì render
	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].desc}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
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

					{/* Cách 1: dùng toán tử 3 ngôi để render theo conditional */}
					{/* lúc này selectedTopic đang là falsy => !falsy = truthy */}
					{/* truthy => <p> ; falsy => <div> */}
					{!selectedTopic ? (
						<p>Vui lòng chọn thông tin (cách 1)</p>
					) : (
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].desc}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)}

					{/* Cách 2: dùng toán tử AND && */}
					{/* chưa được click thì nhận truthy && truthy (UI mặc định) */}
					{!selectedTopic && <p>Vui lòng chọn thông tin (cách 2)</p>}
					{/* nếu được click thì nhận truthy && truthy (render) */}
					{selectedTopic && (
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].desc}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)}

					{/* Cách 3: Khai báo biến riêng biệt giúp mã jsx clean hơn */}
					{tabContent}
				</section>
			</main>
		</>
	);
}

export default App;
