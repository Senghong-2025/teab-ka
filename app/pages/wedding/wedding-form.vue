<template>
  <div class="min-h-screen bg-linear-to-br from-pink-50 via-white to-purple-50 py-8 px-4">
    <div v-if="isLoading('getEdit')">
      <span>Getting data to edit...</span>
    </div>
    <div v-else class="max-w-4xl mx-auto">
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
                    {{ $t("Full Name EN") }}  <span class="text-red-500">*</span>
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
                    {{ $t("Full Name KH") }} <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.bride.fullNameKh"
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
                    {{ $t("Full Name EN") }} <span class="text-red-500">*</span>
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
                    {{ $t("Full Name KH") }} <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.groom.fullNameKh"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                />
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
          <!-- Photo Upload Section -->
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ $t('Preview Photos') }} <span v-if="!isEdit" class="text-red-500">*</span>
              <span class="ml-auto text-xs text-gray-500 font-normal">
                {{ totalImages }} / 5 photos
              </span>
            </h2>

            <!-- Hidden file input -->
            <input
              ref="fileInput"
              type="file"
              accept="image/jpeg, image/png, image/webp"
              multiple
              :required="!isEdit && totalImages === 0"
              class="hidden"
              @change="handleFileChange"
            >

            <!-- Image Grid -->
            <div class="grid grid-cols-3 md:grid-cols-5 gap-3">
              <!-- Existing uploaded photos -->
              <div
                v-for="(item, index) in formData.photoPreview"
                :key="`existing-${index}`"
                class="group relative aspect-square rounded-lg overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <img
                  :src="item"
                  alt="Wedding photo"
                  class="w-full h-full object-cover"
                >
                <!-- Remove button -->
                <button
                  type="button"
                  class="absolute top-1 right-1 p-1.5 bg-red-500 text-white rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-red-600 transition-all duration-200 shadow-lg"
                  @click="removeExistingPhoto(index)"
                >
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- New preview photos -->
              <div
                v-for="(item, index) in previewFiles"
                :key="`new-${index}`"
                class="group relative aspect-square rounded-lg overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <img
                  :src="item"
                  alt="Wedding photo preview"
                  class="w-full h-full object-cover"
                >
                <!-- Remove button -->
                <button
                  type="button"
                  class="absolute top-1 right-1 p-1.5 bg-red-500 text-white rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-red-600 transition-all duration-200 shadow-lg"
                  @click="removePreviewPhoto(index)"
                >
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Add Photo Button -->
              <button
                v-if="totalImages < 5"
                type="button"
                class="aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-pink-400 bg-gray-50 hover:bg-pink-50 transition-all duration-200 flex flex-col items-center justify-center gap-1 group"
                @click="triggerFileInput"
              >
                <svg class="w-8 h-8 text-gray-400 group-hover:text-pink-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                <span class="text-xs text-gray-500 group-hover:text-pink-600 font-medium">Add</span>
              </button>
            </div>

            <!-- Help text -->
            <p v-if="totalImages < 5" class="text-xs text-gray-500">
              Click the + button to add photos (JPEG, PNG, WebP • Max 5 photos)
            </p>
            <p v-else class="text-xs text-amber-600 font-medium">
              Maximum of 5 photos reached. Remove a photo to add another.
            </p>
          </div>

          <!-- KH QR Code Section -->
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              KH QR Code (Optional)
            </h2>

            <div class="grid md:grid-cols-2 gap-6">
              <!-- QR Code 1 -->
              <div class="space-y-4 p-4 bg-blue-50 rounded-lg">
                <h3 class="font-semibold text-blue-700 text-center">គណនីទី ១</h3>

                <!-- Hidden file input for QR1 -->
                <input
                  ref="qrCode1Input"
                  type="file"
                  accept="image/jpeg, image/png, image/webp"
                  class="hidden"
                  @change="handleQrCode1Change"
                >

                <!-- QR Code 1 Preview/Upload -->
                <div class="space-y-2">
                  <div
                    v-if="qrCode1Preview || formData.khQrCode1"
                    class="relative aspect-square w-full max-w-[200px] mx-auto rounded-lg overflow-hidden bg-white shadow-md"
                  >
                    <img
                      :src="qrCode1Preview || formData.khQrCode1"
                      alt="QR Code 1"
                      class="w-full h-full object-contain"
                    >
                    <button
                      type="button"
                      class="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                      @click="removeQrCode1"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <button
                    v-if="!qrCode1Preview && !formData.khQrCode1"
                    type="button"
                    class="w-full aspect-square max-w-[200px] mx-auto rounded-lg border-2 border-dashed border-blue-300 hover:border-blue-500 bg-white hover:bg-blue-50 transition-all duration-200 flex flex-col items-center justify-center gap-2"
                    @click="triggerQrCode1Input"
                  >
                    <svg class="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <span class="text-sm text-blue-600 font-medium">Upload QR Code</span>
                  </button>
                </div>
              </div>

              <!-- QR Code 2 -->
              <div class="space-y-4 p-4 bg-purple-50 rounded-lg">
                <h3 class="font-semibold text-purple-700 text-center">គណនីទី ២</h3>

                <!-- Hidden file input for QR2 -->
                <input
                  ref="qrCode2Input"
                  type="file"
                  accept="image/jpeg, image/png, image/webp"
                  class="hidden"
                  @change="handleQrCode2Change"
                >

                <!-- QR Code 2 Preview/Upload -->
                <div class="space-y-2">
                  <div
                    v-if="qrCode2Preview || formData.khQrCode2"
                    class="relative aspect-square w-full max-w-[200px] mx-auto rounded-lg overflow-hidden bg-white shadow-md"
                  >
                    <img
                      :src="qrCode2Preview || formData.khQrCode2"
                      alt="QR Code 2"
                      class="w-full h-full object-contain"
                    >
                    <button
                      type="button"
                      class="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                      @click="removeQrCode2"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <button
                    v-if="!qrCode2Preview && !formData.khQrCode2"
                    type="button"
                    class="w-full aspect-square max-w-[200px] mx-auto rounded-lg border-2 border-dashed border-purple-300 hover:border-purple-500 bg-white hover:bg-purple-50 transition-all duration-200 flex flex-col items-center justify-center gap-2"
                    @click="triggerQrCode2Input"
                  >
                    <svg class="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <span class="text-sm text-purple-600 font-medium">Upload QR Code</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Submit Buttons -->
          <div class="flex gap-4 pt-6">
            <BaseButton :name="isEdit ? 'Update' : 'Save'" class="w-full" type="btn-primary" :is-loading="isLoading('update')"/>
            <BaseButton name="Bank" class="w-full" type="btn-info" @click="navigateTo('/wedding')"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { doc, getDoc } from 'firebase/firestore';
import { Heart, Users, Calendar, MapPin, Church, PartyPopper, Phone } from 'lucide-vue-next';
import type { WeddingFormData } from '~/models/wedding';
import BaseButton from '~/components/common/BaseButton.vue';

const {
  formData,
  handleSubmit,
  preveiwImageFiles,
  isEdit,
  weddingId,
  $db,
  setLoading,
  isLoading,
  qrCode1File,
  qrCode2File,
} = useWedding();

const previewFiles = ref<string[]>([]);
const fileInput = ref<HTMLInputElement | null>(null);

// QR Code refs and state
const qrCode1Input = ref<HTMLInputElement | null>(null);
const qrCode2Input = ref<HTMLInputElement | null>(null);
const qrCode1Preview = ref<string>('');
const qrCode2Preview = ref<string>('');

// Calculate total images
const totalImages = computed(() => {
  const existingCount = formData.value.photoPreview?.length || 0;
  const newCount = previewFiles.value.length;
  return existingCount + newCount;
});

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    const files = Array.from(target.files);
    const remainingSlots = 5 - totalImages.value;

    if (remainingSlots <= 0) {
      alert('Maximum of 5 photos allowed');
      return;
    }

    // Limit files to remaining slots
    const filesToAdd = files.slice(0, remainingSlots);

    // Filter valid image files
    const validFiles = filesToAdd.filter(file => {
      const isValidType = ['image/jpeg', 'image/png', 'image/webp'].includes(file.type);
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB

      if (!isValidType) {
        alert(`${file.name} is not a valid image type`);
      }
      if (!isValidSize) {
        alert(`${file.name} exceeds 10MB limit`);
      }

      return isValidType && isValidSize;
    });

    if (validFiles.length > 0) {
      validFiles.forEach(file => {
        const url = URL.createObjectURL(file);
        previewFiles.value.push(url);
      });

      const existingFiles = preveiwImageFiles.value || [];
      preveiwImageFiles.value = [...existingFiles, ...validFiles];

      if (filesToAdd.length > remainingSlots) {
        alert(`Only ${remainingSlots} photo(s) added due to 5 photo limit`);
      }
    }

    // Reset input
    target.value = '';
  }
};

const removePreviewPhoto = (index: number) => {
  const url = previewFiles.value[index];
  if (url) {
    URL.revokeObjectURL(url);
  }
  previewFiles.value.splice(index, 1);

  if (preveiwImageFiles.value) {
    preveiwImageFiles.value.splice(index, 1);
  }
};

const removeExistingPhoto = (index: number) => {
  if (formData.value.photoPreview) {
    formData.value.photoPreview.splice(index, 1);
  }
};

// QR Code handlers
const triggerQrCode1Input = () => {
  qrCode1Input.value?.click();
};

const triggerQrCode2Input = () => {
  qrCode2Input.value?.click();
};

const handleQrCode1Change = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];

    // Validate file type
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      alert('Please upload a valid image file (JPEG, PNG, or WebP)');
      return;
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    qrCode1File.value = file;
    qrCode1Preview.value = URL.createObjectURL(file);

    // Reset input
    target.value = '';
  }
};

const handleQrCode2Change = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];

    // Validate file type
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      alert('Please upload a valid image file (JPEG, PNG, or WebP)');
      return;
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    qrCode2File.value = file;
    qrCode2Preview.value = URL.createObjectURL(file);

    // Reset input
    target.value = '';
  }
};

const removeQrCode1 = () => {
  if (qrCode1Preview.value) {
    URL.revokeObjectURL(qrCode1Preview.value);
    qrCode1Preview.value = '';
  }
  qrCode1File.value = null;
  formData.value.khQrCode1 = undefined;
};

const removeQrCode2 = () => {
  if (qrCode2Preview.value) {
    URL.revokeObjectURL(qrCode2Preview.value);
    qrCode2Preview.value = '';
  }
  qrCode2File.value = null;
  formData.value.khQrCode2 = undefined;
};

onMounted(async () => {
  setLoading('getEdit', true);
  if (isEdit.value && weddingId.value) {
    const docRef = doc($db, 'wedding', String(weddingId.value));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      formData.value = docSnap.data() as WeddingFormData;
    }
  }
  setLoading("getEdit", false);
});

onUnmounted(() => {
  // Clean up QR code preview URLs
  if (qrCode1Preview.value) {
    URL.revokeObjectURL(qrCode1Preview.value);
  }
  if (qrCode2Preview.value) {
    URL.revokeObjectURL(qrCode2Preview.value);
  }
  // Clean up photo preview URLs
  previewFiles.value.forEach(url => URL.revokeObjectURL(url));
});
</script>

<style scoped>
/* Custom animations */
input:focus, textarea:focus, select:focus {
  transform: translateY(-1px);
  transition: all 0.2s ease;
}
</style>