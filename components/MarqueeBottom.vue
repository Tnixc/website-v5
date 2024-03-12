<template>
  <div class="h-[200px] mt-10">
    <Vue3Marquee :duration="70" :direction="'reverse'" :delay="0"
      class="slide-down relative overflow-clip py-10 delay-1000 duration-1000">
      <div class="overflow-hidden h-40 max-w-md mx-20 saturate-0 contrast-50 hover:contrast-100 opacity-50 hover:opacity-100 sepia hover:saturate-150 hover:sepia-0 hover:scale-110 transition-all duration-1000 rounded-full border-2   bg-blue-300">
        <img src="/images/1.webp" />
      </div>
      <div class="overflow-hidden h-40 max-w-md mx-20 saturate-0 contrast-50 hover:contrast-100 opacity-50 hover:opacity-100 sepia hover:saturate-150 hover:sepia-0 hover:scale-110 transition-all duration-1000 rounded-full border-2  bg-slate-400">
        <img src="/images/2.webp" />
      </div>
      <div class="overflow-hidden h-40 max-w-md mx-20 saturate-0 contrast-50 hover:contrast-100 opacity-50 hover:opacity-100 sepia hover:saturate-150 hover:sepia-0 hover:scale-110 transition-all duration-1000 rounded-full border-2  bg-amber-800">
        <img src="/images/3.webp" />
      </div>
      <div class="overflow-hidden h-40 max-w-md mx-20 saturate-0 contrast-50 hover:contrast-100 opacity-50 hover:opacity-100 sepia hover:saturate-150 hover:sepia-0 hover:scale-110 transition-all duration-1000 rounded-full border-2  bg-blue-300">
        <img src="/images/4.webp" />
      </div>
      <div class="overflow-hidden h-40 max-w-md mx-20 saturate-0 contrast-50 hover:contrast-100 opacity-50 hover:opacity-100 sepia hover:saturate-150 hover:sepia-0 hover:scale-110 transition-all duration-1000 rounded-full border-2  bg-orange-300">
        <img src="/images/5.webp" />
      </div>
      <div class="overflow-hidden h-40 max-w-md mx-20 saturate-0 contrast-50 hover:contrast-100 opacity-50 hover:opacity-100 sepia hover:saturate-150 hover:sepia-0 hover:scale-110 transition-all duration-1000 rounded-full border-2  bg-violet-300">
        <img src="/images/6.webp" />
      </div>
      <div class="overflow-hidden h-40 max-w-md mx-20 saturate-0 contrast-50 hover:contrast-100 opacity-50 hover:opacity-100 sepia hover:saturate-150 hover:sepia-0 hover:scale-110 transition-all duration-1000 rounded-full border-2  bg-blue-400">
        <img src="/images/7.webp" />
      </div>
      <div class="overflow-hidden h-40 max-w-md mx-20 saturate-0 contrast-50 hover:contrast-100 opacity-50 hover:opacity-100 sepia hover:saturate-150 hover:sepia-0 hover:scale-110 transition-all duration-1000 rounded-full border-2  bg-gray-700">
        <img src="/images/8.webp" />
      </div>

    </Vue3Marquee>
  </div>
</template>
<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
</script>
