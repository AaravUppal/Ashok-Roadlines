<template>
  <div class="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center">
    <div class="max-w-6xl mx-auto px-4 py-12 w-full">
      <!-- Header -->
      <header class="text-center mb-10">
        <div class="inline-block mb-3">
          <span class="px-2 py-1.5 rounded-full bg-[#9F153E]/20 text-[#9F153E] text-xs font-semibold uppercase tracking-wider">
            Get in Touch
          </span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-black text-white mb-3">
          Select Your Branch
        </h1>
        <p class="text-base text-gray-400">
          Choose your nearest location to connect with our team
        </p>
      </header>

      <!-- Branch Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <router-link
          v-for="branch in branches"
          :key="branch.id"
          :to="`/contact/${branch.id}`"
          class="group relative bg-gray-900 rounded-2xl p-5 border-2 border-gray-800 
                 hover:border-[#9F153E] hover:shadow-2xl hover:shadow-[#9F153E]/20 
                 transition-all duration-300 cursor-pointer overflow-hidden"
        >
          <!-- Background gradient on hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-[#9F153E]/10 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <!-- Content -->
          <div class="relative z-10">
            <!-- Location Icon -->
            <div class="w-10 h-10 rounded-xl bg-gray-800 group-hover:bg-[#9F153E]/20 
                        flex items-center justify-center mb-3 transition-colors duration-300">
              <svg class="w-5 h-5 text-gray-400 group-hover:text-[#9F153E] transition-colors" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>

            <!-- Branch Name -->
            <h3 class="text-lg font-bold text-white mb-1 group-hover:text-[#9F153E] transition-colors">
              {{ branch.name }}
            </h3>
            
            <!-- City -->
            <p class="text-sm text-gray-400">
              {{ branch.city }}
            </p>

            <!-- Arrow Icon -->
            <div class="absolute top-5 right-5 opacity-0 group-hover:opacity-100 
                        transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <svg class="w-5 h-5 text-[#9F153E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const branches = [
  {
    id: 'kolkata',
    name: 'Kolkata',
    city: 'West Bengal'
  },
  {
    id: 'durgapur',
    name: 'Durgapur',
    city: 'West Bengal'
  },
  {
    id: 'raigarh',
    name: 'Raigarh',
    city: 'Chhattisgarh'
  },
  {
    id: 'surat',
    name: 'Surat',
    city: 'Gujarat'
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    city: 'Gujarat'
  },
  {
    id: 'vadodara',
    name: 'Vadodara',
    city: 'Gujarat'
  },
  {
    id: 'rourkela',
    name: 'Rourkela',
    city: 'Odisha'
  },
  {
    id: 'bhilai',
    name: 'Bhilai',
    city: 'Chhattisgarh'
  },
  {
    id: 'vishakhapatnam',
    name: 'Vishakhapatnam',
    city: 'Andhra Pradesh'
  }
]
</script>
