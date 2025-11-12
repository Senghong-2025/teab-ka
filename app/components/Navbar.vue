<template>
  <div class="flex w-full h-[50px] bg-indigo-700 items-center px-2 md:px-4 justify-between z-50 sticky top-0">
    <div class="w-full">
      <div class="w-8 h-8 rounded-full bg-gray-300">
        <img src="../assets/icons/invite.png" class="h-full w-full object-contain" alt="">
      </div>
    </div>
    <div class="flex items-center gap-2 justify-end">
      <button
        v-for="loc in availableLocales"
        :key="loc.code"
        :class="[
          'px-3 py-1.5 rounded-md font-medium text-sm transition-all duration-200',
          locale === loc.code
            ? 'bg-white text-indigo-700 shadow-md'
            : 'bg-indigo-600 text-white hover:bg-indigo-500'
        ]"
        @click="switchLanguage(loc.code)"
      >
        {{ loc.name }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { locale, setLocale } = useI18n();

const availableLocales = [
  { code: 'en' as const, name: 'EN' },
  { code: 'kh' as const, name: 'ភាសាខ្មែរ' }
];

function switchLanguage(newLocale: 'en' | 'kh') {
  setLocale(newLocale);
}
</script>

<style></style>