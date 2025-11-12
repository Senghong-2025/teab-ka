import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   css: [
    './app/assets/style/main.css',
    './app/assets/style/base.css'
  ],
  runtimeConfig: {
    public: {
      NODE_ENV: import.meta.env.NODE_ENV,
      API_KEY: import.meta.env.API_KEY,
      API_URL: import.meta.env.API_URL,
      cloudinaryCloudName: '',
      cloudinaryUploadPreset: ''
    }
  },
  modules: ['@nuxt/eslint'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})