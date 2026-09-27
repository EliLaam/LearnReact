import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

// đây là nơi định nghĩa các meta cho route home, truyền thẳng đến component app trong root.tsx
export default function Home() {
	return <>Hello</>;
}
