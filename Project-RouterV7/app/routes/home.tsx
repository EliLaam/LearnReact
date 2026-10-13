import { Link, NavLink, Outlet } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center justify-center h-full">
				<img
					src="../../public/favicon.ico"
					alt="react router"
					className="w-24"
				/>
				<div className="items-center text-lg font-medium m-5">
					<h2 className="text-center">
						Welcome to{" "}
						<span className="font-bold text-purple-800">Night Music!</span>
					</h2>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
				</div>
				<div className="flex gap-2">
					<Link to="/songs">
						<button
							className="w-30 h-12 bg-purple-700 text-white rounded-xl cursor-pointer
"
						>
							Explore now!
						</button>
					</Link>
					<Link to="/songs">
						<button
							className="w-30 h-12 bg-purple-200 text-purple-900 rounded-xl cursor-pointer
"
						>
							Log In
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}
