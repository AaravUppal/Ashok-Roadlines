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
              Equipment Gallery
            </h1>
            <p class="mt-3 text-sm sm:text-base text-gray-300 max-w-xl">
              Our specialized equipment and machinery fleet
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
                  Equipment photos
                </p>
              </div>
              <div class="h-10 w-10 rounded-full flex items-center justify-center overflow-hidden bg-white">
                <img src="/assets/logo.png" alt="Ashok Roadlines" class="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 text-xs text-gray-300">
          <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            Heavy Equipment
          </span>
          <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            Specialized Machinery
          </span>
          <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            Our Fleet
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
            @click="openLightbox(index)"
            class="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10
                   hover:border-[#9F153E] hover:bg-white/10 transition shadow-lg cursor-pointer"
          >
            <div class="relative">
              <img
                :src="`/assets/equipments/${file}`"
                :alt="`Equipment ${index + 1}`"
                class="w-full h-52 sm:h-56 md:h-64 object-cover bg-black/40
                       group-hover:scale-105 transition duration-500"
                loading="lazy"
              />

              <!-- Hover overlay with view icon -->
              <div
                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                       transition duration-300 flex items-center justify-center"
              >
                <div class="text-center">
                  <div class="w-14 h-14 rounded-full bg-[#9F153E] flex items-center justify-center mx-auto mb-2">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <p class="text-white text-sm font-semibold">View Image</p>
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
          <span class="font-mono text-xs text-gray-300">public/assets/equipments</span>.
        </p>
      </div>
    </main>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isLightboxOpen"
          class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          @click="closeLightbox"
        >
          <!-- Close button -->
          <button
            @click.stop="closeLightbox"
            class="absolute top-4 right-4 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 
                   backdrop-blur-md border border-white/20 flex items-center justify-center transition group"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Image counter -->
          <div class="absolute top-4 left-4 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <p class="text-white text-sm font-semibold">
              {{ currentImageIndex + 1 }} / {{ imageFiles.length }}
            </p>
          </div>

          <!-- Previous button -->
          <button
            @click.stop="prevImage"
            class="absolute left-4 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 
                   backdrop-blur-md border border-white/20 flex items-center justify-center transition
                   disabled:opacity-50 disabled:cursor-not-allowed group"
            :disabled="currentImageIndex === 0"
          >
            <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <!-- Next button -->
          <button
            @click.stop="nextImage"
            class="absolute right-4 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 
                   backdrop-blur-md border border-white/20 flex items-center justify-center transition
                   disabled:opacity-50 disabled:cursor-not-allowed group"
            :disabled="currentImageIndex === imageFiles.length - 1"
          >
            <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <!-- Image container -->
          <div
            @click.stop
            class="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
          >
            <Transition name="slide" mode="out-in">
              <img
                :key="currentImageIndex"
                :src="`/assets/equipments/${imageFiles[currentImageIndex]}`"
                :alt="`Equipment ${currentImageIndex + 1}`"
                class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </Transition>
          </div>

          <!-- Keyboard hint -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <p class="text-white text-xs sm:text-sm">
              Use arrow keys or swipe to navigate
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const imageFiles = [
  'BoomPlacer .jpeg',
  'crawlercrane.jpeg',
  'HydraulicAxle.jpeg',
  'lowbed.jpeg',
  'PicknCarry.jpeg',
  'PullerandHydraulicAxle.jpeg',
  'tyremountcrane.jpeg',
  'Telehandler.webp'
]

const isLightboxOpen = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index) => {
  currentImageIndex.value = index
  isLightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  if (currentImageIndex.value < imageFiles.length - 1) {
    currentImageIndex.value++
  }
}

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

const handleKeydown = (e) => {
  if (!isLightboxOpen.value) return
  
  if (e.key === 'ArrowRight') {
    nextImage()
  } else if (e.key === 'ArrowLeft') {
    prevImage()
  } else if (e.key === 'Escape') {
    closeLightbox()
  }
}

// Touch swipe support
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  if (touchStartX - touchEndX > 50) {
    nextImage()
  }
  if (touchEndX - touchStartX > 50) {
    prevImage()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('touchstart', handleTouchStart)
  window.addEventListener('touchend', handleTouchEnd)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchend', handleTouchEnd)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
