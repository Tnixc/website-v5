<template>
  <div
    class="slide-down-delay-500ms mx-9 w-1/2 flex-grow border-b-2 p-0 md:p-10 max-w-5xl"
  >
    <h1 class="slide-down mb-3 text-5xl font-bold slide-in-from-bottom">
      Hi, I'm Tnixc
    </h1>
    <div class="space-y-8 text-2xl text-muted-foreground">
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
<script setup lang="ts">
import { introParagraphs } from "@/data/index";
</script>
