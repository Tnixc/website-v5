<template>
  <div class="slide-down-delay-500ms mx-9 border-b-2 p-10 pt-80">
    <h1 class="slide-down mb-3 text-5xl font-bold slide-in-from-bottom">
      Hi, I'm Tnixc
    </h1>
    <div class="max-w-3xl space-y-8 text-2xl text-muted-foreground">
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
