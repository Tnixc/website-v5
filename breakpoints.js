export default function ({ addBase, theme }) {
	if (process.env.NODE_ENV === "production") return;
	const screens = theme("screens", {});
	const breakpoints = Object.keys(screens);
	addBase({
		"body::after": {
			position: "fixed",
			bottom: "1rem",
			left: "1rem",
			backgroundColor: "#202020",
			color: "#ffffff",
			padding: "0.5rem",
			zIndex: "99999",
		},
		...breakpoints.reduce((acc, current) => {
			acc[`@media (min-width: ${screens[current]})`] = {
				"body::after": {
					content: `" breakpoint ${current}"`,
				},
			};
			return acc;
		}, {}),
	});
}
