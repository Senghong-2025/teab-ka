<template>
    <el-dialog
        :model-value="isShowDialog"
        width="350" modal-class="base-dialog"
        @close="$emit('update:isShowDialog', false)"
    >
        <button class=" absolute right-2 top-2" @click="$emit('update:isShowDialog', false)">
            <X :size="20" class="text-gray-400" />
        </button>
        <div class="my-2">
            <span class="text-[18px] font-medium text-indigo-500">{{ title }}</span>
            <div class="mt-2">
                <slot />
            </div>
        </div>
    </el-dialog>
</template>

<script lang="ts" setup>
import { X } from 'lucide-vue-next';

defineProps<{
    isShowDialog: boolean
    title?: string
}>();

defineEmits<{
    (e: 'update:isShowDialog', val: boolean): void
    (e: 'submit'): void
}>()

</script>

<style lang="scss">
.base-dialog {
    position: relative;

    .el-dialog {
        padding: 0;
    }

    .el-dialog__header {
        display: none;
    }

    .el-dialog__body {
        padding: 8px;
    }
}
</style>
