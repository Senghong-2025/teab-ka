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
const siteUrl = 'https://havmk.pages.dev'; // Replace with your actual domain

useHead({
  // title: 'សិរីសួស្ដីអាពាហ៍ពិពាហ៍',
  meta: [
    { name: 'description', content: 'អញ្ជើញចូលរួមជាមួយពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង។' },

    { name: 'keywords', content: 'អាពាហ៍ពិពាហ៍, ការរៀបការ, wedding, invitation, ការអញ្ជើញ, សិរីសួស្ដី, havmk' },
    // Open Graph
    { property: 'og:title', content: 'សិរីសួស្ដីអាពាហ៍ពិពាហ៍' },
    { property: 'og:description', content: 'អញ្ជើញចូលរួមជាមួយពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង។' },
    { property: 'og:image', content: 'https://res.cloudinary.com/deevrlkam/image/upload/v1763022991/default/kzltymhlfd6sgargtmhv.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:url', content: `${siteUrl}${route.fullPath}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'HAVMK ហៅមក' },

    // Twitter
    // { name: 'twitter:card', content: 'summary_large_image' },
    // { name: 'twitter:title', content: 'សិរីសួស្ដីអាពាហ៍ពិពាហ៍' },
    // { name: 'twitter:description', content: 'អញ្ជើញចូលរួមជាមួយពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង។' },
    // { name: 'twitter:image', content: 'https://i.pinimg.com/736x/d5/16/bc/d516bc8ce09abb8e3455d62c4324a66a.jpg' },
  ],
})


const { getWeddingDetails, weddingDetails } = useWedding();

const urlParams = new URLSearchParams(window.location.search);

const weddingId = urlParams.get('event_id');
const formType = urlParams.get('type');
const invite = urlParams.get('to')?.toString();

onMounted(() => {
  getWeddingDetails(String(weddingId));
});
</script>

<style></style>