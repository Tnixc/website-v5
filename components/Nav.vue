<template>
  <nav
    class="gap-8 bg-primary-background bg-white/10 items-center sticky top-0 flex w-screen p-8 left-1/2 -transform-x-1/2 max-w-8xl">
    <p class="text-2xl">Tnixc</p>
    <div class="flex-grow"></div>
    <NuxtLink class="text-2xl" to="/Projects">Projects</NuxtLink>
    <NuxtLink class="text-2xl" to="/Blog">Articles</NuxtLink>
    <NuxtLink class="text-2xl" to="/Contact">Contact</NuxtLink>
    <button @click="toggleTheme()"
      class="relative aspect-square z-10 rounded-full hover:scale-110 transition-all duration-200 ease-out 
     before:absolute before:inset-[-8px] before:rounded-full before:bg-secondary before:scale-0 before:hover:scale-100 before:z-[-1]">
      <Icon id="sun" name="solar:sun-outline" width="28" height="28" />
      <Icon id="moon" name="solar:moon-outline" width="28" height="28" style="display: none" />
    </button>
  </nav>
</template>

<script setup>
const colorMode = useColorMode()

async function toggleTheme() {
  const moon = computed(() => {
    return document.getElementById('moon')
  })
  const sun = computed(() => {
    return document.getElementById('sun')
  })
  if (colorMode.value === 'dark') {
    colorMode.value = 'light'
    moon.value.style.transition = 'scale 0.2s ease-out'
    moon.value.style.scale = 0
    await new Promise(r => setTimeout(r, 200))
    moon.value.style.display = 'none'
    moon.value.style.scale = 1
    sun.value.style.display = 'block'
  } else {
    colorMode.value = 'dark'
    sun.value.style.display = 'none'
    moon.value.style.display = 'block'
 }
}
</script>
