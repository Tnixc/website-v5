export async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchMarkdownPosts() {
	const allPostFiles = import.meta.glob("/src/routes/blog/*.md");
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			// This is because every path starts with /src/routes/ and end with .md
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath,
			};
		}),
	);

	return allPosts;
}
