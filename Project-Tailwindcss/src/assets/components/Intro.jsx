export default function Intro() {
	return (
		<>
			<section className="bg-gray-800 h-full p-10 flex justify-center items-center border-b-1 border-gray-600 rounded-b-2xl">
				<div className="container mx-auto text-white">
					<h2 className="text-3xl font-bold mb-8">// About Us </h2>
					<div className="flex flex-col gap-10">
						<div className="text-justify">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Molestias eligendi numquam natus voluptas ullam voluptatum earum
								quas itaque officiis quod?
							</p>
						</div>
						<div className="text-justify">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
								aliquid ad, odio accusamus consectetur necessitatibus suscipit
								adipisci tempora veniam quis.
							</p>
						</div>
					</div>
					<div className="flex gap-4  justify-start mt-10">
						<a
							href=""
							className="transition-transform transform hover:scale-125"
						>
							<i class="fa-brands fa-google"></i>
						</a>
						<a
							href=""
							className="transition-transform transform hover:scale-125"
						>
							<i class="fa-brands fa-github"></i>
						</a>
						<a
							href=""
							className="transition-transform transform hover:scale-125"
						>
							<i class="fa-brands fa-facebook"></i>
						</a>
						<a
							href=""
							className="transition-transform transform hover:scale-125"
						>
							<i class="fa-brands fa-youtube"></i>
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
