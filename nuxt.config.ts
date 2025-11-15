import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  css: [
    './app/assets/style/main.css',
    './app/assets/style/base.css'
  ],
  runtimeConfig: {
    public: {
      NODE_ENV: import.meta.env.NODE_ENV,
      API_KEY: import.meta.env.API_KEY,
      API_URL: import.meta.env.API_URL,
      SECRET_KEY: import.meta.env.SECRET_KEY,
      cloudinaryCloudName: '',
      cloudinaryUploadPreset: ''
    }
  },
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/i18n', '@nuxtjs/device', '@element-plus/nuxt'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'kh', language: 'km-KH', file: 'kh.json' }
    ],
    defaultLocale: 'kh',
    langDir: 'locales',
    strategy: 'no_prefix',
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})