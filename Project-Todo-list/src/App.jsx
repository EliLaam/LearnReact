// import { useState } from "react";
// import TodoBasic from "./assets/components/TodoBasic";
// import TodoHook from "./assets/components/TodoHook";

import TodoFunction from "./assets/components/TodoFunction";

// Để fetch ra khoảng vài post (ví dụ: 5 hoặc 10 post), bạn có thể dùng tính năng Pagination / Query parameters mà JSONPlaceholder API hỗ trợ bằng cách thêm ?_limit=5 vào cuối URL.

function App() {
	return (
		<>
			{/* My First Code: no useEffect */}
			{/* <TodoBasic /> */}

			{/* Try again */}
			{/* <TodoHook /> */}

			{/* another way */}
			<TodoFunction />
		</>
	);
}
export default App;
