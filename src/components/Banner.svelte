<script lang="ts">
let numbers = Array.from({ length: 32 }, (_, i) => i + 1);
</script>

<div class="overflow-hidden p-[9px] px-[10px] pb-0 m-0 relative" id="reveal">
  <div id="Banner" class="relative flex h-40 md:h-96">
    {#each numbers as _}
      <div class="pane flex-grow bg-black/[0.01]"></div>
    {/each}
    <div class="absolute top-0 left-0 flex gap-10 items-center md:items-baseline flex-wrap md:justify-start justify-between pointer-events-none">
      <h1 class="font-display text-6xl md:text-9xl text-white mix-blend-exclusion saturate-200 brightness-150">
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

  #reveal::after{
    position: absolute;
    content: '';
    inset: 0;
    animation: heightUp 1s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    background: white;
  }
  @keyframes heightUp{
    from{
      height: 100%;
    }
    to{
      height: 0%;
    }
  }

  #Banner {
    background-image: url('https://utfs.io/f/941ae405-cc46-4de1-85eb-d8b6dc3e6728-1xap1f.webp');
    background-size: cover;
    background-position: center;
  }
  .pane {
    @apply  backdrop-brightness-50 backdrop-saturate-0 blur-sm;
    margin-inline: -0.1%;
    transition: backdrop-filter 3s ease-in;
  }
  .pane:hover {
    @apply  backdrop-brightness-100 backdrop-saturate-150;
    transition: backdrop-filter 0.05s;
  }
</style>
