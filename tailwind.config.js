/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontFamily: {
			"zed": ["zed-sans-regular", "ui-sans-serif", "system-ui"],
			"zed-bold": ["zed-sans-bold", "ui-sans-serif", "system-ui"],
			"display": ["Zodiak-LightItalic", "ui-serif", "Georgia"],
      "sans": ["Switzer-Regular", "ui-sans-serif", "system-ui"],
      "sans-bold": ["Switzer-Semibold", "ui-sans-serif", "system-ui"],
      "sans-italic": ["Switzer-Italic", "ui-sans-serif", "system-ui"],
      "sans-bolditalic": ["Switzer-SemiboldItalic", "ui-sans-serif", "system-ui"],
		},
		extend: {},
	},
	plugins: [
		// require("./breakpoints")
		require("@tailwindcss/typography"),
	],
};
