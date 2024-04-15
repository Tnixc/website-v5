<script lang="ts">
let numbers = Array.from({ length: 32 }, (_, i) => i + 1);
</script>

<div class="p-2">
  <div id="Banner" class="relative flex h-96">
    {#each numbers as num}
      <div class="slot flex-grow bg-black/[0.01]"></div>
    {/each}
    <div class="absolute top-0 left-0 flex gap-10 items-baseline flex-wrap">
      <h1 class="font-display text-9xl text-white mix-blend-exclusion">
        Tnixc
      </h1>
      <svg
        class="mix-blend-exclusion"
        width="165"
        height="55"
        viewBox="0 0 165 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 27.5821L165 27.5821M137.164 0.417908C137.164 0.417908 136.664 8.24628 146.25 17.8321C155.836 27.4179 164 27.4179 164 27.4179C164 27.4179 156.336 27.0821 146.75 36.6679C137.164 46.2537 137.164 54.5821 137.164 54.5821"
          stroke="white"
          stroke-width="4"></path>
      </svg>
    </div>
  </div>
</div>

<style>
  #Banner {
    background-image: url('https://utfs.io/f/30454562-3742-4822-8756-81dbb52f34ee-1xap1f.JPG');
    background-size: cover;
    background-position: center;
  }
  .slot {
    @apply backdrop-blur-lg backdrop-brightness-50 backdrop-saturate-0;
    margin-inline: -0.1%;
    transition: backdrop-filter 1s;
  }
  .slot:hover {
    @apply backdrop-blur-sm backdrop-brightness-100 backdrop-saturate-150;
    transition: backdrop-filter 0.1s;
  }
</style>
