<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div
      id="home"
      class="relative min-h-screen bg-black overflow-hidden"
    >
      <!-- Fixed Video/Image Background -->
      <div class="fixed inset-0 w-full h-screen z-0 pointer-events-none">
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
              class="absolute inset-0 w-full h-full object-cover brightness-75"
            >
              <source :src="slide.media" type="video/mp4" />
            </video>
            <div
              v-else
              class="absolute inset-0 w-full h-full bg-cover bg-center brightness-75"
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
              <div
                class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full 
                          bg-white/10 border border-white/20 backdrop-blur-xl"
              >
                <div class="w-2 h-2 bg-[#9F153E] rounded-full"></div>
                <span class="text-xs font-bold tracking-widest text-white/90 uppercase">
                  TRUSTED SINCE 1974
                </span>
              </div>

              <h1
                class="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 leading-tight select-none"
              >
                {{ heroSlides[currentSlide].title }}
              </h1>

              <p class="text-base sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto select-none">
                {{ heroSlides[currentSlide].subtitle }}
              </p>

              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <router-link
                  to="/about"
                  class="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl
                          bg-[#9F153E] hover:bg-[#8f4740] text-white font-bold
                          transform hover:scale-105 transition-all duration-300 shadow-xl text-sm sm:text-base"
                >
                  <span>Learn More</span>
                  <ArrowRightIcon class="w-5 h-5" />
                </router-link>

                <router-link
                  to="/contact"
                  class="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl
                          border-2 border-white/30 backdrop-blur-xl text-white font-bold
                          hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  <span>Contact Us</span>
                  <PhoneIcon class="w-5 h-5" />
                </router-link>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Navigation Controls (desktop/tablet only) -->
      <div
        class="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:block"
      >
        <div class="container mx-auto px-6 flex justify-between items-center">
          <button
            @click="previousSlide"
            class="pointer-events-auto w-12 h-12 rounded-full 
                   bg-white/10 backdrop-blur-xl border border-white/20
                   flex items-center justify-center 
                   hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeftIcon class="w-6 h-6 text-white" />
          </button>

          <button
            @click="nextSlide"
            class="pointer-events-auto w-12 h-12 rounded-full 
                   bg-white/10 backdrop-blur-xl border border-white/20
                   flex items-center justify-center 
                   hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRightIcon class="w-6 h-6 text-white" />
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
              ? 'w-8 h-2 bg-[#9F153E]'
              : 'w-2 h-2 bg-white/30 hover:bg-white/60'
          ]"
          style="border-radius: 999px;"
        ></button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="bg-white">
      <!-- About Section -->
      <section
        id="about"
        ref="aboutSection"
        class="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900 relative"
      >
        <div class="container mx-auto px-6">
          <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12 md:mb-16 relative z-10 scroll-reveal">
              <div class="inline-flex items-center gap-2 mb-4">
                <div class="w-8 h-px bg-[#9F153E]"></div>
                <span
                  class="text-xs sm:text-sm uppercase tracking-widest text-[#9F153E] font-bold"
                >
                  Our Story
                </span>
                <div class="w-8 h-px bg-[#9F153E]"></div>
              </div>

              <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6">
                Eastern India's Most Diversified<br />
                <span class="text-[#9F153E]">Transport Group</span>
              </h2>

              <p class="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
                Founded in 1974 by Mr. Mahesh Kumar Periwal, serving 20+ major corporate clients
                with comprehensive fleet solutions.
              </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div
                v-for="(card, index) in aboutCards"
                :key="index"
                class="group p-6 md:p-8 rounded-2xl transition-all duration-500 relative overflow-hidden scroll-reveal"
                :class="[
                  index === 0
                    ? 'bg-white/5 hover:bg-white/10 hover:shadow-xl border border-white/10'
                    : 'bg-white/5 hover:bg-white/10 hover:shadow-xl border border-white/10'
                ]"
                :style="{ transitionDelay: `${index * 100}ms` }"
              >
                <div
                  class="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl mb-4
                            transition-transform duration-300 group-hover:scale-110 relative z-20"
                  :class="[index === 0 ? 'bg-[#9F153E]/20' : 'bg-[#9F153E]/20']"
                >
                  <component :is="card.icon" class="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>

                <h3
                  class="text-lg md:text-xl font-black mb-2 md:mb-3 relative z-20 text-white"
                >
                  {{ card.title }}
                </h3>
                <p
                  class="text-xs sm:text-sm leading-relaxed relative z-20"
                  :class="index === 0 ? 'text-white/90' : 'text-gray-300'"
                >
                  {{ card.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section
        id="services"
        ref="servicesSection"
        class="py-16 md:py-20 bg-gray-50 relative"
      >
        <div class="container mx-auto px-6">
          <div class="text-center mb-12 md:mb-16 max-w-4xl mx-auto scroll-reveal">
            <div class="inline-flex items-center gap-2 mb-4">
              <div class="w-8 h-px bg-[#9F153E]"></div>
              <span
                class="text-xs sm:text-sm uppercase tracking-widest text-[#9F153E] font-bold"
              >
                Services
              </span>
              <div class="w-8 h-px bg-[#9F153E]"></div>
            </div>

            <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 md:mb-4">
              Complete <span class="text-[#9F153E]">Logistics Solutions</span>
            </h2>

            <p class="text-base sm:text-lg text-gray-600">
              From heavy equipment to specialized cargo
            </p>
          </div>

          <div class="max-w-7xl mx-auto">
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div
                v-for="(service, index) in services"
                :key="index"
                class="group p-5 md:p-6 rounded-2xl bg-white border-2 border-gray-100
                       hover:border-[#9F153E]/30 hover:shadow-xl
                       transition-all duration-500 cursor-pointer
                       hover:-translate-y-1 overflow-hidden relative scroll-reveal"
                :style="{ transitionDelay: `${index * 50}ms` }"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-[#9F153E] to-[#8f4740] 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                ></div>

                <div
                  class="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl mb-4
                            bg-[#9F153E]/10 group-hover:bg-white/20
                            transition-all duration-500 group-hover:scale-110 relative z-20"
                >
                  <component
                    :is="service.icon"
                    class="w-7 h-7 md:w-8 md:h-8 text-[#9F153E] group-hover:text-white 
                            transition-colors duration-500"
                  />
                </div>

                <h3
                  class="text-base md:text-lg font-black text-gray-900 mb-2 
                           group-hover:text-white transition-colors duration-500 relative z-20"
                >
                  {{ service.title }}
                </h3>
                <p
                  class="text-xs sm:text-sm text-gray-600 leading-relaxed
                          group-hover:text-white/90 transition-colors duration-500 relative z-20"
                >
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Industry Sectors -->
      <section
        ref="sectorsSection"
        class="py-16 md:py-20 bg-gradient-to-t from-black to-gray-900 relative"
      >
        <div class="container mx-auto px-6">
          <div class="text-center mb-10 md:mb-12 scroll-reveal">
            <h3 class="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">
              Industry Sectors
            </h3>
            <p class="text-base sm:text-lg text-gray-400">
              Trusted across critical infrastructure domains
            </p>
          </div>

          <div
            class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            <div
              v-for="(sector, index) in sectors"
              :key="index"
              class="text-center group cursor-pointer scroll-reveal"
              :style="{ transitionDelay: `${index * 100}ms` }"
            >
              <div
                class="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full border-2 border-white/10
                          group-hover:border-[#9F153E] group-hover:scale-110
                          transition-all duration-500 flex items-center justify-center
                          bg-white/5 group-hover:bg-[#9F153E] relative overflow-hidden"
              >
                <component
                  :is="sector.icon"
                  class="w-8 h-8 sm:w-10 sm:h-10 text-[#9F153E] group-hover:text-white 
                          transition-colors duration-500 relative z-20"
                />
              </div>

              <p
                class="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-3
                        group-hover:text-white transition-colors duration-300 font-bold relative z-20"
              >
                {{ sector.name }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Clients Section -->
      <section ref="clientsSection" class="py-12 bg-white  relative">
        <div class="container mx-auto px-6">
          <div class="text-center mb-6">
            <span class="text-xs uppercase tracking-widest text-gray-500 font-bold scroll-reveal">
              Our Partners
            </span>
          </div>

          <!-- Desktop / Tablet: marquee -->
          <div class="relative max-w-full mx-auto hidden md:block scroll-reveal">
            <div
              class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
            ></div>
            <div
              class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
            ></div>

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
                  <div
                    class="w-24 h-24 flex items-center justify-center p-3
                              rounded-lg border border-transparent
                              hover:border-[#9F153E]/20 hover:bg-gray-50
                              opacity-80 hover:opacity-100
                              hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden"
                  >
                    <img
                      :src="client.logo"
                      :alt="client.name"
                      class="w-full h-full object-contain relative z-20 pointer-events-none select-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile: finger-scrollable row -->
          <div class="md:hidden mt-2 scroll-reveal">
            <div
              class="flex gap-4 overflow-x-auto py-4 px-1
                     scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
                     snap-x snap-mandatory horizontal-scroll"
            >
              <div
                v-for="(client, idx) in clients"
                :key="`client-mobile-${idx}`"
                class="flex-shrink-0 snap-start"
              >
                <div
                  class="w-24 h-24 flex items-center justify-center p-3
                            rounded-lg border border-transparent
                            hover:border-[#9F153E]/20 hover:bg-gray-50
                            opacity-80 hover:opacity-100
                            hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  <img
                    :src="client.logo"
                    :alt="client.name"
                    class="w-full h-full object-contain relative z-20 pointer-events-none select-none"
                  />
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

/* ---------------- HEROICONS IMPORTS ---------------- */

/* Solid icons (strong, industrial) */
import {
  TrophyIcon,
  CubeIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
  TruckIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  FireIcon,
  CogIcon,
  BoltIcon,
  CircleStackIcon
} from '@heroicons/vue/24/solid'

/* Outline icons (technical / logistics) */
import {
  WrenchScrewdriverIcon,
  ArrowsPointingOutIcon,
  Squares2X2Icon,
  CloudIcon,
  ArchiveBoxIcon,
  MapIcon,
  AdjustmentsHorizontalIcon,
  RectangleStackIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  PhoneIcon
} from '@heroicons/vue/24/outline'

/* ---------------- STATE ---------------- */

const scrollPaused = ref(false)

const aboutSection = ref(null)
const servicesSection = ref(null)
const sectorsSection = ref(null)
const clientsSection = ref(null)

/* ---------------- HERO SLIDER ---------------- */

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
    media: '/assets/hero5.jpg',
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
    media: '/assets/hero3.jpg',
    title: 'INNOVATION DRIVEN',
    subtitle: 'Advanced Technology for Modern Logistics'
  },
  {
    id: 5,
    type: 'image',
    media: '/assets/hero4.jpg',
    title: 'TRUSTED BY LEADERS',
    subtitle: 'Serving Indias Premier PSUs & Corporations'
  }
])

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
}

const previousSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + heroSlides.value.length) %
    heroSlides.value.length
}

const goToSlide = index => {
  currentSlide.value = index
}

const startAutoSlide = () => {
  stopAutoSlide()
  slideInterval = setInterval(nextSlide, 5000)
}

const stopAutoSlide = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
    slideInterval = null
  }
}

/* ---------------- ABOUT ---------------- */

const aboutCards = ref([
  {
    icon: TrophyIcon,
    title: 'Pioneers Since 1974',
    description: 'First in Eastern India for girder & segment transportation'
  },
  {
    icon: CubeIcon,
    title: 'All-in-One Solution',
    description: 'Complete fleet from trailers to tankers under one roof'
  },
  {
    icon: GlobeAltIcon,
    title: 'Pan-India Network',
    description: '9 strategic branches ensuring nationwide coverage'
  },
  {
    icon: CheckBadgeIcon,
    title: '5000+ Girders Moved',
    description: 'Major infrastructure projects across India'
  },
  {
    icon: TruckIcon,
    title: 'Massive Fleet',
    description: '225+ vehicles including 75 LPG tankers'
  },
  {
    icon: UserGroupIcon,
    title: 'Corporate Trusted',
    description: 'Serving 20+ major PSUs and enterprises'
  }
])

/* ---------------- SERVICES (IMPROVED ICONS) ---------------- */

const services = ref([
  {
    icon: WrenchScrewdriverIcon,
    title: 'Heavy Equipment',
    description: 'Specialized transport for machinery and industrial equipment'
  },
  {
    icon: ArrowsPointingOutIcon,
    title: 'ODC Cargo',
    description: 'Over-dimensional cargo up to 150 MT capacity'
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'OWC Cargo',
    description: 'Odd-weight cargo for heavy and complex industrial loads'
  },
  {
    icon: Squares2X2Icon,
    title: 'Girder Transport',
    description: 'Expert handling of bridge and flyover girders up to 125 feet'
  },
  {
    icon: TruckIcon,
    title: 'LPG Tankers',
    description: '75+ tankers for safe bulk LPG transportation'
  },
  {
    icon: CloudIcon,
    title: 'Ammonia Gas Transport',
    description: 'Secure transport of anhydrous ammonia gas'
  },
  {
    icon: CogIcon,
    title: 'Steel Logistics',
    description: 'Monthly transport of 20,000+ MT finished steel products'
  },
  {
    icon: RectangleStackIcon,
    title: 'Port & Container Transport',
    description: 'TEU & FEU container movement and port-related logistics'
  },
  {
    icon: ArchiveBoxIcon,
    title: 'Industrial & Pipe Transport',
    description: 'Transportation of pipes and industrial products'
  },
  {
    icon: MapIcon,
    title: 'Project Cargo',
    description: 'End-to-end logistics for large infrastructure projects'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Crane Services',
    description: 'Mobile cranes and heavy lifting equipment on rental'
  },
  {
    icon: TruckIcon,
    title: 'Trailer & Axle Rental',
    description: 'Low-bed trailers and hydraulic axles for heavy cargo'
  }
])

/* ---------------- SECTORS (STRONG & CLEAR) ---------------- */

const sectors = ref([
  { name: 'Infrastructure', icon: BuildingOffice2Icon },
  { name: 'Oil Marketing Companies', icon: FireIcon },
  { name: 'Steel', icon: CogIcon },
  { name: 'Power', icon: BoltIcon },
  { name: 'Coal', icon: CircleStackIcon }
])

/* ---------------- CLIENTS ---------------- */

const clients = ref([
  { name: 'HP', logo: '/assets/clients/hp.png' },
  { name: 'SAIL', logo: '/assets/clients/sail.png' },
  { name: 'MEIL', logo: '/assets/clients/meil.png' },
  { name: 'Indian Oil', logo: '/assets/clients/Indianoil.png' },
  { name: 'Coal India', logo: '/assets/clients/coalindia.png' },
  { name: 'BHEL', logo: '/assets/clients/bhel.png' },
  { name: 'Bharat Petroleum', logo: '/assets/clients/bharatpetrol.png' },
  { name: 'Bekem', logo: '/assets/clients/bekem.png' },
  { name: 'BBJ', logo: '/assets/clients/bbj.png' },
  { name: 'B&R', logo: '/assets/clients/br.png' },
  { name: 'Jindal', logo: '/assets/clients/jindal.png' },
  { name: 'L&T', logo: '/assets/clients/lt.png' },
  { name: 'HP', logo: '/assets/clients/hp.png' },
  { name: 'SAIL', logo: '/assets/clients/sail.png' },
  { name: 'MEIL', logo: '/assets/clients/meil.png' },
  { name: 'Indian Oil', logo: '/assets/clients/Indianoil.png' },
  { name: 'Coal India', logo: '/assets/clients/coalindia.png' },
  { name: 'BHEL', logo: '/assets/clients/bhel.png' },
  { name: 'Bharat Petroleum', logo: '/assets/clients/bharatpetrol.png' },
  { name: 'Bekem', logo: '/assets/clients/bekem.png' },
  { name: 'BBJ', logo: '/assets/clients/bbj.png' },
  { name: 'B&R', logo: '/assets/clients/br.png' },
  { name: 'Jindal', logo: '/assets/clients/jindal.png' },
  { name: 'L&T', logo: '/assets/clients/lt.png' }
])

/* ---------------- SCROLL REVEAL ---------------- */

let revealObserver = null

const setupScrollReveal = () => {
  revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document
    .querySelectorAll('.scroll-reveal')
    .forEach(el => revealObserver.observe(el))
}

/* ---------------- LIFECYCLE ---------------- */

onMounted(() => {
  startAutoSlide()
  setTimeout(setupScrollReveal, 100)
})

onBeforeUnmount(() => {
  stopAutoSlide()
  revealObserver?.disconnect()
})
</script>

<style scoped>
.marquee-content {
  display: flex;
  animation: scroll-marquee 40s linear infinite;
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

/* Scroll reveal animations */
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

<style>
.horizontal-scroll {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: auto;
}
</style>
