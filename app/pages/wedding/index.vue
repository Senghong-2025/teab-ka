<template>
  <div class="p-4">
    <div class="text-lg font-medium my-2 flex gap-2 items-center">
      <p class="text-indigo-600">Wedding List</p>
      <button class="bg-gray-200 rounded-md p-2 cursor-pointer" @click="navigateTo('/wedding/wedding-form')">
        <Plus class="text-indigo-500"/>
      </button>
    </div>
    <div v-if="isLoading">
      <span>Getting data...</span>
    </div>
    <template v-else>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <div v-for="(data, index) in weddingData" :key="index">
          <CardItem :data="data" />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import CardItem from '~/components/event/CardItem.vue';
import { Plus } from 'lucide-vue-next';
import { useStore } from '~~/stores';

const { getByHostId, weddingData, isLoading } = useWedding();
const store = useStore();
onMounted( async () => {
  await getByHostId(String(store.user.random_id));
})
</script>

<style>

</style>