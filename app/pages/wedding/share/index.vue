<template>
  <div>
    <CardTwo v-if="formType === String(2)" :data="weddingDetails" :invite="invite ?? ''" />
    <div v-else>
      <span>No Found !!!</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardTwo from '~/components/wedding/card/Two.vue';
// import CardOne from '~/components/wedding/card/One.vue';

const route = useRoute();
const siteUrl = 'https://havmk.pages.dev';

// Use route.query for SSR compatibility
const weddingId = computed(() => route.query.event_id as string);
const formType = computed(() => route.query.type as string);
const invite = computed(() => route.query.to as string);

const { getWeddingDetails, weddingDetails } = useWedding();

// Fetch wedding details for SEO
if (weddingId.value) {
  await getWeddingDetails(String(weddingId.value));
}

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

useHead({
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
    { property: 'og:url', content: `${siteUrl}${route.fullPath}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'HAVMK ហៅមក' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: pageImage },
  ],
  link: [
    { rel: 'canonical', href: `${siteUrl}${route.path}` },
  ],
})
</script>

<style></style>