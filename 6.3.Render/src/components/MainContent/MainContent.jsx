export default function MainContent({ image, title, desc }) {
	return (
		<li>
			<img src={image} alt={title} />
			<h2>{title}</h2>
			<p>{desc}</p>
		</li>
	);
}
