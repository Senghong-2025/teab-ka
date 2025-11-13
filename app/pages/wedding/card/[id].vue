<template>
  <div>
    <CardTwo v-if="$route.params.id === String(2)"/>
    <CardOne v-else/>
  </div>
</template>

<script lang="ts" setup>
import CardTwo from '~/components/wedding/card/Two.vue';
import CardOne from '~/components/wedding/card/One.vue';

const route = useRoute();
const siteUrl = 'https://havmk.pages.dev'; // Replace with your actual domain

useSeoMeta({
  title: 'សិរីសួស្ដីអាពាហ៍ពិពាហ៍ | Wedding Invitation',
  description: 'អញ្ជើញចូលរួមជាមួយពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង។',
  ogTitle: 'សិរីសួស្ដីអាពាហ៍ពិពាហ៍',
  ogDescription: 'អញ្ជើញចូលរួមជាមួយពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង។',
  ogImage: 'https://i.pinimg.com/736x/d5/16/bc/d516bc8ce09abb8e3455d62c4324a66a.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogUrl: `${siteUrl}${route.fullPath}`,
  ogType: 'website',
  ogSiteName: 'HAVMK Wedding Invitations',
  twitterCard: 'summary_large_image',
  twitterTitle: 'សិរីសួស្ដីអាពាហ៍ពិពាហ៍',
  twitterDescription: 'អញ្ជើញចូលរួមជាមួយពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង។',
  twitterImage: 'https://i.pinimg.com/736x/d5/16/bc/d516bc8ce09abb8e3455d62c4324a66a.jpg'
})
onMounted(()=> {
    console.log('ROUTE', route);
})
</script>

<style>

</style>