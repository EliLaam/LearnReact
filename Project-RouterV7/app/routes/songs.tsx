import { useState } from "react";
import type { Route } from "./+types/songs";
import { Link } from "react-router";

export async function clientLoader() {
	const res = await fetch("https://fooapi.com/api/songs");
	const data = await res.json();
	return data;
}

export default function Songs({ loaderData }: Route.ComponentProps) {
	const listSongs = loaderData.data;
	const [search, setSearch] = useState<string>("");
	const [explicitFilter, setExplicitFilter] = useState<
		"all" | "explicit" | "clean"
	>("all");

	const filteredSongs = listSongs.filter((songs: any) => {
		const matchesSearch = !search || songs.name.toLowerCase().includes(search);

		const matchesExplicit =
			explicitFilter === "all" ||
			(explicitFilter === "explicit" && songs.isExplicit === true) ||
			(explicitFilter === "clean" && songs.isExplicit === false);

		return matchesSearch && matchesExplicit;
	});

	return (
		<>
			<div className="p-10 ">
				<div className=" flex items-center justify-center mb-5 rounded-lg bg-gray-200 p-8 ">
					<input
						type="text"
						placeholder="Search name song... "
						className="bg-white rounded-md p-1 focus:outline-none"
						onChange={(e) => setSearch(e.target.value)}
					/>
					<select
						className="focus:outline-none cursor-pointer"
						value={explicitFilter}
						onChange={(e) =>
							setExplicitFilter(e.target.value as typeof explicitFilter)
						}
					>
						<option value="all">All</option>
						<option value="explicit">Explicit</option>
						<option value="clean">Non-explicit</option>
					</select>
				</div>
				<ul className=" p-5 flex flex-wrap gap-3 ">
					{filteredSongs.map((song: any, id: any) => (
						<li
							key={id}
							className=" h-25 p-3 border-t-1 border-stone-300 rounded-lg bg-linear-to-b from-white to-zinc-200 to-75% grow cursor-pointer hover:scale-110 hover:drop-shadow-md transition-all"
						>
							<Link to={`/songs/${song.id}`}>
								<h2 className="text-xl font-bold text-neutral-600">
									{" "}
									{song.name}
								</h2>
							</Link>
							<p>Artist: {song.artists} </p>
							{song.isExplicit ? (
								<p className="text-xs bg-green-500  w-max px-1 rounded-md mt-1 text-emerald-800">
									isExplicit
								</p>
							) : undefined}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
