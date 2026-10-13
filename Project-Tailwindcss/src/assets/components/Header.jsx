export default function Header() {
	return (
		<>
			<header className="flex items-center justify-around p-4 bg-gray-900 text-white">
				<div>
					<img src="../react.svg" alt="React Logo" />
				</div>
				<nav className="flex space-x-4 gap-4">
					<li className=" transition-transform transform hover:scale-110">
						<a href="/">Home</a>
					</li>
					<li className=" transition-transform transform hover:scale-110">
						<a href="/about">About</a>
					</li>
					<li className="transition-transform transform hover:scale-110">
						<a href="/contact">Contact</a>
					</li>
				</nav>
			</header>
		</>
	);
}
