<template>
    <button :class="[type || 'btn-info', {'cursor-not-allowed! opacity-50': isLoading }]" class="flex gap-1 items-center justify-center" :disabled="isLoading" >
        <Loader v-if="isLoading" class="animate-spin" :size="16" />
        <span>{{ name }}</span>
    </button>
</template>

<script lang="ts" setup>
import { Loader } from 'lucide-vue-next';
defineProps<{
    name: string
    isLoading?: boolean
    type?: 'btn-primary' | 'btn-secondary' | 'btn-info'
}>();
</script>

<style scoped>
</style>