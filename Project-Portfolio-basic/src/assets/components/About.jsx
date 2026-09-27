export default function About({ name, age, subtitle }) {
	return (
		<>
			<div className="about">
				<h2>I'm {name}</h2>
				<h3>{age} years old.</h3>
				<p>{subtitle}</p>
			</div>
		</>
	);
}
