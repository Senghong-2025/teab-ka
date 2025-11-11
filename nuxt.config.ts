import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/style/main.css'],
  runtimeConfig: {
    public: {
      NODE_ENV: import.meta.env.NODE_ENV,
      API_KEY: import.meta.env.API_KEY
    }
  },
  modules: ['@nuxt/eslint'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})