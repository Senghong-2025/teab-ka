<template>
    <div
        class="relative max-w-[380px] w-full py-4 px-4 bg-linear-to-br from-[#f0dea9] to-[#fccc74] rounded-3xl shadow-[0_20px_40px_rgba(180,140,80,0.2)] border border-[#fde8d0] animate-fade-in-up hover:shadow-[0_25px_50px_rgba(180,140,80,0.3)] transition-all duration-300">
        <div class="text-center">
           <div class="flex justify-center items-center h-64 -mt-20">
            <svg viewBox="0 0 500 200" class="w-[500px] h-[400px]">
                <path id="curve" d="M50,150 Q250,20 450,150" fill="transparent" stroke="transparent" />
                    <text text-anchor="middle" dominant-baseline="middle">
                        <textPath href="#curve" startOffset="50%">
                            <tspan style="font-size:50px; fill:#78350f;">សិរីសួស្ដីអាពាហ៍ពិពាហ៍</tspan>
                        </textPath>
                    </text>
                </svg>
            </div>
            <div class="w-full flex justify-center -mt-25 mb-4 relative modern-electric-heart">
                <Heart 
                    color="#FC9386" 
                    :size="200"
                    class="modern-holo-heart"
                />
                <div class="absolute text-[30px] text-amber-900 top-16 right-31">
                    <span>រ</span> & <span>ស</span>
                </div>
            </div>
            <h3
                class="font-khmer text-2xl font-bold text-amber-900 mb-1 animate-fade-in"
                style="animation-delay: 0.25s">
                {{ 'សូមគោរពអញ្ជើញ' }}
            </h3>
            <h3 class="font-serif text-xl font-semibold text-amber-800 animate-fade-in" style="animation-delay: 0.35s">
                {{ 'Invitation' }}
            </h3>
            <div class="text-gray-200 text-[20px] bg-amber-800/20 font-medium border-2 rounded-2xl my-4 border-amber-200 w-full min-h-[60px] text-center content-center invite-name-box relative">
                <span>{{ invite }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Heart } from 'lucide-vue-next';

defineProps<{invite: string}>();
</script>

<style scoped>
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

.modern-holo-heart {
  position: relative;
  filter: drop-shadow(0 0 20px rgb(255, 204, 0));
  animation:
    hueShift 4s linear infinite,
    pulseGlow 1.8s ease-in-out infinite alternate,
    float 6s ease-in-out infinite,
    flicker 0.12s infinite;
  transform: translateZ(0);
}

/* ------------------------------------------------------------------ */
/* 2. Gradient fill (SVG) – injected via <defs> + CSS variable       */
/* ------------------------------------------------------------------ */
.modern-holo-heart > svg {
  width: 100%;
  height: 100%;
}

/* SVG gradient that follows the hue animation */
.modern-holo-heart > svg defs gradient stop:nth-child(1) { stop-color: #ff6bce; }
.modern-holo-heart > svg defs gradient stop:nth-child(2) { stop-color: #ff6b08; }
.modern-holo-heart > svg defs gradient stop:nth-child(3) { stop-color: #ff0f0f; }

/* ------------------------------------------------------------------ */
/* 3. Animations                                                     */
/* ------------------------------------------------------------------ */

/* Hue rotation (full rainbow cycle) */
@keyframes hueShift {
  0%   { filter: hue-rotate(0deg)   drop-shadow(0 0 20px rgba(216, 227, 4, 0.958)); }
  100% { filter: hue-rotate(360deg) drop-shadow(0 0 20px rgba(255, 191, 0, 0.887)); }
}

/* Pulsing glow + slight scale
@keyframes pulseGlow {
  0% {
    filter: drop-shadow(0 0 15px currentColor)
            drop-shadow(0 0 30px currentColor);
    transform: scale(1);
  }
  100% {
    filter: drop-shadow(0 0 25px currentColor)
            drop-shadow(0 0 55px currentColor)
            drop-shadow(0 0 90px #fbe605);
    transform: scale(1.06);
  }
} */

/* Gentle floating */
@keyframes float {
  0%, 100% { transform: translateY(0px)  scale(1); }
  50%      { transform: translateY(-10px) scale(1.03); }
}

/* Subtle electric flicker */
@keyframes flicker {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.96; }
}

/* ------------------------------------------------------------------ */
/* 4. Holographic aura (pseudo-element)                              */
/* ------------------------------------------------------------------ */
.modern-holo-heart::before {
  content: "";
  position: absolute;
  inset: -30px;
  border-radius: 50%;
  background: radial-gradient(circle at center,
              rgba(243, 34, 6, 0.543),
              transparent 70%);
  animation: aura 3s ease-in-out infinite;
  pointer-events: none;
  z-index: -1;
}
@keyframes aura {
  0%, 100% { opacity: 0.3; transform: scale(0.9); }
  50%      { opacity: 0.6; transform: scale(1.15); }
}

/* ------------------------------------------------------------------ */
/* 5. Optional: 3-D tilt on hover (Tailwind + JS)                    */
/* ------------------------------------------------------------------ */
.modern-holo-heart:hover {
  animation-play-state: paused;
  transform: perspective(600px) rotateX(8deg) rotateY(-8deg);
  transition: transform 0.3s ease;
}
</style>