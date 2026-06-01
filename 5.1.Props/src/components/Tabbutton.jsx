// React tự động hiểu nội dung giữa thẻ mở và đóng là props children
// đây là cấu trúc có sẵn jsx (keyword: children)
// children props: tự động chứa mọi thứ bên trong cặp thẻ mở và đóng của component
// props.children sẽ hiển thị nội dung được đặt giữa cặp thẻ khi sử dụng (như thẻ button html bth)

// export default function Tabbutton(props) {
// 	return (
// 		<>
// 			<li>
// 				<button>{props.children}</button>
// 			</li>
// 		</>
// 	);
// }

// Có thể dùng Destructing - Children Prop
export function Tabbutton({ children }) {
	return (
		<>
			<li>
				<button>{children}</button>
			</li>
		</>
	);
}

// *ĐỐI VỚI PROPS TÙY CHỈNH - Specialized Composition with Props
// ta cần truyền vào tham số như các component khác
export function Tabbutton2({ propsbatky }) {
	return (
		<>
			<li>
				<button>{propsbatky}</button>
			</li>
		</>
	);
}
