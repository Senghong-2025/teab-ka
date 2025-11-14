<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 via-red-50 to-purple-50 py-12 px-4 relative overflow-hidden">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 w-32 h-32 khmer-pattern animate-float" />
      <div class="absolute top-40 right-20 w-24 h-24 khmer-pattern animation-delay-2000 animate-float" />
      <div class="absolute bottom-32 left-32 w-28 h-28 khmer-pattern animation-delay-4000 animate-float" />
      <div class="absolute bottom-20 right-40 w-20 h-20 khmer-pattern animation-delay-3000 animate-float" />
    </div>

    <div class="max-w-4xl mx-auto relative z-10">
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-20">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600" />
        <p class="mt-4 text-gray-600">កំពុងផ្ទុក...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-20">
        <p class="text-red-600">{{ error }}</p>
      </div>

      <!-- Wedding Card -->
      <div v-else-if="weddingData" class="wedding-card-container">
        <!-- Golden Border Frame -->
        <div class="golden-border">
          <div class="card-inner">
            <!-- Decorative Header with Khmer Pattern -->
            <div class="header-ornament">
              <svg viewBox="0 0 100 20" class="w-full h-8 text-amber-500">
                <path d="M0,10 Q25,0 50,10 T100,10" stroke="currentColor" stroke-width="0.5" fill="none" />
                <path d="M0,15 Q25,5 50,15 T100,15" stroke="currentColor" stroke-width="0.3" fill="none" opacity="0.5" />
              </svg>
              <div class="flex justify-center gap-8 my-4">
                <div class="lotus-icon">🪷</div>
                <div class="text-amber-600 text-3xl font-bold tracking-widest">ប្រពន្ធពាហ៍</div>
                <div class="lotus-icon">🪷</div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="card-content">
              <!-- Traditional Ornamental Top -->
              <div class="text-center mb-12 animate-fade-in">
                <div class="inline-flex items-center gap-4 mb-6">
                  <div class="geometric-diamond" />
                  <div class="text-5xl animate-pulse-slow">🙏</div>
                  <div class="geometric-diamond" />
                </div>
                <div class="khmer-divider">
                  <div class="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1" />
                  <div class="traditional-ornament">
                    <span class="text-amber-500 text-2xl">❋</span>
                  </div>
                  <div class="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1" />
                </div>
              </div>

              <!-- Main Heading -->
              <div class="text-center mb-12">
                <p class="text-lg text-gray-600 mb-2 tracking-wide uppercase">Together with their families</p>
                <h1 class="text-2xl md:text-3xl font-light text-gray-700 tracking-wider">
                  សូមអញ្ជើញចូលរួម
                </h1>
              </div>

              <!-- Couple Names with Enhanced Design -->
              <div class="couple-section">
                <!-- Bride -->
                <div class="name-block bride-block">
                  <div class="corner-ornament top-left" />
                  <div class="corner-ornament top-right" />
                  <p class="text-sm text-gray-500 mb-3 tracking-wide uppercase">Daughter of</p>
                  <p class="text-base text-gray-600 mb-4 px-4">{{ weddingData.bride.parentsNames }}</p>
                  <h2 class="bride-name">{{ weddingData.bride.fullName }}</h2>
                  <div class="name-underline" />
                  <div class="corner-ornament bottom-left" />
                  <div class="corner-ornament bottom-right" />
                </div>

                <!-- Divider with Traditional Symbol -->
                <div class="couple-divider">
                  <div class="divider-circle">
                    <svg viewBox="0 0 100 100" class="w-16 h-16">
                      <circle cx="50" cy="50" r="45" stroke="url(#goldGradient)" stroke-width="2" fill="white" />
                      <text x="50" y="65" text-anchor="middle" class="text-2xl" fill="#d97706">&</text>
                      <defs>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
                          <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                <!-- Groom -->
                <div class="name-block groom-block">
                  <div class="corner-ornament top-left" />
                  <div class="corner-ornament top-right" />
                  <p class="text-sm text-gray-500 mb-3 tracking-wide uppercase">Son of</p>
                  <p class="text-base text-gray-600 mb-4 px-4">{{ weddingData.groom.parentsNames }}</p>
                  <h2 class="groom-name">{{ weddingData.groom.fullName }}</h2>
                  <div class="name-underline" />
                  <div class="corner-ornament bottom-left" />
                  <div class="corner-ornament bottom-right" />
                </div>
              </div>

              <!-- Invitation Text -->
              <div class="text-center mb-12 animate-fade-in animation-delay-1000">
                <div class="inline-block bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl px-8 py-6 shadow-inner border border-amber-200">
                  <p class="text-lg text-gray-700 font-serif italic mb-2">cordially invite you to celebrate</p>
                  <p class="text-xl md:text-2xl font-light text-amber-800 tracking-wide">their wedding ceremony</p>
                </div>
              </div>

              <!-- Traditional Divider -->
              <div class="flex items-center justify-center gap-6 mb-12">
                <div class="lotus-small">🪷</div>
                <div class="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-24" />
                <span class="text-amber-500 text-3xl">✦</span>
                <div class="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-24" />
                <div class="lotus-small">🪷</div>
              </div>

              <!-- Date and Time with Modern Khmer Style -->
              <div class="text-center mb-12">
                <div class="date-time-container">
                  <div class="date-ornament left" />
                  <div class="date-content">
                    <div class="mb-3">
                      <svg viewBox="0 0 50 50" class="w-12 h-12 mx-auto text-amber-600">
                        <circle cx="25" cy="25" r="20" stroke="currentColor" stroke-width="2" fill="none" />
                        <path d="M25,12 L25,25 L32,32" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" />
                      </svg>
                    </div>
                    <p class="text-3xl md:text-4xl font-light text-gray-800 mb-3 tracking-wide">
                      {{ formatDate(weddingData.weddingDate) }}
                    </p>
                    <div class="time-badge">
                      <span class="text-xl text-amber-700 font-medium">{{ weddingData.weddingTime }}</span>
                    </div>
                  </div>
                  <div class="date-ornament right" />
                </div>
              </div>

              <!-- Venue Details with Enhanced Design -->
              <div class="space-y-10 mb-12">
                <!-- Ceremony -->
                <div class="venue-card ceremony-card">
                  <div class="venue-icon-container">
                    <div class="venue-icon">🏛️</div>
                  </div>
                  <h3 class="venue-title">Wedding Ceremony</h3>
                  <div class="venue-details">
                    <p class="venue-name">{{ weddingData.ceremony.venueName }}</p>
                    <p class="venue-address">{{ weddingData.ceremony.address }}</p>
                  </div>
                </div>

                <!-- Reception (if different venue) -->
                <div v-if="!weddingData.sameVenue" class="venue-card reception-card">
                  <div class="venue-icon-container">
                    <div class="venue-icon">🎊</div>
                  </div>
                  <h3 class="venue-title">Reception</h3>
                  <div class="venue-details">
                    <p class="venue-name">{{ weddingData.reception.venueName }}</p>
                    <p class="venue-address">{{ weddingData.reception.address }}</p>
                  </div>
                </div>
              </div>

              <!-- Additional Details -->
              <div class="space-y-4 mb-12">
                <div v-if="weddingData.dressCode" class="detail-card dress-code-card">
                  <div class="detail-icon">👔</div>
                  <div>
                    <p class="detail-label">Dress Code</p>
                    <p class="detail-content">{{ weddingData.dressCode }}</p>
                  </div>
                </div>

                <div v-if="weddingData.specialInstructions" class="detail-card instructions-card">
                  <div class="detail-icon">ℹ️</div>
                  <div>
                    <p class="detail-label">Special Instructions</p>
                    <p class="detail-content">{{ weddingData.specialInstructions }}</p>
                  </div>
                </div>
              </div>

              <!-- RSVP Section with Khmer Style -->
              <div class="rsvp-section">
                <div class="rsvp-header">
                  <div class="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1" />
                  <h3 class="rsvp-title">RSVP</h3>
                  <div class="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1" />
                </div>
                <p class="rsvp-deadline">សូមឆ្លើយតបមកវិញមុន {{ formatDate(weddingData.rsvpDeadline) }}</p>
                <div class="rsvp-contacts">
                  <div v-if="weddingData?.contact?.email" class="contact-item">
                    <span class="contact-icon">✉️</span>
                    <span class="contact-label">Email:</span>
                    <span class="contact-value">{{ weddingData.contact.email }}</span>
                  </div>
                  <div v-if="weddingData?.contact?.phone" class="contact-item">
                    <span class="contact-icon">📱</span>
                    <span class="contact-label">Phone:</span>
                    <span class="contact-value">{{ weddingData.contact.phone }}</span>
                  </div>
                  <a v-if="weddingData.website" :href="weddingData.website" target="_blank" class="contact-item contact-link">
                    <span class="contact-icon">🌐</span>
                    <span class="contact-label">Website:</span>
                    <span class="contact-value underline">{{ weddingData.website }}</span>
                  </a>
                </div>
              </div>

              <!-- Decorative Footer -->
              <div class="text-center mt-12">
                <div class="flex items-center justify-center gap-4 mb-6">
                  <div class="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1" />
                  <span class="text-amber-500 text-2xl">❋</span>
                  <div class="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1" />
                </div>
                <p class="text-gray-600 italic font-serif text-lg mb-4">
                  យើងខ្ញុំមិនអាចរង់ចាំដើម្បីប្រារព្ធជាមួយអ្នក!
                </p>
                <p class="text-gray-500 text-sm">We can't wait to celebrate with you!</p>
                <div class="flex justify-center gap-4 mt-6">
                  <div class="lotus-icon animate-pulse-slow">🪷</div>
                  <div class="lotus-icon animate-pulse-slow animation-delay-1000">🪷</div>
                  <div class="lotus-icon animate-pulse-slow animation-delay-2000">🪷</div>
                </div>
              </div>
            </div>

            <!-- Decorative Footer Pattern -->
            <div class="footer-ornament">
              <svg viewBox="0 0 100 20" class="w-full h-8 text-amber-500">
                <path d="M0,10 Q25,20 50,10 T100,10" stroke="currentColor" stroke-width="0.5" fill="none" />
                <path d="M0,5 Q25,15 50,5 T100,5" stroke="currentColor" stroke-width="0.3" fill="none" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Print Button -->
      <div v-if="weddingData" class="text-center mt-8 no-print">
        <button class="print-button" @click="printCard">
          <span class="print-icon">🖨️</span>
          <span>Print Invitation</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IWeddingFormData } from '~/models/wedding';
import useWedding from '~/composables/useWedding';

const route = useRoute();
const { getByHostId } = useWedding();

const weddingData = ref<IWeddingFormData | null>(null);
const loading = ref(true);
const error = ref('');

// Get hostId from route query
const hostId = computed(() => {
  const id = route.query.hostId;
  return id ? parseInt(id as string) : null;
});

// Fetch wedding data on mount
onMounted(async () => {
  if (!hostId.value) {
    error.value = 'No host ID provided. Please provide a hostId in the URL query parameter.';
    loading.value = false;
    return;
  }

  try {
    const data = await getByHostId(hostId.value);
    if (data) {
      weddingData.value = data;
    } else {
      error.value = 'Wedding invitation not found.';
    }
  } catch (err) {
    error.value = 'Failed to load wedding invitation.';
    console.error(err);
  } finally {
    loading.value = false;
  }
});

// Format date helper
const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Print functionality
const printCard = () => {
  window.print();
};
</script>

<style scoped>
/* Modern Khmer Wedding Card Styles */

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseSlow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Khmer Pattern Background */
.khmer-pattern {
  background-image:
    repeating-linear-gradient(45deg, #d97706 0, #d97706 2px, transparent 2px, transparent 8px),
    repeating-linear-gradient(-45deg, #d97706 0, #d97706 2px, transparent 2px, transparent 8px);
  opacity: 0.3;
  border-radius: 50%;
}

/* Wedding Card Container */
.wedding-card-container {
  animation: fadeIn 1.2s ease-out;
}

/* Golden Border Frame */
.golden-border {
  background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706, #b45309);
  padding: 3px;
  border-radius: 1rem;
  box-shadow:
    0 20px 60px rgba(217, 119, 6, 0.3),
    0 0 40px rgba(251, 191, 36, 0.2);
}

.card-inner {
  background: white;
  border-radius: 0.95rem;
  overflow: hidden;
}

/* Header and Footer Ornaments */
.header-ornament,
.footer-ornament {
  padding: 1.5rem;
  background: linear-gradient(to bottom, rgba(251, 191, 36, 0.05), transparent);
}

.footer-ornament {
  background: linear-gradient(to top, rgba(251, 191, 36, 0.05), transparent);
}

/* Card Content */
.card-content {
  padding: 2rem 1.5rem;
}

@media (min-width: 768px) {
  .card-content {
    padding: 3rem 4rem;
  }
}

/* Lotus Icons */
.lotus-icon {
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(217, 119, 6, 0.3));
  transition: transform 0.3s ease;
}

.lotus-icon:hover {
  transform: scale(1.2) rotate(10deg);
}

.lotus-small {
  font-size: 1.5rem;
  opacity: 0.7;
}

/* Geometric Diamond */
.geometric-diamond {
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #fbbf24, #d97706);
  transform: rotate(45deg);
  box-shadow: 0 2px 8px rgba(217, 119, 6, 0.4);
}

/* Traditional Ornament */
.traditional-ornament {
  background: white;
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(217, 119, 6, 0.2);
}

/* Khmer Divider */
.khmer-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Couple Section */
.couple-section {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  margin: 3rem 0;
}

@media (max-width: 768px) {
  .couple-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* Name Blocks */
.name-block {
  position: relative;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, rgba(254, 243, 199, 0.5), rgba(254, 226, 226, 0.5));
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.name-block:hover {
  transform: translateY(-5px);
  border-color: rgba(217, 119, 6, 0.3);
  box-shadow: 0 12px 24px rgba(217, 119, 6, 0.15);
}

.bride-block {
  background: linear-gradient(135deg, rgba(254, 226, 226, 0.5), rgba(251, 207, 232, 0.5));
}

.groom-block {
  background: linear-gradient(135deg, rgba(219, 234, 254, 0.5), rgba(221, 214, 254, 0.5));
}

/* Corner Ornaments */
.corner-ornament {
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: #d97706;
  border-style: solid;
}

.corner-ornament.top-left {
  top: 0.5rem;
  left: 0.5rem;
  border-width: 2px 0 0 2px;
  border-top-left-radius: 0.5rem;
}

.corner-ornament.top-right {
  top: 0.5rem;
  right: 0.5rem;
  border-width: 2px 2px 0 0;
  border-top-right-radius: 0.5rem;
}

.corner-ornament.bottom-left {
  bottom: 0.5rem;
  left: 0.5rem;
  border-width: 0 0 2px 2px;
  border-bottom-left-radius: 0.5rem;
}

.corner-ornament.bottom-right {
  bottom: 0.5rem;
  right: 0.5rem;
  border-width: 0 2px 2px 0;
  border-bottom-right-radius: 0.5rem;
}

/* Names Styling */
.bride-name,
.groom-name {
  font-size: 1.875rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #dc2626, #be123c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.groom-name {
  background: linear-gradient(135deg, #1e40af, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (min-width: 768px) {
  .bride-name,
  .groom-name {
    font-size: 2.25rem;
  }
}

.name-underline {
  height: 2px;
  width: 60px;
  margin: 0 auto;
  background: linear-gradient(to right, transparent, #d97706, transparent);
}

/* Couple Divider */
.couple-divider {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .couple-divider {
    display: none;
  }
}

.divider-circle {
  animation: pulseSlow 4s ease-in-out infinite;
}

/* Date Time Container */
.date-time-container {
  position: relative;
  display: inline-block;
  background: linear-gradient(135deg, rgba(254, 243, 199, 0.8), rgba(254, 226, 226, 0.6));
  border-radius: 1.5rem;
  padding: 2rem 3rem;
  box-shadow:
    0 10px 30px rgba(217, 119, 6, 0.15),
    inset 0 2px 4px rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(217, 119, 6, 0.2);
}

.date-ornament {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  border: 2px solid #f59e0b;
  border-radius: 50%;
  transform: translateY(-50%);
}

.date-ornament.left {
  left: -15px;
  background: white;
}

.date-ornament.right {
  right: -15px;
  background: white;
}

.date-content {
  position: relative;
}

.time-badge {
  display: inline-block;
  background: white;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  border: 2px solid #fbbf24;
  box-shadow: 0 2px 8px rgba(217, 119, 6, 0.15);
}

/* Venue Cards */
.venue-card {
  position: relative;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(254, 243, 199, 0.3), rgba(255, 255, 255, 0.8));
  border-radius: 1rem;
  border: 1px solid rgba(217, 119, 6, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
}

.venue-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, #fbbf24, #f59e0b, #d97706);
}

.venue-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(217, 119, 6, 0.2);
}

.ceremony-card::before {
  background: linear-gradient(to right, #fbbf24, #f59e0b);
}

.reception-card::before {
  background: linear-gradient(to right, #d97706, #dc2626);
}

.venue-icon-container {
  text-align: center;
  margin-bottom: 1rem;
}

.venue-icon {
  font-size: 2.5rem;
  display: inline-block;
  animation: pulseSlow 3s ease-in-out infinite;
}

.venue-title {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #92400e;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.venue-details {
  text-align: center;
}

.venue-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.venue-address {
  color: #6b7280;
  line-height: 1.6;
}

/* Detail Cards */
.detail-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, rgba(243, 232, 255, 0.5), rgba(254, 243, 199, 0.5));
  border-radius: 0.75rem;
  border-left: 4px solid #d97706;
  transition: all 0.3s ease;
}

.detail-card:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(217, 119, 6, 0.15);
}

.dress-code-card {
  border-left-color: #a855f7;
  background: linear-gradient(135deg, rgba(243, 232, 255, 0.5), rgba(254, 243, 199, 0.3));
}

.instructions-card {
  border-left-color: #3b82f6;
  background: linear-gradient(135deg, rgba(219, 234, 254, 0.5), rgba(254, 243, 199, 0.3));
}

.detail-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.detail-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.detail-content {
  font-size: 1rem;
  color: #1f2937;
  font-weight: 500;
}

/* RSVP Section */
.rsvp-section {
  background: linear-gradient(135deg, rgba(254, 243, 199, 0.5), rgba(254, 226, 226, 0.3));
  border-radius: 1.5rem;
  padding: 2rem;
  border: 2px solid rgba(217, 119, 6, 0.3);
  box-shadow:
    0 10px 30px rgba(217, 119, 6, 0.1),
    inset 0 2px 4px rgba(255, 255, 255, 0.5);
}

.rsvp-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.rsvp-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #92400e;
  letter-spacing: 0.2em;
  padding: 0 1rem;
  white-space: nowrap;
}

.rsvp-deadline {
  text-align: center;
  color: #4b5563;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
}

.rsvp-contacts {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: white;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  border: 1px solid rgba(217, 119, 6, 0.1);
}

.contact-item:hover {
  transform: translateX(5px);
  box-shadow: 0 2px 8px rgba(217, 119, 6, 0.15);
  border-color: rgba(217, 119, 6, 0.3);
}

.contact-link {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

.contact-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.contact-label {
  font-weight: 600;
  color: #6b7280;
  font-size: 0.875rem;
}

.contact-value {
  color: #1f2937;
  font-size: 0.875rem;
}

/* Print Button */
.print-button {
  background: linear-gradient(135deg, #d97706, #b45309);
  color: white;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 0.75rem;
  box-shadow:
    0 10px 25px rgba(217, 119, 6, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.print-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(217, 119, 6, 0.4);
  background: linear-gradient(135deg, #b45309, #92400e);
}

.print-button:active {
  transform: translateY(0);
}

.print-icon {
  font-size: 1.25rem;
}

/* Print Styles */
@media print {
  .min-h-screen {
    min-height: auto;
    background: white !important;
  }

  .no-print,
  button {
    display: none !important;
  }

  .wedding-card-container {
    box-shadow: none;
    page-break-inside: avoid;
  }

  .golden-border {
    box-shadow: none;
  }

  /* Ensure colors are printed */
  * {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* Hide animations for print */
  .animate-float,
  .animate-fade-in,
  .animate-pulse-slow {
    animation: none !important;
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .card-content {
    padding: 1.5rem 1rem;
  }

  .name-block {
    padding: 1.5rem 1rem;
  }

  .date-time-container {
    padding: 1.5rem 2rem;
  }

  .venue-card {
    padding: 1.5rem;
  }

  .rsvp-section {
    padding: 1.5rem;
  }
}
</style>