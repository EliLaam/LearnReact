import type { Route } from "./+types/song";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
	const res = await fetch(`https://fooapi.com/api/songs/${params.id}`);
	const data = await res.json();
	const songInfo = data.data;
	console.log(songInfo);
	return songInfo;
}

export default function Song({ loaderData }: Route.ComponentProps) {
	const songDetail = {
		name: loaderData.name || "N/A",
		artists: loaderData.artists || "N/A",
		isExplicit: loaderData.isExplicit || "N/A",
		durationMs: loaderData.durationMs || "N/A",
		albumName: loaderData.albumName || "N/A",
		albumReleaseDate: loaderData.albumReleaseDate || "N/A",
	};
	return (
		<>
			<article className="flex flex-col items-center justify-center p-20 gap-10 capitalize ">
				<h2 className=" text-6xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-olive-300 inline-block">
					{songDetail.name}
				</h2>
				<div className="bg-gradient-to-r from-[#436ff4] to-[#7d33c7] p-15 rounded-xl text-white flex flex-col gap-2">
					<p className="text-2xl">artist: {songDetail.artists}</p>
					<p className="text-2xl">durationMs: {songDetail.durationMs}</p>
					<p className="text-2xl">album : {songDetail.albumName}</p>
					<p className="text-2xl italic">
						album Release Date: {songDetail.albumReleaseDate}
					</p>
				</div>
			</article>
		</>
	);
}
