export interface Post {
	id: string;
	title: string;
	excerpt: string;
	content: string;
	author: string;
	createdAt: string;
}

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
