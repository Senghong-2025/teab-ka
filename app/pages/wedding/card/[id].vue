<template>
  <div>
    <CardTwo v-if="$route.params.id === String(2)"/>
    <CardOne v-else/>
  </div>
</template>

<script lang="ts" setup>
import CardTwo from '~/components/wedding/card/Two.vue';
import CardOne from '~/components/wedding/card/One.vue';

onMounted(()=> {
    const route = useRoute();
    console.log('ROTUE', route);
})
</script>

<style>

</style>