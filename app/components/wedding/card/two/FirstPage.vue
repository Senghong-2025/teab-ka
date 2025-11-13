<template>
    <div
        class="relative max-w-[380px] w-full py-4 px-4 bg-linear-to-br from-[#fffdf7] to-[#fef9f0] rounded-3xl shadow-[0_20px_40px_rgba(180,140,80,0.2)] border border-[#fde8d0] animate-fade-in-up hover:shadow-[0_25px_50px_rgba(180,140,80,0.3)] transition-all duration-300">
        <div class="text-center">
           <div class="flex justify-center items-center h-64 -mt-20">
            <svg viewBox="0 0 500 200" class="w-[500px] h-[400px]">
                <!-- Define the curved path -->
                <path id="curve" d="M50,150 Q250,20 450,150" fill="transparent" stroke="transparent" />
                    <!-- Text following the curve -->
                    <text text-anchor="middle" dominant-baseline="middle">
                        <textPath href="#curve" startOffset="50%">
                            <tspan style="font-size:50px; fill:#78350f;">សិ</tspan>
                            <tspan style="font-size:42px; fill:#78350f;">រី</tspan>
                            <tspan style="font-size:34px; fill:#78350f;">សួ</tspan>
                            <tspan style="font-size:30px; fill:#78350f;">ស្ដី</tspan>
                            <tspan style="font-size:28px; fill:#78350f;">អា</tspan>
                            <tspan style="font-size:30px; fill:#78350f;">ពា</tspan>
                            <tspan style="font-size:34px; fill:#78350f;">ហ៍</tspan>
                            <tspan style="font-size:42px; fill:#78350f;">ពិ</tspan>
                            <tspan style="font-size:50px; fill:#78350f;">ពាហ៍</tspan>
                        </textPath>
                    </text>
                </svg>
            </div>
            <h3
                class="font-khmer text-2xl font-bold text-amber-900 mb-1 animate-fade-in"
                style="animation-delay: 0.25s">
                {{ 'សូមគោរពអញ្ជើញ' }}
            </h3>
            <h3 class="font-serif text-xl font-semibold text-amber-800 animate-fade-in" style="animation-delay: 0.35s">
                {{ 'Invitation' }}
            </h3>
            <div class="text-amber-500 border-2 rounded-2xl border-amber-800 w-full min-h-[60px] text-center content-center">
                <span>&&</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

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
</style>