<template>
  <div class="w-full content-center text-center bg-transparent space-y-6">
    <div class="grid">
      <div class="grid place-content-center text-amber-600 text-[14px] mb-2">
        <p class="text-[18px] mb-4"> សូមគោរពអញ្ជើញ </p>
        <p>អ្នកឧកញ៉ា ឧកញ៉ាធិបតី ឧកញ៉ា លោក លោកស្រី</p>
        <p>អ្នកនាងកញ្ញា អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយសក្នុង</p>
        <p>ពិធីមង្គលអាពាហ៍ពិពាហ៍ កូនប្រុស - កូនស្រី របស់យើងខ្ញុំ</p>
        <p>ដែលនិងប្រព្រឹត្តទៅនៅ</p>
      </div>
      <span>
        <p class="text-[25px] font-medium text-amber-900">ថ្ងៃ {{ dateTimeForDisplayKhmer(weddingDate) }}</p>
        <p class="text-[25px] font-medium text-amber-900">វេលា {{ getKhmerTimeDisplay(String(weddingTime)) }}</p>  
        <p class="text-[12px] font-medium text-amber-700">{{ address }}</p>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  address: string
  weddingDate: string
  weddingTime: string
}>();
</script>

<style>
</style>
