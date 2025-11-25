<template>
  <div
    class="relative max-w-[400px] w-full py-6 px-4 rounded-3xl shadow-[0_20px_40px_rgba(180,140,80,0.2)] border border-[#fde8d0] animate-fade-in-up hover:shadow-[0_25px_50px_rgba(180,140,80,0.3)] transition-all duration-300"
    :style="{ backgroundColor: bg }"
  >
    <div class="text-center mb-6">
      <h2 class="font-khmer text-2xl font-bold mb-2" :style="{ color: textColor }">
        ទាក់ទងមកម្ចាស់ផ្ទះ
      </h2>
      <h3 class="text-lg font-imperial" :style="{ color: textColor }">
        Contact Host
      </h3>
    </div>

    <div class="space-y-4">
      <!-- Phone Contact -->
      <a
        v-if="event.contact?.phone"
        :href="`tel:${event.contact.phone}`"
        class="flex items-center gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
      >
        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4d03f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div class="flex-1 text-left">
          <p class="text-sm font-medium opacity-75" :style="{ color: textColor }">Phone / ទូរសព្ទ</p>
          <p class="text-lg font-semibold" :style="{ color: textColor }">{{ event.contact.phone }}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" :style="{ color: textColor }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>

      <!-- Google Maps -->
      <a
        v-if="mapUrl"
        :href="mapUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
      >
        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4d03f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div class="flex-1 text-left">
          <p class="text-sm font-medium opacity-75" :style="{ color: textColor }">Location / ទីតាំង</p>
          <p class="text-lg font-semibold" :style="{ color: textColor }">Open in Maps</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" :style="{ color: textColor }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { WeddingFormData } from '~/models/wedding';

const props = defineProps<{invite: string, event:WeddingFormData}>();
const bg = useShareBackground();
const textColor = useShareTextColor();

const mapUrl = computed(() => {
  if (!props.event.mapUrl) return null;
  const url = props.event.mapUrl;
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return null;
  }
  if (url.includes('google.com/maps')) {
    return url;
  }
  return url;
});
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
