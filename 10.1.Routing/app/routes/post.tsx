import { Form, redirect } from "react-router";
import type { Route } from "./+types/post"; // Nhập các kiểu dữ liệu (TypeScript types), định dạng kiểu dữ liệu cho các tham số như LoaderArgs hay ComponentProps

// 1. Dynamic Routing (params) trong Remix: Khi bạn muốn tạo các trang có URL động (ví dụ: /posts/:postId), Remix sẽ tự động nhận diện các tham số từ đường dẫn và truyền chúng vào hàm loader thông qua đối tượng params.

// export async function loader({ params }: Route.LoaderArgs) {
// 	const postId = params.postId;
// 	return { postId };
// }

// Hàm chạy ở phía Server (Server-side) trước khi trang được hiển thị, dùng để lấy dữ liệu (Fetch Data).
// params.postId: Lấy tham số động từ đường dẫn URL (ví dụ: truy cập /posts/123 thì params.postId sẽ có giá trị là "123").
// return { postId }: Trả về dữ liệu dạng JSON. Dữ liệu này sẽ tự động được truyền xuống cho React Component phía dưới.

// 2. Lấy dữ liệu từ máy khách (Loading Data on the Client-side)
export async function clientLoader({ params }: Route.LoaderArgs) {
	const postId = params.postId;
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`,
	); // Gửi yêu cầu GET tới API để lấy dữ liệu bài viết dựa trên postId
	return await res.json(); // Chuyển đổi phản hồi từ API thành JSON và trả về dữ liệu
}

// *** Kết hợp cả hai phương pháp: Có thể kết hợp cả hai phương pháp trên để lấy dữ liệu từ máy chủ và từ máy khách, tùy thuộc vào nhu cầu của ứng dụng. Ví dụ, có thể sử dụng loader để lấy dữ liệu ban đầu từ máy chủ và sau đó sử dụng clientLoader để cập nhật dữ liệu khi người dùng tương tác với trang (nối tiếp phần 2). Vd:
// export async function loader({ params }: Route.LoaderArgs) {
// 	const product = await db.getProduct(params.id);
// 	return product;
// }

// 3. Data Mutations (Thao tác làm thay đổi dữ liệu): Khi người dùng thực hiện các hành động như gửi biểu mẫu (form submission) hoặc nhấn nút để thay đổi dữ liệu, Remix sẽ gọi hàm action để xử lý các thao tác này.
// Hàm action xử lý các thao tác làm thay đổi dữ liệu (Data Mutations) ở phía Server, thường được kích hoạt khi người dùng gửi biểu mẫu (<Form> / POST, PUT, DELETE). clientAction: Hàm chạy ở phía Client, không cần tải lại trang.
export async function clientAction({ params }: Route.ClientActionArgs) {
	await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
		method: "delete",
	}); // gửi yêu cầu DELETE tới API để xóa bài viết dựa trên postId
	return redirect("/"); // Sau khi xóa bài viết thành công, chuyển hướng người dùng về trang chủ ("/")
}

// Thành phần giao diện chính (React Component) hiển thị tới người dùng trên trình duyệt.
export default function Post({ loaderData }: Route.ComponentProps) {
	return (
		<>
			{/* 1. Id post */}
			<p>Post Id: {loaderData.postId}</p>
			{/* 2. Loading data */}
			<p>Post Title: {loaderData.title}</p>
			<p>Post Body: {loaderData.body}</p>
			{/* 3. Form for data mutation */}
			<Form method="delete">
				<button type="submit">Delete Post</button>
			</Form>
		</>
	);
}
// loaderData: Prop đặc biệt chứa toàn bộ dữ liệu do hàm loader trả về ở trên.
// <p>Post Id: {loaderData.postId}</p>: Trích xuất và hiển thị ID bài viết ra màn hình.
