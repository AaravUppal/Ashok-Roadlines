<template>
  <nav class="fixed w-full top-0 z-50 bg-white shadow-lg backdrop-blur-sm bg-opacity-85">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link 
          to="/"
          class="flex items-center gap-3 cursor-pointer transform transition-all duration-300 hover:scale-105 group"
        >
          <div class="relative">
            <div class="absolute inset-0 bg-[#A85750] rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img 
              src="../assets/logo.png" 
              alt="Ashok Roadlines" 
              class="h-16 w-auto relative z-10"
            />
          </div>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-1">
          <router-link 
            to="/" 
            class="relative px-5 py-2.5 text-gray-700 font-semibold text-sm uppercase tracking-wide hover:text-[#A85750] transition-all duration-300 group rounded-lg hover:bg-gray-50"
            active-class="text-[#A85750]"
          >
            <span class="relative z-10">Home</span>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#A85750] transition-all duration-300 ease-out group-hover:w-3/4 rounded-full"></span>
          </router-link>
          <router-link 
            to="/about" 
            class="relative px-5 py-2.5 text-gray-700 font-semibold text-sm uppercase tracking-wide hover:text-[#A85750] transition-all duration-300 group rounded-lg hover:bg-gray-50"
            active-class="text-[#A85750]"
          >
            <span class="relative z-10">About Us</span>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#A85750] transition-all duration-300 ease-out group-hover:w-3/4 rounded-full"></span>
          </router-link>
          <router-link 
            to="/services" 
            class="relative px-5 py-2.5 text-gray-700 font-semibold text-sm uppercase tracking-wide hover:text-[#A85750] transition-all duration-300 group rounded-lg hover:bg-gray-50"
            active-class="text-[#A85750]"
          >
            <span class="relative z-10">Services</span>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#A85750] transition-all duration-300 ease-out group-hover:w-3/4 rounded-full"></span>
          </router-link>
          <router-link 
            to="/contact" 
            class="relative px-5 py-2.5 text-gray-700 font-semibold text-sm uppercase tracking-wide hover:text-[#A85750] transition-all duration-300 group rounded-lg hover:bg-gray-50"
            active-class="text-[#A85750]"
          >
            <span class="relative z-10">Contact</span>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#A85750] transition-all duration-300 ease-out group-hover:w-3/4 rounded-full"></span>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu"
          class="p-2.5 text-gray-700 hover:text-[#A85750] hover:bg-gray-50 rounded-lg transition-all duration-300 lg:hidden border border-gray-200 hover:border-[#A85750]"
          aria-label="Toggle menu"
        >
          <i 
            :class="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'"
            class="text-xl transition-transform duration-300"
          ></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        :class="[
          'lg:hidden transition-all duration-300 ease-in-out overflow-hidden',
          mobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        ]"
      >
        <div class="flex flex-col space-y-2 pt-4 border-t border-gray-200">
          <router-link 
            to="/" 
            @click="toggleMenu"
            class="flex items-center gap-3 px-4 py-3.5 text-gray-700 font-semibold uppercase text-sm tracking-wide hover:text-[#A85750] hover:bg-gray-50 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-200"
            active-class="text-[#A85750] bg-gray-50 border-[#A85750]"
          >
            <i class="pi pi-home text-base"></i>
            Home
          </router-link>
          <router-link 
            to="/about" 
            @click="toggleMenu"
            class="flex items-center gap-3 px-4 py-3.5 text-gray-700 font-semibold uppercase text-sm tracking-wide hover:text-[#A85750] hover:bg-gray-50 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-200"
            active-class="text-[#A85750] bg-gray-50 border-[#A85750]"
          >
            <i class="pi pi-info-circle text-base"></i>
            About Us
          </router-link>
          <router-link 
            to="/services" 
            @click="toggleMenu"
            class="flex items-center gap-3 px-4 py-3.5 text-gray-700 font-semibold uppercase text-sm tracking-wide hover:text-[#A85750] hover:bg-gray-50 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-200"
            active-class="text-[#A85750] bg-gray-50 border-[#A85750]"
          >
            <i class="pi pi-briefcase text-base"></i>
            Services
          </router-link>
          <router-link 
            to="/contact" 
            @click="toggleMenu"
            class="flex items-center gap-3 px-4 py-3.5 text-gray-700 font-semibold uppercase text-sm tracking-wide hover:text-[#A85750] hover:bg-gray-50 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-200"
            active-class="text-[#A85750] bg-gray-50 border-[#A85750]"
          >
            <i class="pi pi-phone text-base"></i>
            Contact
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- Scroll Progress Bar -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
      <div 
        class="h-full bg-gradient-to-r from-[#A85750] to-[#c96860] transition-all duration-150 ease-out shadow-md"
        :style="{ width: scrollProgress + '%' }"
      ></div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mobileMenuOpen = ref(false);
const scrollProgress = ref(0);

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const updateScrollProgress = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  const trackLength = documentHeight - windowHeight;
  const progress = (scrollTop / trackLength) * 100;
  scrollProgress.value = Math.min(progress, 100);
};

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress);
  updateScrollProgress();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress);
});
</script>

<style scoped>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}
</style>