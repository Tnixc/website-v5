<template>
  <div
    class="-transform-x-1/2 slide-down sticky left-1/2 top-0 flex w-screen items-center gap-8 overflow-visible p-5 delay-200 duration-1000 md:p-8 md:px-16"
  >
    <NuxtLink
      class="relative text-2xl duration-1000 before:absolute before:inset-x-full before:top-full before:h-0.5 before:origin-right before:bg-primary before:transition-all hover:before:inset-x-0 hover:before:top-full"
      exact-active-class="active"
      to="/"
      >Tnixc</NuxtLink
    >
    <div class="flex-grow"></div>
    <div
      v-if="menu"
      class="fixed left-2 z-20 flex gap-5 border-4 bg-background p-5 md:static md:p-0"
    >
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
      <span
        class="absolute bottom-0.5 left-8 right-8 block h-0.5 rounded-full bg-border"
      ></span>
    </div>
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
        v-if="sun"
      />
      <Icon
        class="transition-all"
        id="moon"
        name="solar:moon-outline"
        width="28"
        height="28"
        v-if="moon"
      />
    </button>
    <button
      class="relative z-10 block aspect-square rounded-full transition-all duration-200 ease-out before:absolute before:inset-[-8px] before:z-[-1] before:scale-0 before:rounded-full before:bg-secondary/50 before:transition-[scale] hover:scale-110 before:hover:scale-100 md:hidden"
      @click="toggleMenu()"
    >
      <Icon
        class="-scale-x-100"
        name="solar:list-linear"
        width="28"
        height="28"
      />
    </button>
  </div>
</template>

<script setup>
const menu = ref(false);

function toggleMenu() {
  menu.value = !menu.value;
}

const colorMode = useColorMode();
const moon = ref(false);
const sun = ref(true);

onMounted(() => {
  if (colorMode.value === "dark") {
    moon.value = true;
    sun.value = false;
  }
  if (screen.width > 768) {
    menu.value = true;
  }
});

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
</script>
