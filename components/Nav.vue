<template>
  <nav
    class=" slide-down flex w-screen items-center gap-8 overflow-visible p-5 delay-200 duration-1000 md:p-8 md:px-16 bg-background ">
    <NuxtLink
      class="relative text-2xl duration-1000 before:absolute before:inset-x-full before:top-full before:h-0.5 before:origin-right before:bg-primary before:transition-all hover:before:inset-x-0 hover:before:top-full"
      exact-active-class="active" to="/">Tnixc</NuxtLink>
    <div class="flex-grow"></div>
    <div v-if="menu"
      class="absolute top-20 right-0 z-50 flex flex-col gap-10 p-5 md:static md:flex-row md:gap-5 md:p-0 bg-background">
      <NuxtLink
        class="relative text-2xl duration-1000 before:absolute before:inset-x-full before:top-full before:h-0.5 before:origin-right before:bg-primary before:transition-all hover:before:inset-x-0 hover:before:top-full"
        exact-active-class="active" to="/Projects">Projects</NuxtLink>
      <NuxtLink
        class="relative text-2xl duration-1000 before:absolute before:inset-x-full before:top-full before:h-0.5 before:origin-right before:bg-primary before:transition-all hover:before:inset-x-0 hover:before:top-full"
        exact-active-class="active" to="/Articles">Articles</NuxtLink>
      <NuxtLink
        class="relative text-2xl duration-1000 before:absolute before:inset-x-full before:top-full before:h-0.5 before:origin-right before:bg-primary before:transition-all hover:before:inset-x-0 hover:before:top-full"
        exact-active-class="active" to="/Contact">Contact</NuxtLink>
      <span class="absolute bottom-0.5 left-8 right-8 block h-0.5 rounded-full bg-border"></span>
    </div>
    <button @click="toggleTheme()"
      class="relative z-10 aspect-square rounded-full transition-all duration-200 ease-out before:absolute before:inset-[-8px] before:z-[-1] before:scale-0 before:rounded-full before:bg-secondary/50 before:transition-[scale] hover:scale-110 before:hover:scale-100">
      <Icon class="transition-all" id="sun" name="solar:sun-outline" width="28" height="28" v-if="sun" />
      <Icon class="transition-all" id="moon" name="solar:moon-outline" width="28" height="28" v-if="moon" />
    </button>
    
  </nav>
</template>
<script setup>
const colorMode = useColorMode();
const moon = ref(false);
const sun = ref(true);

async function toggleTheme() {
  if (colorMode.value === "dark") {
    colorMode.value = "light";
    moon.value = false;
    sun.value = true;
  } else {
    colorMode.value = "dark";
    moon.value = true;
    sun.value = false;
  }
}
onMounted(() => {
  if (colorMode.value === "dark") {
    moon.value = true;
    sun.value = false;
  }
});

</script>
