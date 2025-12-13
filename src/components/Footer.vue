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
              <p class="text-[#9F153E] text-sm font-bold tracking-widest">LOGISTICS</p>
            </div>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed font-medium">
            Through Innovation, Dedication & Technology
          </p>
          <div class="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
            <p class="text-xs text-[#9F153E] font-semibold mb-1">Est. 1974</p>
            <p class="text-xs text-gray-400">Eastern India's Most Diversified Transport Group</p>
          </div>
          <div class="pt-2">
            <p class="text-gray-500 text-xs mb-3 uppercase tracking-wider">Connect with us</p>
            <div class="flex gap-3">
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-[#9F153E] hover:to-[#8a4640] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg">
                <i class="pi pi-facebook"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-[#9F153E] hover:to-[#8a4640] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg">
                <i class="pi pi-linkedin"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-[#9F153E] hover:to-[#8a4640] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg">
                <i class="pi pi-twitter"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-[#9F153E] hover:to-[#8a4640] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg">
                <i class="pi pi-instagram"></i>
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
            <li>
              <a href="#" class="text-gray-400 hover:text-[#9F153E] transition-all duration-300 flex items-center group">
                <i class="pi pi-angle-right text-sm mr-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                <span class="group-hover:tracking-wide transition-all duration-300">Track Shipment</span>
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-[#9F153E] transition-all duration-300 flex items-center group">
                <i class="pi pi-angle-right text-sm mr-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                <span class="group-hover:tracking-wide transition-all duration-300">Fleet Strength</span>
              </a>
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
        <div class="space-y-6">
          <div>
            <h4 class="text-xl font-bold mb-6 text-white relative inline-block pb-2">
              Get In Touch
              <span class="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-[#9F153E] to-transparent rounded-full"></span>
            </h4>
            <ul class="space-y-4">
              <!-- Corporate Office -->
              <li class="flex items-start gap-3 group cursor-pointer">
                <div class="mt-1 p-2 bg-gray-800/70 rounded-lg group-hover:bg-[#9F153E] transition-all duration-300 shadow-lg">
                  <i class="pi pi-map-marker text-lg"></i>
                </div>
                <div class="flex-1">
                  <p class="text-xs text-gray-500 mb-0.5">Corporate Office</p>
                  <span class="text-gray-300 text-sm leading-relaxed">79, Sambhunath Pandit Street, Kolkata-700 020</span>
                </div>
              </li>
              
              <!-- Email -->
              <li class="flex items-start gap-3 group cursor-pointer">
                <div class="mt-0.5 p-2 bg-gray-800/70 rounded-lg group-hover:bg-[#9F153E] transition-all duration-300 shadow-lg">
                  <i class="pi pi-envelope text-lg"></i>
                </div>
                <div class="flex-1">
                  <a href="mailto:mkp@ashokroadlines.com" class="text-gray-300 text-sm hover:text-[#9F153E] transition-colors block">
                    mkp@ashokroadlines.com
                  </a>
                  <a href="mailto:sundeep@ashokroadlines.com" class="text-gray-400 text-xs hover:text-[#9F153E] transition-colors block">
                    sundeep@ashokroadlines.com
                  </a>
                </div>
              </li>

              <!-- 24/7 Support Badge -->
              <li class="flex items-center gap-3">
                <div class="p-2 bg-gradient-to-br from-[#9F153E] to-[#8a4640] rounded-lg shadow-xl">
                  <i class="pi pi-clock text-lg"></i>
                </div>
                <div>
                  <span class="text-white text-sm font-bold block">24/7 Support</span>
                  <span class="text-gray-400 text-xs">All India Operations</span>
                </div>
              </li>
            </ul>
          </div>
          

          <!-- Fleet Stats -->
          <div class="grid grid-cols-3 gap-2 text-center">
            <div class="bg-gray-800/50 p-2 rounded-lg border border-gray-700/50 hover:border-[#9F153E]/50 transition-all duration-300">
              <p class="text-[#9F153E] font-bold text-lg">72</p>
              <p class="text-gray-400 text-xs">Trailers</p>
            </div>
            <div class="bg-gray-800/50 p-2 rounded-lg border border-gray-700/50 hover:border-[#9F153E]/50 transition-all duration-300">
              <p class="text-[#9F153E] font-bold text-lg">52</p>
              <p class="text-gray-400 text-xs">Hydraulic Axles</p>
            </div>
            <div class="bg-gray-800/50 p-2 rounded-lg border border-gray-700/50 hover:border-[#9F153E]/50 transition-all duration-300">
              <p class="text-[#9F153E] font-bold text-lg">75</p>
              <p class="text-gray-400 text-xs">LPG Tankers</p>
            </div>
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
