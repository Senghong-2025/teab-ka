<template>
  <div class="min-h-screen grid gap-2 items-center p-2 justify-center font-sans bg-linear-to-br from-[#fdf4f0] to-[#fef9e6]">
    <FirstPage/>
    <!-- Card body -->
    <div class="relative max-w-full p-2 bg-linear-to-br from-[#f0dea9] to-[#fccc74] rounded-3xl shadow-[0_20px_40px_rgba(180,140,80,0.2)] border border-[#fde8d0] animate-fade-in-up hover:shadow-[0_25px_50px_rgba(180,140,80,0.3)] transition-all duration-300" style="animation-delay: 0.2s">
      <header class="text-center mb-4">
        <!-- <p class="text-xs text-amber-700 uppercase tracking-[0.15em] mb-1 animate-fade-in" style="animation-delay: 0.5s">ក្នុងពិធីមង្គលការ · Wedding Ceremony</p> -->
        <h1 class="font-khmer text-4xl font-bold text-amber-900 my-2 animate-scale-in" style="animation-delay: 0.6s">ក្នុងពិធីមង្គលការ</h1>
        <h1 class="text-lg text-amber-700 m-0 animate-fade-in" style="animation-delay: 0.7s">The Wedding of</h1>
      </header>

      <section class="text-center mt-6">
        <div class="mb-4 animate-slide-in-left" style="animation-delay: 0.8s">
          <h2 class="font-khmer text-3xl font-bold text-amber-950 my-1">{{ brideNameKhmer }}</h2>
          <h2 class="font-serif text-2xl font-bold text-amber-900 my-1">{{ brideNameEnglish }}</h2>
        </div>

        <div class="animate-fade-in my-3" style="animation-delay: 1s">
          <span class="text-xl text-amber-700 mx-3">និង</span>
          <span class="text-[1.75rem] text-amber-700 mx-2">&amp;</span>
        </div>

        <div class="mt-4 animate-slide-in-right" style="animation-delay: 1.1s">
          <h2 class="font-khmer text-3xl font-bold text-amber-950 my-1">{{ groomNameKhmer }}</h2>
          <h2 class="font-serif text-2xl font-bold text-amber-900 my-1">{{ groomNameEnglish }}</h2>
        </div>
      </section>

      <div class="flex justify-center my-8 animate-zoom-in" style="animation-delay: 1.2s">
        <div class="relative w-full max-w-sm mx-auto group">
          <!-- Modern Slider Container -->
          <div class="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
            <!-- Images with Slide Animation -->
            <div class="relative w-full h-full">
              <TransitionGroup name="slide-fade">
                <div
                  v-for="(img, index) in images"
                  v-show="currentImageIndex === index"
                  :key="img"
                  class="absolute inset-0"
                >
                  <img
                    :src="img"
                    :alt="`Wedding photo ${index + 1}`"
                    class="w-full h-full object-cover"
                  >
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </TransitionGroup>
            </div>

            <!-- Modern Navigation Dots with Progress -->
            <div v-if="images.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
              <div class="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full">
                <button
                  v-for="(_, index) in images"
                  :key="index"
                  class="relative overflow-hidden transition-all duration-300 rounded-full"
                  :class="currentImageIndex === index ? 'w-8 h-2' : 'w-2 h-2'"
                  @click="goToSlide(index)"
                >
                  <div
                    class="absolute inset-0 transition-all duration-300"
                    :class="currentImageIndex === index ? 'bg-amber-400' : 'bg-white/60 hover:bg-white/80'"
                  />
                </button>
              </div>
            </div>

            <!-- Sleek Navigation Arrows -->
            <div v-if="images.length > 1" class="absolute inset-0 flex items-center justify-between px-3 pointer-events-none z-10">
              <button
                class="pointer-events-auto w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100"
                @click="previousImage"
              >
                <svg class="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                class="pointer-events-auto w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100"
                @click="nextImage"
              >
                <svg class="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <!-- Image Counter -->
            <div v-if="images.length > 1" class="absolute top-4 right-4 z-20">
              <div class="px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium">
                {{ currentImageIndex + 1 }} / {{ images.length }}
              </div>
            </div>
          </div>

          <!-- Thumbnail Navigation (Modern) -->
          <div v-if="images.length > 1 && images.length <= 5" class="mt-4 flex gap-2 justify-center">
            <button
              v-for="(img, index) in images"
              :key="index"
              class="relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ring-2"
              :class="currentImageIndex === index ? 'ring-amber-500 ring-offset-2 scale-110' : 'ring-transparent hover:ring-amber-300 opacity-60 hover:opacity-100'"
              @click="goToSlide(index)"
            >
              <img :src="img" :alt="`Thumbnail ${index + 1}`" class="w-full h-full object-cover">
            </button>
          </div>
        </div>
      </div>

      <section class="text-center mt-4">
        <p class="font-khmer text-[0.95rem] text-amber-950 leading-relaxed animate-fade-in" style="animation-delay: 1.3s">
          សូមអញ្ជើញលោកអ្នកចូលរួម<br />ក្នុងពិធីមង្គលការបស់យើង
        </p>
        <p class="text-sm text-amber-700 italic mt-1 animate-fade-in" style="animation-delay: 1.4s">
          Request the pleasure of your company<br />at the ceremony of their engagement
        </p>

        <div class="inline-flex items-center gap-3 font-khmer font-bold text-[1rem] text-amber-900 mt-4 mb-2 animate-fade-in" style="animation-delay: 1.5s">
          <span>សៅរ៍</span>
          <span class="text-6xl text-amber-700 font-extrabold">២៥</span>
          <span>ឧសភា</span>
          <span>២០២៥</span>
        </div>
        <div class="text-sm text-amber-700 tracking-[0.1em] animate-fade-in" style="animation-delay: 1.6s">Saturday | 25 | May | 2025</div>

        <p class="text-lg text-amber-950 my-3 animate-fade-in" style="animation-delay: 1.7s">{{ weddingTimeKhmer }} · {{ weddingTime }}</p>

        <div class="mt-6 animate-slide-in-up" style="animation-delay: 1.8s">
          <p class="font-khmer text-lg font-bold text-amber-900">{{ venueKhmer }}</p>
          <p class="font-serif text-xl font-bold text-amber-950">{{ venue }}</p>
          <p class="text-xs text-amber-700 leading-[1.4] mt-1">
            {{ venueAddress }}
          </p>
        </div>
      </section>

      <footer class="mt-8 pt-4 border-t border-[#fde8d0] text-center animate-fade-in" style="animation-delay: 2s">
        <p class="text-[0.8125rem] text-amber-950 font-medium my-1">{{ contactInfo }}</p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import FirstPage from './two/FirstPage.vue'

interface Props {
  guestNameKhmer?: string
  guestNameEnglish?: string
  groomNameKhmer?: string
  groomNameEnglish?: string
  brideNameKhmer?: string
  brideNameEnglish?: string
  weddingDate?: string | Date
  weddingTime?: string
  weddingTimeKhmer?: string
  venue?: string
  venueKhmer?: string
  venueAddress?: string
  contactInfo?: string
  imageUrl?: string
  imageUrls?: string[]
  autoSlide?: boolean
  slideInterval?: number
}

const props = withDefaults(defineProps<Props>(), {
  guestNameKhmer: '',
  guestNameEnglish: '',
  groomNameKhmer: 'សុខ សុវណ្ណា',
  groomNameEnglish: 'Sok Sovanna',
  brideNameKhmer: 'រ៉ា សុជាតិ',
  brideNameEnglish: 'Ra Socheata',
  weddingDate: '2025-05-25',
  weddingTime: '9:00 AM',
  weddingTimeKhmer: 'ម៉ោង ៩:០០ ព្រឹក',
  venue: 'Sovannaraj Villa',
  venueKhmer: 'វីឡា សុវណ្ណរាជ',
  venueAddress: 'ផ្ទះលេខ ៤០១, សង្កាត់ទួលទំពាំង, ខណ្ឌចំការមន, ភ្នំពេញ',
  contactInfo: '012 345 678 | engagement@sokreach.com',
  imageUrl: 'https://images.pexels.com/photos/19126424/pexels-photo-19126424.jpeg?cs=srgb&dl=pexels-hanuman-photo-studio-564865561-19126424.jpg&fm=jpg',
  imageUrls: () => [
    'https://i.pinimg.com/474x/87/c0/95/87c0954d9a30df14848ac03f1e2641c3.jpg',
    'https://i.pinimg.com/736x/d5/16/bc/d516bc8ce09abb8e3455d62c4324a66a.jpg',
    'https://images.pexels.com/photos/19126424/pexels-photo-19126424.jpeg?cs=srgb&dl=pexels-hanuman-photo-studio-564865561-19126424.jpg&fm=jpg',
    'https://i.pinimg.com/474x/87/c0/95/87c0954d9a30df14848ac03f1e2641c3.jpg',
    'https://i.pinimg.com/736x/d5/16/bc/d516bc8ce09abb8e3455d62c4324a66a.jpg',
],
  autoSlide: true,
  slideInterval: 4000
})

// Image slider state
const currentImageIndex = ref(0)
let autoSlideTimer: NodeJS.Timeout | null = null

// Computed images array - use imageUrls if provided, otherwise fallback to single imageUrl
const images = computed(() => {
  if (props.imageUrls && props.imageUrls.length > 0) {
    return props.imageUrls
  }
  return [props.imageUrl]
})

// Navigation functions
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

// Auto-slide functionality
const startAutoSlide = () => {
  if (props.autoSlide && images.value.length > 1) {
    autoSlideTimer = setInterval(nextImage, props.slideInterval)
  }
}

const stopAutoSlide = () => {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer)
    autoSlideTimer = null
  }
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Khmer:wght@400;700&family=Playfair+Display:wght@700&family=Inter:wght@400;500&display=swap');

.font-khmer {
  font-family: 'Noto Serif Khmer', Georgia, serif;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

.font-sans {
  font-family: 'Inter', 'Noto Serif Khmer', system-ui, sans-serif;
}

/* Elegant Animation Keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(-10px);
  }
  60% {
    opacity: 1;
    transform: scale(1.02) translateY(0);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Elegant Animation Classes */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-up {
  animation: slideInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-left {
  animation: slideInLeft 0.7s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-right {
  animation: slideInRight 0.7s ease-out forwards;
  opacity: 0;
}

.animate-scale-in {
  animation: scaleIn 0.6s ease-out forwards;
  opacity: 0;
}

.animate-zoom-in {
  animation: zoomIn 0.8s ease-out forwards;
  opacity: 0;
}

.animate-bounce-in {
  animation: bounceIn 0.9s ease-out forwards;
  opacity: 0;
}

.animate-pulse-gentle {
  animation: pulse 2.5s ease-in-out infinite;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Modern Slider Transition Effects */
.slide-fade-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 2;
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  z-index: 1;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100%) scale(0.95);
}

.slide-fade-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100%) scale(0.95);
}
</style>