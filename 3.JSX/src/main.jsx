import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import style
import "./index.css";
// import component, nội dung từ file app
import App from "./App.jsx";

// chọn phần tử ở trang gốc html và render app
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
