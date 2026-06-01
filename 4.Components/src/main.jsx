import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		{/* được gọi nhiều lần function app như component */}
		<App />
		<App />
	</StrictMode>,
);
