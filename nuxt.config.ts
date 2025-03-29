// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/cloudinary', '@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/icon'],
  devtools: { enabled: true },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  runtimeConfig: {
    cloudinary: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
    stripeSecret: process.env.NUXT_STRIPE_SECRET_KEY,
    stripeWebhookSecret: process.env.NUXT_STRIPE_WEBHOOK_SECRET,
    uploadPreset: process.env.NUXT_PUBLIC_UPLOAD_PRESET,
  },
})
