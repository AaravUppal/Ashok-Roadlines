<!-- src/views/Gallery.vue -->
<template>
  <div class="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
    <header class="relative overflow-hidden border-b border-white/5">
      <div
        class="absolute inset-0 opacity-40"
        :style="{ background: 'radial-gradient(circle at top, #9F153E 0, transparent 60%)' }"
      ></div>

      <div class="relative max-w-6xl mx-auto px-4 py-8 sm:py-10 flex flex-col gap-6">
        <div class="flex flex-col sm:flex-row justify-between gap-4 sm:items-end">
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-gray-300 mb-1">
              Ashok Roadlines
            </p>
            <h1 class="text-3xl sm:text-4xl font-semibold tracking-wide">
              Photo Gallery
            </h1>
            <p class="mt-3 text-sm sm:text-base text-gray-300 max-w-xl">
              A collection of moments from our day-to-day operations.
            </p>
          </div>

          <div
            class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 sm:px-5 sm:py-4 shadow-lg max-w-xs sm:max-w-sm"
          >
            <p class="text-xs text-gray-200 mb-1 uppercase tracking-[0.18em]">
              Gallery overview
            </p>
            <div class="flex items-center justify-between">
              <div>
                <p class="text-lg font-semibold text-white">
                  {{ imageFiles.length }}
                </p>
                <p class="text-xs text-gray-300">
                  Photos in this gallery
                </p>
              </div>
              <div class="h-10 w-10 rounded-full flex items-center justify-center"
                   :style="{ backgroundColor: '#9F153E' }">
                <span class="text-xs font-semibold tracking-wide">
                  AR
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 text-xs text-gray-300">
          <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            Highlights
          </span>
          <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            On the move
          </span>
          <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            Everyday work
          </span>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-4 py-8 sm:py-10">
        <div
          v-if="imageFiles.length"
          class="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            v-for="(file, index) in imageFiles"
            :key="file"
            class="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10
                   hover:border-[#9F153E] hover:bg-white/10 transition shadow-lg"
          >
            <div class="relative">
              <!-- public/ path => /assets/clients/filename -->
              <img
                :src="`/assets/clients/${file}`"
                :alt="file"
                class="w-full h-52 sm:h-56 md:h-64 object-contain bg-black/40
                       group-hover:scale-[1.03] transition duration-500"
                loading="lazy"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent
                       opacity-0 group-hover:opacity-100 transition duration-300"
              ></div>

              <div
                class="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex items-center justify-between"
              >
                <div class="text-left">
                  <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-200">
                    Ashok Roadlines
                  </p>
                  <p class="text-sm font-medium truncate max-w-[10rem]">
                    {{ file }}
                  </p>
                </div>
                <div
                  class="h-8 w-8 rounded-full flex items-center justify-center border border-white/30
                         bg-black/40 backdrop-blur-md text-[10px] uppercase tracking-[0.18em]"
                >
                  #{{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p
          v-else
          class="text-center text-gray-400 text-sm sm:text-base mt-20"
        >
          No images found. Add photos to
          <span class="font-mono text-xs text-gray-300">public/assets/clients</span>.
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
// Just list filenames; no renaming needed.
// Keep only the ones you actually want to show.
const imageFiles = [
  'bbj.png',
  'bekem.png',
  'bharatpetrol.png',
  'bhel.png',
  'br.png',
  'coalindia.png',
  'hp.png',
  'Indianoil.png',
  'jindal.png',
  'lt.png',
  'meil.png',
  'sail.png',
  'dadu.jpeg',
  'hero.jpg',
  'hero1.jpeg',
  'hero3.jpg',
  'hero4.jpg',
  'hero5.jpg',
  'logo.jpeg',
  'logo.png',
  'map.png',
  'truck.png',
  'vue.svg',
  'vite.svg'
  // hero.mp4 is a video; skip it here
]
</script>
