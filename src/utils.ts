export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchMarkdownPosts() {
  const allPostFiles = import.meta.glob("/src/data/blog/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      // This is because every path starts with  and end with .md
      // const postPath = path.slice(10, -3);
      const postPath = path.replace("/src/data", "").replace(".md", "");
      return {
        meta: metadata,
        path: postPath,
      };
    })
  );

  return allPosts;
}
