export default function Card({ title, subtitle }) {
	return (
		<>
			<div className="card">
				<h3>{title}</h3>
				<p>{subtitle}</p>
			</div>
		</>
	);
}
