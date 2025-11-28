<template>
  <div class="min-h-screen bg-white">
    
    <!-- Hero Section Carousel -->
    <div id="home" class="pt-0 bg-gray-900">
      <div class="relative min-h-screen flex items-center justify-center isolate overflow-hidden">
        
        <!-- Carousel Slides -->
        <div class="absolute inset-0 -z-50">
          <transition-group name="hero-fade">
            <div
              v-for="(slide, index) in heroSlides"
              :key="slide.id"
              v-show="currentSlide === index"
              class="absolute inset-0"
            >
              <!-- Background Image/Video -->
              <video
                v-if="slide.type === 'video'"
                ref="videoElement"
                autoplay
                loop
                muted
                playsinline
                class="fixed top-0 left-0 w-full h-full object-cover brightness-[0.3] -z-50"
              >
                <source :src="slide.media" type="video/mp4" />
              </video>
              <div
                v-else
                class="absolute top-0 left-0 w-full h-full bg-cover bg-center brightness-[0.3]"
                :style="{ backgroundImage: `url(${slide.media})` }"
              ></div>
              
              <!-- Gradient Overlay for depth -->
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
            </div>
          </transition-group>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="previousSlide"
          aria-label="Previous slide"
          class="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-[#A85750] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/30 shadow-2xl"
        >
          <i class="pi pi-chevron-left text-xl md:text-2xl"></i>
        </button>

        <button
          @click="nextSlide"
          aria-label="Next slide"
          class="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-[#A85750] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/30 shadow-2xl"
        >
          <i class="pi pi-chevron-right text-xl md:text-2xl"></i>
        </button>

        <!-- Content Overlay -->
        <div class="container mx-auto px-4 py-24 relative mt-12 z-20">
          <transition name="hero-content" mode="out-in">
            <div :key="currentSlide" class="text-center text-white max-w-5xl mx-auto">
              <!-- Badge -->
              <div class="inline-flex items-center gap-2 bg-[#A85750]/20 backdrop-blur-md border border-[#A85750]/40 px-6 py-3 rounded-full mb-8">
                <div class="w-2 h-2 bg-[#A85750] rounded-full animate-pulse"></div>
                <span class="text-sm font-semibold tracking-wider">TRUSTED SINCE 1974</span>
              </div>
              
              <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight">
                {{ heroSlides[currentSlide].title }}
              </h1>
              
              <div class="flex items-center justify-center gap-3 mb-8">
                <div class="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#A85750]"></div>
                <div class="h-1 w-24 bg-[#A85750] rounded-full"></div>
                <div class="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#A85750]"></div>
              </div>
              
              <p class="text-xl md:text-2xl lg:text-3xl mb-12 font-light tracking-wide text-gray-200">
                {{ heroSlides[currentSlide].subtitle }}
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <a href="#about" class="group inline-flex items-center justify-center gap-3 bg-[#A85750] text-white px-10 py-5 rounded-xl font-bold hover:bg-[#8f4740] transition-all duration-300 shadow-2xl hover:shadow-[#A85750]/50 transform hover:-translate-y-1 hover:scale-105">
                  <span>Get Started</span>
                  <i class="pi pi-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a href="#services" class="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 shadow-xl transform hover:-translate-y-1">
                  <span>Explore Services</span>
                  <i class="pi pi-compass"></i>
                </a>
              </div>
            </div>
          </transition>
        </div>

        <!-- Slide Indicators -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 bg-black/30 backdrop-blur-md px-4 py-3 rounded-full border border-white/20">
          <button
            v-for="(slide, index) in heroSlides"
            :key="slide.id"
            @click="goToSlide(index)"
            :aria-label="`Go to slide ${index + 1}`"
            class="transition-all duration-300 rounded-full"
            :class="[
              currentSlide === index 
                ? 'w-10 h-3 bg-[#A85750]' 
                : 'w-3 h-3 bg-white/40 hover:bg-white/70'
            ]"
          ></button>
        </div>

      </div>
    </div>

    <!-- Scroll Content -->
    <div class="bg-white relative z-20">
      
      <!-- Stats Bar -->
      <section class="py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-y border-gray-700">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-black text-[#A85750] mb-2">50+</div>
              <div class="text-sm md:text-base text-gray-400 font-medium">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-black text-[#A85750] mb-2">5000+</div>
              <div class="text-sm md:text-base text-gray-400 font-medium">Girders Transported</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-black text-[#A85750] mb-2">500+</div>
              <div class="text-sm md:text-base text-gray-400 font-medium">Active Clients</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-black text-[#A85750] mb-2">24/7</div>
              <div class="text-sm md:text-base text-gray-400 font-medium">Operations</div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Who We Are Section -->
      <section 
        id="about" 
        ref="aboutSection"
        class="py-24 bg-gradient-to-b from-white via-gray-50 to-white scroll-reveal"
        :class="{ 'is-visible': visibleSections.about }"
      >
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center gap-3 mb-6 fade-in-up" style="animation-delay: 0.1s">
              <div class="h-px w-8 bg-gradient-to-r from-transparent to-[#A85750]"></div>
              <span class="text-[#A85750] font-bold text-xs uppercase tracking-[0.2em]">Since 1974</span>
              <div class="h-px w-8 bg-gradient-to-l from-transparent to-[#A85750]"></div>
            </div>
            
            <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-8 fade-in-up leading-tight" style="animation-delay: 0.2s">
              India's Trusted Name in<br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A85750] to-[#d4756c]">Heavy Logistics</span>
            </h2>
            
            <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 fade-in-up" style="animation-delay: 0.3s">
              Since our inception in 1974, Ashok Roadlines has evolved into a comprehensive logistics powerhouse, serving major industries across India with a diversified fleet and unwavering commitment to excellence.
            </p>
            
            <div class="grid md:grid-cols-3 gap-6 mt-16 fade-in-up" style="animation-delay: 0.4s">
              <div class="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#A85750]/30 transition-all duration-300 transform hover:-translate-y-2">
                <div class="w-14 h-14 bg-gradient-to-br from-[#A85750] to-[#d4756c] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <i class="pi pi-shield text-2xl text-white"></i>
                </div>
                <h3 class="font-bold text-lg mb-2">Reliability</h3>
                <p class="text-gray-600 text-sm">Trusted by India's leading PSUs and corporations</p>
              </div>
              
              <div class="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#A85750]/30 transition-all duration-300 transform hover:-translate-y-2">
                <div class="w-14 h-14 bg-gradient-to-br from-[#A85750] to-[#d4756c] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <i class="pi pi-globe text-2xl text-white"></i>
                </div>
                <h3 class="font-bold text-lg mb-2">Pan-India Network</h3>
                <p class="text-gray-600 text-sm">Comprehensive coverage across all major cities</p>
              </div>
              
              <div class="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#A85750]/30 transition-all duration-300 transform hover:-translate-y-2">
                <div class="w-14 h-14 bg-gradient-to-br from-[#A85750] to-[#d4756c] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <i class="pi pi-cog text-2xl text-white"></i>
                </div>
                <h3 class="font-bold text-lg mb-2">Advanced Fleet</h3>
                <p class="text-gray-600 text-sm">State-of-the-art equipment and technology</p>
              </div>
            </div>
            
            <div class="mt-12 fade-in-up" style="animation-delay: 0.5s">
              <a href="#about" class="inline-flex items-center justify-center gap-3 bg-[#A85750] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#8f4740] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span>Learn More About Us</span>
                <i class="pi pi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Overview Section -->
      <section 
        id="services" 
        ref="servicesSection"
        class="py-24 bg-gradient-to-b from-gray-50 to-white scroll-reveal"
        :class="{ 'is-visible': visibleSections.services }"
      >
        <div class="container mx-auto px-6">
          <div class="text-center mb-20">
            <div class="inline-flex items-center gap-3 mb-6 fade-in-up" style="animation-delay: 0.1s">
              <div class="h-px w-8 bg-gradient-to-r from-transparent to-[#A85750]"></div>
              <span class="text-[#A85750] font-bold text-xs uppercase tracking-[0.2em]">Our Expertise</span>
              <div class="h-px w-8 bg-gradient-to-l from-transparent to-[#A85750]"></div>
            </div>
            
            <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6 fade-in-up leading-tight" style="animation-delay: 0.2s">
              Comprehensive<br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A85750] to-[#d4756c]">Transportation Solutions</span>
            </h2>
            
            <p class="text-xl text-gray-600 max-w-2xl mx-auto fade-in-up" style="animation-delay: 0.3s">
              Specialized services across multiple industry verticals
            </p>
          </div>

          <!-- Services Carousel -->
          <div class="relative w-full fade-in-up" style="animation-delay: 0.4s">

            <!-- Left Arrow (Desktop Only) -->
            <button
              @click="scrollLeft"
              aria-label="Scroll left"
              class="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 
                     bg-white shadow-2xl border border-gray-200 w-14 h-14 rounded-full
                     items-center justify-center text-gray-900 
                     hover:bg-[#A85750] hover:text-white hover:border-[#A85750]
                     transition-all duration-300 hover:scale-110"
            >
              <i class="pi pi-chevron-left text-xl"></i>
            </button>

            <!-- Scrollable Track -->
            <div
              ref="carousel"
              class="flex gap-6 overflow-x-auto scroll-smooth py-4 px-2 no-scrollbar"
            >
              <div
                v-for="(service, index) in services"
                :key="service.title"
                class="w-[85%] sm:w-[60%] md:w-[32%] flex-shrink-0 group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-[#A85750] service-card relative overflow-hidden"
                :style="{ animationDelay: `${0.1 * index}s` }"
              >
                <!-- Background Pattern -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A85750]/5 to-transparent rounded-full -mr-16 -mt-16"></div>
                
                <div class="relative z-10">
                  <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#A85750] to-[#8f4740] rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <i :class="service.icon" class="text-3xl text-white"></i>
                  </div>

                  <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-[#A85750] transition-colors">
                    {{ service.title }}
                  </h3>

                  <p class="text-gray-600 text-sm leading-relaxed mb-6">
                    {{ service.description }}
                  </p>

                  <div class="space-y-3">
                    <div
                      v-for="point in service.points"
                      :key="point"
                      class="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <i class="pi pi-check-circle text-[#A85750] mt-0.5 flex-shrink-0"></i>
                      <span class="font-medium">{{ point }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Arrow (Desktop Only) -->
            <button
              @click="scrollRight"
              aria-label="Scroll right"
              class="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10
                     bg-white shadow-2xl border border-gray-200 w-14 h-14 rounded-full
                     items-center justify-center text-gray-900
                     hover:bg-[#A85750] hover:text-white hover:border-[#A85750]
                     transition-all duration-300 hover:scale-110"
            >
              <i class="pi pi-chevron-right text-xl"></i>
            </button>

          </div>
        </div>
      </section>

      <!-- Client Logos Section -->
      <section 
        ref="clientsSection"
        class="bg-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden relative border-t border-gray-700 scroll-reveal"
        :class="{ 'is-visible': visibleSections.clients }"
      >
        <div class="container mx-auto px-6">

          <!-- Title -->
          <div class="text-center mb-12 fade-in-up" style="animation-delay: 0.1s">
            <div class="inline-flex items-center gap-3 mb-4">
              <div class="h-px w-8 bg-gradient-to-r from-transparent to-[#A85750]"></div>
              <span class="text-[#A85750] font-bold text-xs uppercase tracking-[0.2em]">Trusted Partnerships</span>
              <div class="h-px w-8 bg-gradient-to-l from-transparent to-[#A85750]"></div>
            </div>
            <h3 class="text-3xl md:text-4xl font-black text-white">
              Our Esteemed Clients
            </h3>
          </div>

          <!-- Logo Strip -->
          <div class="relative fade-in-up" style="animation-delay: 2s">
            <!-- Gradient Masks -->
            
            <div class="overflow-hidden py-8">
              <div 
                class="flex gap-16 items-center"
                :class="{ 'animate-client-scroll': !scrollPaused }"
                @mouseenter="pauseScroll" 
                @mouseleave="resumeScroll"
              >
                <!-- Duplicate for seamless loop -->
                <div 
                  v-for="(client, idx) in [...clients, ...clients]" 
                  :key="`${client.name}-${idx}`" 
                  class="flex-shrink-0 group"
                >
                  <div class="w-32 h-32 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 group-hover:bg-white/15 group-hover:scale-110 group-hover:shadow-2xl border border-white/10 group-hover:border-[#A85750]/50">
                    <img 
                      :src="client.logo" 
                      :alt="client.name" 
                      class="w-full h-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- CTA Section -->
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Hero Carousel Data
const heroSlides = ref([
  {
    id: 1,
    type: 'video',
    media: '/src/assets/hero.mp4',
    title: 'ASHOK ROADLINES',
    subtitle: 'Logistics Through Innovation, Dedication & Technology'
  },
  {
    id: 2,
    type: 'image',
    media: '/src/assets/hero5.png',
    title: 'HEAVY TRANSPORT SPECIALISTS',
    subtitle: '50+ Years of Excellence in ODC & Project Cargo'
  },
  {
    id: 3,
    type: 'image',
    media: '/src/assets/hero1.jpeg',
    title: 'PAN-INDIA NETWORK',
    subtitle: 'Connecting Industries Across the Nation'
  },
  {
    id: 4,
    type: 'image',
    media: '/src/assets/hero3.png',
    title: 'INNOVATION DRIVEN',
    subtitle: 'Advanced Technology for Modern Logistics'
  },
  {
    id: 5,
    type: 'image',
    media: '/src/assets/hero4.png',
    title: 'TRUSTED BY LEADERS',
    subtitle: 'Serving India\'s Premier PSUs & Corporations'
  }
])

const currentSlide = ref(0)
const videoElement = ref(null)
let autoplayInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 
    ? heroSlides.value.length - 1 
    : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
  resetAutoplay()
}

const startAutoplay = () => {
  stopAutoplay()
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 10000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

// Scroll reveal functionality
const aboutSection = ref(null)
const servicesSection = ref(null)
const clientsSection = ref(null)

const visibleSections = ref({
  about: false,
  services: false,
  clients: false
})

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target === aboutSection.value) {
        visibleSections.value.about = true
      } else if (entry.target === servicesSection.value) {
        visibleSections.value.services = true
      } else if (entry.target === clientsSection.value) {
        visibleSections.value.clients = true
      }
    }
  })
}

let observer = null

// Client scroll pause/resume
const scrollPaused = ref(false)

const pauseScroll = () => {
  scrollPaused.value = true
}

const resumeScroll = () => {
  scrollPaused.value = false
}

// Check if elements are already visible on load
const checkInitialVisibility = () => {
  const sections = [
    { ref: aboutSection, key: 'about' },
    { ref: servicesSection, key: 'services' },
    { ref: clientsSection, key: 'clients' }
  ]

  sections.forEach(section => {
    if (section.ref.value) {
      const rect = section.ref.value.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0
      if (isVisible) {
        visibleSections.value[section.key] = true
      }
    }
  })
}

onMounted(() => {
  startAutoplay()
  
  setTimeout(() => {
    checkInitialVisibility()
  }, 100)
  
  observer = new IntersectionObserver(observerCallback, observerOptions)
  
  if (aboutSection.value) observer.observe(aboutSection.value)
  if (servicesSection.value) observer.observe(servicesSection.value)
  if (clientsSection.value) observer.observe(clientsSection.value)
})

onBeforeUnmount(() => {
  stopAutoplay()
  if (observer) {
    observer.disconnect()
    observer = null
  }
})

const clients = ref([
  { name: 'HP', logo: '/src/assets/clients/hp.png' },
  { name: 'SAIL', logo: '/src/assets/clients/sail.png' },
  { name: 'MEIL', logo: '/src/assets/clients/meil.png' },
  { name: 'Indian Oil', logo: '/src/assets/clients/indianoil.png' },
  { name: 'Coal India', logo: '/src/assets/clients/coalindia.png' },
  { name: 'BHEL', logo: '/src/assets/clients/bhel.png' },
  { name: 'Bharat Petroleum', logo: '/src/assets/clients/bharatpetrol.png' },
  { name: 'Bekem', logo: '/src/assets/clients/bekem.png' },
  { name: 'BBJ', logo: '/src/assets/clients/bbj.png' },
  { name: 'B&R', logo: '/src/assets/clients/br.png' },
  { name: 'Jindal', logo: '/src/assets/clients/jindal.png' },
  { name: 'L&T', logo: '/src/assets/clients/lt.png' },
])

const carousel = ref(null)

const scrollRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: 400, behavior: 'smooth' })
  }
}

const scrollLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -400, behavior: 'smooth' })
  }
}

const services = [
  {
    title: "Bridge Girder Transport",
    icon: "pi pi-directions",
    description: "Pioneers in Eastern India for transporting girders & segments for bridges, flyovers, and ROBs.",
    points: ["5000+ girders transported", "Up to 125' long & 150 MT", "Hydraulic axles & pullers"],
  },
  {
    title: "Port & Container Services",
    icon: "pi pi-box",
    description: "Operating in port-based transportation since inception with expertise in TEU & FEU containers.",
    points: ["Regular port operations", "Project cargo handling", "Major PSU clients"],
  },
  {
    title: "Finished Steel Transport",
    icon: "pi pi-building",
    description: "Branch networks at all major steel plant cities with extensive delivery capabilities.",
    points: ["20,000+ MT monthly", "Pan-India delivery", "Direct plant delivery"],
  },
  {
    title: "ODC & OWC Transport",
    icon: "pi pi-truck",
    description: "40+ years of expertise in moving odd dimension and odd weight cargo with specialized equipment.",
    points: ["Mining equipment transport", "Transformers & cranes", "Customized low bed trailers"],
  },
  {
    title: "Gas Transport",
    icon: "pi pi-circle",
    description: "Specialized bulk LPG and anhydrous liquid ammonia transportation with strict safety protocols.",
    points: ["OMC partnerships", "Ammonia gas pioneers", "Eastern India coverage"],
  },
  {
    title: "Industrial Products",
    icon: "pi pi-cog",
    description: "Comprehensive solutions for heavy machinery and industrial equipment transportation.",
    points: ["Draglines & excavators", "Power plant equipment", "Steel plant projects"],
  },
  {
    title: "Hydraulic Axle Operations",
    icon: "pi pi-sliders-h",
    description: "State-of-the-art hydraulic axle systems for precise maneuvering of oversized loads.",
    points: ["Multi-axle configurations", "Remote-controlled systems", "Load up to 500 MT"],
  },
  {
    title: "Crane & Heavy Equipment",
    icon: "pi pi-wrench",
    description: "Full-service crane operations and heavy equipment transportation and handling.",
    points: ["Mobile crane fleet", "Lifting & rigging services", "On-site support"],
  },
]
</script>

<style scoped>
/* Hide scrollbar for carousel */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Hero Carousel Transitions */
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 1.5s ease;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}

.hero-content-enter-active,
.hero-content-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-content-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.hero-content-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.95);
}

/* Scroll Reveal Animations */
.scroll-reveal {
  opacity: 1;
}

.scroll-reveal .fade-in-up,
.scroll-reveal .service-card {
  opacity: 0;
  transform: translateY(60px);
}

.scroll-reveal.is-visible .fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.scroll-reveal.is-visible .service-card {
  animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Client Logos Smooth Infinite Scroll */
.animate-client-scroll {
  animation: clientScroll 50s linear infinite;
  will-change: transform;
}

@keyframes clientScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Enhanced hover effects */
.group:hover .pi-check-circle {
  animation: pulse 1.5s ease infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}

/* Smooth transitions */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced gradients */
.bg-gradient-to-r,
.bg-gradient-to-l,
.bg-gradient-to-br,
.bg-gradient-to-t,
.bg-gradient-to-b {
  background-size: 200% 200%;
}
</style>
