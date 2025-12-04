<template>
  <div class="min-h-screen bg-white">
    <!-- Premium Hero Section -->
    <section class="relative h-[70vh] bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-[#2d2d2d] overflow-hidden">
      <!-- Animated Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(168, 87, 80, 0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <!-- Floating Gradient Orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A85750] rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4756c] rounded-full filter blur-3xl opacity-20 animate-float-delayed"></div>
      
      <div class="container mx-auto px-6 h-full flex items-center relative z-10">
        <div class="max-w-5xl">
          <!-- Elegant Badge -->
          <div class="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 animate-fade-in-up">
            <div class="w-2 h-2 bg-[#A85750] rounded-full animate-pulse"></div>
            <span class="text-white/80 font-semibold text-sm tracking-[0.25em] uppercase">Gallery</span>
            <div class="h-4 w-px bg-white/20"></div>
            <span class="text-white/60 text-sm font-medium">Our Journey in Pictures</span>
          </div>
          
          <h1 class="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] animate-fade-in-up tracking-tight" style="animation-delay: 0.1s">
            Visual Stories of<br/>
            <span class="relative inline-block">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A85750] via-[#d4756c] to-[#A85750]">Excellence</span>
              <div class="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A85750] to-transparent"></div>
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mb-12 animate-fade-in-up font-light" style="animation-delay: 0.2s">
            Explore 51 years of logistics excellence through our collection of remarkable projects, specialized equipment, and milestone achievements.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 animate-fade-in-up max-w-2xl" style="animation-delay: 0.3s">
            <div class="text-center md:text-left">
              <div class="text-4xl font-black text-white mb-1">{{ galleryImages.length }}+</div>
              <div class="text-sm text-gray-400 uppercase tracking-wider">Images</div>
            </div>
            <div class="text-center md:text-left">
              <div class="text-4xl font-black text-white mb-1">5000+</div>
              <div class="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
            </div>
            <div class="text-center md:text-left">
              <div class="text-4xl font-black text-white mb-1">51</div>
              <div class="text-sm text-gray-400 uppercase tracking-wider">Years</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce-slow">
        <span class="text-white/40 text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
        <div class="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div class="w-1 h-3 bg-white/40 rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-12 bg-gradient-to-b from-gray-50 to-white sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-gray-200">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            :class="[
              selectedCategory === category
                ? 'bg-gradient-to-r from-[#A85750] to-[#8f4740] text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#A85750]/30'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid Section -->
    <section class="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-30">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.02) 1px, transparent 0); background-size: 32px 32px;"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <!-- Gallery Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div
            v-for="(image, index) in filteredImages"
            :key="index"
            @click="openLightbox(index)"
            class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
          >
            <!-- Image Container -->
            <div class="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden relative">
              <img
                :src="image.src"
                :alt="image.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              <!-- Overlay on Hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div class="inline-flex items-center gap-2 px-4 py-2 bg-[#A85750]/20 backdrop-blur-sm rounded-full border border-[#A85750]/30 mb-3">
                    <i class="pi pi-tag text-[#A85750] text-xs"></i>
                    <span class="text-white text-xs font-semibold uppercase tracking-wider">{{ image.category }}</span>
                  </div>
                  <p class="text-white font-light text-sm leading-relaxed">{{ image.description }}</p>
                </div>
              </div>

              <!-- Category Badge -->
              <div class="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg">
                <span class="text-[#A85750] text-xs font-black uppercase tracking-wider">{{ image.category }}</span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-black text-gray-900 mb-2 group-hover:text-[#A85750] transition-colors duration-300">
                {{ image.title }}
              </h3>
              <p class="text-sm text-gray-600 leading-relaxed line-clamp-2">
                {{ image.description }}
              </p>
              
              <!-- View Details -->
              <div class="mt-4 flex items-center gap-2 text-[#A85750] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Details</span>
                <i class="pi pi-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>

            <!-- Hover Effect Border -->
            <div class="absolute inset-0 rounded-3xl border-2 border-[#A85750] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        <!-- No Results Message -->
        <div v-if="filteredImages.length === 0" class="text-center py-20">
          <div class="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <i class="pi pi-image text-4xl text-gray-400"></i>
          </div>
          <h3 class="text-2xl font-black text-gray-900 mb-3">No Images Found</h3>
          <p class="text-gray-600">Try selecting a different category</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <Transition name="lightbox">
      <div
        v-if="lightboxOpen"
        @click="closeLightbox"
        class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
      >
        <div class="relative max-w-7xl w-full" @click.stop>
          <!-- Close Button -->
          <button
            @click="closeLightbox"
            class="absolute -top-16 right-0 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
          >
            <i class="pi pi-times text-xl"></i>
          </button>

          <!-- Navigation Buttons -->
          <button
            v-if="currentImageIndex > 0"
            @click="previousImage"
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <i class="pi pi-chevron-left"></i>
          </button>

          <button
            v-if="currentImageIndex < filteredImages.length - 1"
            @click="nextImage"
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <i class="pi pi-chevron-right"></i>
          </button>

          <!-- Image Container -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div class="aspect-video bg-gray-900 flex items-center justify-center">
              <img
                :src="filteredImages[currentImageIndex]?.src"
                :alt="filteredImages[currentImageIndex]?.title"
                class="max-w-full max-h-full object-contain"
              />
            </div>

            <!-- Image Info -->
            <div class="p-8 bg-white">
              <div class="flex items-center gap-3 mb-4">
                <div class="px-4 py-2 bg-[#A85750]/10 rounded-full">
                  <span class="text-[#A85750] text-xs font-black uppercase tracking-wider">{{ filteredImages[currentImageIndex]?.category }}</span>
                </div>
                <span class="text-gray-400 text-sm">{{ currentImageIndex + 1 }} / {{ filteredImages.length }}</span>
              </div>
              <h3 class="text-3xl font-black text-gray-900 mb-3">{{ filteredImages[currentImageIndex]?.title }}</h3>
              <p class="text-lg text-gray-600 leading-relaxed">{{ filteredImages[currentImageIndex]?.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedCategory = ref('All');
const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

const categories = ref(['All', 'Girders', 'Heavy Equipment', 'LPG Transport', 'Infrastructure', 'Fleet', 'Projects']);

const galleryImages = ref([
  {
    src: '/src/assets/gallery/girder1.jpg',
    title: 'VIP Road Girder Transport',
    description: 'Successfully transported 125-foot girders for the VIP Road flyover project in Kolkata, demonstrating our expertise in handling oversized cargo.',
    category: 'Girders'
  },
  {
    src: '/src/assets/gallery/girder2.jpg',
    title: 'Garden Reach Flyover',
    description: 'Complex girder movement through narrow city streets with precision planning and execution for Kolkata\'s Garden Reach Flyover.',
    category: 'Girders'
  },
  {
    src: '/src/assets/gallery/girder3.jpg',
    title: 'High Speed Railway Project',
    description: 'Specialized girder transportation for Gujarat High Speed Railway project, handling segments weighing up to 150 MT.',
    category: 'Girders'
  },
  {
    src: '/src/assets/gallery/equipment1.jpg',
    title: 'Hydraulic Axle System',
    description: 'State-of-the-art 52+ hydraulic axle systems capable of handling extreme weights with precision and safety.',
    category: 'Heavy Equipment'
  },
  {
    src: '/src/assets/gallery/equipment2.jpg',
    title: '250-Tonne Crawler Crane',
    description: 'Our heavy-duty crawler crane in action, essential for complex lifting operations in challenging terrains.',
    category: 'Heavy Equipment'
  },
  {
    src: '/src/assets/gallery/lpg1.jpg',
    title: 'LPG Bulk Transportation',
    description: 'Fleet of 75+ LPG tankers serving all major Oil Marketing Companies across Eastern India with impeccable safety records.',
    category: 'LPG Transport'
  },
  {
    src: '/src/assets/gallery/lpg2.jpg',
    title: 'Ammonia Gas Transport',
    description: 'Pioneers in anhydrous liquid ammonia transportation with specialized tankers and trained personnel.',
    category: 'LPG Transport'
  },
  {
    src: '/src/assets/gallery/project1.jpg',
    title: 'SAIL Rourkela Project',
    description: 'Historic 41.46 MT overdimensional cargo transport featured in SAIL\'s CMO News, spanning 5 months from Kolkata Port.',
    category: 'Projects'
  },
  {
    src: '/src/assets/gallery/project2.jpg',
    title: 'Bridge Crossing Operation',
    description: 'Successfully navigated 11 bridges with low side walls, coordinating with multiple authorities for safe passage.',
    category: 'Infrastructure'
  },
  {
    src: '/src/assets/gallery/fleet1.jpg',
    title: 'Low Bed Trailers',
    description: 'Specialized 16-wheeler low bed trailers designed for transporting heavy machinery and industrial equipment.',
    category: 'Fleet'
  },
  {
    src: '/src/assets/gallery/fleet2.jpg',
    title: 'Trailer Collection',
    description: 'Our diverse fleet of 72+ trailers ready to handle any transportation challenge across the country.',
    category: 'Fleet'
  },
  {
    src: '/src/assets/gallery/infrastructure1.jpg',
    title: 'Urban Infrastructure',
    description: 'Contributing to Kolkata\'s urban development through strategic transportation of construction materials.',
    category: 'Infrastructure'
  }
]);

const filteredImages = computed(() => {
  if (selectedCategory.value === 'All') {
    return galleryImages.value;
  }
  return galleryImages.value.filter(img => img.category === selectedCategory.value);
});

const openLightbox = (index) => {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = 'auto';
};

const nextImage = () => {
  if (currentImageIndex.value < filteredImages.value.length - 1) {
    currentImageIndex.value++;
  }
};

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 30px); }
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0) translateX(-50%); }
  50% { transform: translateY(-10px) translateX(-50%); }
}

@keyframes scroll-down {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(16px); opacity: 0; }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 25s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

.animate-scroll-down {
  animation: scroll-down 1.5s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
