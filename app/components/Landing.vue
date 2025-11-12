<template>
  <div class="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-16 lg:py-24">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Main Heading -->
        <h1 class="text-5xl py-5 lg:text-7xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in">
          {{ $t('landing.hero.welcomeTitle') }}
        </h1>

        <!-- Subheading -->
        <p class="text-xl lg:text-2xl text-gray-600 mb-12 animate-slide-up">
          {{ $t('landing.hero.subtitle') }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up-delay">
          <button
            class="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            @click="$router.push('/home')"
            >
            {{ $t('landing.hero.startButton') }}
          </button>
          <!-- <button class="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 shadow-lg">
            ស្វែងយល់បន្ថែម
          </button> -->
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
        <!-- Feature 1 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
          <div class="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ $t('landing.features.fast.title') }}</h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t('landing.features.fast.description') }}
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-200">
          <div class="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ $t('landing.features.secure.title') }}</h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t('landing.features.secure.description') }}
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-400">
          <div class="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ $t('landing.features.responsive.title') }}</h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t('landing.features.responsive.description') }}
          </p>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-24 max-w-4xl mx-auto">
        <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div class="animate-fade-in">
              <div class="text-4xl lg:text-5xl font-bold text-indigo-600 mb-2">100+</div>
              <div class="text-gray-600 font-medium">{{ $t('landing.stats.activeUsers') }}</div>
            </div>
            <div class="animate-fade-in animation-delay-200">
              <div class="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">99.9%</div>
              <div class="text-gray-600 font-medium">{{ $t('landing.stats.uptime') }}</div>
            </div>
            <div class="animate-fade-in animation-delay-400">
              <div class="text-4xl lg:text-5xl font-bold text-pink-600 mb-2">24/7</div>
              <div class="text-gray-600 font-medium">{{ $t('landing.stats.support') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// You can add any logic here
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out 0.2s backwards;
}

.animate-slide-up-delay {
  animation: slide-up 0.8s ease-out 0.4s backwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out backwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}
</style>
