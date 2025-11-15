<template>
  <div class="mb-2">
    <label>
      <span v-if="required" class="text-red-500">*</span> {{ label }}
    </label>
    <input 
      v-model="model" 
      :type="type"
      :required="required"
    >
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label: string
  modelValue: string
  type: 'text' | 'number' | 'tel' | 'email' | 'password'
  required?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const model = computed({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val),
})
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 0.25rem;
}
input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}
</style>
