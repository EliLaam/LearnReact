import { Link } from "react-router";
import type { Route } from "./+types/home";

export async function clientLoader() {
	const res = await fetch("https://fooapi.com/api/songs");
	const data = await res.json();
	return data;
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<div>
				<Link to="/">Home</Link>
				<h2>List Music On Top:</h2>
				<ul>
					{loaderData.map((song: any, id: any) => (
						<li key={id} style={styles.song} className="song">
							<Link to={`/song/${song.id}`} style={styles.name}>
								{song.name}
							</Link>
							<p>artist: {song.artists}</p>
							<p>
								<em>duration: {song.durationMs}</em>
							</p>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

const styles = {
	song: {
		padding: "2rem",
		margin: "1rem",
		border: "1px solid white",
		borderRadius: "1rem",
		color: "black",
	},
	name: {
		fontSize: "1.2rem",
		fontWeight: "bold",
	},
};
