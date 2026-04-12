<template>
  <div id="app">
    <!-- Loading Screen -->
    <Transition name="loader">
      <div
        v-if="isLoading"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        style="will-change: opacity;"
      >
        <!-- Loading Content -->
        <div class="text-center space-y-6 animate-fadeIn">
          <div class="relative">
            <div class="w-20 h-20 rounded-full border-4 border-gray-200 border-t-[#9F153E] animate-spin mx-auto"></div>
          </div>
          <div class="space-y-1">
            <h2 class="text-2xl font-bold text-white/95 tracking-tight drop-shadow-lg">
              Ashok Roadlines
            </h2>
            <div class="h-1 w-16 bg-gradient-to-r from-[#9F153E] to-transparent mx-auto rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Main App Content -->
    <div
      :class="isLoading ? 'opacity-0' : 'opacity-100'"
      class="transition-opacity duration-300 ease-out"
    >
      <Nav />
      <main class="min-h-screen">
        <router-view v-slot="{ Component, route }">
          <transition name="page" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue"

const route = useRoute()
const isLoading = ref(true)

let loadingTimer = null

const finishLoading = () => {
  loadingTimer = setTimeout(() => {
    isLoading.value = false
  }, 100) // tiny buffer so content is painted before fade
}

// Initial load — cut from 1800ms → ~700ms total
onMounted(() => {
  loadingTimer = setTimeout(finishLoading, 600)
})

// Route changes — only show brief spinner, not full reload
watch(() => route.path, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    isLoading.value = true
    clearTimeout(loadingTimer)
    loadingTimer = setTimeout(finishLoading, 400)
  }
})

onUnmounted(() => clearTimeout(loadingTimer))
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* Loader overlay fade */
.loader-leave-active {
  transition: opacity 0.25s ease-out;
}
.loader-leave-to {
  opacity: 0;
}

/* Page transitions — faster + no blur (blur is GPU-expensive) */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>