export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxthub/core', '@nuxt/ui', '@nuxt/icon', 'nuxt-auth-utils'],
  css: ['~/assets/css/main.css'],
  hub: {
    database: true,
  },
  ui: {
    fonts: false,
  },
})
