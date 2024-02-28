<template>
  <nav
    class="-transform-x-1/2 max-w-8xl slide-down sticky left-1/2 top-0 flex w-screen items-center gap-8 p-8 px-16 delay-200 duration-1000"
  >
    <NuxtLink
      class="relative text-2xl duration-1000 before:absolute before:inset-x-full before:top-full before:h-0.5 before:origin-right before:bg-primary before:transition-all hover:before:inset-x-0 hover:before:top-full"
      exact-active-class="active"
      to="/"
      >Tnixc</NuxtLink
    >
    <div class="flex-grow"></div>
    <NuxtLink
      class="relative text-2xl duration-1000 before:absolute before:inset-x-full before:top-full before:h-0.5 before:origin-right before:bg-primary before:transition-all hover:before:inset-x-0 hover:before:top-full"
      exact-active-class="active"
      to="/Projects"
      >Projects</NuxtLink
    >
    <NuxtLink
      class="relative text-2xl duration-1000 before:absolute before:inset-x-full before:top-full before:h-0.5 before:origin-right before:bg-primary before:transition-all hover:before:inset-x-0 hover:before:top-full"
      exact-active-class="active"
      to="/Articles"
      >Articles</NuxtLink
    >
    <NuxtLink
      class="relative text-2xl duration-1000 before:absolute before:inset-x-full before:top-full before:h-0.5 before:origin-right before:bg-primary before:transition-all hover:before:inset-x-0 hover:before:top-full"
      exact-active-class="active"
      to="/Contact"
      >Contact</NuxtLink
    >
    <button
      @click="toggleTheme()"
      class="relative z-10 aspect-square rounded-full transition-all duration-200 ease-out before:absolute before:inset-[-8px] before:z-[-1] before:scale-0 before:rounded-full before:bg-secondary/50 before:transition-[scale] hover:scale-110 before:hover:scale-100"
    >
      <Icon
        class="transition-all"
        id="sun"
        name="solar:sun-outline"
        width="28"
        height="28"
      />
      <Icon
        class="transition-all"
        id="moon"
        name="solar:moon-outline"
        width="28"
        height="28"
        style="display: none"
      />
    </button>
    <span
      class="absolute bottom-0.5 left-8 right-8 block h-0.5 rounded-full bg-border"
    ></span>
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
