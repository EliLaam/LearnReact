import { useEffect, useState } from "react";

export default function Quote() {
	const [quote, setQuote] = useState(null); // Thêm giá trị khởi tạo null
	const [error, setError] = useState(null);
	const [num, setNumber] = useState(1); //set num mới tạo là 1
	const [loading, setLoading] = useState(false); // Thêm trạng thái loading

	// Fetch API mỗi khi `num` thay đổi
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);
			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/todos/${num}`,
				);

				if (!response.ok) {
					throw new Error(`Lỗi HTTP: ${response.status}`);
				}

				const data = await response.json();
				setQuote(data);
			} catch (err) {
				setError(err.message);
				console.log("Lỗi bắt được:", err.message); // Log chính xác biến err
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [num]); // Thêm num vào dependency array

	function randomNumberInRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const handleClick = () => {
		// Đảm bảo số ngẫu nhiên mới khác số hiện tại
		let newNum = randomNumberInRange(1, 10);
		while (newNum === num) {
			newNum = randomNumberInRange(1, 10);
		}
		setNumber(newNum);
	};

	return (
		<div>
			{/* Xử lý trạng thái loading, error và dữ liệu an toàn */}
			{loading && <p>Đang tải dữ liệu...</p>}
			{error && <p style={{ color: "red" }}>Đã xảy ra lỗi: {error}</p>}
			{!loading && !error && quote && <p>Quote: {quote.title}</p>}

			<button onClick={handleClick} disabled={loading} className="reset-quote">
				Reset
			</button>
		</div>
	);
}
