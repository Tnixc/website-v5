<script>
import Header from "../../components/Header.svelte";

export let data;
</script>


<Header />
<h1>Blog</h1>
<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>
