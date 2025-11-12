<template>
  <div class="bg-gray-200">
    <Navbar v-if="!isHideNavbar"/>
    <div class="min-h-[calc(100dvh-60px)]">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '~/components/Navbar.vue';

const { isHideNavbar } = useNavbar();
</script>

<style>

</style>