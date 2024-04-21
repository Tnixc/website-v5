<script>
import "../../../prose.css";
export let data;
</script>

<a href="/blog" class="block p-4"> &lt;- Back</a>
<div class="flex max-w-[100vw] justify-center p-2">
  <div>
    <div class="min-w-[min(100vw,70ch)] px-4 py-8">
      <h1 class="font-zed text-4xl" style={`view-transition-name: ${data.title.replace(/[\W_]+/g,"-")}`}>
        {data.title}
      </h1>
      <p class="opacity-50">{data.date}</p>
      <div class="my-8 h-0.5 bg-zinc-200" />
    </div>
    <article class="prose max-w-[min(100vw,70ch)] p-2 md:prose-lg lg:prose-xl">
      <svelte:component this={data.content} />
    </article>
  </div>
</div>

<style>
  article {
    @apply font-sans;
    & em {
      @apply font-sans-italic;
    }
    & strong {
      @apply font-sans-bold;
    }
    & strong em,
    & em strong {
      @apply font-sans-bolditalic;
    }
  }
</style>
