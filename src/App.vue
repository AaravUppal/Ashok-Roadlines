<template>
  <div id="app">
    <!-- Loading Screen with Backdrop Blur -->
    <div 
      v-if="isLoading" 
      class="fixed inset-0 z-50 flex items-center justify-center transition-all duration-500"
    >
      <!-- Backdrop Blur Overlay -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500"></div>
      
      <!-- Loading Content -->
      <div class="text-center space-y-6 animate-fadeIn relative z-10">
        <!-- Minimalist Logo -->
        <div class="relative">
          <div class="w-20 h-20 rounded-full border-4 border-gray-200 border-t-[#9F153E] animate-spin mx-auto"></div>
        </div>
        
        <!-- Text -->
        <div class="space-y-1">
          <h2 class="text-2xl font-bold text-white/95 tracking-tight drop-shadow-lg">
            Ashok Roadlines
          </h2>
          <div class="h-1 w-16 bg-gradient-to-r from-[#9F153E] to-transparent mx-auto rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>

    <!-- Main App Content -->
    <div :class="{ 
      'opacity-0 invisible blur-sm scale-[0.98]': isLoading, 
      'opacity-100 visible blur-none scale-100': !isLoading 
    }" 
    class="transition-all duration-1000 ease-out">
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
import { useRouter, useRoute } from 'vue-router'
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue"

const router = useRouter()
const route = useRoute()
const isLoading = ref(true)

let routeLoadTimeout = null

// Complete loading sequence
const completeLoading = () => {
  clearTimeout(routeLoadTimeout)
  routeLoadTimeout = setTimeout(() => {
    isLoading.value = false
  }, 400)
}

// Handle initial load
onMounted(() => {
  setTimeout(completeLoading, 1400) // Slightly longer for better effect
})

// Handle route changes
watch(() => route.path, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    isLoading.value = true
    setTimeout(completeLoading, 900)
  }
})

onUnmounted(() => {
  if (routeLoadTimeout) clearTimeout(routeLoadTimeout)
})
</script>

<style scoped>
/* Loading Screen Animations */
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
  animation: fadeIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Enhanced backdrop blur entrance */
.fade-in-backdrop {
  animation: backdropFadeIn 0.5s ease-out;
}

@keyframes backdropFadeIn {
  from {
    backdrop-filter: blur(0px);
    background-color: transparent;
  }
  to {
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.6);
  }
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
}

/* Smooth blur transition support */
.blur-sm {
  filter: blur(4px);
}
</style>
