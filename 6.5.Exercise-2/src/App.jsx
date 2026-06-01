import { useState } from "react";

// Don't change the component name "App"
export default function App() {
	// render alert and update mode successful
	const [isAlertVisible, setIsAlertVisible] = useState(false);
	const [isActivated, setIsActivated] = useState(false);

	// update alert
	function activateHandler() {
		setIsAlertVisible(true);
	}

	// update mode
	function confirmHandler() {
		setIsAlertVisible(false);
		setIsActivated(true);
	}

	// cancel alert
	function cancelHandler() {
		setIsAlertVisible(false);
		setIsActivated(false);
	}

	//  =========CÁCH 1: gán biến cho nội dung cần render (tự làm)========
	// default UI
	// let content = (
	// 	<button onClick={activateHandler} className="action-btn">
	// 		Activate
	// 	</button>
	// );

	// //  export alert
	// if (isAlertVisible) {
	// 	content = (
	// 		<div className="alert-box">
	// 			<h2>Warning!</h2>
	// 			<p>Are you sure you want to activate this mode?</p>
	// 			<button onClick={confirmHandler} className="confirm-btn">
	// 				Confirm
	// 			</button>
	// 			<button onClick={cancelHandler} className="cancel-btn">
	// 				Cancel
	// 			</button>
	// 		</div>
	// 	);
	// }

	// if (isActivated) {
	// 	content = <h3 className="success-message">Mode Activated!</h3>;
	// }

	return (
		<>
			{/* Cách 1 */}
			{/* {content} */}

			{/* ======Cách 2: toán tử AND (bài giải) ====== */}
			{/* true true => button; false true => hide button */}
			{!isActivated && !isAlertVisible && (
				<button onClick={activateHandler} className="action-btn">
					Activate
				</button>
			)}

			{/* false => no alert; true => alert */}
			{isAlertVisible && (
				<div className="alert-box">
					<h2>Warning!</h2>
					<p>Are you sure you want to activate this mode?</p>
					<button onClick={confirmHandler} className="confirm-btn">
						Confirm
					</button>
					<button onClick={cancelHandler} className="cancel-btn">
						Cancel
					</button>
				</div>
			)}

			{/* false => button; true => h3 */}
			{isActivated && <h3 className="success-message">Mode Activated!</h3>}
		</>
	);
}

// --Toán tử AND: biểu_thức1 && biểu_thức2
// Nếu biểu_thức1 là falsy → trả về biểu_thức1 (không cần kiểm tra tiếp).
// Nếu biểu_thức1 là truthy → trả về biểu_thức2.
// --Giá trị truthy và falsy
// Falsy: false, 0, "" (chuỗi rỗng), null, undefined, NaN
// Truthy: tất cả giá trị khác falsy (ví dụ: số khác 0, chuỗi không rỗng, object, array...)
// --Ví dụ
// console.log("Hello" && "World"); // "World" (vì "Hello" truthy)
// console.log(0 && "World");       // 0 (vì 0 falsy)
// console.log(null && "JS");       // null
