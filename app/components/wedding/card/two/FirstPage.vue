<template>
    <div
        class="relative max-w-[400px] w-full py-6 px-4 rounded-3xl shadow-[0_20px_40px_rgba(180,140,80,0.2)] border border-[#fde8d0] animate-fade-in-up hover:shadow-[0_25px_50px_rgba(180,140,80,0.3)] transition-all duration-300"
        :style="{ backgroundColor: bg }"
        >
        <div class="text-center">
          <span class="text-[30px] font-moul" :style="{ color: textColor }">សិរីសួស្ដីអាពាហ៍ពិពាហ៍</span>
          <div class="grid grid-cols-3 place-items-center">
            <span class="text-[20px] font-moul" :style="{ color: textColor }">
              {{ event?.groom?.fullNameKh.split(' ').pop() }}
            </span>

            <div class="w-20 h-auto flex justify-center items-center">
              <img src="../../../../assets/images/heart.png"
                  class="w-full h-full object-contain"
                  alt="">
            </div>

            <span class="text-[20px] font-moul" :style="{ color: textColor }">
              {{ event?.bride?.fullNameKh.split(' ').pop() }}
            </span>
          </div>
            <h3
                class="font-khmer text-2xl font-bold mb-1 animate-fade-in"
                :style="{ color: textColor, animationDelay: '0.25s' }">
                {{ 'សូមគោរពអញ្ជើញ' }}
            </h3>
            <h3 class="font-imperial text-xl font-semibold animate-fade-in" :style="{ color: textColor, animationDelay: '0.35s' }">
                {{ 'Invitation' }}
            </h3>
            <div class="text-gray-200 text-[20px] bg-amber-800/20 font-medium border-2 rounded-2xl my-4 border-amber-200 w-full min-h-[60px] text-center content-center invite-name-box relative">
                <span>{{ invite }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { WeddingFormData } from '~/models/wedding';

defineProps<{invite: string, event:WeddingFormData}>();
const bg = useShareBackground();
const textColor = useShareTextColor();
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Moul&family=Pacifico&display=swap');

.font-moul {
  font-family: "Moul", serif !important;
}

.curved-text {
  font-size: 40px;
  fill: #78350f; /* amber-900 */
  font-weight: 700;
  letter-spacing: 2px;
  transform-origin: center;
  transform: perspective(500px) rotateX(15deg) scale(2.1);
}
.curved-text textPath {
  dominant-baseline: middle;
}
.invite-name-box {
    position: relative;
}
.invite-name-box::after {
    content: '';
    position: absolute;
    top: -78px;
    right: 0;
    width: 179px;
    height: 130px;
    right: -33px;
    z-index: 1000;
    background-image: url('~/assets/images/flow-1.png');
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotate(5deg);
}

.invite-name-box::before {
    content: '';
    position: absolute;
    bottom: -72px;
    right: 0;
    width: 179px;
    height: 130px;
    left: -50px;
    z-index: 1000;
    background-image: url('~/assets/images/flow-1.png');
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotate(193deg);
}
</style>