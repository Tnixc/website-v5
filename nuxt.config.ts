import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  ssr: true,
  nitro: {
    static: true
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    // "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    "@nuxtjs/seo",
    "@nuxt/content",
  ],
  site: {
    url: "https://tnixc.space",
  },
  css: ["@/assets/css/animations.css", "@/assets/css/global.css"],
  extends: ["nuxt-umami"],
  app: {
    head: {
      link: [
        {
          href: "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,400&f[]=satoshi@300&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  colorMode: {
    classSuffix: "",
  },
});
