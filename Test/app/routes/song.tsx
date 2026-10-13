import { Link } from "react-router";
import type { Route } from "./+types/song";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
	const res = await fetch(`https://fooapi.com/api/songs/${params.songId}`);
	const data = await res.json();
	return data;
}

export default function Song({ loaderData }: Route.ComponentProps) {
	console.log(loaderData);
	const { name, artists, albumName, durationMs, albumReleaseDate } =
		loaderData.data;
	return (
		<>
			<Link to="/">Home</Link>
			<div style={{ padding: "2rem", color: "white" }}>
				<h1>{name}</h1>
				<p>Nghệ sĩ: {artists}</p>
				<p>
					Album: {albumName} ({albumReleaseDate})
				</p>
				<p>Duration: {durationMs}</p>
			</div>
		</>
	);
}
