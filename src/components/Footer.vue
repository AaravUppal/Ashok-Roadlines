<template>
  <footer class="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
    <!-- Enhanced animated background -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#9F153E] rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9F153E] rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-[#c96860] rounded-full blur-3xl animate-pulse delay-500"></div>
    </div>

    <!-- Grid pattern overlay -->
    <div
      class="absolute inset-0 opacity-[0.02]"
      style="background-image: radial-gradient(circle, #9F153E 1px, transparent 1px); background-size: 50px 50px;"
    ></div>

    <div class="container mx-auto px-4 py-16 relative z-10">
      <!-- Main Footer Content -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12 mb-16">
        <!-- Company Info - Enhanced -->
        <div class="space-y-6 lg:col-span-1">
          <div class="flex items-center space-x-3 mb-6 group">
            <div
              class="bg-gradient-to-br from-[#9F153E] via-[#c96860] to-[#8a4640] p-3 rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative"
            >
              <div
                class="absolute inset-0 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <i class="pi pi-truck text-3xl text-white relative z-10"></i>
            </div>
            <div>
              <h3
                class="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
              >
                Ashok Roadlines
              </h3>
            </div>
          </div>

          <p class="text-gray-300 text-sm leading-relaxed font-medium">
            LOGISTICS<br />
            Through Innovation, Dedication & Technology
          </p>

          <div
            class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-[#9F153E]/50 transition-all duration-300"
          >
            <p class="text-xs text-[#9F153E] font-bold mb-1 flex items-center gap-2">
              <i class="pi pi-calendar text-xs"></i>
              Since 1974
            </p>
            <p class="text-xs text-gray-400 leading-relaxed">
              Eastern India's Most Diversified Transport Group
            </p>
          </div>

          <div class="pt-2">
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">
              Connect With Us
            </p>
            <div class="flex gap-3">
              <a
                href="https://www.linkedin.com/company/ashok-roadlines/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-[#9F153E] hover:to-[#8a4640] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-[#9F153E]/50 group"
                aria-label="LinkedIn"
              >
                <i
                  class="pi pi-linkedin text-gray-400 group-hover:text-white transition-colors duration-300"
                ></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links - Enhanced -->
        <div>
          <h4 class="text-xl font-bold mb-6 text-white relative inline-block pb-2">
            Quick Links
            <span
              class="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-[#9F153E] via-[#c96860] to-transparent rounded-full"
            ></span>
          </h4>
          <ul class="space-y-3">
            <li>
              <router-link
                to="/"
                class="text-gray-400 hover:text-[#9F153E] transition-all duration-300 flex items-center group"
              >
                <span
                  class="w-6 h-6 rounded-lg bg-gray-800 group-hover:bg-[#9F153E]/20 flex items-center justify-center mr-3 transition-all duration-300"
                >
                  <i
                    class="pi pi-angle-right text-xs transform group-hover:translate-x-0.5 transition-transform duration-300"
                  ></i>
                </span>
                <span class="group-hover:translate-x-1 transition-all duration-300 font-medium">Home</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="text-gray-400 hover:text-[#9F153E] transition-all duration-300 flex items-center group"
              >
                <span
                  class="w-6 h-6 rounded-lg bg-gray-800 group-hover:bg-[#9F153E]/20 flex items-center justify-center mr-3 transition-all duration-300"
                >
                  <i
                    class="pi pi-angle-right text-xs transform group-hover:translate-x-0.5 transition-transform duration-300"
                  ></i>
                </span>
                <span class="group-hover:translate-x-1 transition-all duration-300 font-medium"
                  >About Us</span
                >
              </router-link>
            </li>
            <li>
              <router-link
                to="/services"
                class="text-gray-400 hover:text-[#9F153E] transition-all duration-300 flex items-center group"
              >
                <span
                  class="w-6 h-6 rounded-lg bg-gray-800 group-hover:bg-[#9F153E]/20 flex items-center justify-center mr-3 transition-all duration-300"
                >
                  <i
                    class="pi pi-angle-right text-xs transform group-hover:translate-x-0.5 transition-transform duration-300"
                  ></i>
                </span>
                <span class="group-hover:translate-x-1 transition-all duration-300 font-medium">Services</span>
              </router-link>
            </li>
              <li>
              <router-link
                to="/projects"
                class="text-gray-400 hover:text-[#9F153E] transition-all duration-300 flex items-center group"
              >
                <span
                  class="w-6 h-6 rounded-lg bg-gray-800 group-hover:bg-[#9F153E]/20 flex items-center justify-center mr-3 transition-all duration-300"
                >
                  <i
                    class="pi pi-angle-right text-xs transform group-hover:translate-x-0.5 transition-transform duration-300"
                  ></i>
                </span>
                <span class="group-hover:translate-x-1 transition-all duration-300 font-medium"
                  >Projects</span
                >
              </router-link>
            </li>
            <li>
              <router-link
                to="/gallery"
                class="text-gray-400 hover:text-[#9F153E] transition-all duration-300 flex items-center group"
              >
                <span
                  class="w-6 h-6 rounded-lg bg-gray-800 group-hover:bg-[#9F153E]/20 flex items-center justify-center mr-3 transition-all duration-300"
                >
                  <i
                    class="pi pi-angle-right text-xs transform group-hover:translate-x-0.5 transition-transform duration-300"
                  ></i>
                </span>
                <span class="group-hover:translate-x-1 transition-all duration-300 font-medium">Gallery</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="text-gray-400 hover:text-[#9F153E] transition-all duration-300 flex items-center group"
              >
                <span
                  class="w-6 h-6 rounded-lg bg-gray-800 group-hover:bg-[#9F153E]/20 flex items-center justify-center mr-3 transition-all duration-300"
                >
                  <i
                    class="pi pi-angle-right text-xs transform group-hover:translate-x-0.5 transition-transform duration-300"
                  ></i>
                </span>
                <span class="group-hover:translate-x-1 transition-all duration-300 font-medium">Contact</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Our Services - Enhanced -->
        <div>
          <h4 class="text-xl font-bold mb-6 text-white relative inline-block pb-2">
            Our Services
            <span
              class="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-[#9F153E] via-[#c96860] to-transparent rounded-full"
            ></span>
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li
              v-for="service in services"
              :key="service"
              class="text-gray-400 hover:text-gray-200 transition-all duration-300 cursor-pointer flex items-start group"
            >
              <span
                class="w-2 h-2 bg-[#9F153E] rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-[#9F153E]/50 transition-all duration-300"
              ></span>
              <span class="group-hover:translate-x-1 transition-transform duration-300 leading-relaxed">
                {{ service }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Equipment Links - Enhanced -->
        <div class="xl:col-span-2">
          <h4 class="text-xl font-bold mb-6 text-white relative inline-block pb-2">
            Equipment
            <span
              class="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-[#9F153E] via-[#c96860] to-transparent rounded-full"
            ></span>
          </h4>

          <div class="grid lg:grid-cols-2 gap-4 text-sm">
            <!-- Trailers -->
            <div>
              <p
                class="text-xs uppercase tracking-[0.18em] text-gray-500  font-bold flex items-center gap-2"
              >
                <i class="pi pi-truck text-[#9F153E] text-xs"></i>
                Trailers
              </p>
              <ul class="space-y-2 pl-1 mt-2">
                <li>
                  <router-link
                    to="/equipment/trailers"
                    class="flex items-center text-gray-300 hover:text-[#9F153E] transition-all duration-300 group"
                  >
                    <span
                      class="w-1.5 h-1.5 bg-[#9F153E] rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"
                    ></span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300 font-medium">
                      Overview
                    </span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/equipment/trailers/flatbed"
                    class="flex items-center text-gray-400 hover:text-gray-200 transition-all duration-300 group"
                  >
                    <span
                      class="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-[#9F153E] transition-colors duration-300"
                    ></span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">
                      Flatbed Trailer
                    </span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/equipment/trailers/semi-lowbed"
                    class="flex items-center text-gray-400 hover:text-gray-200 transition-all duration-300 group"
                  >
                    <span
                      class="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-[#9F153E] transition-colors duration-300"
                    ></span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">
                      Semi Lowbed
                    </span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/equipment/trailers/lowbed"
                    class="flex items-center text-gray-400 hover:text-gray-200 transition-all duration-300 group"
                  >
                    <span
                      class="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-[#9F153E] transition-colors duration-300"
                    ></span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">
                      Lowbed Trailer
                    </span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/equipment/trailers/lowbed-16-wheeler"
                    class="flex items-center text-gray-400 hover:text-gray-200 transition-all duration-300 group"
                  >
                    <span
                      class="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-[#9F153E] transition-colors duration-300"
                    ></span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">
                      Lowbed 16 Wheeler
                    </span>
                  </router-link>
                </li>
              </ul>

              <!-- Cranes -->
               <p
                class="text-xs uppercase tracking-[0.18em] text-gray-500 mb-3 font-bold flex items-center gap-2 mt-4"
              >
                <i class="pi pi-wrench text-[#9F153E] text-xs"></i>
                Cranes
              </p>
              <ul class="space-y-2 pl-1">
                <li>
                  <router-link
                    to="/equipment/crane"
                    class="flex items-center text-gray-300 hover:text-[#9F153E] transition-all duration-300 group"
                  >
                    <span
                      class="w-1.5 h-1.5 bg-[#9F153E] rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"
                    ></span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300 font-medium">
                      Overview
                    </span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/equipment/crane/crawler"
                    class="flex items-center text-gray-400 hover:text-gray-200 transition-all duration-300 group"
                  >
                    <span
                      class="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-[#9F153E] transition-colors duration-300"
                    ></span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">
                      Crawler Crane
                    </span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/equipment/crane/tire-mount"
                    class="flex items-center text-gray-400 hover:text-gray-200 transition-all duration-300 group"
                  >
                    <span
                      class="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-[#9F153E] transition-colors duration-300"
                    ></span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">
                      Tire Mount Crane
                    </span>
                  </router-link>
                </li>
    
              </ul>
              
            </div>

            
             <!-- Other Equipment - Right side, same level -->
            <div>
                <p
                class="text-xs uppercase tracking-[0.18em] text-gray-500 mb-3 font-bold flex items-center gap-2"
              >
                <i class="pi pi-cog text-[#9F153E] text-xs"></i>
                Other Equipment
              </p>
              <ul class="space-y-2 pl-1">
                <li v-for="item in otherEquipment" :key="item.to">
                  <router-link
                    :to="item.to"
                    class="flex items-center text-gray-400 hover:text-gray-200 transition-all duration-300 group"
                  >
                    <span
                      class="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-[#9F153E] transition-colors duration-300"
                    ></span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">
                      {{ item.label }}
                    </span>
                  </router-link>
                </li>
              </ul>
            </div>

            
          </div>
        </div>
      </div>

      <!-- Get In Touch section BELOW the grid -->
      <section class="mb-20 px-4 sm:px-6 lg:px-0">
  <!-- Section heading -->
  <!-- <h4 class="text-xl font-bold text-white relative inline-block pb-2 mb-10">
    Get In Touch
    <span
      class="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-[#9F153E] via-[#c96860] to-transparent rounded-full"
    ></span>
  </h4> -->

  <!-- Cards grid -->
  <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <!-- Corporate Office -->
    <div
      class="group flex items-start gap-5 p-6 rounded-2xl
             bg-gradient-to-br from-gray-900/50 to-gray-800/30
             hover:from-gray-800/70 hover:to-gray-900/50
             border border-gray-800/50 hover:border-[#9F153E]/30
             backdrop-blur-sm transition-all duration-300"
    >
      <a
        href="https://www.google.com/maps/search/?api=1&query=79+Sambhunath+Pandit+Street+Kolkata+700020"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open location in Google Maps"
        class="flex-shrink-0 w-14 h-14 rounded-xl
               bg-gray-800/50 border border-gray-700/50
               flex items-center justify-center
               transition-all duration-300
               hover:bg-[#9F153E]/20 hover:border-[#9F153E]/50
               hover:scale-105 hover:shadow-lg hover:shadow-[#9F153E]/20
               focus:outline-none focus:ring-2 focus:ring-[#9F153E]/60"
      >
        <i class="pi pi-map-marker text-[#9F153E] text-xl"></i>
      </a>

      <div class="space-y-3">
        <p
          class="text-xs font-bold tracking-widest text-[#9F153E] uppercase flex items-center gap-2"
        >
          <i class="pi pi-building text-xs"></i>
          Corporate Office
        </p>

        <p
          class="text-gray-200 text-base font-semibold leading-snug
                 group-hover:text-white transition-colors duration-300"
        >
          79, Sambhunath Pandit Street
        </p>

        <p class="text-gray-400 text-sm flex items-center gap-2">
          <span>Kolkata</span>
          <span class="text-gray-700">•</span>
          <span>700020</span>
        </p>
      </div>
    </div>

    <!-- Email -->
    <div
      class="group flex items-center gap-5 p-6 rounded-2xl
             bg-gradient-to-br from-gray-900/50 to-gray-800/30
             hover:from-gray-800/70 hover:to-gray-900/50
             border border-gray-800/50 hover:border-[#9F153E]/30
             backdrop-blur-sm transition-all duration-300"
    >
      <div
        class="flex-shrink-0 w-14 h-14 rounded-xl
               bg-gray-800/50 border border-gray-700/50
               text-[#9F153E]
               flex items-center justify-center
               group-hover:bg-[#9F153E]/20 group-hover:border-[#9F153E]/50
               transition-all duration-300"
      >
        <i class="pi pi-envelope text-xl"></i>
      </div>

      <a
        href="mailto:shivam@ashokroadlines.com"
        class="text-gray-300 text-sm font-medium break-all
               hover:text-[#9F153E] transition-colors duration-300"
      >
        shivam@ashokroadlines.com
      </a>
    </div>

    <!-- 24/7 Support -->
    <div
      class="flex items-center gap-5 p-6 rounded-2xl
             bg-gradient-to-br from-[#9F153E]/20 via-[#c96860]/10 to-[#9F153E]/5
             border border-[#9F153E]/40
             backdrop-blur-sm
             hover:border-[#9F153E]/60
             hover:shadow-lg hover:shadow-[#9F153E]/20
             transition-all duration-300"
    >
      <div
        class="flex-shrink-0 w-14 h-14 rounded-xl
               bg-gradient-to-br from-[#9F153E] to-[#8a4640]
               text-white shadow-lg
               flex items-center justify-center animate-pulse"
      >
        <i class="pi pi-clock text-xl"></i>
      </div>

      <div class="space-y-1">
        <p class="text-white text-sm font-bold flex items-center gap-2">
          24/7 Support
          <span class="inline-flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
        </p>
        <p class="text-gray-400 text-xs">
          All India Operations
        </p>
      </div>
    </div>
  </div>
</section>

      <!-- Branch Locations - Enhanced -->
      <div class="mb-16 pb-12 border-b border-gray-800/50">
        <div class="text-center mb-8">
          <h4 class="text-2xl font-bold text-white mb-3 inline-block relative">
            Our Presence Across India
            <span
              class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#9F153E] to-transparent rounded-full"
            ></span>
          </h4>
          <p class="text-gray-500 text-sm mt-4">
            Serving the nation with excellence from multiple locations
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <span
            v-for="location in locations"
            :key="location"
            class="px-5 py-3 bg-gradient-to-br from-gray-800/70 to-gray-900/70 hover:from-[#9F153E] hover:to-[#8a4640] 
                   text-gray-300 hover:text-white text-sm rounded-full 
                   transition-all duration-300 cursor-pointer 
                   transform hover:scale-110 hover:-translate-y-1
                   shadow-lg hover:shadow-[#9F153E]/50
                   border border-gray-700/50 hover:border-[#9F153E]/50
                   backdrop-blur-sm group"
          >
            <i
              class="pi pi-map-marker mr-2 text-xs group-hover:scale-125 transition-transform duration-300"
            ></i>
            <span class="font-medium">{{ location }}</span>
          </span>
        </div>
      </div>

      <!-- Bottom Bar - Enhanced -->
      <div class="pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-center md:text-left">
            <p
              class="text-gray-500 text-sm flex flex-wrap items-center justify-center md:justify-start gap-2"
            >
              <span class="flex items-center gap-1">
                <i class="pi pi-copyright text-xs"></i>
                {{ currentYear }} Ashok Roadlines. All rights reserved.
              </span>
              <span class="text-gray-700 hidden md:inline">|</span>
              <span class="text-gray-600 text-xs flex items-center gap-1.5">
                <i class="pi pi-shield text-xs text-[#9F153E]"></i>
                Pioneering logistics since 1974
              </span>
            </p>
          </div>
          <div class="flex flex-wrap gap-6 text-sm justify-center">
            <a
              href="#"
              class="text-gray-500 hover:text-[#9F153E] transition-all duration-300 hover:underline hover:tracking-wide flex items-center gap-1.5 group"
            >
              <i class="pi pi-lock text-xs group-hover:scale-110 transition-transform duration-300"></i>
              Privacy Policy
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-[#9F153E] transition-all duration-300 hover:underline hover:tracking-wide flex items-center gap-1.5 group"
            >
              <i class="pi pi-file text-xs group-hover:scale-110 transition-transform duration-300"></i>
              Terms of Service
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-[#9F153E] transition-all duration-300 hover:underline hover:tracking-wide flex items-center gap-1.5 group"
            >
              <i class="pi pi-sitemap text-xs group-hover:scale-110 transition-transform duration-300"></i>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const services = [
  'Bridge Girder & Segment Transport',
  'Port Container Services (TEU/FEU)',
  'ODC/OWC Cargo',
  'Finished Steel Transport',
  'Gas Transport (LPG & Ammonia)',
  'Project Cargo',
  'Industrial Products',
  'Pipe Transport'
]

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
]

const otherEquipment = [
  { label: 'Hydraulic Axles', to: '/equipment/hydraulic-axles' },
  { label: 'Pullers', to: '/equipment/pullers' },
  { label: 'Pick and Carry', to: '/equipment/pick-and-carry' },
  { label: 'Telehandler', to: '/equipment/telehandler' },
  { label: 'Boom Placer', to: '/equipment/boom-placer' },
  { label: 'LPG Tanker', to: '/equipment/lpg-tanker' },
  { label: 'Ammonia Tanker', to: '/equipment/ammonia-tanker' }
]
</script>

<style scoped>
.delay-500 {
  animation-delay: 0.5s;
}

.delay-1000 {
  animation-delay: 1s;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.05;
    transform: scale(1);
  }
  50% {
    opacity: 0.1;
    transform: scale(1.05);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.bg-size-200 {
  background-size: 200% 100%;
}

.bg-pos-0 {
  background-position: 0% 50%;
}

.hover\:bg-pos-100:hover {
  background-position: 100% 50%;
}
</style>
