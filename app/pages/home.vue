<template>
  <div class="p-2 md:p-4">
    <div class="text-[16px] font-medium my-2 uppercase">{{ $t('pages.inviteType') }}</div>
    <ProductList />
  </div>
</template>

<script lang="ts" setup>
import ProductList from '~/components/ProductList.vue';

</script>

<style>

</style>
