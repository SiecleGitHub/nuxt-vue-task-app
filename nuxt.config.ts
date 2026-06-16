export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@picocss/pico'],
  modules: ['@nuxt/eslint-config'],
  nitro: {
    preset: 'vercel',
  },
});
