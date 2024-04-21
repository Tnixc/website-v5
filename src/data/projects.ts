type tag = {
	name: string;
	color:
		| "slate"
		| "gray"
		| "zinc"
		| "neutral"
		| "stone"
		| "red"
		| "orange"
		| "amber"
		| "yellow"
		| "lime"
		| "green"
		| "emerald"
		| "teal"
		| "cyan"
		| "sky"
		| "blue"
		| "indigo"
		| "violet"
		| "purple"
		| "fuchsia"
		| "pink"
		| "rose";
};
type Project = {
	name: string;
	description: string;
	github: string;
	tags?: tag[];
};
const rust: tag = { name: "Rust", color: "red" };
const typescript: tag = { name: "TypeScript", color: "blue" };
const cli: tag = { name: "CLI", color: "gray" };
const web: tag = { name: "Web", color: "violet" };
const vue: tag = { name: "Vue", color: "green" };
const css: tag = { name: "CSS", color: "blue" };
const nuxt: tag = { name: "nuxt", color: "emerald" };
const astro: tag = { name: "Astro", color: "blue" };
const svelte: tag = { name: "Svelte", color: "orange" };

export const projects: Project[] = [
	{
		name: "lightscrape-rs",
		description: "A rust CLI to asynchronously download light novel chapters",
		github: "https://github.com/Tnixc/lightscrape-rs",
		tags: [rust, cli],
	},
	{
		name: "elemental",
		description: "A website written with vue to help me with chemsitry",
		github: "https://github.com/Tnixc/elemental",
		tags: [vue, typescript, web],
	},
	{
		name: "nu-hist",
		description:
			"A rust CLI to read from nushell's history.sqlite file and output some data",
		github: "https://github.com/Tnixc/nu-hist",
		tags: [rust, cli],
	},
	{
		name: "Dotfiles",
		description:
			"My dotfiles for macOS, maybe nixOS soon tm, always in the works and probably outdated",
		github: "https://github.com/Tnixc/dots",
	},
	{
		name: "Maintainer at Catppuccin",
		description:
			"A very nice color scheme. I write and maintain ports sometimes",
		github: "https://github.com/catppuccin/catppuccin",
		tags: [css],
	},
  {
    name: "Replacer",
    description: "A simple rust CLI to replace text in all files in a directory recursively",
    github: "https://github.com/Tnixc/replacer",
    tags: [rust, cli]
  },
  {
    name: "Tokyo",
    description: "A theme I made based off of tokyo-night, but with the same schema as catppuccin. I use replacer to make ports to it from catppuccin themes",
    github: "https://github.com/tnixc/tokyo",
  },
	{
		name: "This website, and previous versions",
		description:
			"This website is edition 5. I use a somewhat new stack every time, so you can look at the old ones on my github you can visit them on v2, v3, v4.tnixc.space",
		github: "https://github.com/Tnixc",
		tags: [astro, svelte, nuxt, typescript, web],
	},
];
