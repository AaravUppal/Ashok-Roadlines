<template>
  <footer class="bg-gradient-to-b from-gray-900 to-black text-white relative z-20">
    <!-- Decorative top border -->
    
    <div class="container mx-auto px-4 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3 mb-6">
            <div class="bg-[#A85750] p-3 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300">
              <i class="pi pi-truck text-3xl text-white"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold">Ashok Roadlines</h3>
              <p class="text-[#A85750] text-sm font-semibold tracking-wider">LOGISTICS</p>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Through Innovation, Dedication & Technology
          </p>
          <div class="pt-4">
            <p class="text-gray-500 text-xs mb-3">Connect with us</p>
            <div class="flex gap-3">
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#A85750] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <i class="pi pi-facebook"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#A85750] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <i class="pi pi-linkedin"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-[#A85750] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <i class="pi pi-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-xl font-bold mb-6 text-white relative inline-block">
            Quick Links
            <span class="absolute bottom-0 left-0 w-12 h-0.5 bg-[#A85750]"></span>
          </h4>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-gray-400 hover:text-[#A85750] transition-all duration-300 flex items-center group">
                <i class="pi pi-angle-right text-sm mr-2 transform group-hover:translate-x-1 transition-transform"></i>
                <span class="group-hover:tracking-wide transition-all">Home</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-400 hover:text-[#A85750] transition-all duration-300 flex items-center group">
                <i class="pi pi-angle-right text-sm mr-2 transform group-hover:translate-x-1 transition-transform"></i>
                <span class="group-hover:tracking-wide transition-all">About Us</span>
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="text-gray-400 hover:text-[#A85750] transition-all duration-300 flex items-center group">
                <i class="pi pi-angle-right text-sm mr-2 transform group-hover:translate-x-1 transition-transform"></i>
                <span class="group-hover:tracking-wide transition-all">Services</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-400 hover:text-[#A85750] transition-all duration-300 flex items-center group">
                <i class="pi pi-angle-right text-sm mr-2 transform group-hover:translate-x-1 transition-transform"></i>
                <span class="group-hover:tracking-wide transition-all">Contact</span>
              </router-link>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-[#A85750] transition-all duration-300 flex items-center group">
                <i class="pi pi-angle-right text-sm mr-2 transform group-hover:translate-x-1 transition-transform"></i>
                <span class="group-hover:tracking-wide transition-all">Track Shipment</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Transport Services -->
        <div>
          <h4 class="text-xl font-bold mb-6 text-white relative inline-block">
            Our Services
            <span class="absolute bottom-0 left-0 w-12 h-0.5 bg-[#A85750]"></span>
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li v-for="service in services" :key="service" class="text-gray-400 hover:text-gray-300 transition-colors cursor-pointer flex items-center">
              <span class="w-1.5 h-1.5 bg-[#A85750] rounded-full mr-2"></span>
              {{ service }}
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-xl font-bold mb-6 text-white relative inline-block">
            Get In Touch
            <span class="absolute bottom-0 left-0 w-12 h-0.5 bg-[#A85750]"></span>
          </h4>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start gap-3 group cursor-pointer">
              <div class="mt-1 p-2 bg-gray-800 rounded-lg group-hover:bg-[#A85750] transition-colors">
                <i class="pi pi-map-marker text-lg"></i>
              </div>
              <span class="text-gray-400 text-sm flex-1">Transport Nagar, India</span>
            </li>
            <li class="flex items-center gap-3 group cursor-pointer">
              <div class="p-2 bg-gray-800 rounded-lg group-hover:bg-[#A85750] transition-colors">
                <i class="pi pi-phone text-lg"></i>
              </div>
              <span class="text-gray-400 text-sm">+91 XXXXXXXXXX</span>
            </li>
            <li class="flex items-center gap-3 group cursor-pointer">
              <div class="p-2 bg-gray-800 rounded-lg group-hover:bg-[#A85750] transition-colors">
                <i class="pi pi-envelope text-lg"></i>
              </div>
              <span class="text-gray-400 text-sm">info@ashokroadlines.com</span>
            </li>
            <li class="flex items-center gap-3">
              <div class="p-2 bg-[#A85750] rounded-lg">
                <i class="pi pi-clock text-lg"></i>
              </div>
              <span class="text-white text-sm font-semibold">24/7 Support</span>
            </li>
          </ul>
          
          <!-- Rental Services -->
          <div class="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 hover:border-[#A85750] transition-colors">
            <h5 class="text-white font-semibold mb-3 text-sm flex items-center">
              <span class="w-2 h-2 bg-[#A85750] rounded-full mr-2"></span>
              Rental Services
            </h5>
            <ul class="space-y-1.5 text-xs">
              <li class="text-gray-400">• Normal & Low Bed Trailers</li>
              <li class="text-gray-400">• Hydraulic Axles</li>
              <li class="text-gray-400">• Crawler Crane</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-8 mt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">
            © {{ currentYear }} Ashok Roadlines. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm">
            <a href="#" class="text-gray-500 hover:text-[#A85750] transition-colors duration-300 hover:underline">
              Privacy Policy
            </a>
            <a href="#" class="text-gray-500 hover:text-[#A85750] transition-colors duration-300 hover:underline">
              Terms of Service
            </a>
            <a href="#" class="text-gray-500 hover:text-[#A85750] transition-colors duration-300 hover:underline">
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
  'Bridge Girder Transport',
  'Port Container Services',
  'OD/OW Cargo',
  'Steel Transport',
  'Gas Transport',
  'Project Cargo',
  'Pipe Transport'
];
</script>