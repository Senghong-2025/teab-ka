<template>
  <div>
    TEST {{ currentEnv }}
  </div>
</template>
<script lang="ts" setup>

const config = useRuntimeConfig();
const currentEnv = computed(() => config.public.API_KEY);
</script>