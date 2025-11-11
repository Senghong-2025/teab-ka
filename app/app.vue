<template>
  <div class="text-red-500">
    TEST {{ currentEnv }}
  </div>
</template>
<script lang="ts" setup>

const config = useRuntimeConfig();
const currentEnv = computed(() => config.public.API_KEY);
</script>