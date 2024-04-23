export async function load({ params }) {
	const post = await import(`../../../data/blog/${params.slug}.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
	};
}
