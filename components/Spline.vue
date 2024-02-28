<script setup>
import { Application } from "@splinetool/runtime";

// template ref
const canvas = ref(null);

// spline state
const state = reactive({
  spline: {
    scene: "https://prod.spline.design/6ATtE-ZAEoYM16Am/scene.splinecode",
    app: null,
    isLoaded: false,
  },
});

onMounted(async () => {
  const app = new Application(canvas.value);
  await app.load(state.spline.scene);
  state.spline.app = app;
  state.spline.isLoaded = true;
});
</script>

<template>
  <section class="flex items-center justify-center flex-grow">
    <canvas class="max-w-screen-sm" ref="canvas" height="600" width="500" style="max-width: 100vw !important; height: min(calc(100vw * 6/5), 600px)" />
  </section>
</template>
