import {
	Form,
	redirect,
	useFetcher,
	useNavigate,
	Link,
	NavLink,
	useNavigation,
} from "react-router";
import type { Route } from "./+types/post";

// Tiếp tục phần data loading và data mutation trong Remix.

// 2. Lấy dữ liệu từ máy khách (Loading Data on the Client-side)
export async function clientLoader({ params }: Route.LoaderArgs) {
	const postId = params.postId;
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`,
	); // Gửi yêu cầu GET tới API để lấy dữ liệu bài viết dựa trên postId
	return await res.json(); // Chuyển đổi phản hồi từ API thành JSON và trả về dữ liệu
}

// 3. Data Mutations (Thao tác làm thay đổi dữ liệu): Khi người dùng thực hiện các hành động như gửi biểu mẫu (form submission) hoặc nhấn nút để thay đổi dữ liệu, Remix sẽ gọi hàm action để xử lý các thao tác này.
export async function clientAction({ params }: Route.ClientActionArgs) {
	try {
		await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
			method: "delete",
		}); // gửi yêu cầu DELETE tới API để xóa bài viết dựa trên postId
		return { isDeleted: true };
	} catch (err) {
		return { isDeleted: false }; // Trả về một đối tượng JSON xác nhận rằng việc xóa bài viết đã thất bại
	}
}

// Thành phần giao diện chính (React Component) hiển thị tới người dùng trên trình duyệt.
export default function Post({ loaderData }: Route.ComponentProps) {
	const fetcher = useFetcher(); // Sử dụng hook useFetcher để quản lý trạng thái của các thao tác dữ liệu (data mutations) mà không cần tải lại trang.

	const isDeleted = fetcher.data?.isDeleted; // Kiểm tra xem dữ liệu trả về từ fetcher có thuộc tính isDeleted hay không, để xác định xem bài viết đã bị xóa hay chưa.
	// tạo trạng thái khi đang xóa
	const isDeleting = fetcher.state != "idle";

	const navigate = useNavigate(); // Chuyển hướng từ component link và NavLink
	const navigation = useNavigation(); // Chuyển hướng cho phép truy cập vào biến và thông tin
	const isNavigating = Boolean(navigation.location); // Lấy dữ liệu boolean chuyển hướng

	// tạo trạng thái khi đang load
	if (isNavigating) {
		return <p>Navigating...</p>;
	}

	return (
		<>
			{!isDeleted && (
				<>
					<p>Post Title: {loaderData.title}</p>
					<p>Post Body: {loaderData.body}</p>
				</>
			)}
			{/* button chuyển hướng đến trang chủ */}
			<button onClick={() => navigate("/")}>Home</button>{" "}
			{/* component link chuyển hướng */}
			<Link to="/about">About</Link>{" "}
			<NavLink to="/eli/finances">Dashboard</NavLink> {/* fetcher */}{" "}
			<fetcher.Form method="delete">
				<button type="submit">Delete Post</button>
			</fetcher.Form>
			{/* hiển thị khi đang xóa bài */}
			{isDeleting && <p>is Deleting...</p>}
		</>
	);
}
// loaderData: Prop đặc biệt chứa toàn bộ dữ liệu do hàm loader trả về ở trên.
// <p>Post Id: {loaderData.postId}</p>: Trích xuất và hiển thị ID bài viết ra màn hình.
