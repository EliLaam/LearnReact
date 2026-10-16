import type { Route } from "./+types/post-detail";
import { Link, useLoaderData } from "react-router";
import { postsDatabase } from "../data/posts";

// LOADER: Đọc params.postId từ URL để tìm bài viết
export async function loader({ params }: Route.LoaderArgs) {
	const post = postsDatabase.find((p) => p.id === params.postId);

	// Nếu bài viết không tồn tại, chủ động ném 404 Response
	if (!post) {
		throw new Response("Không tìm thấy bài viết này!", { status: 404 });
	}

	// Nếu bài viết tồn tại, trả về dữ liệu bài viết (object)
	return { post };
}

// UI COMPONENT
export default function PostDetail() {
	// Sử dụng useLoaderData để lấy dữ liệu bài viết từ loader
	// Tao một biến tên là 'post' và lấy giá trị của key 'post' gán vào. (destructuring)
	const { post } = useLoaderData<typeof loader>();

	return (
		<div style={styles.container}>
			<Link to="/" style={styles.backLink}>
				&larr; Quay lại trang chủ
			</Link>

			<article style={styles.article}>
				<h1 style={styles.title}>{post.title}</h1>
				<p style={styles.meta}>
					Tác giả: <strong>{post.author}</strong> | Ngày đăng: {post.createdAt}
				</p>

				<div style={styles.content}>
					<p>{post.content}</p>
				</div>
			</article>
		</div>
	);
}

// UI Xử lý lỗi riêng cho trang này (404 hoặc Lỗi Server)
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	return (
		<div style={{ ...styles.container, textAlign: "center", color: "#d9534f" }}>
			<h2>⚠️ Đã xảy ra lỗi!</h2>
			<p>Bài viết bạn đang tìm không tồn tại hoặc đã bị xóa.</p>
			<Link to="/" style={styles.backLink}>
				Quay lại trang chủ
			</Link>
		</div>
	);
}

const styles = {
	container: {
		maxWidth: "700px",
		margin: "0 auto",
		padding: "20px",
		fontFamily: "sans-serif",
	},
	backLink: {
		display: "inline-block",
		marginBottom: "20px",
		color: "#0066cc",
		textDecoration: "none",
	},
	article: {
		background: "#fff",
		padding: "25px",
		border: "1px solid #eee",
		borderRadius: "8px",
	},
	title: { marginTop: 0, fontSize: "2rem", color: "#111" },
	meta: {
		color: "#666",
		borderBottom: "1px solid #eee",
		paddingBottom: "10px",
	},
	content: {
		marginTop: "20px",
		lineHeight: "1.8",
		fontSize: "1.1rem",
		color: "#222",
	},
};
