import type { Config } from "@react-router/dev/config";

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: true, // tải trang trên server trước khi gửi về client, giúp cải thiện SEO và tốc độ tải trang ban đầu. Nếu muốn SPA (Single Page Application) mode, có thể đặt ssr: false.
} satisfies Config;
