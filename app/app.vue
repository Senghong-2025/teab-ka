<template>
  <div
    v-if="!isReady"
    class="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-amber-300 via-orange-400 to-rose-500 relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/3 left-1/4 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"/>
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl animate-pulse delay-200"/>
    </div>

    <span
      class="relative text-6xl md:text-8xl font-extrabold bg-linear-to-r from-amber-300 via-white to-amber-500 bg-clip-text text-transparent animate-gradient tracking-wider drop-shadow-lg"
    >
      HAVMK
    </span>
  </div>
  <template v-else>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </template>
</template>
<script lang="ts" setup>
const isReady = ref(false);

const { getUserById } = useAuthentication();
const isToken = useCookie('token').value;
onMounted(async () => {
  if (isToken) {
    await getUserById();
  }
  isReady.value = true;
  // setTimeout(() => {
  // }, 500);
})
// Hardcoded SEO for testing
const siteUrl = 'https://havmk.pages.dev';
const pageTitle = 'HAVMK - សិរីសួស្ដីអាពាហ៍ពិពាហ៍';
const pageDescription = 'អញ្ជើញចូលរួមជាមួយពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង។ Wedding invitation platform.';
const pageImage = 'https://res.cloudinary.com/deevrlkam/image/upload/v1763568486/default/xo539jhwon57j6bxgrxn.jpg';

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: pageTitle,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'អាពាហ៍ពិពាហ៍, ការរៀបការ, wedding, invitation, ការអញ្ជើញ, សិរីសួស្ដី, havmk' },

    // Open Graph
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:image', content: pageImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:url', content: siteUrl },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'HAVMK ហៅមក' },
    { property: 'og:locale', content: 'km_KH' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: pageImage },
  ],
  link: [
    { rel: 'canonical', href: siteUrl },
  ],
})
</script>
<style scoped>
@keyframes gradient-move {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-move 3s ease infinite;
}
</style>