<script>
import "../../../code.css";
export let data;
</script>

<div class="flex justify-center p-2">
  <div>
    <div class="py-40">
      <h1 class="font-zed text-4xl">{data.title}</h1>
      <p class="opacity-50">{data.date}</p>
    </div>
    <article class="prose lg:prose-xl">
      <svelte:component this={data.content} />
    </article>
  </div>
</div>

<style>
  article {
    @apply font-general;
    & em {
      @apply font-general-italic;
    }
    & strong {
      @apply font-general-bold;
    }
    & strong em,
    & em strong {
      @apply font-general-bold-italic;
    }
  }
</style>
