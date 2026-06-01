import React from "react";

//   Class component để demo Life Cycle, không dùng cho project mới
export default class UserProfileClass extends React.Component {
	constructor(props) {
		// bắt buộc phải gọi super(props) trước khi dùng this, nếu không sẽ lỗi "Must call super constructor in derived class before accessing 'this' or returning from derived constructor"
		super(props);

		//  Chỉ dùng để: khởi tạo state, bind event handler
		//  Không gọi API, không access DOM, không setState
		this.state = { user: null, loading: true };

		console.log("Constructor: UserProfile component is being created");
	}

	//  Không nên dùng constructor nếu không cần thiết, có thể khởi tạo state như sau:
	//  state = { user: null, loading: true };

	// Tách ra thành method riêng để tái sử dụng
	fetchUser(userId) {
		this.setState({ loading: true });
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((res) => {
				if (!res.ok) throw new Error("Lỗi " + res.status);
				return res.json();
			})
			.then((data) => this.setState({ user: data, loading: false }))
			.catch((err) => {
				console.error("Fetch thất bại:", err);
				this.setState({ loading: false });
			});
	}

	componentDidMount() {
		//  Component đã hiển thị lên DOM → an toàn để:
		// - Gọi API
		// - Setup subscription (WebSocket, EventListener)
		// - Đọc giá trị DOM thật (scrollHeight, offsetWidth)
		this.fetchUser(this.props.userId);

		console.log("ComponentDidMount: UserProfile component has been mounted");
	}

	componentDidUpdate(prevProps) {
		//  LUÔN so sánh trước khi gọi API, tránh vòng lặp vô tận!
		if (prevProps.userId !== this.props.userId) {
			this.fetchUser(this.props.userId);
		}

		console.log("ComponentDidUpdate: UserProfile component has been updated");
	}

	componentWillUnmount() {
		//  Hủy subscription, clear timer, remove event listener
		clearInterval(this.timer);
		window.removeEventListener("resize", this.handleResize);

		console.log(
			"ComponentWillUnmount: UserProfile component is being unmounted",
		);
	}

	render() {
		console.log("Render: UserProfile component is rendering");

		const { user, loading } = this.state;
		if (loading) return <p>Loading...</p>;
		return (
			<div>
				<p>ID: {user.id}</p>
				<p>Tên: {user.name}</p>
				<p>Email: {user.email}</p>
			</div>
		);
	}
}
