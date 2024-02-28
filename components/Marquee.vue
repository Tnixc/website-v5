<template>
  <div class="h-[200px]">
    <div
      class="absolute left-0 top-32 z-10 h-[200px] w-full bg-gradient-to-r from-violet-100 via-cyan-100 to-amber-100 mix-blend-lighten dark:from-violet-300 dark:via-cyan-300 dark:to-amber-300 dark:opacity-50 dark:mix-blend-darken"
    ></div>
    <Vue3Marquee
      duration="140"
      class="slide-up relative overflow-clip py-10 duration-1000"
    >
      <template
        v-for="item in marqueeItems"
        :key="item"
        class="mix-blend-hard-light"
      >
        <span class="px-3 text-9xl">{{ item }} ー </span>
      </template>
    </Vue3Marquee>
  </div>
</template>
<script setup>
import { marqueeItems } from "@/data/index";
</script>
<style scoped>
span {
  font-family: "Satoshi";
}
</style>
