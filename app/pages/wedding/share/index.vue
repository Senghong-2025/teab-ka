<template>
  <div>
    <CardTwo v-if="formType === String(2) && weddingDetails" :data="weddingDetails" :invite="invite ?? ''" />
    <div v-else>
      <span>No Found !!!</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { doc, getDoc } from 'firebase/firestore';
import { WeddingFormData, type IWeddingFormData } from '~/models/wedding';
import CardTwo from '~/components/wedding/card/Two.vue';

const route = useRoute();
const { $db } = useNuxtApp();
const siteUrl = 'https://havmk.pages.dev';

const weddingId = route.query.event_id as string;
const formType = route.query.type as string;
const invite = route.query.to as string;

// Fetch wedding details **before SSR**
const { data: weddingDetails } = await useAsyncData<IWeddingFormData | null>(
  `wedding-${weddingId}`,
  async () => {
    if (!weddingId) return null;

    const docRef = doc($db, 'wedding', weddingId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return null;

    const result = { id: docSnap.id, ...docSnap.data() } as IWeddingFormData;
    return new WeddingFormData(result);
  },
  { server: true, lazy: false }
);

// Build SEO using fetched data directly (SSR-ready)
const pageTitle = weddingDetails.value
  ? `អាពាហ៍ពិពាហ៍របស់ ${weddingDetails.value.bride.fullNameKh} & ${weddingDetails.value.groom.fullNameKh}`
  : 'សិរីសួស្ដីអាពាហ៍ពិពាហ៍';

const pageDescription = weddingDetails.value
  ? `អញ្ជើញចូលរួមពិធីអាពាហ៍ពិពាហ៍របស់ ${weddingDetails.value.bride.fullNameKh} និង ${weddingDetails.value.groom.fullNameKh} ${invite ?? ''}`
  : `អញ្ជើញចូលរួមជាមួយពិធីអាពាហ៍ពិពាហ៍ដ៏ស្រស់ស្អាតរបស់យើង។ ${invite ?? ''}`;

const pageImage =
  weddingDetails.value?.photoPreview?.at(0)  ||
  'https://res.cloudinary.com/deevrlkam/image/upload/v1763568486/default/xo539jhwon57j6bxgrxn.jpg';

useHead({
  htmlAttrs: { lang: 'en' },
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'អាពាហ៍ពិពាហ៍, ការរៀបការ, wedding, invitation' },

    // Open Graph
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:image', content: pageImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${siteUrl}${route.fullPath}` },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: pageImage },
  ],
  link: [{ rel: 'canonical', href: `${siteUrl}${route.path}` }],
});
</script>


<style></style>