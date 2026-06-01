// tạo component với THAM SỐ =========================================
// Nhập props React - nơi bạn có thể truyền dữ liệu từ component này sang component khác trong React - bằng cách xác định các thuộc tính HTML tùy chỉnh mà bạn gán dữ liệu của mình với cú pháp của JSX:
// export default function MainContent(props) {
// 	return (
// 		<li>
// 			<img src={props.image} alt={props.title} />
// 			<h2>{props.title}</h2>
// 			<p>{props.desc}</p>
// 		</li>
// 	);
// }

// có thể sử dụng Destructing(ES6) cho ngắn gọn hơn  ( lưu ý dấu {} )
// dòng function MainContent({ image, title, desc }) viết tắt cho 2 dòng code này:
// function MainContent(props) {
//     const { image, title, desc } = props;    Dòng này thực hiện "phá vỡ cấu trúc"

export default function MainContent({ image, title, desc }) {
	return (
		<li>
			<img src={image} alt={title} />
			<h2>{title}</h2>
			<p>{desc}</p>
		</li>
	);
}
