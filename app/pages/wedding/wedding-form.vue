<template>
  <div class="min-h-screen bg-linear-to-br from-pink-50 via-white to-purple-50 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="flex justify-center mb-4">
          <Heart class="w-16 h-16 text-pink-500" :fill="'currentColor'" />
        </div>
        <h1 class="text-4xl font-bold text-gray-800 mb-2">
          {{ $t('wedding.title') }}
        </h1>
        <p class="text-gray-600">
          {{ $t('wedding.subtitle') }}
        </p>
      </div>

      <!-- Form Card -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <form class="space-y-8" @submit.prevent="handleSubmit">

          <!-- Couple Information -->
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
              <Users class="w-6 h-6 text-pink-500" />
              {{ $t('wedding.sections.coupleInfo') }}
            </h2>

            <div class="grid md:grid-cols-2 gap-6">
              <!-- Bride Information -->
              <div class="space-y-4 p-4 bg-pink-50 rounded-lg">
                <h3 class="font-semibold text-pink-700 flex items-center gap-2">
                  <Heart class="w-5 h-5" />
                  {{ $t('wedding.bride.title') }}
                </h3>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    {{ $t('wedding.bride.fullName') }} <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.bride.fullName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    :placeholder="$t('wedding.bride.fullNamePlaceholder')"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    {{ $t('wedding.bride.parentsNames') }}
                  </label>
                  <input
                    v-model="formData.bride.parentsNames"
                    type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    :placeholder="$t('wedding.bride.parentsNamesPlaceholder')"
                  >
                </div>
              </div>

              <!-- Groom Information -->
              <div class="space-y-4 p-4 bg-blue-50 rounded-lg">
                <h3 class="font-semibold text-blue-700 flex items-center gap-2">
                  <Heart class="w-5 h-5" />
                  {{ $t('wedding.groom.title') }}
                </h3>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    {{ $t('wedding.groom.fullName') }} <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.groom.fullName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    :placeholder="$t('wedding.groom.fullNamePlaceholder')"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    {{ $t('wedding.groom.parentsNames') }}
                  </label>
                  <input
                    v-model="formData.groom.parentsNames"
                    type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    :placeholder="$t('wedding.groom.parentsNamesPlaceholder')"
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Wedding Date & Time -->
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
              <Calendar class="w-6 h-6 text-pink-500" />
              {{ $t('wedding.sections.dateTime') }}
            </h2>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {{ $t('wedding.dateTime.date') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.weddingDate"
                  type="date"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {{ $t('wedding.dateTime.time') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.weddingTime"
                  type="time"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
              </div>
            </div>
          </div>

          <!-- Venue Information -->
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
              <MapPin class="w-6 h-6 text-pink-500" />
              {{ $t('wedding.sections.venue') }}
            </h2>

            <!-- Ceremony Venue -->
            <div class="space-y-4 p-4 bg-purple-50 rounded-lg">
              <h3 class="font-semibold text-purple-700 flex items-center gap-2">
                <Church class="w-5 h-5" />
                {{ $t('wedding.venue.ceremony') }}
              </h3>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {{ $t('wedding.venue.venueName') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.ceremony.venueName"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  :placeholder="$t('wedding.venue.venueNamePlaceholder')"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {{ $t('wedding.venue.address') }} <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="formData.ceremony.address"
                  required
                  rows="2"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  :placeholder="$t('wedding.venue.addressPlaceholder')"
                ></textarea>
              </div>
            </div>

            <!-- Reception Venue -->
            <div class="space-y-4 p-4 bg-amber-50 rounded-lg">
              <div class="flex items-center justify-between">
                <h3 class="font-semibold text-amber-700 flex items-center gap-2">
                  <PartyPopper class="w-5 h-5" />
                  {{ $t('wedding.venue.reception') }}
                </h3>
                <label class="flex items-center gap-2 text-sm">
                  <input
                    v-model="formData.sameVenue"
                    type="checkbox"
                    class="rounded text-pink-500 focus:ring-pink-500"
                  />
                  {{ $t('wedding.venue.sameAsceremony') }}
                </label>
              </div>
              <div v-if="!formData.sameVenue">
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {{ $t('wedding.venue.venueName') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.reception.venueName"
                  type="text"
                  :required="!formData.sameVenue"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  :placeholder="$t('wedding.venue.venueNamePlaceholder')"
                >
              </div>
              <div v-if="!formData.sameVenue">
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {{ $t('wedding.venue.address') }} <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="formData.reception.address"
                  :required="!formData.sameVenue"
                  rows="2"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  :placeholder="$t('wedding.venue.addressPlaceholder')"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
              <Phone class="w-6 h-6 text-pink-500" />
              {{ $t('wedding.sections.contact') }}
            </h2>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {{ $t('wedding.contact.email') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.contact.email"
                  type="email"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="email@example.com"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {{ $t('wedding.contact.phone') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.contact.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {{ $t('wedding.google_map') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.mapUrl"
                  type="link"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="URL"
                >
                <div v-if="formData.mapUrl.length" class="my-2 rounded-md overflow-hidden bg-gray-100 flex">
                  <a href="https://maps.app.goo.gl/E6AgL3bcyt1dqcG38" target="_blank" class="w-full items-center h-auto flex gap-2 px-4">
                    <img 
                      src="https://www.google.com/images/branding/product/2x/maps_96in128dp.png" 
                      alt="Google Map" 
                      class="w-[100px] h-auto rounded-sm"
                    >
                    <span>Open Google Map</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              {{ $t('Preview Photos') }} <span class="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="image/jpeg, image/png"
              multiple
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Preview Image"
              @change="handleFileChange"
            >
            <div v-if="previewFiles.length" class="my-2 rounded-md overflow-hidden bg-gray-100 flex gap-2 flex-wrap">
              <div v-for="item in previewFiles" :key="item" class="w-[200px] h-[200px] overflow-hidden">
                <img :src="item" alt="" class="w-full h-full object-contain">
              </div>
            </div>
          </div>

          <!-- Submit Buttons -->
          <div class="flex gap-4 pt-6">
            <button
              type="submit"
              class="flex-1 bg-linear-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Send class="w-5 h-5" />
              {{ $t('wedding.actions.createInvitation') }}
            </button>
            <button
              type="button"
              class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
              @click="resetForm"
            >
              <RotateCcw class="w-5 h-5" />
              {{ $t('wedding.actions.reset') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Heart, Users, Calendar, MapPin, Church, PartyPopper, Phone, Send, RotateCcw } from 'lucide-vue-next';

const { formData, handleSubmit, resetForm, getByHostId, preveiwImageFiles,
} = useWedding();

onMounted(() => getByHostId(100));

const previewFiles = ref<string[]>([]);
const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    const files = Array.from(target.files);
    previewFiles.value = [];
    files.forEach(file => {
      const url = URL.createObjectURL(file);
      previewFiles.value.push(url);
    });
    preveiwImageFiles.value = files
    console.log('Preview URLs:', previewFiles.value);
  }
};
</script>

<style scoped>
/* Custom animations */
input:focus, textarea:focus, select:focus {
  transform: translateY(-1px);
  transition: all 0.2s ease;
}
</style>