import { fetchMarkdownPosts } from "../../utils";
const siteURL = "https://tnixc.space";
const siteTitle = "Tnixc's website";
const siteDescription = "my very own website";

export const prerender = true;

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();
	const sortedPosts = allPosts.sort(
		(a, b) => new Date(b.date) - new Date(a.date),
	);

	const body = await render(sortedPosts);
	const options = {
		headers: {
			"Cache-Control": "max-age=0, s-maxage=3600",
			"Content-Type": "application/xml",
		},
	};

	return new Response(body, options);
};
async function getContent(path) {
	const response = await fetch(siteURL + path);
	return await response.text();
}

const render = async (posts) => {
	const contentPromises = posts.map(async (post) => {
		const content = await getContent(post.path);
		return `<entry>
      <guid isPermaLink="true">${siteURL}${post.path}</guid>
      <title>${post.meta.title}</title>
      <link>${siteURL}${post.path}</link>
      <description>${post.meta.title}</description>
      <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
      <content type="html">${content}</content>
    </entry>`;
	});
	const entries = await Promise.all(contentPromises);
	return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteTitle}</title>
    <description>${siteDescription}</description>
    <link>${siteURL}</link>
    <author>Tnixc</author>
    <atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${entries.join("")}
  </channel>
</rss>`;
};
