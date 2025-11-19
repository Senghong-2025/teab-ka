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

    const weddingDocRef = doc($db, 'wedding', weddingId.value);
    const weddingDocSnap = await getDoc(weddingDocRef);

    if (!weddingDocSnap.exists()) return null;

    const result = {
      id: weddingDocSnap.id,
      ...weddingDocSnap.data()
    } as IWeddingFormData;

    return new WeddingFormData(result);
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

  // Open Graph
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogImage: pageImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogUrl: `${siteUrl}${route.fullPath}`,
  ogType: 'website',
  ogSiteName: 'HAVMK ហៅមក',

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: pageImage,
});

useHead({
  link: [
    { rel: 'canonical', href: `${siteUrl}${route.path}` },
  ],
});
</script>

<style></style>