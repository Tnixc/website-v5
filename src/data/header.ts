type HeaderLink = {
	value: string;
	text: string;
	action: "open" | "copy";
	class?: string; // e.g. "text-blue-500"
};
export const headerLinks: HeaderLink[] = [
	{
		value: "https://github.com/Tnixc",
		text: "GitHub: Tnixc",
		action: "open",
	},
	{
		value: "@Tnixc",
		text: "Discord: @Tnixc",
		action: "copy",
	},
	{
		value: "https://twitter.com/_Tnixc",
		text: "Twitter: @_Tnixc",
		action: "open",
	},
	{
		value: "tnixxc@gmail.com",
		text: "Email: tnixxc@gmail.com",
		action: "copy",
	},
	{
		value: "",
		text: "RSS Feed",
		action: "open",
		class: "text-orange-500 underline",
	},
];
