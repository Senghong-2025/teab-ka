<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-rose-50 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-purple-900 mb-2">Wedding Invitation Form</h1>
        <p class="text-gray-600">Create your beautiful wedding invitation</p>
      </div>

      <!-- Form Card -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <form @submit.prevent="submitForm">
          <!-- Bride & Groom Section -->
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span class="mr-2">💑</span>
              Bride & Groom Information
            </h2>

            <div class="grid md:grid-cols-2 gap-6">
              <!-- Bride -->
              <div class="space-y-4">
                <h3 class="text-lg font-medium text-rose-700">Bride</h3>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    v-model="formData.bride.fullName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Jenil Quayson"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Parents' Names</label>
                  <input
                    v-model="formData.bride.parentsNames"
                    type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Mr. & Mrs. Quayson"
                  >
                </div>
              </div>

              <!-- Groom -->
              <div class="space-y-4">
                <h3 class="text-lg font-medium text-purple-700">Groom</h3>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    v-model="formData.groom.fullName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Abram Yawskovi"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Parents' Names</label>
                  <input
                    v-model="formData.groom.parentsNames"
                    type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Mr. & Mrs. Yawskovi"
                  >
                </div>
              </div>
            </div>
          </section>

          <!-- Date & Time Section -->
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span class="mr-2">📅</span>
              Date & Time
            </h2>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Wedding Date *</label>
                <input
                  v-model="formData.weddingDate"
                  type="date"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Wedding Time *</label>
                <input
                  v-model="formData.weddingTime"
                  type="time"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
              </div>
            </div>
          </section>

          <!-- Venue Section -->
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span class="mr-2">📍</span>
              Venue Information
            </h2>

            <!-- Same Venue Toggle -->
            <div class="mb-4">
              <label class="flex items-center space-x-2 cursor-pointer">
                <input
                  v-model="formData.sameVenue"
                  type="checkbox"
                  class="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                >
                <span class="text-sm font-medium text-gray-700">Same venue for ceremony and reception</span>
              </label>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <!-- Ceremony Venue -->
              <div class="space-y-4">
                <h3 class="text-lg font-medium text-purple-700">Ceremony</h3>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Venue Name *</label>
                  <input
                    v-model="formData.ceremony.venueName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="The Marriotte Hotel"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                  <textarea
                    v-model="formData.ceremony.address"
                    required
                    rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Greater Accra, Ghana"
                  />
                </div>
              </div>

              <!-- Reception Venue -->
              <div v-if="!formData.sameVenue" class="space-y-4">
                <h3 class="text-lg font-medium text-rose-700">Reception</h3>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Venue Name *</label>
                  <input
                    v-model="formData.reception.venueName"
                    type="text"
                    :required="!formData.sameVenue"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Reception Venue"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                  <textarea
                    v-model="formData.reception.address"
                    :required="!formData.sameVenue"
                    rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Reception Address"
                  />
                </div>
              </div>
            </div>
          </section>

          <!-- Additional Details Section -->
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span class="mr-2">📋</span>
              Additional Details
            </h2>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Dress Code</label>
                <input
                  v-model="formData.dressCode"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Formal, Cocktail, etc."
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">RSVP Deadline</label>
                <input
                  v-model="formData.rsvpDeadline"
                  type="date"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Wedding Website</label>
                <input
                  v-model="formData.website"
                  type="url"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="https://example.com"
                >
              </div>
            </div>

            <div class="mt-6">
              <label class="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
              <textarea
                v-model="formData.specialInstructions"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Any special instructions for your guests..."
              />
            </div>
          </section>

          <!-- Contact Information Section -->
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span class="mr-2">📞</span>
              Contact Information
            </h2>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Contact Email *</label>
                <input
                  v-model="formData.contact.email"
                  type="email"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="contact@example.com"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Contact Phone *</label>
                <input
                  v-model="formData.contact.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="+233364707589"
                >
              </div>
            </div>
          </section>

          <!-- Host ID (Hidden or for admin) -->
          <div class="mb-8">
            <label class="block text-sm font-medium text-gray-700 mb-1">Host ID *</label>
            <input
              v-model.number="formData.hostId"
              type="number"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="100"
            >
            <p class="text-xs text-gray-500 mt-1">Unique identifier for this invitation</p>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end space-x-4">
            <button
              type="button"
              class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              @click="resetForm"
            >
              Reset Form
            </button>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-8 py-3 bg-gradient-to-r from-purple-600 to-rose-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Create Invitation</span>
              <span v-else>Creating...</span>
            </button>
          </div>

          <!-- Success/Error Messages -->
          <div v-if="successMessage" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p class="text-green-800">{{ successMessage }}</p>
          </div>
          <div v-if="errorMessage" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-800">{{ errorMessage }}</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useWedding from '~/composables/useWedding';

const { formData, resetForm, handleSubmit } = useWedding();

const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

// Watch for sameVenue changes to sync reception with ceremony
watch(() => formData.value.sameVenue, (isSameVenue) => {
  if (isSameVenue) {
    formData.value.reception.venueName = formData.value.ceremony.venueName;
    formData.value.reception.address = formData.value.ceremony.address;
  }
});

// Also sync when ceremony details change if sameVenue is true
watch(() => formData.value.ceremony, (ceremonyData) => {
  if (formData.value.sameVenue) {
    formData.value.reception.venueName = ceremonyData.venueName;
    formData.value.reception.address = ceremonyData.address;
  }
}, { deep: true });

const submitForm = async () => {
  isSubmitting.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  try {
    await handleSubmit();
    successMessage.value = 'Wedding invitation created successfully!';

    // Clear success message after 5 seconds
    setTimeout(() => {
      successMessage.value = '';
    }, 5000);
  } catch (error: unknown) {
    errorMessage.value = (error as Error).message || 'Failed to create wedding invitation. Please try again.';

    // Clear error message after 7 seconds
    setTimeout(() => {
      errorMessage.value = '';
    }, 7000);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb {
  background: #c084fc;
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #a855f7;
}

/* Smooth transitions */
input, textarea, button {
  transition: all 0.2s ease-in-out;
}

/* Focus states */
input:focus, textarea:focus {
  transform: translateY(-1px);
}

button:not(:disabled):hover {
  transform: translateY(-2px);
}

button:not(:disabled):active {
  transform: translateY(0);
}
</style>