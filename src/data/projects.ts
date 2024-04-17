type tag = {
  name: string;
  color: "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"
}
type Project = {
  name: string;
  description: string;
  github: string;
  tags?: tag[];
}
const rust: tag = { name: "Rust", color: "red" };
const typescript: tag = { name: "TypeScript", color: "blue" };
const CLI: tag = { name: "CLI", color: "gray" };
const web: tag = { name: "Web", color: "violet" };
const Vue: tag = { name: "Vue", color: "green" };
const Css: tag = { name: "CSS", color: "blue" };
const Nxut: tag = { name: "Nxut", color: "emerald" };
const Astro: tag = { name: "Astro", color: "blue" };
const Svelte: tag = { name: "Svelte", color: "orange" };

export const projects: Project[] = [
  {
    name: "lightscrape-rs",
    description: "A rust CLI to asynchronously download light novel chapters",
    github: "https://github.com/Tnixc/lightscrape-rs",
    tags: [rust, CLI]
  },
  {
    name: "elemental",
    description: "A website written with vue to help me with chemsitry",
    github: "https://github.com/Tnixc/elemental",
    tags: [Vue, typescript, web]
  },
  {
    name: "nu-hist",
    description: "A rust CLI to read from nushell's history.sqlite file and output some data",
    github: "https://github.com/Tnixc/nu-hist",
    tags: [rust, CLI]
  },
  {
    name: "Dotfiles",
    description: "My dotfiles for macOS, always in the works and probably outdated",
    github: "https://github.com/Tnixc/dots",
  },
  {
    name: "Maintainer at Catppuccin",
    description: "A very nice color scheme. I write and maintain ports sometimes",
    github: "https://github.com/catppuccin/catppuccin",
    tags: [Css]
  },
  {
    name: "This website, and previous versions",
    description: "This website is edition 5. I use a somewhat new stack every time, so you can look at the old ones on my github",
    github: "https://github.com/Tnixc",
    tags: [Astro, Svelte, Nxut, typescript, web]
  }
]
