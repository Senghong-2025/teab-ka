<template>
  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
    <h3 class="text-xl font-semibold text-amber-500 mb-2">
      <span>{{ data?.bride?.fullName }}</span> & <span>{{ data?.groom?.fullName }}</span>
    </h3>
    <div class="flex items-center text-sm text-gray-500 mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span>{{data.weddingDateForDisplay}}</span>
    </div>
    <p class="text-gray-600 leading-relaxed">
      data for testing and invite your guess
    </p>
    <div class="flex justify-end gap-2">
      <button class="p-2 bg-gray-200 rounded-md"><SquarePen class="text-gray-400"/></button>
      <button class="p-2 bg-gray-200 rounded-md"><Eye class="text-gray-400" /></button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { WeddingFormData } from '~/models/wedding';
import { Eye, SquarePen } from 'lucide-vue-next';

defineProps<{data: WeddingFormData}>()

</script>

<style scoped>
/* Additional custom styles can be added here if needed */
</style>
