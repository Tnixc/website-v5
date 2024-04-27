/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontFamily: {
			zed: ["zed-sans-regular", "ui-sans-serif", "system-ui"],
			"zed-bold": ["zed-sans-bold", "ui-sans-serif", "system-ui"],
			display: ["Zodiak-LightItalic", "ui-serif", "Georgia"],
			sans: ["IBMPlexSans-Regular", "ui-sans-serif", "system-ui"],
			"sans-bold": ["IBMPlexSans-Semibold", "ui-sans-serif", "system-ui"],
			"sans-italic": ["IBMPlexSans-Italic", "ui-sans-serif", "system-ui"],
			"sans-bolditalic": [
				"IBMPlexSans-SemiboldItalic",
				"ui-sans-serif",
				"system-ui",
			],
			mono: ["IBMPlexMono-Regular", "ui-monospace", "monospace"],
			"mono-italic": ["IBMPlexMono-Italic", "ui-monospace", "monospace"],
		},
		extend: {},
	},
	plugins: [
		// require("./breakpoints")
		require("@tailwindcss/typography"),
	],
};
