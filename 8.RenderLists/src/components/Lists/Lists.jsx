import PropTypes from "prop-types";

export default function List({ category }) {
	const fruit = [
		{ id: 1, name: "banana", calories: 65 },
		{ id: 2, name: "apple", calories: 50 },
		{ id: 3, name: "grapes", calories: 90 },
		{ id: 4, name: "coconut", calories: 120 },
		{ id: 5, name: "orange", calories: 30 },
	];

	// sắp xếp danh sách theo thứ tự abc==============
	// (lưu ý: sort sẽ thay đổi mảng gốc, nếu muốn giữ nguyên mảng gốc có thể tạo một bản sao trước khi sort, ví dụ: const sortedFruit = [...fruit].sort((a, b) => a.name.localeCompare(b.name));)
	// sort phải được đặt trước khi render để đảm bảo danh sách được sắp xếp trước khi hiển thị. Nếu sort được đặt sau khi render, danh sách sẽ không được sắp xếp khi hiển thị lần đầu tiên, và chỉ được sắp xếp sau khi có một sự kiện nào đó kích hoạt việc re-render (ví dụ: thay đổi state). Do đó, để đảm bảo rằng danh sách luôn được sắp xếp đúng cách khi hiển thị, nên thực hiện việc sort trước khi render.

	// fruit.sort((a, b) => a.name.localeCompare(b.name));
	// fruit.sort((a, b) => b.name.localeCompare(a.name)); // sắp xếp ngược lại
	// fruit.sort((a, b) => a.calories - b.calories); // sắp xếp theo calo tăng dần
	fruit.sort((a, b) => b.calories - a.calories); // sắp xếp theo calo giảm dần

	// lọc danh sách theo điều kiện============================
	const filteredFruit = fruit.filter((item) => item.calories > 50); // lọc các loại trái cây có calo lớn hơn 50
	// const filteredFruit = fruit.filter((item) => item.name.includes("a")); // lọc các loại trái cây có chữ "a" trong tên
	// có thể kết hợp nhiều điều kiện trong filter, ví dụ: const filteredFruit = fruit.filter((item) => item.calories > 50 && item.name.includes("a"));

	// render danh sách đã sắp xếp (sorted) hoặc đã lọc (filtered)========================
	// có thể render cả hai danh sách để so sánh, ví dụ: render danh sách đã sắp xếp và danh sách đã lọc cùng lúc
	const sortedListItems = fruit.map((item) => (
		<li key={item.id}>
			{item.name} ({item.calories} cal)
		</li>
	));

	const filteredListItems = filteredFruit.map((item) => (
		<li key={item.id}>
			{item.name} ({item.calories} cal)
		</li>
	));

	return (
		<>
			<ol>
				{category}
				Sorted List:
				{sortedListItems}
			</ol>

			<ol>
				{category}
				Filtered List:
				{filteredListItems}
			</ol>
		</>
	);
}

// PropTypes là một thư viện được sử dụng trong React để kiểm tra kiểu dữ liệu của props được truyền vào component. Nó giúp đảm bảo rằng các props được sử dụng đúng cách và có kiểu dữ liệu phù hợp, từ đó giúp phát hiện lỗi sớm trong quá trình phát triển ứng dụng. PropTypes cung cấp nhiều loại kiểm tra khác nhau, bao gồm kiểm tra kiểu dữ liệu cơ bản (string, number, boolean, array, object), kiểm tra kiểu dữ liệu phức tạp (shape, arrayOf), và kiểm tra bắt buộc (isRequired). Khi một prop không đáp ứng yêu cầu của PropTypes, React sẽ hiển thị cảnh báo trong console để giúp nhà phát triển nhận biết và sửa lỗi.
List.propTypes = {
	category: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			calories: PropTypes.number,
		}),
	).isRequired,
};
List.defaultProps = {
	category: "Category",
	items: [],
};
