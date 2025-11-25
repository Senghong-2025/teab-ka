<template>
  <div
    class="relative max-w-[400px] w-full py-6 px-4 rounded-3xl shadow-[0_20px_40px_rgba(180,140,80,0.2)] border border-[#fde8d0] animate-fade-in-up hover:shadow-[0_25px_50px_rgba(180,140,80,0.3)] transition-all duration-300"
    :style="{ backgroundColor: bg }"
  >
    <div class="text-center mb-6">
      <h2 class="font-khmer text-2xl font-bold mb-2" :style="{ color: textColor }">
        ស្កែន QR Code
      </h2>
      <h3 class="text-lg font-imperial" :style="{ color: textColor }">
        Scan QR Code
      </h3>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <!-- QR Code 1 -->
      <div class="flex flex-col items-center">
        <div class="w-full aspect-square bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
            <img
              v-if="qrCode1"
              :src="qrCode1"
              alt="KH QR Code 1"
              class="w-full h-full object-contain"
            />
            <div v-else class="text-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              <p class="text-xs text-gray-500">QR Code 1</p>
            </div>
          </div>
        </div>
        <p class="text-sm font-medium mt-2 font-khmer" :style="{ color: textColor }">
          គណនីទី ១
        </p>
      </div>

      <!-- QR Code 2 -->
      <div class="flex flex-col items-center">
        <div class="w-full aspect-square bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
            <img
              v-if="qrCode2"
              :src="qrCode2"
              alt="KH QR Code 2"
              class="w-full h-full object-contain"
            />
            <div v-else class="text-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              <p class="text-xs text-gray-500">QR Code 2</p>
            </div>
          </div>
        </div>
        <p class="text-sm font-medium mt-2 font-khmer" :style="{ color: textColor }">
          គណនីទី ២
        </p>
      </div>
    </div>

    <div class="mt-4 text-center">
      <p class="text-sm opacity-75 font-khmer" :style="{ color: textColor }">
        សូមស្កែន QR Code ដើម្បីផ្ញើអំណោយ
      </p>
      <p class="text-xs opacity-60 font-imperial mt-1" :style="{ color: textColor }">
        Scan QR Code to send gifts
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  qrCode1?: string;
  qrCode2?: string;
}>();

const bg = useShareBackground();
const textColor = useShareTextColor();
</script>

<style scoped>
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

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}
</style>
