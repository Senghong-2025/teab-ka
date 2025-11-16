<template>
    <div>
        <div class="text-gray-800 text-[20px] p-4 bg-gray-100 rounded-md my-2 items-center gap-2 flex justify-between">
            <div class="flex gap-2 items-center">
                <p class="w-full">Sample Invite card</p>
                <input v-model="selectedColor" type="color" style="height: 40px; width: 40px; border-radius: 8px" @input="onColorChange">
            </div>
            <button class="text-red-500 p-2 rounded-md bg-gray-200" @click="resetBgColor">
                <RefreshCcw :size="20" class="text-red-400" />
            </button>
        </div>
        <Two :data="sampleData" :invite="store.user.username ?? 'Root'" />
    </div>
</template>

<script lang="ts" setup>
import Two from '~/components/wedding/card/Two.vue';
import type { WeddingFormData } from '~/models/wedding';
import { useStore } from '~~/stores';
import { RefreshCcw } from 'lucide-vue-next';

const store = useStore();
const router = useRouter();
const route = useRoute();
const selectedColor = ref(localStorage.getItem('inviteBgColor') || '#ffc310eb');

const onColorChange = () => {
    router.replace({
        query: {
            ...route.query,
            bc: selectedColor.value,
        }
    });
    localStorage.setItem('inviteBgColor', selectedColor.value);
};

const resetBgColor = () => {
    selectedColor.value = "#ffc310eb";
    localStorage.removeItem("inviteBgColor");
     router.replace({
        query: {
            ...route.query,
            bc: selectedColor.value,
        }
    });
}
const sampleData = {
    "id": "5Pn528RUmF5gQGLk2naG",
    "hostId": "655078",
    "bride": {
        "parentsNames": "",
        "fullName": "New Naming",
        "fullNameKh": "បារាដាមា"
    },
    "groom": {
        "parentsNames": "",
        "fullName": "Thshz",
        "fullNameKh": "សារាយ សាវា"
    },
    "weddingDate": "2025-11-24",
    "weddingTime": "17:26",
    "ceremony": {
        "addressKh": "",
        "address": "ជាដែនរដ្ឋបាលស្ថិតនៅ ខេត្តព្រៃវែង ដែលមានរដ្ឋបាល ១៣ឃុំ និង ១២២ភូមិ÷",
        "venueName": "ខាងស្រី"
    },
    "reception": {
        "address": "",
        "venueName": ""
    },
    "sameVenue": true,
    "dressCode": "",
    "rsvpDeadline": "",
    "website": "",
    "specialInstructions": "",
    "contact": {
        "phone": "0968755454",
        "email": "test@gmail.con"
    },
    "mapUrl": "djsjd",
    "coverPhoto": "",
    "photoPreview": [
        "http://res.cloudinary.com/deevrlkam/image/upload/v1763307455/default/rn6omr3wjffyw6zavt5x.jpg",
        "http://res.cloudinary.com/deevrlkam/image/upload/v1763307456/default/z1bnxlmp2jszg0wovuvf.jpg",
        "http://res.cloudinary.com/deevrlkam/image/upload/v1763307456/default/fxqwkthpdik0bfinonvi.jpg",
        "http://res.cloudinary.com/deevrlkam/image/upload/v1763307455/default/iuk3lhre0yf5dc3yag2t.jpg"
    ]
} as WeddingFormData;
</script>

<style></style>