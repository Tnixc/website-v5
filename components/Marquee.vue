<template>
  <div
    class="aurora-overlay z-10 absolute top-32 h-[200px] left-0 w-full mix-blend-lighten dark:mix-blend-darken bg-gradient-to-r from-violet-300 via-cyan-300 to-amber-300">
  </div>
  <Vue3Marquee duration="60" class="py-10 relative overflow-clip ">
    <template v-for="item in marqueeItems" :key="item" class="mix-blend-hard-light">
      <span class="text-9xl px-3">{{ item }} ー </span>
    </template>
  </Vue3Marquee>
</template>
<script setup>
import { marqueeItems } from '@/data/marquee'
</script>
<style scoped>
span {
  font-family: "Satoshi"
}
</style>
