<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      v-for="item in productList" :key="item.name"
      class="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg shadow transition relative"
    >
      <div class="text-[16px] font-bold text-indigo-500 flex gap-2">
        <span>{{ item.name }}</span>
        <component :is="getIcon(item.icon)" class="w-6 h-6 text-pink-500" />
      </div>
      <div class="text-[12px] text-gray-600">
        {{ item.description }}
      </div>
     <div class="flex justify-center w-full mt-2">
        <button class="btn-primary w-full" @click="navigateTo(item.path)">
          <span>{{ $t('common.start') }}</span>
        </button>
     </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Component } from 'vue';
import {
  Heart,
  Trophy,
  PartyPopper,
  Cake,
  Baby,
  GraduationCap,
  Briefcase,
  Gem,
  Snowflake,
  Home
} from 'lucide-vue-next';

const { productList } = useProductList();

const iconMap: Record<string, Component> = {
  'heart': Heart,
  'football': Trophy,
  'party-popper': PartyPopper,
  'cake': Cake,
  'baby': Baby,
  'graduation-cap': GraduationCap,
  'briefcase': Briefcase,
  'gem': Gem,
  'snowflake': Snowflake,
  'home': Home
};

const getIcon = (iconString: string) => {
  const iconName = iconString.split(':')[1] || 'heart';
  return iconMap[iconName] || Heart;
};
</script>

<style>

</style>