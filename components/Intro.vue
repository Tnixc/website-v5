<template>
  <div class="p-10 slide-down-delay-500ms">
    <h1 class="text-5xl font-bold mb-3 slide-in-from-bottom slide-down">Hi, I'm Tnixc</h1>
    <div class="text-2xl space-y-8 max-w-4xl">
      <template v-for="paragraph in introParagraphs" :key="paragraph" class="text-3xl flex flex-col gap-8">
        <p>{{ paragraph }}</p>
      </template>
    </div>
  </div>
</template>
<script setup>
import { introParagraphs } from '@/data/index'
</script>
