<script>
import "../../../prose.css";
import dateicon from "pixelarticons/svg/calendar.svg";
export let data;
</script>

<svelte:head>
  <title>tnixc.space - {data.title}</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
    integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
    crossorigin="anonymous"
  />
</svelte:head>
<main class="bg-[#F4F4F0]">
  <a href="/blog" class="top-0 block w-fit p-4 hover:underline md:sticky">
    &lt;- Back</a
  >
  <div class="flex max-w-[100vw] justify-center p-2">
    <div>
      <div class="min-w-[min(100vw,70ch)] px-2 py-8">
        <h1
          class="w-fit max-w-[700px] whitespace-break-spaces text-balance py-2 font-sans-bold text-4xl"
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
      <article class="prose mx-auto max-w-[min(100vw,78ch)] p-2 pb-40">
        <svelte:component this={data.content} />
      </article>
    </div>
  </div>
</main>

<style>
</style>
