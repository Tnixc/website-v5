import { defineNuxtConfig } from "nuxt/config";

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
    "@nuxt/content",
  ],
  extends: ["nuxt-umami"],
  app: {
    head: {
      link: [
        {
          href: "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,400&f[]=epilogue@300&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  colorMode: {
    classSuffix: "",
  },
});
