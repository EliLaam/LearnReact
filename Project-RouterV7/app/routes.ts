import {
	type RouteConfig,
	index,
	prefix,
	route,
} from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),

	...prefix("songs", [
		index("routes/songs.tsx"),
		route(":id", "routes/song.tsx"),
	]),
] satisfies RouteConfig;
