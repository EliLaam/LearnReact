import {
	type RouteConfig,
	index,
	route,
	layout,
	prefix,
} from "@react-router/dev/routes"; // import routeConfig, index,.. route từ @react-router/dev/routes để định nghĩa các route trong ứng dụng

// nơi này dùng để chứa các đường dẫn của các route, và các route con của nó.
export default [
	index("routes/home.tsx"), // trang chủ

	//  [Handle Route Parameter]
	route("about", "routes/about.tsx"), // route con của route home, có thể truy cập bằng đường dẫn /about

	// [Dynamic Route Parameter (Route động)]
	route("post/:postId", "routes/post.tsx"), // route con của route home, có thể truy cập bằng đường dẫn /post/:postId, trong đó :postId là một tham số động

	// [Nested Routes (Route lồng nhau), Layout]
	layout("routes/dashboard.tsx", [
		// route con của home, cha của finances và personal-info, có thể sử dụng layout để bỏ dashboard ra khỏi đường dẫn [layout ("routes/some.tsx", [route...])]

		...prefix("eli", [
			// prefix sẽ thêm tiền tố "eli" vào đường dẫn của các route con, có thể truy cập bằng đường dẫn ../eli/finances và ../eli/personal-info (tùy chọn)
			route("finances", "routes/finances.tsx"),
			route("personal-info", "routes/personal-info.tsx"),
		]),
	]), // route con của route dashboard, có thể truy cập bằng đường dẫn /dashboard/finances và /dashboard/personal-info
] satisfies RouteConfig;
