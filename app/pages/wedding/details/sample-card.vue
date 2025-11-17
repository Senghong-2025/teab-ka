<template>
    <div>
        <div class="text-gray-800 text-[20px] p-4 bg-gray-100 rounded-md my-2 items-center gap-2 flex justify-between">
            <div class="text-[12px] grid">
                <div class="flex items-center gap-4">
                    <span>{{ $t('Card Type:') }}</span>

                    <label class="flex items-center gap-1">
                        <input v-model="selectedCard" type="radio" value="1" >
                        {{ $t('Card 1') }}
                    </label>

                    <label class="flex items-center gap-1">
                        <input v-model="selectedCard" type="radio" value="2" >
                        {{ $t('Card 2') }}
                    </label>
                </div>
                <div class="flex gap-1 items-center">
                    <p>{{ $t('Card Color:') }}</p>
                    <input v-model="cardColor" type="color" @input="onCardColorChange">
                </div>
                <div class="flex gap-1 items-center">
                    <p>{{ $t('Text Color:') }}</p>
                    <input v-model="textColor" type="color" @input="onTextColorChange">
                </div>
            </div>
            
            <button class="text-red-500 p-2 rounded-md bg-gray-200" @click="resetColors">
                <RefreshCcw :size="20" class="text-red-400" />
            </button>
        </div>
        <Two :data="sampleData" invite="Mrr. Senghong" />
    </div>
</template>

<script lang="ts" setup>
import Two from '~/components/wedding/card/Two.vue';
import type { WeddingFormData } from '~/models/wedding';
import { RefreshCcw } from 'lucide-vue-next';

const router = useRouter();
const route = useRoute();
const { inviteCardColor: cardColor, inviteTextColor: textColor, onRemoveWeddingCardColor } = useColors();
const selectedCard = ref(2);

onMounted(() => {
    router.replace({
        query: {
            ...route.query,
            bc: cardColor.value,
            tc: textColor.value,
        }
    });
})

const onCardColorChange = () => {
    router.replace({
        query: {
            ...route.query,
            bc: cardColor.value,
        }
    });
};

const onTextColorChange = () => {
    router.replace({
        query: {
            ...route.query,
            tc: textColor.value,
        }
    });
};

const resetColors = () => {
    onRemoveWeddingCardColor();
    router.replace({
        query: {
            ...route.query,
            bc: cardColor.value,
            tc: textColor.value,
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

<style scoped>
/* .share-bg-btn {} */
</style>