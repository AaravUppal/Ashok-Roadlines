<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative h-screen bg-gradient-to-br from-black via-gray-900 to-gray-900 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
        <div class="w-full max-w-7xl mx-auto">
          <div class="inline-flex items-center gap-3 mb-8 animate-fade-in">
            <div class="w-16 h-px bg-white/50"></div>
            <span class="text-white/80 font-bold text-sm uppercase tracking-widest">Since 1974</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight animate-slide-up">
            Built on<br/>
            Legacy & Trust
          </h1>
          
          <p class="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mb-12 animate-fade-in-delay">
            From a visionary's dream in 1974 to becoming Eastern India's most diversified transport group—our journey epitomizes dedication, innovation, and an unwavering commitment to excellence.
          </p>
        </div>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="py-24 md:py-32 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <!-- Founder Image -->
          <div class="relative group">
            <div class="absolute -inset-4 bg-[#9F153E]/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            
            <div class="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img 
                :src="founderImage" 
                :alt="founderName"
                class="w-full h-full object-cover"
              />
              
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              
              <div class="absolute bottom-0 left-0 right-0 p-8">
                <h3 class="text-3xl font-black text-white mb-2">{{ founderName }}</h3>
                <p class="text-white/90 font-semibold text-lg mb-4">Founder & Visionary</p>
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-[#9F153E] rounded-full">
                  <span class="text-white text-sm font-bold">Founded 1974</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Founder's Story -->
          <div class="space-y-8">
            <div>
              <div class="inline-flex items-center gap-3 mb-6">
                <div class="w-12 h-px bg-[#9F153E]"></div>
                <span class="text-[#9F153E] font-bold text-sm uppercase tracking-widest">The Visionary</span>
              </div>
              <h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                A Dream That Shaped an Industry
              </h2>
            </div>

            <div class="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                In <strong class="text-gray-900">1974</strong>, Mr. Mahesh Kumar Periwal embarked on a journey with a singular vision: to redefine logistics excellence in Eastern India. Armed with determination and an unwavering commitment to quality, he secured the company's first contract from <strong class="text-[#9F153E]">Heavy Engineering Corporation Ltd., Ranchi</strong>—a prestigious Public Sector Undertaking that entrusted him with their most critical transportation needs.
              </p>

              <p>
                What began as a modest operation has evolved into a legacy spanning five decades. Through strategic expansion, relentless innovation, and an uncompromising focus on safety and reliability, Mr. Periwal transformed Ashok Roadlines into Eastern India's most diversified transport group—a testament to visionary leadership and operational excellence.
              </p>

              <p>
                Today, the company serves over 20 major corporate clients, including India's most respected PSUs and private enterprises. From <strong class="text-gray-900">SAIL and Larsen & Toubro</strong> to <strong class="text-gray-900">IOCL and Coal India Ltd</strong>, the trust these organizations place in Ashok Roadlines reflects the enduring values instilled by its founder.
              </p>
            </div>

            <div class="relative p-8 bg-gray-50 rounded-xl border-l-4 border-[#9F153E]">
              <blockquote class="text-xl text-gray-900 font-medium italic leading-relaxed">
                "Excellence is not a destination—it's a journey of continuous improvement, unwavering dedication, and an absolute commitment to our clients' success."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Minimal Timeline Section -->
    <section class="py-24 md:py-32 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-20">
            <div class="inline-flex items-center gap-3 mb-6">
              <div class="w-12 h-px bg-[#9F153E]"></div>
              <span class="text-[#9F153E] font-bold text-sm uppercase tracking-widest">Our Journey</span>
              <div class="w-12 h-px bg-[#9F153E]"></div>
            </div>
            <h2 class="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              50 Years of Excellence
            </h2>
            <p class="text-xl text-gray-700 max-w-2xl mx-auto">
              From a single contract to Eastern India's most diversified transport group
            </p>
          </div>

          <!-- Timeline -->
          <div class="space-y-16">
            <div v-for="(event, index) in timelineEvents" :key="index" class="relative group">
              <!-- Connecting Line -->
              <div v-if="index < timelineEvents.length - 1" class="absolute left-8 top-20 w-px h-full bg-gray-300"></div>
              
              <div class="flex gap-8">
                <!-- Icon -->
                <div :class="`relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`">
                  <i :class="event.icon" class="text-3xl text-white"></i>
                </div>

                <!-- Content -->
                <div class="flex-1 pb-8">
                  <div class="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-full mb-4">
                    {{ event.year }}
                  </div>
                  <h3 class="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                    {{ event.title }}
                  </h3>
                  <p class="text-gray-700 text-lg leading-relaxed">
                    {{ event.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Quote -->
          <div class="mt-20 text-center">
            <div class="inline-block bg-white p-10 rounded-2xl border-2 border-gray-200 shadow-xl max-w-3xl">
              <p class="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed italic">
                "Five decades of trust, innovation, and unwavering commitment to excellence"
              </p>
              <div class="w-24 h-1 bg-[#9F153E] mx-auto mt-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fleet Section -->
    <section class="py-24 md:py-32 bg-gray-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-3 mb-6">
            <div class="w-12 h-px bg-[#9F153E]"></div>
            <span class="text-[#9F153E] font-bold text-sm uppercase tracking-widest">Our Assets</span>
            <div class="w-12 h-px bg-[#9F153E]"></div>
          </div>
          <h2 class="text-5xl md:text-6xl font-black text-white mb-6">
            225+ Specialized Vehicles
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive fleet engineered for excellence, equipped to handle every transport challenge with precision and reliability
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div v-for="(item, index) in fleetData" :key="index"
               class="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#9F153E] hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
            <div class="w-14 h-14 bg-gradient-to-br from-[#9F153E] to-gray-900 rounded-xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-all duration-300">
              <i :class="item.icon" class="text-3xl text-white"></i>
            </div>
            
            <div class="text-5xl font-black text-white mb-3 group-hover:text-[#9F153E] transition-colors">
              {{ item.count }}
            </div>
            
            <h3 class="text-xl font-black text-white mb-3">{{ item.title }}</h3>
            
            <p class="text-sm text-gray-400 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const founderImage = '/assets/dadu.jpeg';
const founderName = ref('Mr. Mahesh Kumar Periwal');

const timelineEvents = ref([
  {
    year: '1974',
    title: 'The Beginning',
    description: 'Founded by Mr. Mahesh Kumar Periwal with the first contract from Heavy Engineering Corporation Ltd., Ranchi',
    icon: 'pi pi-flag',
    color: 'from-[#9F153E] to-gray-900'
  },
  {
    year: '1990-91',
    title: 'National Recognition',
    description: 'Featured in SAIL\'s CMO News for transporting 41.46 MT overdimensional cargo',
    icon: 'pi pi-shield',
    color: 'from-gray-900 to-[#9F153E]'
  },
  {
    year: '2000s',
    title: 'Gas Transport Pioneer',
    description: 'Became Eastern India\'s first LPG Bulk and Anhydrous Liquid Ammonia transporter',
    icon: 'pi pi-database',
    color: 'from-[#9F153E] to-gray-900'
  },
  {
    year: '2010s',
    title: 'Infrastructure Backbone',
    description: 'Transported 5000+ girders for major infrastructure projects across Eastern India',
    icon: 'pi pi-map',
    color: 'from-gray-900 to-[#9F153E]'
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description: 'The most diversified transport group in Eastern India with 225+ vehicles',
    icon: 'pi pi-star-fill',
    color: 'from-[#9F153E] to-gray-900'
  }
]);

const fleetData = ref([
  {
    count: '75',
    title: 'Trailers',
    icon: 'pi pi-truck',
    description: 'Standard and specialized trailers for diverse cargo'
  },
  {
    count: '60',
    title: 'Hydraulic Axles',
    icon: 'pi pi-cog',
    description: 'Advanced multi-axle systems with spacers & bolsters'
  },
  {
    count: '75',
    title: 'LPG Tankers',
    icon: 'pi pi-circle',
    description: 'Bulk LPG transportation for all major OMCs'
  },
  {
    count: '12',
    title: 'Cranes',
    icon: 'pi pi-wrench',
    description: 'Including crawler cranes for heavy lifting'
  },
  {
    count: '5',
    title: 'Low Bed 16 Wheeler',
    icon: 'pi pi-car',
    description: 'Specialized trailers for ODC operations'
  },
  {
    count: '15',
    title: 'Pullers',
    icon: 'pi pi-forward',
    description: 'Prime movers for heavy-duty towing'
  },
  {
    count: '10',
    title: 'Ammonia Tankers',
    icon: 'pi pi-database',
    description: 'Pioneers in anhydrous liquid ammonia transport'
  },
  {
    count: '255+',
    title: 'Total Fleet',
    icon: 'pi pi-th-large',
    description: 'Complete logistics solutions under one roof'
  }
]);
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-delay {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-slide-up {
  animation: slide-up 1s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in-delay 1s ease-out 0.3s backwards;
}
</style>