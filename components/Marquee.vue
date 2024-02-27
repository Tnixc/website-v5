<template>
  <Vue3Marquee duration="60" class="py-10">
    <template v-for="item in marqueeItems" :key="item">
      <span class="text-9xl px-3">{{ item }} ー </span>
    </template>
  </Vue3Marquee>
</template>
<script setup>
import { marqueeItems } from '@/data/marquee'
</script>
<style scoped>
  span{
    font-family: "Satoshi"
  }
</style>
