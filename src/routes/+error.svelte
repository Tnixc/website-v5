<script>
import { page } from "$app/stores";
</script>

<main class="flex w-full flex-col items-center justify-center bg-black">
  <div
    class="numbers text flex flex-grow items-center justify-center font-display"
  >
    <div >
      {$page.status.toString()[0]}
    </div>
    <div>
      {$page.status.toString()[1]}
    </div>
    <div>
      {$page.status.toString()[2]}
    </div>
  </div>
  <div class="message flex items-center justify-center gap-8 p-20 text-white">
    <a href="/" class="text-white opacity-50 hover:underline"> &lt;- Home</a>
    <p class="text-red-500/80">{$page.error.message}</p>
    <a href="/" class="text-white opacity-50 hover:underline"> Blog -&gt; </a>
  </div>
</main>

<style>
  main {
    height: 100dvh;
  }
  .numbers {
    font-size: calc(20vw);
  }
  @keyframes up1 {
    0% {
      opacity: 0;
      transform: perspective(500px) rotateX(40deg) rotateY(90deg) rotateZ(0deg)
        scale(0.7) translateY(0%);
      filter: blur(50px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
      transform: perspective(1000px) rotateX(0deg) rotateY(30deg) rotateZ(0deg)
        scale(1) translateY(0%);
    }
  }
  .numbers > div:nth-child(1) {
    opacity: 0;
    transform: perspective(500px) rotateX(0deg) rotateY(45deg) rotateZ(0deg)
      scale(0.8) translateY(50%);
    transform-origin: center;
    color: white;
    animation: up1 1500ms ease-out forwards;
  }
  @keyframes up2 {
    0% {
      opacity: 0;
      transform: perspective(500px) rotateX(-10deg) rotateY(-90deg)
        rotateZ(0deg) scale(0.7) translateY(20%);
      filter: blur(50px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
      transform: perspective(1000px) rotateX(0deg) rotateY(30deg) rotateZ(0deg)
        scale(1) translateY(0%);
    }
  }
  .numbers > div:nth-child(2) {
    opacity: 0;
    transform: perspective(500px) rotateX(0deg) rotateY(45deg) rotateZ(0deg)
      scale(0.8) translateY(50%);
    transform-origin: center;
    color: white;
    animation: up2 1500ms ease-out 250ms forwards;
  }
  @keyframes up3 {
    0% {
      opacity: 0;
      transform: perspective(500px) rotateX(40deg) rotateY(90deg) rotateZ(0deg)
        scale(0.7) translateY(-10%);
      filter: blur(50px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
      transform: perspective(1000px) rotateX(0deg) rotateY(30deg) rotateZ(0deg)
        scale(1) translateY(0%);
    }
  }
  .numbers > div:nth-child(3) {
    opacity: 0;
    transform: perspective(500px) rotateX(0deg) rotateY(45deg) rotateZ(0deg)
      scale(0.8) translateY(50%);
    transform-origin: center;
    color: white;
    animation: up3 1500ms ease-out 250ms forwards;
  }
</style>
