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
    server: true,
    lazy: false,
  }
);

// Hardcoded SEO for testing
const pageTitle = 'សិរីសួស្ដីអាពាហ៍ពិពាហ៍';
const pageDescription = 'អញ្ជើញចូលរួមជាមួយពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង។';
const pageImage = 'https://res.cloudinary.com/deevrlkam/image/upload/v1763568486/default/xo539jhwon57j6bxgrxn.jpg';

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'អាពាហ៍ពិពាហ៍, ការរៀបការ, wedding, invitation, ការអញ្ជើញ, សិរីសួស្ដី, havmk' },

    // Open Graph
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:image', content: pageImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:secure_url', content: pageImage },
    { property: 'og:image:alt', content: pageTitle },
    { property: 'og:url', content: `${siteUrl}${route.fullPath}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'HAVMK ហៅមក' },
    { property: 'og:locale', content: 'km_KH' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: pageImage },
    { name: 'twitter:image:alt', content: pageTitle },
  ],
  link: [
    { rel: 'canonical', href: `${siteUrl}${route.path}` },
  ],
});
</script>

<style></style>