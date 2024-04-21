<script>
import "../../../prose.css";
import dateicon from "pixelarticons/svg/calendar.svg";
export let data;
</script>

<a href="/blog" class="block w-fit p-4 hover:underline md:sticky top-0"> &lt;- Back</a>
<div class="flex max-w-[100vw] justify-center p-2">
  <div>
    <div class="min-w-[min(100vw,70ch)] px-2 py-8">
      <h1
        class="py-2 font-sans-bold text-4xl"
        style={`view-transition-name: ${data.title.replace(/[\W_]+/g, "-")}`}
      >
        {data.title}
      </h1>
      <p class="flex gap-1 py-2 text-sm opacity-50">
        <img src={dateicon} height="20" width="20" alt="date icon" />
        {data.date}
      </p>
      <div class="my-5 h-0.5 bg-black/10" />
    </div>
    <article class="prose max-w-[min(100vw,70ch)] p-2 pb-40">
      <svelte:component this={data.content} />
    </article>
  </div>
</div>

<style>
</style>
