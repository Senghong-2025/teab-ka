<template>
  <div class="bg-gray-300 default-layout">
    <Navbar v-if="!isHideNavbar"/>
    <div :class="!isHideNavbar ? 'min-h-[calc(100dvh-60px)]' : 'min-h-screen'">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '~/components/Navbar.vue';

const { isHideNavbar } = useNavbar();
</script>