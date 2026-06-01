export default function Tabbutton({ children, onSelect, isSelected }) {
	return (
		<>
			<li>
				<button
					// nếu isSelected true thì thêm class active, style cho button
					className={isSelected ? "active" : undefined}
					onClick={onSelect}
				>
					{children}
				</button>
			</li>
		</>
	);
}
