export default function List({ link, title }) {
	return (
		<>
			<li>
				<a
					href={link}
					referrerPolicy="no-referrer"
					target="_blank"
					className="text-red-500 underline"
				>
					{title}
				</a>
			</li>
		</>
	);
}
