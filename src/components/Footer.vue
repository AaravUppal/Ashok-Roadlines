<template>
  <footer class="bg-gradient-to-b from-gray-900 to-black text-white relative z-20 overflow-hidden">
    <!-- Animated background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#9F153E] rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9F153E] rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- Decorative top border with gradient -->
    
    <div class="container mx-auto px-4 py-16 relative">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3 mb-6">
            <div class="bg-gradient-to-br from-[#9F153E] to-[#8a4640] p-3 rounded-xl shadow-2xl hover:scale-110 transition-transform duration-300 hover:rotate-6">
              <i class="pi pi-truck text-3xl text-white"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ashok Roadlines
              </h3>
            </div>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed font-medium">
            LOGISTICS 
            Through Innovation, Dedication & Technology
          </p>
          <div class="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
            <p class="text-xs text-[#9F153E] font-semibold mb-1">Since 1974</p>
            <p class="text-xs text-gray-400">Eastern India's Most Diversified Transport Group</p>
          </div>
          <div class="pt-2">
            <div class="flex gap-3">
              <a href="https://www.linkedin.com/company/ashok-roadlines/" class="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-[#9F153E] hover:to-[#8a4640] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg">
                <i class="pi pi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-xl font-bold mb-6 text-white relative inline-block pb-2">
            Quick Links
            <span class="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-[#9F153E] to-transparent rounded-full"></span>
          </h4>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-gray-400 hover:text-[#9F153E] transition-all duration-300 flex items-center group">
                <i class="pi pi-angle-right text-sm mr-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                <span class="group-hover:tracking-wide transition-all duration-300">Home</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-400 hover:text-[#9F153E] transition-all duration-300 flex items-center group">
                <i class="pi pi-angle-right text-sm mr-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                <span class="group-hover:tracking-wide transition-all duration-300">About Us</span>
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="text-gray-400 hover:text-[#9F153E] transition-all duration-300 flex items-center group">
                <i class="pi pi-angle-right text-sm mr-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                <span class="group-hover:tracking-wide transition-all duration-300">Services</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-400 hover:text-[#9F153E] transition-all duration-300 flex items-center group">
                <i class="pi pi-angle-right text-sm mr-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                <span class="group-hover:tracking-wide transition-all duration-300">Contact</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Transport Services -->
        <div>
          <h4 class="text-xl font-bold mb-6 text-white relative inline-block pb-2">
            Our Services
            <span class="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-[#9F153E] to-transparent rounded-full"></span>
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li v-for="service in services" :key="service" class="text-gray-400 hover:text-gray-200 transition-all duration-300 cursor-pointer flex items-center group">
              <span class="w-1.5 h-1.5 bg-[#9F153E] rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
              <span class="group-hover:translate-x-1 transition-transform duration-300">{{ service }}</span>
            </li>
          </ul>
        </div>

        <!-- Contact Info & Rental -->
        <div class="space-y-8">
  <div>
    <h4 class="text-xl font-semibold text-white relative inline-block pb-2 mb-8">
      Get In Touch
      <span class="absolute bottom-0 left-0 w-14 h-0.5 bg-gradient-to-r from-[#9F153E] to-transparent rounded-full"></span>
    </h4>

    <ul class="space-y-5">
      <!-- Corporate Office -->
      <li class="flex gap-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-900/70 transition-all">


  <div class="flex gap-6 items-start">
  <!-- Map Button -->
  <a
    href="https://www.google.com/maps/search/?api=1&query=79+Sambhunath+Pandit+Street+Kolkata+700020"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open location in Google Maps"
    class="flex-shrink-0 w-14 h-14 rounded-xl bg-[#1f2937]
           flex items-center justify-center
           transition-all duration-300
           hover:bg-[#9F153E]/20
           hover:scale-105
           focus:outline-none focus:ring-2 focus:ring-[#9F153E]/60"
  >
    <i class="pi pi-map-marker text-[#9F153E] text-xl"></i>
  </a>

  <!-- Content -->
  <div class="space-y-2">
    <p class="text-xs font-semibold tracking-widest text-[#9F153E] uppercase">
      Corporate Office
    </p>

    <p class="text-gray-200 text-base font-medium leading-snug">
      79, Sambhunath Pandit Street
    </p>

    <p class="text-gray-400 text-sm">
      Kolkata <span class="mx-1 text-gray-600">•</span> 700020
    </p>
  </div>
</div>
</li>

      <!-- Email -->
      <li class="flex gap-4 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
        <div class="flex-shrink-0 p-2.5 bg-gray-800 rounded-lg text-[#9F153E]">
          <i class="pi pi-envelope text-lg"></i>
        </div>
        <div class="flex items-center">
          <a
            href="mailto:shivam@ashokroadlines.com"
            class="text-gray-300 text-sm hover:text-[#9F153E] transition-colors"
          >
            shivam@ashokroadlines.com
          </a>
        </div>
      </li>

      <!-- 24/7 Support -->
      <li class="flex gap-4 p-4 rounded-xl bg-gradient-to-br from-[#9F153E]/20 to-transparent border border-[#9F153E]/30">
        <div class="flex-shrink-0 p-2.5 bg-[#9F153E] rounded-lg text-white shadow-lg">
          <i class="pi pi-clock text-lg"></i>
        </div>
        <div>
          <p class="text-white text-sm font-semibold">24/7 Support</p>
          <p class="text-gray-400 text-xs">All India Operations</p>
        </div>
      </li>
    </ul>
  </div>
</div>
      </div>

      <!-- Branch Locations -->
      <div class="mb-12 pb-8 border-b border-gray-800">
        <h4 class="text-lg font-bold mb-6 text-white text-center">Our Presence Across India</h4>
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="location in locations" :key="location" 
                class="px-4 py-2 bg-gray-800/70 hover:bg-[#9F153E] text-gray-300 hover:text-white text-sm rounded-full transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg">
            <i class="pi pi-map-marker mr-1.5 text-xs"></i>{{ location }}
          </span>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">
            © {{ currentYear }} Ashok Roadlines. All rights reserved.
            <span class="text-gray-600 mx-2">|</span>
            <span class="text-gray-600 text-xs">Pioneering logistics since 1974</span>
          </p>
          <div class="flex gap-6 text-sm">
            <a href="#" class="text-gray-500 hover:text-[#9F153E] transition-all duration-300 hover:underline hover:tracking-wide">
              Privacy Policy
            </a>
            <a href="#" class="text-gray-500 hover:text-[#9F153E] transition-all duration-300 hover:underline hover:tracking-wide">
              Terms of Service
            </a>
            <a href="#" class="text-gray-500 hover:text-[#9F153E] transition-all duration-300 hover:underline hover:tracking-wide">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

const services = [
  'Bridge Girder & Segment Transport',
  'Port Container Services (TEU/FEU)',
  'ODC/OWC Cargo',
  'Finished Steel Transport',
  'Gas Transport (LPG & Ammonia)',
  'Project Cargo',
  'Industrial Products',
  'Pipe Transport'
];

const locations = [
  'Kolkata',
  'Raigarh',
  'Surat',
  'Durgapur',
  'Bhilai',
  'Ahmedabad',
  'Rourkela',
  'Vishakhapatnam',
  'Vadodara'
];
</script>

<style scoped>
.delay-1000 {
  animation-delay: 1s;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.05;
  }
  50% {
    opacity: 0.1;
  }
}
</style>
