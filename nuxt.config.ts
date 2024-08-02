import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "./i18n.config.ts",
        locales: [
          {
            code: "en",
            name: "English",
          },
          {
            code: "ua",
            name: "Українська",
          },
          {
            code: "fr",
            name: "Français",
          },
        ],
        defaultLocale: "en",
      },
    ],
    [
      "@nuxt/eslint",
      {
        config: {
          stylistic: {
            semi: true,
            quotes: "double",
            arrowParens: "always",
          },
        },
      },
    ],
  ],
  experimental: {
    componentIslands: true,
  },
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  alias: {
    "@": "./",
  },
  // io: {
  //   sockets: [
  //     // Required
  //     {
  //       // At least one entry is required
  //       name: "home",
  //       url: "http://localhost:3000",
  //       default: true,
  //       vuex: {
  //         /* see section below */
  //       },
  //       namespaces: {
  //         /* see section below */
  //       },
  //     },
  //     { name: "work", url: "http://somedomain1:3000" },
  //     { name: "car", url: "http://somedomain2:3000" },
  //     { name: "tv", url: "http://somedomain3:3000" },
  //     { name: "test", url: "http://localhost:4000" },
  //   ],
  // },
});
