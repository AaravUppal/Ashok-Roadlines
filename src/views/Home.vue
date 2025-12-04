<template>
  <div class="min-h-screen bg-white overflow-x-hidden">
    
    <!-- Hero Section -->
    <div id="home" class="relative min-h-screen bg-black overflow-hidden ">
      
      <!-- Video Background -->
      <div 
        class="fixed top-0 left-0 w-full h-screen z-0"
        :style="{ 
          transform: `translateY(${scrollY * 0.4}px)`,
          opacity: Math.max(0.5, 1 - scrollY * 0.001)
        }"
      >
        <transition-group name="hero-fade">
          <div
            v-for="(slide, index) in heroSlides"
            :key="slide.id"
            v-show="currentSlide === index"
            class="absolute inset-0"
          >
            <video
              v-if="slide.type === 'video'"
              autoplay
              loop
              muted
              playsinline
              class="absolute inset-0 w-full h-full object-cover brightness-25"
            >
              <source :src="slide.media" type="video/mp4" />
            </video>
            <div
              v-else
              class="absolute inset-0 w-full h-full bg-cover bg-center brightness-25"
              :style="{ backgroundImage: `url(${slide.media})` }"
            ></div>
          </div>
        </transition-group>
        
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div class="container mx-auto">
          <transition name="hero-content" mode="out-in">
            <div :key="currentSlide" class="max-w-5xl mx-auto text-center">
              
              <div class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full 
                          bg-white/10 border border-white/20 backdrop-blur-xl">
                <div class="w-2 h-2 bg-[#A85750] rounded-full"></div>
                <span class="text-xs font-bold tracking-widest text-white/90 uppercase">
                  
TRUSTED SINCE 1974
                </span>
              </div>
              
              <h1 class="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
                {{ heroSlides[currentSlide].title }}
              </h1>
              
              <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                {{ heroSlides[currentSlide].subtitle }}
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <router-link to="/about" 
                   class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                          bg-[#A85750] hover:bg-[#8f4740] text-white font-bold
                          transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <span>Learn More</span>
                  <i class="pi pi-arrow-down"></i>
                </router-link>
                
                <router-link to="/contact" 
                   class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                          border-2 border-white/30 backdrop-blur-xl text-white font-bold
                          hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                  <span>Contact Us</span>
                  <i class="pi pi-phone"></i>
                </router-link>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Navigation Controls -->
      <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <div class="container mx-auto px-6 flex justify-between items-center">
          <button
            @click="previousSlide"
            class="pointer-events-auto w-12 h-12 rounded-full 
                   bg-white/10 backdrop-blur-xl border border-white/20
                   flex items-center justify-center 
                   hover:bg-white/20 transition-all duration-300"
          >
            <i class="pi pi-chevron-left text-white"></i>
          </button>

          <button
            @click="nextSlide"
            class="pointer-events-auto w-12 h-12 rounded-full 
                   bg-white/10 backdrop-blur-xl border border-white/20
                   flex items-center justify-center 
                   hover:bg-white/20 transition-all duration-300"
          >
            <i class="pi pi-chevron-right text-white"></i>
          </button>
        </div>
      </div>

      <!-- Slide Indicators -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        <button
          v-for="(slide, index) in heroSlides"
          :key="slide.id"
          @click="goToSlide(index)"
          class="transition-all duration-300"
          :class="[
            currentSlide === index 
              ? 'w-8 h-2 bg-[#A85750]' 
              : 'w-2 h-2 bg-white/30 hover:bg-white/60'
          ]"
          style="border-radius: 999px;"
        >
        </button>
      </div>
      
    </div>

    <!-- Main Content -->
    <div class="bg-white">
      
     

      <!-- About Section -->
      <section id="about" ref="aboutSection" class="py-20 bg-gray-900">
        <div class="container mx-auto px-6">
          <div class="max-w-7xl mx-auto">
            
            <div class="text-center mb-16 relative z-10">
              <div class="inline-flex items-center gap-2 mb-4">
                <div class="w-8 h-px bg-[#A85750]"></div>
                <span class="text-sm uppercase tracking-widest text-[#A85750] font-bold">
                  Our Story
                </span>
                <div class="w-8 h-px bg-[#A85750]"></div>
              </div>
              
              <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                Eastern India's Most Diversified<br/>
                <span class="text-[#A85750]">Transport Group</span>
              </h2>
              
              <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                Founded in 1974 by Mr. Mahesh Kumar Periwal, serving 20+ major corporate clients 
                with comprehensive fleet solutions.
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                v-for="(card, index) in aboutCards"
                :key="index"
                class="group p-8 rounded-2xl transition-all duration-500 relative overflow-hidden"
                :class="[
                  index === 0 
                    ? 'bg-gradient-to-br from-[#A85750] to-[#8f4740] text-white shadow-xl' 
                    : 'bg-white/5 hover:bg-white/10 hover:shadow-xl border border-white/10'
                ]"
              >
                <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4
                            transition-transform duration-300 group-hover:scale-110 relative z-20"
                     :class="[
                       index === 0 
                         ? 'bg-white/20' 
                         : 'bg-[#A85750]/20'
                     ]">
                  <i :class="[card.icon, 'text-2xl', 'text-white']"></i>
                </div>

                <h3 class="text-xl font-black mb-3 relative z-20 text-white">
                  {{ card.title }}
                </h3>
                <p class="text-sm leading-relaxed relative z-20" 
                   :class="index === 0 ? 'text-white/90' : 'text-gray-300'">
                  {{ card.description }}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" ref="servicesSection" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          
          <div class="text-center mb-16 max-w-4xl mx-auto">
            <div class="inline-flex items-center gap-2 mb-4">
              <div class="w-8 h-px bg-[#A85750]"></div>
              <span class="text-sm uppercase tracking-widest text-[#A85750] font-bold">
                Services
              </span>
              <div class="w-8 h-px bg-[#A85750]"></div>
            </div>
            
            <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Complete <span class="text-[#A85750]">Logistics Solutions</span>
            </h2>

            <p class="text-lg text-gray-600">
              From heavy equipment to specialized cargo
            </p>
          </div>

          <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                v-for="(service, index) in services"
                :key="index"
                class="group p-6 rounded-2xl bg-white border-2 border-gray-100
                       hover:border-[#A85750]/30 hover:shadow-xl
                       transition-all duration-500 cursor-pointer
                       hover:-translate-y-1 overflow-hidden relative"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-[#A85750] to-[#8f4740] 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4
                            bg-[#A85750]/10 group-hover:bg-white/20
                            transition-all duration-500 group-hover:scale-110 relative z-20">
                  <i :class="service.icon" 
                     class="text-3xl text-[#A85750] group-hover:text-white 
                            transition-colors duration-500"></i>
                </div>

                <h3 class="text-lg font-black text-gray-900 mb-2 
                           group-hover:text-white transition-colors duration-500 relative z-20">
                  {{ service.title }}
                </h3>
                <p class="text-sm text-gray-600 leading-relaxed
                          group-hover:text-white/90 transition-colors duration-500 relative z-20">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Industry Sectors -->
      <section ref="sectorsSection" class="py-20 bg-gray-900">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h3 class="text-3xl md:text-4xl font-black text-white mb-2">Industry Sectors</h3>
            <p class="text-lg text-gray-400">Trusted across critical infrastructure domains</p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div 
              v-for="(sector, index) in sectors"
              :key="index"
              class="text-center group cursor-pointer"
            >
              <div class="w-24 h-24 mx-auto rounded-full border-2 border-white/10
                          group-hover:border-[#A85750] group-hover:scale-110
                          transition-all duration-500 flex items-center justify-center
                          bg-white/5 group-hover:bg-[#A85750] relative overflow-hidden">
                <i :class="sector.icon" 
                   class="text-3xl text-[#A85750] group-hover:text-white 
                          transition-colors duration-500 relative z-20"></i>
              </div>
              
              <p class="text-sm uppercase tracking-wider text-gray-400 mt-4
                        group-hover:text-white transition-colors duration-300 font-bold relative z-20">
                {{ sector.name }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Clients Section -->
      <section ref="clientsSection" class="py-12 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-6">
            <span class="text-xs uppercase tracking-widest text-gray-500 font-bold">Our Partners</span>
          </div>

          <div class="relative max-w-full mx-auto">
            <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div class="overflow-hidden py-4">
              <div 
                class="flex gap-8 items-center marquee-content"
                :style="{ animationPlayState: scrollPaused ? 'paused' : 'running' }"
                @mouseenter="scrollPaused = true"
                @mouseleave="scrollPaused = false"
              >
                <div 
                  v-for="(client, idx) in [...clients, ...clients]" 
                  :key="`client-${idx}`" 
                  class="flex-shrink-0"
                >
                  <div class="w-24 h-24 flex items-center justify-center p-3
                              rounded-lg border border-transparent
                              hover:border-[#A85750]/20 hover:bg-gray-50
                              grayscale opacity-60 hover:grayscale-0 hover:opacity-100
                              hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <img 
                      :src="client.logo" 
                      :alt="client.name" 
                      class="w-full h-full object-contain relative z-20"
                    >
                  </div>
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

const scrollY = ref(0)
const scrollPaused = ref(false)

const statsSection = ref(null)
const aboutSection = ref(null)
const servicesSection = ref(null)
const sectorsSection = ref(null)
const clientsSection = ref(null)
const ctaSection = ref(null)

const currentSlide = ref(0)
let slideInterval = null

const heroSlides = ref([
  {
    id: 1,
    type: 'video',
    media: '/assets/hero.mp4',
    title: 'ASHOK ROADLINES',
    subtitle: 'Logistics Through Innovation, Dedication & Technology'
  },
  {
    id: 2,
    type: 'image',
    media: '/assets/hero5.png',
    title: 'HEAVY TRANSPORT SPECIALISTS',
    subtitle: '50+ Years of Excellence in ODC & Project Cargo'
  },
  {
    id: 3,
    type: 'image',
    media: '/assets/hero1.jpeg',
    title: 'PAN-INDIA NETWORK',
    subtitle: 'Connecting Industries Across the Nation'
  },
  {
    id: 4,
    type: 'image',
    media: '/assets/hero3.png',
    title: 'INNOVATION DRIVEN',
    subtitle: 'Advanced Technology for Modern Logistics'
  },
  {
    id: 5,
    type: 'image',
    media: '/assets/hero4.png',
    title: 'TRUSTED BY LEADERS',
    subtitle: 'Serving Indias Premier PSUs & Corporations'
  }
])

const stats = ref([
  { number: '51+', label: 'Years Legacy', sublabel: 'Since 1974' },
  { number: '225+', label: 'Fleet Vehicles', sublabel: 'Specialized Equipment' },
  { number: '20K+', label: 'MT Monthly', sublabel: 'Steel Transport' },
  { number: '9', label: 'Branches', sublabel: 'Pan-India Network' }
])

const aboutCards = ref([
  {
    icon: 'pi pi-star-fill',
    title: 'Pioneers Since 1974',
    description: 'First in Eastern India for girder & segment transportation'
  },
  {
    icon: 'pi pi-th-large',
    title: 'All-in-One Solution',
    description: 'Complete fleet from trailers to tankers under one roof'
  },
  {
    icon: 'pi pi-map-marker',
    title: 'Pan-India Network',
    description: '9 strategic branches ensuring nationwide coverage'
  },
  {
    icon: 'pi pi-check-circle',
    title: '5000+ Girders Moved',
    description: 'Major infrastructure projects across India'
  },
  {
    icon: 'pi pi-truck',
    title: 'Massive Fleet',
    description: '225+ vehicles including 75 LPG tankers'
  },
  {
    icon: 'pi pi-building',
    title: 'Corporate Trusted',
    description: 'Serving 20+ major PSUs and enterprises'
  }
])

const services = ref([
  {
    icon: 'pi pi-shield',
    title: 'Heavy Equipment',
    description: 'Specialized transport for machinery and industrial equipment'
  },
  {
    icon: 'pi pi-box',
    title: 'ODC Cargo',
    description: 'Over-dimensional cargo up to 150 MT capacity'
  },
  {
    icon: 'pi pi-bolt',
    title: 'Girder Transport',
    description: 'Expert handling of girders up to 125 feet'
  },
  {
    icon: 'pi pi-car',
    title: 'LPG Tankers',
    description: '75+ tankers for safe petroleum transportation'
  },
  {
    icon: 'pi pi-building',
    title: 'Steel Logistics',
    description: 'Monthly transport of 20,000+ MT steel'
  },
  {
    icon: 'pi pi-map',
    title: 'Project Cargo',
    description: 'End-to-end logistics for mega projects'
  },
  {
    icon: 'pi pi-wrench',
    title: 'Crane Services',
    description: 'Mobile cranes and lifting equipment'
  },
  {
    icon: 'pi pi-globe',
    title: 'All-India Permit',
    description: 'Seamless nationwide transport'
  }
])

const sectors = ref([
  { name: 'Power', icon: 'pi pi-bolt' },
  { name: 'Steel', icon: 'pi pi-shield' },
  { name: 'Petroleum', icon: 'pi pi-box' },
  { name: 'Infrastructure', icon: 'pi pi-building' },
  { name: 'Mining', icon: 'pi pi-compass' }
])

const clients = ref([
  { name: 'HP', logo: '/assets/clients/hp.png' },
  { name: 'SAIL', logo: '/assets/clients/sail.png' },
  { name: 'MEIL', logo: '/assets/clients/meil.png' },
  { name: 'Indian Oil', logo: '/assets/clients/indianoil.png' },
  { name: 'Coal India', logo: '/assets/clients/coalindia.png' },
  { name: 'BHEL', logo: '/assets/clients/bhel.png' },
  { name: 'Bharat Petroleum', logo: '/assets/clients/bharatpetrol.png' },
  { name: 'Bekem', logo: '/assets/clients/bekem.png' },
  { name: 'BBJ', logo: '/assets/clients/bbj.png' },
  { name: 'B&R', logo: '/assets/clients/br.png' },
  { name: 'Jindal', logo: '/assets/clients/jindal.png' },
  { name: 'L&T', logo: '/assets/clients/lt.png' },
])

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
}

const previousSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + heroSlides.value.length) % heroSlides.value.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoSlide = () => {
  slideInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  startAutoSlide()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  stopAutoSlide()
})
</script>


<style scoped>
.marquee-content {
  display: flex;
  animation: scroll-marquee 40s linear infinite;
  will-change: transform;
}

@keyframes scroll-marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

.hero-fade-enter-active {
  transition: opacity 2s ease-in-out, transform 2s ease-in-out;
}

.hero-fade-leave-active {
  transition: opacity 2s ease-in-out, transform 2s ease-in-out;
}

.hero-fade-enter-from {
  opacity: 0;
  transform: scale(1.05);
}

.hero-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.hero-content-enter-active {
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.hero-content-leave-active {
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

.hero-content-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

.hero-content-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
</style>
