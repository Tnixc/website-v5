type Info = {
	key: string;
	value: string;
};
type InfoCardProps = {
	Title: string;
	Info: Info[];
};
export const aboutInfo: InfoCardProps = {
	Title: "About",
	Info: [
		{ key: "Age", value: "15" },
		{ key: "Pronouns", value: "He/Him" },
		{ key: "Location", value: "Canada/Hong Kong" },
		{ key: "Time Zone", value: "EST(UTC-4)" },
		{ key: "Occupation", value: "High school student" },
	],
};
export const skillsInfo: InfoCardProps = {
	Title: "Skills",
	Info: [
		{ key: "Languages", value: "Typescript/Javascript, Python, HTML/CSS" },
		{ key: "Frameworks", value: "Vue/Nuxt, Tailwind, Astro" },
		{ key: "Tools", value: "Git, Figma" },
		{ key: "Learning", value: "Rust, Svelte, Go, SQL" },
	],
};
export const stuffInfo: InfoCardProps = {
	Title: "Cool stuff I use",
	Info: [
		{ key: "Editors", value: "Neovim, Zed" },
		{ key: "Platforms", value: "macOS, Windows, NixOS" },
		{
			key: "Software",
			value: "Arc, raycast, the Affinity Suite, blender, procreate",
		},
		{ key: "Color scheme", value: "Tokyo Night, Catppuccin" },
	],
};
export const personInfo: InfoCardProps = {
	Title: "As a person",
	Info: [
		{
			key: "Likes(in no specific order)",
			value:
				"Hiking, traveling, reading books, programming, configuring, listening to music(jpop), graphic and ui design, urban design and transit, typography, open source, art, IKEA, mechanical keyboards, Robots(FRC), video games, webdev",
		},
	],
};
