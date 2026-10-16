// This file contains a mock database of blog posts for demonstration purposes. Each post has an id, title, excerpt, content, author, and createdAt date. The data can be used to display a list of posts or detailed post views in the application.
export interface Post {
	id: string;
	title: string;
	excerpt: string;
	content: string;
	author: string;
	createdAt: string;
}

// const postsDatabase: Post[] = [ là một mảng chứa các đối tượng Post, mỗi đối tượng đại diện cho một bài viết với các thuộc tính như id, title, excerpt, content, author và createdAt. Dữ liệu này có thể được sử dụng để hiển thị danh sách bài viết hoặc chi tiết bài viết trong ứng dụng.
export const postsDatabase: Post[] = [
	{
		id: "react-router-v7",
		title: "Khám phá React Router v7 Fullstack Framework",
		excerpt:
			"React Router v7 đã chính thức hợp nhất cùng Remix để trở thành một Fullstack Framework mạnh mẽ...",
		content:
			"React Router v7 mang lại sự kết hợp hoàn hảo giữa Client-side Routing và Server-side Data Loading. Bạn có thể định nghĩa loader để lấy dữ liệu trực tiếp ở Server trước khi UI được render...",
		author: "Nguyễn Văn A",
		createdAt: "2026-10-01",
	},
	{
		id: "fullstack-web-dev",
		title: "Lộ trình học Fullstack Web Developer năm 2026",
		excerpt:
			"Để trở thành Fullstack Developer hiệu quả, bạn nên tập trung vào chuẩn REST, SSR và các framework hiện đại...",
		content:
			"Việc học Fullstack không chỉ là biết cả Frontend lẫn Backend, mà là hiểu cách Data Flow di chuyển giữa 2 môi trường này. Sử dụng các kỹ thuật như Loader/Action giúp giảm bớt lượng code boilerplate...",
		author: "Trần Thị B",
		createdAt: "2026-10-03",
	},
];
