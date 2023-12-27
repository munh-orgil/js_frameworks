// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Learning Nuxt3",
    },
  },
  devtools: { enabled: true },
  ssr: false,
  spaLoadingTemplate: false,
  css: ["@/assets/css/main.css"],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  components: {
    global: true,
    dirs: ['~/components']
  },
});