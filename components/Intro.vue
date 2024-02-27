<template>
  <div class="slide-down-delay-500ms p-10">
    <h1 class="slide-down mb-3 text-5xl font-bold slide-in-from-bottom">
      Hi, I'm Tnixc
    </h1>
    <div class="max-w-4xl space-y-8 text-2xl">
      <template
        v-for="paragraph in introParagraphs"
        :key="paragraph"
        class="flex flex-col gap-8 text-3xl"
      >
        <p>{{ paragraph }}</p>
      </template>
    </div>
  </div>
</template>
<script setup>
import { introParagraphs } from "@/data/index";
</script>
