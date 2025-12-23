<template>
  <div class="min-h-screen bg-gradient-to-b from-black  to-gray-900 text-gray-100">
    <div class="max-w-6xl mx-auto px-4 py-10 lg:py-14">
      <!-- Header -->
      <header class="mb-8">
        <p class="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
          Product
        </p>
        <div class="flex flex-wrap items-center gap-3 mb-2">
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-black">
            {{ product.name }}
          </h1>
          <!-- Fleet count badge -->
          <div
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                   bg-[#9F153E]/20 border border-[#9F153E]/40 backdrop-blur-xl"
          >
            <span class="inline-block h-1.5 w-1.5 rounded-full bg-[#9F153E]"></span>
            <span class="text-xs font-semibold text-gray-100">7+ Fleet Available</span>
          </div>
        </div>
        <p class="text-sm sm:text-base text-gray-300 mt-2 max-w-2xl">
          {{ product.tagline }}
        </p>
      </header>

      <!-- Main layout -->
      <div class="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-start">
        <!-- Left: main image -->
        <section
          class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl overflow-hidden"
        >
          <div class="relative">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-80 sm:h-96 lg:h-[26rem] object-contain bg-black/40"
            />
          </div>
        </section>

        <!-- Right: description -->
        <section class="space-y-6">
          <!-- Name + short meta -->
          <div class="space-y-3">
            <h2 class="text-xl sm:text-2xl font-semibold">
              {{ product.name }}
            </h2>
            <p class="text-sm text-gray-300 leading-relaxed">
              {{ product.description }}
            </p>

            <div class="flex flex-wrap items-center gap-2 text-[11px] text-gray-300">
              <span
                class="px-3 py-1 rounded-full bg-white/5 border border-white/10 uppercase tracking-[0.18em]"
              >
                {{ product.category }}
              </span>
              <span
                class="px-3 py-1 rounded-full bg-white/5 border border-white/10"
              >
                {{ product.meta }}
              </span>
            </div>
          </div>

          <!-- Key points -->
          <div class="space-y-2">
            <h3 class="text-xs uppercase tracking-[0.18em] text-gray-300">
              Highlights
            </h3>
            <ul class="space-y-1.5 text-sm text-gray-200">
              <li v-for="(point, idx) in product.points" :key="idx" class="flex gap-2">
                <span class="mt-1 h-1.5 w-1.5 rounded-full" :style="{ backgroundColor: '#9F153E' }"></span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>

          <!-- Simple CTA strip -->
          <div
            class="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3
                   flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <p class="text-xs text-gray-300">
              For detailed specs or pricing, share this configuration on the contact page.
            </p>
            <router-link
              to="/contact"
              class="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold
                     text-white border border-[#9F153E] bg-[#9F153E]
                     hover:bg-[#b81b4a] transition"
            >
              Enquire 
            </router-link>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const product = {
  name: 'Crawler Crane',
  tagline: 'Heavy-lift solution for industrial and infrastructure projects.',
  category: 'Lifting equipment',
  meta: '45-150 metric tons capacity',
  image: '/assets/equipments/crawlercrane.jpeg',
  description:
    'Track-mounted crawler cranes offering exceptional stability and lifting capacity for large-scale construction, plant maintenance, and heavy industrial operations. Designed for challenging terrain and extended reach requirements.',
  points: [
    'Lifting capacity ranging from 45 to 150 metric tons',
    'Superior stability on uneven and soft ground',
    'Extended boom configurations for maximum reach',
    'Ideal for plant erection, bridge construction, and heavy assembly work'
  ]
}
</script>
