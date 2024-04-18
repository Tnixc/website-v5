<script lang="ts">
</script>

<div class="relative m-0 overflow-hidden p-[9px] px-[10px] pb-0" id="reveal">
  <div class="w-fit border border-black flex items-center flex-wrap gap-20">
    <h1 class="font-display text-9xl">Tnixc</h1>
    <svg
      width="165"
      height="55"
      class="scale-125 translate-x-10"
      viewBox="0 0 165 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 27.5822L165 27.5821M137.164 0.417969C137.164 0.417969 136.664 8.24634 146.25 17.8322C155.836 27.418 164 27.418 164 27.418C164 27.418 156.336 27.0822 146.75 36.668C137.164 46.2538 137.164 54.5822 137.164 54.5822"
        stroke="black"
        style="stroke:black;stroke-opacity:1;"
        stroke-width="4"
      />
    </svg>
  </div>
</div>

<style>
  #reveal::after {
    position: absolute;
    content: "";
    inset: 0;
    animation: heightUp 1s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    background: white;
  }
  @keyframes heightUp {
    from {
      height: 100%;
    }
    to {
      height: 0%;
    }
  }
</style>
