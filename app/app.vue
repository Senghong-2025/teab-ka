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
onMounted(() => {
  setTimeout(() => {
    isReady.value = true;
  }, 500);
})
useHead({
  htmlAttrs: {
    lang: 'km'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' }
  ]
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