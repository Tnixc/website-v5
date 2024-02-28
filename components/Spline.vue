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
  <section class="flex items-center justify-center flex-grow max-w-screen overflow-clip">
    <div class="block max-w-screen slide-up duration-1000 w-[500px] h-[600px]">
      <canvas ref="canvas" style="width: 100%; height: 100%;" /> 
    </div>
  </section>
</template>
<style scoped>

@media only screen and (max-width: 300px){
  canvas{
    transform: scale(0.5);
    transform-origin: center;
  }
}

@media only screen and (max-width: 400px){
  canvas{
    transform: scale(0.7);
    transform-origin: center;
  }
}

@media only screen and (max-width: 500px){
  canvas{
    transform: scale(0.8);
    transform-origin: center;
  }
}
</style>
