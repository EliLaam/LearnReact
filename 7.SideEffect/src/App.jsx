import UserProfileClass from "./UserProfileClass";
import UserProfileHook from "./UserProfileHook";

function App() {
	return (
		<>
			<h3>Component Life Cycle là gì?</h3>{" "}
			<p>
				Hãy tưởng tượng component như một con người. Nó được sinh ra (mounted),
				sống và thay đổi theo thời gian (updated), rồi chết đi (unmounted). Life
				Cycle chính là tập hợp các "khoảnh khắc" quan trọng trong vòng đời đó —
				và React cho phép bạn "móc vào" từng khoảnh khắc để thực thi code.
			</p>
			<ul>
				Có 3 giai đoạn chính:
				<li>Mounting — Component được tạo ra và gắn vào DOM lần đầu</li>
				<li>
					Updating — Component re-render do <code>state</code> hoặc{" "}
					<code>props</code> thay đổi
				</li>
				<li>Unmounting — Component bị gỡ khỏi DOM</li>
			</ul>
			{/* ✅ Truyền userId, không phải user */}
			<h3>Component Life Cycle (Class)</h3>
			<UserProfileClass userId={1} /> {/* Sử dụng như thẻ HTML */}
			<h3>Component Life Cycle (Hooks)</h3>
			<UserProfileHook userId={1} />
		</>
	);
}

export default App;
