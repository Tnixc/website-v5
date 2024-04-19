import { fetchMarkdownPosts } from "../../utils";
import fs from "fs";

const siteURL = "https://tnixc.space";
const siteTitle = "Tnixc's website";
const siteDescription = "my very own website";

export const prerender = true;

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();
	const sortedPosts = allPosts.sort(
		(a, b) => new Date(b.date) - new Date(a.date),
	);
	const body = render(sortedPosts);

	const options = {
		headers: {
			"Cache-Control": "max-age=0, s-maxage=3600",
			"Content-Type": "application/xml",
		},
	};

	return new Response(await body, options);
};
const render = async (posts) => {
	let entries = [];
	for (const post of posts) {
		const content = await fetchContent(post); // Assuming fetchContent is a function to retrieve the content asynchronously
		console.log(content);
		entries.push(`<entry>
      <guid isPermaLink="true">${siteURL}${post.path}</guid>
      <title>${post.meta.title}</title>
      <link>${siteURL}${post.path}</link>
      <description>${post.meta.title}</description>
      <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
      <content type="html">${content}</content>
    </entry>`);
	}
	return `<feed xmlns="http://www.w3.org/2005/Atom" xml:base="${siteURL}">
    <title>${siteTitle}</title>
    <subtitle>${siteDescription}</subtitle>
    <link href="${siteURL}/feed.xml" rel="self"/>
    <link href="${siteURL}"/>
    <updated>${new Date().toISOString()}</updated>
    <id>${siteURL}</id>
    <author>
      <name>Tnixc</name>
    </author>
    ${entries.join("")}
  </feed>`;
};

// Example fetchContent function
const fetchContent = async (post) => {
	const response = await fetch(`https://tnixc.space${post.path}`); // Assuming contentURL is the URL to fetch the content
	let content = await response.text();
	content = content
		.split("<article")[1]
		.split("</article>")[0]
		.replace(/^[^>]*>/, "");
	console.log(content);
	return content;
};
