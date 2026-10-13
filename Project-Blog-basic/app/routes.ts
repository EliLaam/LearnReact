import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"), // Trang danh sách bài viết
	// route("ten-route", "duong-dan-den-file.tsx")
	route("posts/:postId", "routes/post-detail.tsx"), // Trang chi tiết bài viết
] satisfies RouteConfig;
