<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative h-[60vh] bg-gradient-to-br from-gray-900 via-gray-800 to-[#A85750] overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div class="container mx-auto px-6 h-full flex items-center relative z-10">
        <div class="max-w-3xl">
          <div class="flex items-center gap-3 mb-4">
            <div class="h-1 w-20 bg-[#A85750]"></div>
            <span class="text-[#A85750] font-semibold text-sm uppercase tracking-wider">Since 1974</span>
          </div>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            About <span class="text-[#A85750]">Ashok Roadlines</span>
          </h1>
          <p class="text-xl text-gray-300 leading-relaxed">
            50 years of excellence in logistics and transportation across Eastern India
          </p>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i class="pi pi-chevron-down text-white text-2xl opacity-70"></i>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div class="absolute -top-6 -left-6 w-32 h-32 bg-[#A85750] opacity-10 rounded-full"></div>
            <div class="relative bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl shadow-xl border border-gray-100">
              <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#A85750] to-transparent opacity-5 rounded-bl-full"></div>
              <div class="relative z-10">
                <div class="inline-flex items-center justify-center w-20 h-20 bg-[#A85750] rounded-2xl mb-6 shadow-lg">
                  <i class="pi pi-calendar text-4xl text-white"></i>
                </div>
                <h2 class="text-6xl font-bold text-gray-900 mb-2">1974</h2>
                <p class="text-xl text-gray-600 font-semibold mb-6">Our Journey Began</p>
                <p class="text-gray-600 leading-relaxed">
                  Founded by <span class="font-semibold text-gray-900">Mr. Mahesh Kumar Periwal</span>, 
                  Ashok Roadlines started with a vision to revolutionize transportation in Eastern India.
                </p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-[#A85750] bg-opacity-10 rounded-xl flex items-center justify-center">
                <i class="pi pi-check text-[#A85750] text-xl font-bold"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Humble Beginnings</h3>
                <p class="text-gray-600 leading-relaxed">
                  Our first client was <span class="font-semibold">Heavy Engineering Corporation Ltd., Ranchi</span>, 
                  a prestigious PSU that trusted us to deliver excellence from day one.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-[#A85750] bg-opacity-10 rounded-xl flex items-center justify-center">
                <i class="pi pi-users text-[#A85750] text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Trusted by Industry Leaders</h3>
                <p class="text-gray-600 leading-relaxed mb-3">
                  Today, we proudly serve <span class="font-semibold text-[#A85750]">20+ corporate clients</span>, 
                  including some of India's most respected organizations:
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">Larsen & Toubro Ltd</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">SAIL</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">JSPL</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">Coal India Ltd</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">IOCL</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">BPCL</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">HPCL</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">Bridge & Roof Co. India Ltd</span>
                </div>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-[#A85750] bg-opacity-10 rounded-xl flex items-center justify-center">
                <i class="pi pi-star text-[#A85750] text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Industry Leadership</h3>
                <p class="text-gray-600 leading-relaxed">
                  ARL is recognized as <span class="font-semibold text-[#A85750]">THE MOST DIVERSIFIED TRANSPORT GROUP</span> 
                  in Eastern India, operating Normal Trailers, Low Bed Trailers, Bulk LPG Tank Trailers, Anhydrous Liquid Ammonia Tankers, Hydraulic Axles, Cranes, Bridge Girder carriers—all under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Featured Projects Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-3 mb-4">
            <div class="h-1 w-12 bg-[#A85750]"></div>
            <span class="text-[#A85750] font-semibold text-sm uppercase tracking-wider">Major Projects</span>
            <div class="h-1 w-12 bg-[#A85750]"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Infrastructure <span class="text-[#A85750]">Success Stories</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Key bridge and flyover projects we've contributed to across India
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(project, index) in projects" :key="index"
               class="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-[#A85750] hover:shadow-lg transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <i class="pi pi-map-marker text-2xl text-[#A85750]"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">{{ project.name }}</h3>
                <p class="text-sm text-gray-600">{{ project.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-20 bg-gradient-to-br from-gray-900 to-[#A85750] relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-5"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div class="transform hover:scale-105 transition-transform duration-300">
            <div class="text-5xl md:text-6xl font-bold text-white mb-3">50+</div>
            <div class="text-gray-300 text-lg font-semibold">Years of Excellence</div>
          </div>
          <div class="transform hover:scale-105 transition-transform duration-300">
            <div class="text-5xl md:text-6xl font-bold text-white mb-3">5000+</div>
            <div class="text-gray-300 text-lg font-semibold">Girders Transported</div>
          </div>
          <div class="transform hover:scale-105 transition-transform duration-300">
            <div class="text-5xl md:text-6xl font-bold text-white mb-3">20K+</div>
            <div class="text-gray-300 text-lg font-semibold">MT Steel Monthly</div>
          </div>
          <div class="transform hover:scale-105 transition-transform duration-300">
            <div class="text-5xl md:text-6xl font-bold text-white mb-3">40+</div>
            <div class="text-gray-300 text-lg font-semibold">Years ODC Expertise</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script setup>
import { ref } from 'vue';

const projects = ref([
  { name: 'VIP Road Flyover', location: 'Kolkata' },
  { name: 'Budge Budge Flyover', location: 'Kolkata' },
  { name: 'Garden Reach Flyover', location: 'Kolkata' },
  { name: 'Baharagora Singara Road', location: 'Odisha & West Bengal' },
  { name: 'Ghoshpukur Salsalabari Road', location: 'Siliguri, WB' },
  { name: 'Ishwar Gupta Setu', location: 'Kalyani, WB' },
  { name: 'Mecon Roundabout Flyover', location: 'Ranchi, Jharkhand' },
  { name: 'Tallah ROB Project', location: 'Kolkata' },
  { name: 'Patna Gaya Road Project', location: 'Gaya, Bihar' },
  { name: 'High Speed Railway Project', location: 'Gujarat' }
]);

const currentYear = new Date().getFullYear();

const fleetItems = ref([
  {
    icon: 'pi pi-truck',
    title: 'Normal Trailers',
    description: 'Standard transportation solutions for diverse cargo needs'
  },
  {
    icon: 'pi pi-car',
    title: 'Low Bed Trailers',
    description: 'Specialized vehicles for heavy and oversized cargo'
  },
  {
    icon: 'pi pi-circle',
    title: 'Bulk LPG Tankers',
    description: 'Safe transportation of liquefied petroleum gas'
  },
  {
    icon: 'pi pi-inbox',
    title: 'Ammonia Tankers',
    description: 'Anhydrous liquid ammonia transport with safety protocols'
  },
  {
    icon: 'pi pi-wrench',
    title: 'Hydraulic Axles',
    description: 'Advanced equipment for heavy-duty transportation'
  },
  {
    icon: 'pi pi-building',
    title: 'Cranes',
    description: 'Lifting solutions for complex logistics operations'
  },
  {
    icon: 'pi pi-directions',
    title: 'Bridge Girder Carriers',
    description: 'Specialized transport for infrastructure projects'
  },
  {
    icon: 'pi pi-box',
    title: 'Project Cargo',
    description: 'End-to-end solutions for large-scale projects'
  }
]);
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(10px) translateX(-50%);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>