<template>
  <nav
    class="bg-primary-background before:absolute before:top-full before:h-0.5 before:bg-border before:inset-16 -transform-x-1/2 max-w-8xl sticky left-1/2 top-0 flex w-screen gap-8 p-8 px-16 items-center slide-down delay-200 duration-1000">
     <NuxtLink
      class="text-2xl relative duration-1000 before:absolute before:inset-x-full before:h-0.5 before:top-full before:bg-primary before:origin-right hover:before:inset-x-0 hover:before:top-full before:transition-all"
      to="/">Tnixc</NuxtLink>
    <div class="flex-grow"></div>
    <NuxtLink
      class="text-2xl relative before:absolute before:inset-x-full before:h-0.5 before:top-full before:bg-primary before:origin-right hover:before:inset-x-0 duration-1000 hover:before:top-full before:transition-all"
      to="/Projects">Projects</NuxtLink>
    <NuxtLink
      class="text-2xl relative before:absolute before:inset-x-full before:h-0.5 before:top-full before:bg-primary before:origin-right hover:before:inset-x-0 duration-1000 hover:before:top-full before:transition-all"
      to="/Articles">Articles</NuxtLink>
     <NuxtLink
      class="text-2xl relative duration-1000 before:absolute before:inset-x-full before:h-0.5 before:top-full before:bg-primary before:origin-right hover:before:inset-x-0 hover:before:top-full before:transition-all"
      to="/Contact">Contact</NuxtLink>
    
    <button @click="toggleTheme()"
      class="relative z-10 before:transition-[scale] aspect-square rounded-full transition-all duration-200 ease-out before:absolute before:inset-[-8px] before:z-[-1] before:scale-0 before:rounded-full before:bg-secondary hover:scale-110 before:hover:scale-100">
      <Icon class="transition-all" id="sun" name="solar:sun-outline" width="28" height="28" />
      <Icon class="transition-all" id="moon" name="solar:moon-outline" width="28" height="28" style="display: none" />
    </button>
  </nav>
</template>

<script setup>
const colorMode = useColorMode();

async function toggleTheme() {
  const moon = computed(() => {
    return document.getElementById("moon");
  });
  const sun = computed(() => {
    return document.getElementById("sun");
  });
  if (colorMode.value === "dark") {
    colorMode.value = "light";
    moon.value.style.display = "none";
    sun.value.style.display = "block";
  } else {
    colorMode.value = "dark";
    moon.value.style.display = "block";
    sun.value.style.display = "none";
  }
}
</script>
