import { Link, useLoaderData } from "react-router";
import { postsDatabase } from "../data/posts";

// LOADER: Chạy trên Server để lấy toàn bộ danh sách bài viết
export async function loader() {
	// Lấy dữ liệu ngắn gọn cho danh sách trang chủ
	const posts = postsDatabase.map(
		({ id, title, excerpt, createdAt, author }) => ({
			id,
			title,
			excerpt,
			createdAt,
			author,
		}),
	);

	return { posts };
}

// UI COMPONENT
export default function Home() {
	// Lấy dữ liệu từ loader (Destructuring)
	// Tạo một biến tên là 'posts' và lấy giá trị của key 'posts' gán vào.
	const { posts } = useLoaderData<typeof loader>();

	return (
		<div style={styles.container}>
			<header style={styles.header}>
				<h1>🚀 React Router v7 Mini Blog</h1>
				<p>Danh sách bài viết mới nhất</p>
			</header>

			<main style={styles.grid}>
				{posts.map((post) => (
					<article key={post.id} style={styles.card}>
						<h2 style={{ color: "black" }}>{post.title}</h2>
						<p style={styles.meta}>
							Tác giả: {post.author} | Ngày: {post.createdAt}
						</p>
						<p style={styles.excerpt}>{post.excerpt}</p>

						{/* Chuyển sang đường dẫn /posts/:postId */}
						<Link to={`/posts/${post.id}`} style={styles.button}>
							Đọc tiếp &rarr;
						</Link>
					</article>
				))}
			</main>
		</div>
	);
}

// Có thể dùng loaderData để lấy dữ liệu từ loader, nhưng ở đây mình dùng useLoaderData trực tiếp cũng được (ở trên).
// export async function loader() {
// 	const data = postsDatabase.map(
// 		({ id, title, excerpt, createdAt, author }) => ({
// 			id,
// 			title,
// 			excerpt,
// 			createdAt,
// 			author,
// 		}),
// 	);
// 	return data;
// }

// export default function Home({ loaderData }: Route.ComponentProps) {
// 	return (
// 		<>
// 			<div style={styles.container}>
// 				<header style={styles.header}>
// 					<h1>🚀 React Router v7 Mini Blog</h1>
// 					<p>Welcome to my mini blog!</p>
// 				</header>
// 				<main style={styles.grid}>
// 					{loaderData.map((post) => (
// 						<article key={post.id} style={styles.card}></article>.....

// Styling đơn giản dạng Inline
const styles = {
	container: {
		maxWidth: "800px",
		margin: "0 auto",
		padding: "20px",
		fontFamily: "sans-serif",
	},
	header: {
		borderBottom: "2px solid #eee",
		paddingBottom: "10px",
		marginBottom: "30px",
	},
	grid: { display: "flex", flexDirection: "column" as const, gap: "20px" },
	card: {
		padding: "20px",
		border: "1px solid #e1e1e1",
		borderRadius: "8px",
		background: "#f9f9f9",
	},
	meta: { fontSize: "0.85rem", color: "#666", marginBottom: "10px" },
	excerpt: { color: "#333", lineHeight: "1.5" },
	button: {
		display: "inline-block",
		marginTop: "10px",
		color: "#0066cc",
		fontWeight: "bold",
		textDecoration: "none",
	},
};
