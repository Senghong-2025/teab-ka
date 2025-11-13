<template>
  <div>
    <CardTwo v-if="$route.params.id === String(2)"/>
    <CardOne v-else/>
  </div>
</template>

<script lang="ts" setup>
import CardTwo from '~/components/wedding/card/Two.vue';
import CardOne from '~/components/wedding/card/One.vue';

useSeoMeta({
  title: 'សិរីសួស្ដីអាពាហ៍ពិពាហ៍ | Wedding Invitation',
  description: 'អញ្ជើញចូលរួមជាមួយពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង។',
  ogTitle: 'សិរីសួស្ដីអាពាហ៍ពិពាហ៍',
  ogDescription: 'ពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង។',
  ogImage: 'https://i.pinimg.com/736x/d5/16/bc/d516bc8ce09abb8e3455d62c4324a66a.jpg',
  twitterCard: 'summary_large_image'
})
onMounted(()=> {
    const route = useRoute();
    console.log('ROTUE', route);
})
</script>

<style>

</style>