<template>
  <div class="w-full min-h-screen items-center text-center">
    <span>Hello tesitng</span>
    <div class="grid place-content-center justify-center min-h-screen">
      <div class="flex gap-2">
        <input type="file" accept="image/*" @change="onSingleFileChange">
        <button class="text-gray-200 bg-blue-400 px-2 py-1 rounded-md" @click="onUploadImage">
          Submit
        </button>
      </div>
     <div v-if="previewImage">
       <img :src="previewImage" class="w-[400px] h-[400px] overflow-hidden rounded-md object-contain" alt="">
     </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const {
  uploadSingleImage,
  selectedFile,
  previewImage,
  onSingleFileChange,
} = useImageUpload();

const onUploadImage = async () => {
  if (!selectedFile.value) return;
  await uploadSingleImage("teabka");
}
</script>

<style>

</style>