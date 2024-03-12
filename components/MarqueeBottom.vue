<template>
  <Vue3Marquee :duration="14" :delay="0" class="slide-up relative overflow-clip py-10 delay-500 duration-1000">
    <div class="overflow-hidden h-40 max-w-md ring">
      <NuxtImg src="/1.webp"  alt="switzerland" />
    </div>
  </Vue3Marquee>
</template>
<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
</script>
