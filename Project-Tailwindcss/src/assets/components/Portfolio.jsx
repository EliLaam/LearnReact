export default function Portfolio() {
	return (
		<>
			<section className=" h-full p-10 flex justify-center items-center border-b-1 ">
				<div className="container mx-auto ">
					<h2 className="text-3xl font-bold mb-8">// Portfolio</h2>
					<div className="flex flex-col gap-10 items-center ">
						<div className="card ">
							<img
								className="pic-card"
								src="https://th.bing.com/th/id/R.cf8563f99d35bbb586d128fcd9e5df22?rik=SpnxUE2pNUyoqQ&riu=http%3a%2f%2fmedia2.popsugar-assets.com%2ffiles%2fthumbor%2fOS81vOwzdZ9NZBYiS8ZPrs4jz5Q%3d%2ffit-in%2f1024x1024%2f2014%2f02%2f17%2f843%2fn%2f1922441%2f188193e9a2917c8e_thumb_temp_image215902961329390326.jpg&ehk=O5vpmF1IL5b3eczcZyeiQ8aeByLNaYOmGx9VN4wJwEQ%3d&risl=&pid=ImgRaw&r=0"
								alt=""
							/>

							<h2 className="card-title">Travel Website</h2>
							<p className="card-text">
								A responsive travel website built with React and Tailwind CSS.
							</p>
						</div>
						<div className="card">
							<img
								className="pic-card"
								src="https://media.istockphoto.com/id/853920274/photo/business-people-use-technology-ecommerce-internet-global-marketing-purchasing-plan-and-bank.jpg?s=170667a&w=0&k=20&c=I-dDXG5mWzKpZetGH9geDEZNAtqtKsPbOCUOWVZcfNw="
								alt=""
							/>

							<h2 className="card-title">E-Commerce Site</h2>
							<p className="card-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
								voluptatem repudiandae ratione pariatur{" "}
							</p>
						</div>
						<div className="card">
							<img
								className="pic-card"
								src="https://tse1.mm.bing.net/th/id/OIP._GwSSqfaC3p61kHsXyKHmQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
								alt=""
							/>

							<h2 className="card-title">Task Management App</h2>
							<p className="card-text">
								A simple task management application built with React and
								Tailwind CSS.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
