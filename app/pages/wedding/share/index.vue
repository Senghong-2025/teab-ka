<template>
  <div>
    <CardTwo v-if="formType === String(2) && weddingDetails" :data="weddingDetails" :invite="invite ?? ''" />
    <div v-else>
      <span>No Found !!!</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardTwo from '~/components/wedding/card/Two.vue';
import { doc, getDoc } from 'firebase/firestore';
import { WeddingFormData, type IWeddingFormData } from '~/models/wedding';

const route = useRoute();
const siteUrl = 'https://havmk.pages.dev';

// Use route.query for SSR compatibility
const weddingId = computed(() => route.query.event_id as string);
const formType = computed(() => route.query.type as string);
const invite = computed(() => route.query.to as string);

const { $db } = useNuxtApp();

// Fetch wedding details with useAsyncData for proper SSR
const { data: weddingDetails } = await useAsyncData(
  `wedding-${weddingId.value}`,
  async () => {
    if (!weddingId.value) return null;

    try {
      const weddingDocRef = doc($db, 'wedding', weddingId.value);
      const weddingDocSnap = await getDoc(weddingDocRef);

      if (!weddingDocSnap.exists()) return null;

      const result = {
        id: weddingDocSnap.id,
        ...weddingDocSnap.data()
      } as IWeddingFormData;

      return new WeddingFormData(result);
    } catch (error) {
      console.error('Error fetching wedding details:', error);
      return null;
    }
  },
  {
    server: true, // Ensure it runs on server
    lazy: false,  // Wait for data before rendering
  }
);

const pageTitle = computed(() => {
  if (weddingDetails.value?.bride?.fullNameKh && weddingDetails.value?.groom?.fullNameKh) {
    return `សិរីសួស្ដីអាពាហ៍ពិពាហ៍ ${weddingDetails.value.groom.fullNameKh} & ${weddingDetails.value.bride.fullNameKh}`;
  }
  return 'សិរីសួស្ដីអាពាហ៍ពិពាហ៍';
});

const pageDescription = computed(() => {
  if (weddingDetails.value?.weddingDateForDisplay) {
    return `អញ្ជើញចូលរួមជាមួយពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង នៅថ្ងៃទី ${weddingDetails.value.weddingDateForDisplay}`;
  }
  return 'អញ្ជើញចូលរួមជាមួយពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង។';
});

const pageImage = computed(() =>
  weddingDetails.value?.coverPhoto || 'https://res.cloudinary.com/deevrlkam/image/upload/v1763568486/default/xo539jhwon57j6bxgrxn.jpg'
);

// Use useSeoMeta for better SSR SEO support
useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  keywords: 'អាពាហ៍ពិពាហ៍, ការរៀបការ, wedding, invitation, ការអញ្ជើញ, សិរីសួស្ដី, havmk',

  // Open Graph (Facebook, LinkedIn, Discord, WhatsApp, Telegram, iMessage)
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogImage: pageImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: pageTitle,
  ogUrl: `${siteUrl}${route.fullPath}`,
  ogType: 'website',
  ogSiteName: 'HAVMK ហៅមក',
  ogLocale: 'km_KH',

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: pageImage,
  twitterImageAlt: pageTitle,
});

// Default SEO values
const defaultTitle = 'សិរីសួស្ដីអាពាហ៍ពិពាហ៍';
const defaultDescription = 'អញ្ជើញចូលរួមជាមួយពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង។';
const defaultImage = 'https://res.cloudinary.com/deevrlkam/image/upload/v1763568486/default/xo539jhwon57j6bxgrxn.jpg';

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: pageTitle.value || defaultTitle,
  meta: [
    // Default meta tags (fallbacks)
    { name: 'description', content: pageDescription.value || defaultDescription },
    { name: 'keywords', content: 'អាពាហ៍ពិពាហ៍, ការរៀបការ, wedding, invitation, ការអញ្ជើញ, សិរីសួស្ដី, havmk' },

    // Open Graph with defaults
    { property: 'og:title', content: pageTitle.value || defaultTitle },
    { property: 'og:description', content: pageDescription.value || defaultDescription },
    { property: 'og:image', content: pageImage.value || defaultImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:secure_url', content: pageImage.value || defaultImage },
    { property: 'og:image:alt', content: pageTitle.value || defaultTitle },
    { property: 'og:url', content: `${siteUrl}${route.fullPath}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'HAVMK ហៅមក' },
    { property: 'og:locale', content: 'km_KH' },

    // Twitter Card with defaults
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle.value || defaultTitle },
    { name: 'twitter:description', content: pageDescription.value || defaultDescription },
    { name: 'twitter:image', content: pageImage.value || defaultImage },
    { name: 'twitter:image:alt', content: pageTitle.value || defaultTitle },
  ],
  link: [
    { rel: 'canonical', href: `${siteUrl}${route.path}` },
  ],
});
</script>

<style></style>