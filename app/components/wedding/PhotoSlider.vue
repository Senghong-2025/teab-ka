<template>
    <div class="flex justify-center my-8 animate-zoom-in" style="animation-delay: 1.2s">
        <div class="relative w-full max-w-sm mx-auto group">
            <div class="relative aspect-4/5 overflow-hidden rounded-3xl shadow-2xl">
                <div class="relative w-full h-full">
                    <TransitionGroup name="slide-fade">
                        <div
                            v-for="(img, index) in images" v-show="currentImageIndex === index" :key="img"
                            class="absolute inset-0">
                            <img :src="img" :alt="`Wedding photo ${index + 1}`" class="w-full h-full object-cover">
                            <div
                                class="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                        </div>
                    </TransitionGroup>
                </div>

                <div v-if="images.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                    <div class="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full">
                        <button
                            v-for="(_, index) in images" :key="index"
                            class="relative overflow-hidden transition-all duration-300 rounded-full"
                            :class="currentImageIndex === index ? 'w-8 h-2' : 'w-2 h-2'" @click="goToSlide(index)">
                            <div
                                class="absolute inset-0 transition-all duration-300"
                                :class="currentImageIndex === index ? 'bg-amber-400' : 'bg-white/60 hover:bg-white/80'" />
                        </button>
                    </div>
                </div>

                <div
                    v-if="images.length > 1"
                    class="absolute inset-0 flex items-center justify-between px-3 pointer-events-none z-10">
                    <button
                        class="pointer-events-auto w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100"
                        @click="previousImage">
                        <svg class="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        class="pointer-events-auto w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100"
                        @click="nextImage">
                        <svg class="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div v-if="images.length > 1" class="absolute top-4 right-4 z-20">
                    <div class="px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium">
                        {{ currentImageIndex + 1 }} / {{ images.length }}
                    </div>
                </div>
            </div>

            <div v-if="images.length > 1 && images.length <= 5" class="mt-4 flex gap-2 justify-center">
                <button
                    v-for="(img, index) in images" :key="index"
                    class="relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ring-2"
                    :class="currentImageIndex === index ? 'ring-amber-500 ring-offset-2 scale-110' : 'ring-transparent hover:ring-amber-300 opacity-60 hover:opacity-100'"
                    @click="goToSlide(index)">
                    <img :src="img" :alt="`Thumbnail ${index + 1}`" class="w-full h-full object-cover">
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
    photoPreview: string[]
}>();

const currentImageIndex = ref(0)
let autoSlideTimer: NodeJS.Timeout | null = null

const images = computed(() => {
  if (props.photoPreview && props.photoPreview?.length > 0) {
    return props.photoPreview
  }
  return "";
})

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length
  resetAutoSlide()
}

const previousImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.value.length) % images.value.length
  resetAutoSlide()
}

const goToSlide = (index: number) => {
  currentImageIndex.value = index
  resetAutoSlide()
}

const resetAutoSlide = () => {
  stopAutoSlide()
  startAutoSlide()
}

const autoSlide = true;
const startAutoSlide = () => {
  if (autoSlide) {
    autoSlideTimer = setInterval(nextImage, 3000)
  }
}

const stopAutoSlide = () => {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer)
    autoSlideTimer = null
  }
}

onMounted(() => {
  startAutoSlide();
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<style></style>