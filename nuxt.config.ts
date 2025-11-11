// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      NODE_ENV: import.meta.env.NODE_ENV,
      API_KEY: import.meta.env.API_KEY
    }
  },
  modules: ['@nuxt/eslint']
})