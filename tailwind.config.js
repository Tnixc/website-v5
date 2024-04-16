/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontFamily: {
			"zed": ["zed-sans-extended", "ui-sans-serif", "system-ui"],
			"zed-bold": ["zed-sans-extendedbold", "ui-sans-serif", "system-ui"],
			"general": ["GeneralSans-Regular", "ui-sans-serif", "system-ui"],
			"general-italic": ["GeneralSans-Italic", "ui-sans-serif", "system-ui"],
			"general-bold": ["GeneralSans-Bold", "ui-sans-serif", "system-ui"],
			"general-bold-italic": [
				"GeneralSans-BoldItalic",
				"ui-sans-serif",
				"system-ui",
			],
			display: ["Zodiak-LightItalic", "ui-serif", "Georgia"],
		},
		extend: {},
	},
	plugins: [require("./breakpoints")],
};
