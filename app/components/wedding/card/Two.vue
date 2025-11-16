<template>
  <div class="min-h-screen grid gap-2 items-center p-2 justify-center font-sans bg-linear-to-br from-[#fdf4f0] to-[#fef9e6]">
    <FirstPage :invite="invite"/>
    <!-- Card body -->
    <div class="relative max-w-[400px] p-2 bg-linear-to-br from-[#f0dea9] to-[#fccc74] rounded-3xl shadow-[0_20px_40px_rgba(180,140,80,0.2)] border border-[#fde8d0] animate-fade-in-up hover:shadow-[0_25px_50px_rgba(180,140,80,0.3)] transition-all duration-300" style="animation-delay: 0.2s">
      <header class="text-center mb-4">
        <h1 class="font-khmer text-4xl font-bold text-amber-900 my-2 animate-scale-in" style="animation-delay: 0.6s">ក្នុងពិធីមង្គលការ</h1>
        <h1 class="text-lg text-amber-700 m-0 animate-fade-in" style="animation-delay: 0.7s">The Wedding of</h1>
      </header>

      <section class="text-center mt-6">
        <div class="mb-4 animate-slide-in-left" style="animation-delay: 0.8s">
          <h2 class="font-khmer text-3xl font-bold text-amber-950 my-1">{{ data.bride?.fullNameKh }}</h2>
          <h2 class="font-serif text-2xl font-bold text-amber-900 my-1">{{ data.bride?.fullName }}</h2>
        </div>

        <div class="animate-fade-in my-3" style="animation-delay: 1s">
          <span class="text-xl text-amber-700 mx-3">និង</span>
          <span class="text-[1.75rem] text-amber-700 mx-2">&amp;</span>
        </div>

        <div class="mt-4 animate-slide-in-right" style="animation-delay: 1.1s">
          <h2 class="font-khmer text-3xl font-bold text-amber-950 my-1">{{ data.groom?.fullNameKh }}</h2>
          <h2 class="font-serif text-2xl font-bold text-amber-900 my-1">{{ data.groom?.fullName }}</h2>
        </div>
      </section>
    
      <!-- Photo preview -->
      <PhotoSlider :photo-preview="data.photoPreview ?? []" />
      <!--End photo preview -->
    
      <!-- Description -->
        <WeddingDescription
          :address="data.ceremony?.address"
          :wedding-date="data.weddingDate"
          :wedding-time="data.weddingTime"
        />
      <!-- End Description -->

      <footer class="mt-8 pt-4 border-t border-[#fde8d0] text-center animate-fade-in" style="animation-delay: 2s">
        <p class="text-[0.8125rem] text-amber-950 font-medium my-1">{{ data.contact?.email }}</p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FirstPage from './two/FirstPage.vue'
import type { WeddingFormData } from '~/models/wedding'
import WeddingDescription from '../WeddingDescription.vue';
import PhotoSlider from '../PhotoSlider.vue';

defineProps<{data: WeddingFormData, invite: string}>();

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