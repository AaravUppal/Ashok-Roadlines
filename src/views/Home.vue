<template>
  <div class="min-h-screen bg-white">
    
    <!-- Hero Section -->
    <div id="home" class="pt-0">
      <div class="relative min-h-screen flex items-center justify-center isolate">
        
        <!-- FIXED Background Video -->
        <video
          autoplay
          loop
          playsinline
          class="fixed top-0 left-0 w-full h-full object-cover brightness-25 -z-50"
        >
          <source :src="heroVideo" type="video/mp4" />
        </video>

        <!-- Content Overlay -->
        <div class="container mx-auto px-4 py-24 relative mt-12">
          <div class="text-center text-white max-w-4xl mx-auto">
            <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider">
              ASHOK ROADLINES
            </h1>
            <div class="h-1 w-32 bg-[#A85750] mx-auto mb-8"></div>
            <p class="text-2xl md:text-3xl mb-8 font-light tracking-wide">
              LOGISTICS THROUGH INNOVATION, DEDICATION & TECHNOLOGY
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a href="#about" class="inline-flex items-center justify-center gap-2 bg-[#A85750] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#8f4740] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>Learn More About Us</span>
                <i class="pi pi-arrow-right"></i>
              </a>
              
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll Content -->
    <div class="bg-white relative z-20">
      
      
      <!-- Who We Are Section -->
      <section id="about" class="py-12 bg-gradient-to-b from-gray-50 via-white to-gray-50 h-screen">
        <div class="  ">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-3 mb-4">
              <div class="h-1 w-12 bg-[#A85750]"></div>
              <span class="text-[#A85750] font-semibold text-sm uppercase tracking-wider">Since 1974</span>
              <div class="h-1 w-12 bg-[#A85750]"></div>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              India's Trusted Name in <span class="text-[#A85750]">Heavy Logistics</span>
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Since our inception in 1974, Ashok Roadlines has evolved into a comprehensive logistics powerhouse, serving major industries across India with a diversified fleet and unwavering commitment to excellence. From bridge girders to project cargo, we handle what others can't.
            </p>
          </div>

 <!-- TOP: Left → Right -->
<div class="overflow-hidden relative mb-12">
  <div class="marquee-right pb-8">
    <div class="marquee-track">
      <div
        v-for="stat in stats"
        :key="'top-' + stat.label"
        class="stat-card"
      >
        <div class="text-5xl font-bold text-[#A85750] mb-2">{{ stat.value }}</div>
        <div class="text-gray-600 font-semibold">{{ stat.label }}</div>
      </div>
      <!-- DUPLICATE for seamless loop -->
      <div
        v-for="stat in stats"
        :key="'top-copy-' + stat.label"
        class="stat-card"
      >
        <div class="text-5xl font-bold text-[#A85750] mb-2">{{ stat.value }}</div>
        <div class="text-gray-600 font-semibold">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</div>


<!-- BOTTOM: Right → Left -->
<div class="overflow-hidden relative mb-12">
  <div class="marquee-left pb-8">
    <div class="marquee-track">
      <div
        v-for="stat in stats"
        :key="'bottom-' + stat.label"
        class="stat-card"
      >
        <div class="text-5xl font-bold text-[#A85750] mb-2">{{ stat.value }}</div>
        <div class="text-gray-600 font-semibold">{{ stat.label }}</div>
      </div>
      <!-- DUPLICATE for seamless loop -->
      <div
        v-for="stat in stats"
        :key="'bottom-copy-' + stat.label"
        class="stat-card"
      >
        <div class="text-5xl font-bold text-[#A85750] mb-2">{{ stat.value }}</div>
        <div class="text-gray-600 font-semibold">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>

      <!-- Services Overview Section -->
      <section id="services" class=" bg-gradient-to-b from-gray-50 via-white to-gray-50 pb-8">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-3 mb-4">
              <div class="h-1 w-12 bg-[#A85750]"></div>
              <span class="text-[#A85750] font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
              <div class="h-1 w-12 bg-[#A85750]"></div>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive <span class="text-[#A85750]">Transportation Solutions</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized services across multiple industry verticals
            </p>
          </div>

          <!-- Services Carousel -->
<div class="relative w-full">

<!-- Left Arrow (Desktop Only) -->
<button
  @click="scrollLeft"
  class="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 
         bg-white shadow-lg border border-gray-200 w-12 h-12 rounded-full
         items-center justify-center text-black 
         hover:bg-[#A85750] hover:text-white hover:shadow-2xl 
         transition-all duration-300"
>
  <i class="pi pi-chevron-left text-xl"></i>
</button>

  <!-- Scrollable Track -->
  <div
    ref="carousel"
    class="flex gap-6 overflow-x-auto scroll-smooth p-12 no-scrollbar"
  >
    <div
      v-for="service in services"
      :key="service.title"
      class="w-[85%] sm:w-[60%] md:w-[32%] flex-shrink-0 group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-[#A85750]"
    >
      <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#A85750] to-[#8f4740] rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <i :class="service.icon" class="text-3xl text-white"></i>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#A85750] transition-colors">
        {{ service.title }}
      </h3>

      <p class="text-gray-600 text-sm leading-relaxed mb-4">
        {{ service.description }}
      </p>

      <div class="space-y-2">
        <div
          v-for="point in service.points"
          :key="point"
          class="flex items-center gap-2 text-sm text-gray-600"
        >
          <i class="pi pi-check-circle text-[#A85750]"></i>
          <span>{{ point }}</span>
        </div>
      </div>
    </div>
  </div>

 <!-- Right Arrow (Desktop Only) -->
<button
  @click="scrollRight"
  class="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10
         bg-white shadow-lg border border-gray-200 w-12 h-12 rounded-full
         items-center justify-center text-black
         hover:bg-[#A85750] hover:text-white hover:shadow-2xl
         transition-all duration-300"
>
  <i class="pi pi-chevron-right text-xl"></i>
</button>

</div>
</div>

      </section>

      
         <!-- Client Logos Section -->
      <section class="pb-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <!-- Premium Background Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, #A85750 1px, transparent 0); background-size: 40px 40px;"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <!-- Section Header -->
          <div class="text-center mb-20">
            <div class="inline-flex items-center gap-3 mb-6">
              <div class="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#A85750] to-[#A85750]"></div>
              <span class="text-[#A85750] font-bold text-sm uppercase tracking-[0.2em]">Trusted Partnerships</span>
              <div class="h-0.5 w-16 bg-gradient-to-r from-[#A85750] via-[#A85750] to-transparent"></div>
            </div>
            <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A85750] to-[#8f4740]">Esteemed Clients</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powering India's infrastructure growth by serving the nation's most prestigious organizations and industry leaders
            </p>
          </div>

          <!-- Premium Client Grid -->
<div class="relative">
  <!-- Decorative Elements -->
  <div class="absolute -top-10 -left-10 w-40 h-40 bg-[#A85750] opacity-5 rounded-full blur-3xl"></div>
  <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-[#A85750] opacity-5 rounded-full blur-3xl"></div>

  <!-- Client Cards Container -->
  <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 relative overflow-hidden">
    <!-- Subtle Border Glow -->
    <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#A85750]/10 via-transparent to-[#A85750]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <!-- Client Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      <div
        v-for="(client, index) in clients"
        :key="client.name"
        class="group relative m-6"
      >
        <!-- Client Card -->
        <div class="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-2 border border-gray-200 hover:border-[#A85750] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex items-center justify-center min-h-[135px]">
          <!-- Hover Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-[#A85750]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          
          <!-- Logo Container -->
          <div class="relative z-10 flex items-center justify-center">
            <img 
              :src="client.logo" 
              :alt="client.name"
              class="w-28 h-28 md:w-32 md:h-32 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          <!-- Premium Corner Accent -->
          <div class="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute top-2 right-2 w-8 h-0.5 bg-gradient-to-l from-[#A85750] to-transparent"></div>
            <div class="absolute top-2 right-2 w-0.5 h-8 bg-gradient-to-b from-[#A85750] to-transparent"></div>
          </div>

          <!-- Tooltip -->
          <div class="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl pointer-events-none">
            <div class="font-semibold">{{ client.name }}</div>
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </div>
        </div>
      </div>
    </div>
              <!-- Bottom CTA -->
              <div class="mt-8 text-center">
                <div class="inline-flex items-center gap-3 text-gray-600 font-medium">
                  <div class="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#A85750]"></div>
                  <span class="text-sm tracking-wide">And many more prestigious organizations across India</span>
                  <div class="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#A85750]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import heroVideo from '/src/assets/hero.mp4';

const carousel = ref(null)

const scrollRight = () => {
  carousel.value?.scrollBy({ left: 400, behavior: 'smooth' })
}

const scrollLeft = () => {
  carousel.value?.scrollBy({ left: -400, behavior: 'smooth' })
}
const clients = ref([
  {
    name: 'HP',
    color: '#A85750',
    logo: '/src/assets/clients/hp.png'
  },
  {
    name: 'HP',
    color: '#A85750',
    logo: '/src/assets/clients/sail.png'
  },
  {
    name: 'HP',
    color: '#A85750',
    logo: '/src/assets/clients/meil.png'
  },
  {
    name: 'HP',
    color: '#A85750',
    logo: '/src/assets/clients/indianoil.png'
  },
  {
    name: 'HP',
    color: '#A85750',
    logo: '/src/assets/clients/coalindia.png'
  },
  {
    name: 'HP',
    color: '#A85750',
    logo: '/src/assets/clients/bhel.png'
  },
  {
    name: 'HP',
    color: '#A85750',
    logo: '/src/assets/clients/bharatpetrol.png'
  },
  {
    name: 'HP',
    color: '#A85750',
    logo: '/src/assets/clients/bekem.png'
  },
  {
    name: 'HP',
    color: '#A85750',
    logo: '/src/assets/clients/bbj.png'
  },
  {
    name: 'HP',
    color: '#A85750',
    logo: '/src/assets/clients/b&r.png'
  },
  {
    name: 'HP',
    color: '#A85750',
    logo: '/src/assets/clients/jindal.png'
  },
  {
    name: 'HP',
    color: '#A85750',
    logo: '/src/assets/clients/l&t.png'
  },
])
const stats = [
  { value: '50+', label: 'Years Experience' },
  { value: '20+', label: 'Corporate Clients' },
  { value: '5000+', label: 'Girder Movements' },
  { value: '20K+', label: 'MT Steel Monthly' },
  { value: '40+', label: 'Years ODC Expertise' },
  { value: 'Pan-India', label: 'Nationwide Presence' },
  { value: '72+', label: 'Trailers in Fleet' },
  { value: '52+', label: 'Hydraulic Axles' },
  { value: '75+', label: 'LPG Tankers' },
  { value: '7+', label: 'Cranes Available' },
  { value: '7+', label: 'Ammonia Tankers' },
  { value: '6+', label: 'Branch Locations' },
  { value: '125 ft', label: 'Max Girder Length Moved' },
  { value: '150 MT', label: 'Max Girder Weight Moved' },
  { value: '5+', label: 'Industry Sectors Served' },
  { value: '1st in East', label: 'Pioneers in Girder Transport' }
]
const services = [
  {
    title: "Bridge Girder Transport",
    icon: "pi pi-directions",
    description:
      "Pioneers in Eastern India for transporting girders & segments for bridges, flyovers, and ROBs.",
    points: [
      "5000+ girders transported",
      "Up to 125' long & 150 MT",
      "Hydraulic axles & pullers",
    ],
  },
  {
    title: "Port & Container Services",
    icon: "pi pi-box",
    description:
      "Operating in port-based transportation since inception with expertise in TEU & FEU containers.",
    points: [
      "Regular port operations",
      "Project cargo handling",
      "Major PSU clients",
    ],
  },
  {
    title: "Finished Steel Transport",
    icon: "pi pi-building",
    description:
      "Branch networks at all major steel plant cities with extensive delivery capabilities.",
    points: ["20,000+ MT monthly", "Pan-India delivery", "Direct plant delivery"],
  },
  {
    title: "ODC & OWC Transport",
    icon: "pi pi-truck",
    description:
      "40+ years of expertise in moving odd dimension and odd weight cargo with specialized equipment.",
    points: [
      "Mining equipment transport",
      "Transformers & cranes",
      "Customized low bed trailers",
    ],
  },
  {
    title: "Gas Transport",
    icon: "pi pi-circle",
    description:
      "Specialized bulk LPG and anhydrous liquid ammonia transportation with strict safety protocols.",
    points: ["OMC partnerships", "Ammonia gas pioneers", "Eastern India coverage"],
  },
  {
    title: "Industrial Products",
    icon: "pi pi-cog",
    description:
      "Comprehensive solutions for heavy machinery and industrial equipment transportation.",
    points: [
      "Draglines & excavators",
      "Power plant equipment",
      "Steel plant projects",
    ],
  },
  {
    title: "Hydraulic Axle Operations",
    icon: "pi pi-sliders-h",
    description:
      "State-of-the-art hydraulic axle systems for precise maneuvering of oversized loads.",
    points: [
      "Multi-axle configurations",
      "Remote-controlled systems",
      "Load up to 500 MT",
    ],
  },
  {
    title: "Crane & Heavy Equipment",
    icon: "pi pi-wrench",
    description:
      "Full-service crane operations and heavy equipment transportation and handling.",
    points: ["Mobile crane fleet", "Lifting & rigging services", "On-site support"],
  },
];
</script>