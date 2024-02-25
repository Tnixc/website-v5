import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    "@nuxtjs/seo",
    "@nuxtjs/partytown",
    "shadcn-nuxt"
  ],
  extends: [
    "nuxt-umami"
  ],
  alias: {
    '@': ".",
  },
  css: []
});