<template>
  <div class="min-h-screen bg-white">
    <!-- Premium Hero Section -->
    <section class="relative h-[60vh] bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-[#2d2d2d] overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(168, 87, 80, 0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A85750] rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4756c] rounded-full filter blur-3xl opacity-20 animate-float-delayed"></div>
      
      <div class="container mx-auto px-6 h-full flex items-center relative z-10">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 animate-fade-in-up">
            <div class="w-2 h-2 bg-[#A85750] rounded-full animate-pulse"></div>
            <span class="text-white/80 font-semibold text-sm tracking-[0.25em] uppercase">Get in Touch</span>
          </div>
          
          <h1 class="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] animate-fade-in-up tracking-tight" style="animation-delay: 0.1s">
            Connect With<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A85750] via-[#d4756c] to-[#A85750]">Our Network</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl animate-fade-in-up font-light" style="animation-delay: 0.2s">
            Select your nearest branch from our pan-India network or reach out to our corporate headquarters in Kolkata
          </p>
        </div>
      </div>

      <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce-slow">
        <span class="text-white/40 text-xs uppercase tracking-widest font-semibold">Select a branch</span>
        <div class="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div class="w-1 h-3 bg-white/40 rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>

    <!-- Interactive India Map Section -->
    <section class="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-3 mb-6">
            <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#A85750] to-transparent"></div>
            <span class="text-[#A85750] font-bold text-xs uppercase tracking-[0.3em]">Pan-India Presence</span>
            <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#A85750] to-transparent"></div>
          </div>
          <h2 class="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A85750] to-[#d4756c]">9 Strategic</span> Branches
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Click on any branch location below to view details and get in touch
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          <!-- India Map with Image -->
          <div class="relative order-2 lg:order-1">
            <div class="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-2xl border-2 border-gray-100">
              <!-- Map Image Container -->
              <div class="relative w-full rounded-2xl overflow-hidden">
                <img src="" 
                     alt="India Map" 
                     class="w-full h-auto"
                     style="filter: brightness(0.95) contrast(1.1);">
                
                <!-- You can overlay pins on the image using absolute positioning -->
                <!-- Example pin positions - adjust based on your image -->
              </div>

              <!-- Interactive Legend/Key -->
              <div class="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 class="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
                  <i class="pi pi-map-marker text-[#A85750]"></i>
                  Select a Branch Location
                </h3>
                
                <div class="grid grid-cols-1 gap-3">
                  <!-- Kolkata -->
                  <button @click="selectBranch('Kolkata')"
                          class="group flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg"
                          :class="selectedBranch === 'Kolkata' 
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 border-blue-600 text-white' 
                            : 'bg-white border-gray-200 hover:border-blue-500'">
                    <div class="flex items-center gap-3">
                      <div class="w-4 h-4 rounded-full" 
                           :class="selectedBranch === 'Kolkata' ? 'bg-white' : 'bg-blue-500'"></div>
                      <span class="font-bold" :class="selectedBranch === 'Kolkata' ? 'text-white' : 'text-gray-900'">
                        Kolkata
                      </span>
                    </div>
                    <i class="pi pi-chevron-right transition-transform group-hover:translate-x-1"
                       :class="selectedBranch === 'Kolkata' ? 'text-white' : 'text-gray-400'"></i>
                  </button>

                  <!-- Durgapur -->
                  <button @click="selectBranch('Durgapur')"
                          class="group flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg"
                          :class="selectedBranch === 'Durgapur' 
                            ? 'bg-gradient-to-r from-green-500 to-green-600 border-green-600 text-white' 
                            : 'bg-white border-gray-200 hover:border-green-500'">
                    <div class="flex items-center gap-3">
                      <div class="w-4 h-4 rounded-full" 
                           :class="selectedBranch === 'Durgapur' ? 'bg-white' : 'bg-green-500'"></div>
                      <span class="font-bold" :class="selectedBranch === 'Durgapur' ? 'text-white' : 'text-gray-900'">
                        Durgapur
                      </span>
                    </div>
                    <i class="pi pi-chevron-right transition-transform group-hover:translate-x-1"
                       :class="selectedBranch === 'Durgapur' ? 'text-white' : 'text-gray-400'"></i>
                  </button>

                  <!-- Rourkela -->
                  <button @click="selectBranch('Rourkela')"
                          class="group flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg"
                          :class="selectedBranch === 'Rourkela' 
                            ? 'bg-gradient-to-r from-orange-500 to-orange-600 border-orange-600 text-white' 
                            : 'bg-white border-gray-200 hover:border-orange-500'">
                    <div class="flex items-center gap-3">
                      <div class="w-4 h-4 rounded-full" 
                           :class="selectedBranch === 'Rourkela' ? 'bg-white' : 'bg-orange-500'"></div>
                      <span class="font-bold" :class="selectedBranch === 'Rourkela' ? 'text-white' : 'text-gray-900'">
                        Rourkela
                      </span>
                    </div>
                    <i class="pi pi-chevron-right transition-transform group-hover:translate-x-1"
                       :class="selectedBranch === 'Rourkela' ? 'text-white' : 'text-gray-400'"></i>
                  </button>

                  <!-- Raigarh -->
                  <button @click="selectBranch('Raigarh')"
                          class="group flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg"
                          :class="selectedBranch === 'Raigarh' 
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 border-yellow-600 text-white' 
                            : 'bg-white border-gray-200 hover:border-yellow-500'">
                    <div class="flex items-center gap-3">
                      <div class="w-4 h-4 rounded-full" 
                           :class="selectedBranch === 'Raigarh' ? 'bg-white' : 'bg-yellow-500'"></div>
                      <span class="font-bold" :class="selectedBranch === 'Raigarh' ? 'text-white' : 'text-gray-900'">
                        Raigarh
                      </span>
                    </div>
                    <i class="pi pi-chevron-right transition-transform group-hover:translate-x-1"
                       :class="selectedBranch === 'Raigarh' ? 'text-white' : 'text-gray-400'"></i>
                  </button>

                  <!-- Bhilai -->
                  <button @click="selectBranch('Bhilai')"
                          class="group flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg"
                          :class="selectedBranch === 'Bhilai' 
                            ? 'bg-gradient-to-r from-purple-500 to-purple-600 border-purple-600 text-white' 
                            : 'bg-white border-gray-200 hover:border-purple-500'">
                    <div class="flex items-center gap-3">
                      <div class="w-4 h-4 rounded-full" 
                           :class="selectedBranch === 'Bhilai' ? 'bg-white' : 'bg-purple-500'"></div>
                      <span class="font-bold" :class="selectedBranch === 'Bhilai' ? 'text-white' : 'text-gray-900'">
                        Bhilai
                      </span>
                    </div>
                    <i class="pi pi-chevron-right transition-transform group-hover:translate-x-1"
                       :class="selectedBranch === 'Bhilai' ? 'text-white' : 'text-gray-400'"></i>
                  </button>

                  <!-- Visakhapatnam -->
                  <button @click="selectBranch('Visakhapatnam')"
                          class="group flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg"
                          :class="selectedBranch === 'Visakhapatnam' 
                            ? 'bg-gradient-to-r from-pink-500 to-pink-600 border-pink-600 text-white' 
                            : 'bg-white border-gray-200 hover:border-pink-500'">
                    <div class="flex items-center gap-3">
                      <div class="w-4 h-4 rounded-full" 
                           :class="selectedBranch === 'Visakhapatnam' ? 'bg-white' : 'bg-pink-500'"></div>
                      <span class="font-bold" :class="selectedBranch === 'Visakhapatnam' ? 'text-white' : 'text-gray-900'">
                        Visakhapatnam
                      </span>
                    </div>
                    <i class="pi pi-chevron-right transition-transform group-hover:translate-x-1"
                       :class="selectedBranch === 'Visakhapatnam' ? 'text-white' : 'text-gray-400'"></i>
                  </button>

                  <!-- Surat -->
                  <button @click="selectBranch('Surat')"
                          class="group flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg"
                          :class="selectedBranch === 'Surat' 
                            ? 'bg-gradient-to-r from-red-500 to-red-600 border-red-600 text-white' 
                            : 'bg-white border-gray-200 hover:border-red-500'">
                    <div class="flex items-center gap-3">
                      <div class="w-4 h-4 rounded-full" 
                           :class="selectedBranch === 'Surat' ? 'bg-white' : 'bg-red-500'"></div>
                      <span class="font-bold" :class="selectedBranch === 'Surat' ? 'text-white' : 'text-gray-900'">
                        Surat
                      </span>
                    </div>
                    <i class="pi pi-chevron-right transition-transform group-hover:translate-x-1"
                       :class="selectedBranch === 'Surat' ? 'text-white' : 'text-gray-400'"></i>
                  </button>

                  <!-- Ahmedabad -->
                  <button @click="selectBranch('Ahmedabad')"
                          class="group flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg"
                          :class="selectedBranch === 'Ahmedabad' 
                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 border-amber-600 text-white' 
                            : 'bg-white border-gray-200 hover:border-amber-500'">
                    <div class="flex items-center gap-3">
                      <div class="w-4 h-4 rounded-full" 
                           :class="selectedBranch === 'Ahmedabad' ? 'bg-white' : 'bg-amber-500'"></div>
                      <span class="font-bold" :class="selectedBranch === 'Ahmedabad' ? 'text-white' : 'text-gray-900'">
                        Ahmedabad
                      </span>
                    </div>
                    <i class="pi pi-chevron-right transition-transform group-hover:translate-x-1"
                       :class="selectedBranch === 'Ahmedabad' ? 'text-white' : 'text-gray-400'"></i>
                  </button>

                  <!-- Vadodara -->
                  <button @click="selectBranch('Vadodara')"
                          class="group flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg"
                          :class="selectedBranch === 'Vadodara' 
                            ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 border-cyan-600 text-white' 
                            : 'bg-white border-gray-200 hover:border-cyan-500'">
                    <div class="flex items-center gap-3">
                      <div class="w-4 h-4 rounded-full" 
                           :class="selectedBranch === 'Vadodara' ? 'bg-white' : 'bg-cyan-500'"></div>
                      <span class="font-bold" :class="selectedBranch === 'Vadodara' ? 'text-white' : 'text-gray-900'">
                        Vadodara
                      </span>
                    </div>
                    <i class="pi pi-chevron-right transition-transform group-hover:translate-x-1"
                       :class="selectedBranch === 'Vadodara' ? 'text-white' : 'text-gray-400'"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Branch Details Card -->
          <div class="order-1 lg:order-2">
            <transition name="slide-fade" mode="out-in">
              <div v-if="selectedBranch" :key="selectedBranch" class="space-y-6">
                <!-- Selected Branch Info -->
                <div class="bg-gradient-to-br from-[#A85750] to-[#8f4740] p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden">
                  <!-- Background Pattern -->
                  <div class="absolute inset-0 opacity-10">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0); background-size: 24px 24px;"></div>
                  </div>

                  <div class="relative z-10">
                    <div class="flex items-center gap-4 mb-8">
                      <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <i class="pi pi-map-marker text-3xl"></i>
                      </div>
                      <div>
                        <h3 class="text-3xl font-black">{{ getBranchInfo(selectedBranch).city }}</h3>
                        <p class="text-white/80 font-medium">{{ getBranchInfo(selectedBranch).region }}</p>
                      </div>
                    </div>

                    <div class="space-y-5 mb-8">
                      <div class="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                        <i class="pi pi-home text-2xl mt-1"></i>
                        <div>
                          <p class="text-xs uppercase font-bold text-white/60 mb-1">Address</p>
                          <p class="text-white/90 leading-relaxed">{{ getBranchInfo(selectedBranch).address }}</p>
                        </div>
                      </div>
                      
                      <div class="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                        <i class="pi pi-envelope text-2xl mt-1"></i>
                        <div>
                          <p class="text-xs uppercase font-bold text-white/60 mb-1">Email</p>
                          <a :href="`mailto:${getBranchInfo(selectedBranch).email}`" 
                             class="text-white/90 hover:text-white transition-colors font-semibold">
                            {{ getBranchInfo(selectedBranch).email }}
                          </a>
                        </div>
                      </div>
                      
                      <div class="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                        <i class="pi pi-phone text-2xl mt-1"></i>
                        <div>
                          <p class="text-xs uppercase font-bold text-white/60 mb-1">Phone</p>
                          <a :href="`tel:${getBranchInfo(selectedBranch).phone}`" 
                             class="text-white/90 hover:text-white transition-colors font-semibold">
                            {{ getBranchInfo(selectedBranch).phone }}
                          </a>
                        </div>
                      </div>
                    </div>

                    <button @click="openContactForm(selectedBranch)" 
                            class="w-full py-5 bg-white text-[#A85750] font-black text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl">
                      <span>Contact This Branch</span>
                      <i class="pi pi-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </button>
                  </div>
                </div>

                <!-- Quick Stats -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#A85750] transition-all duration-300 transform hover:-translate-y-1">
                    <i class="pi pi-clock text-4xl text-[#A85750] mb-3"></i>
                    <p class="text-sm text-gray-600 font-semibold uppercase tracking-wide">Operating Hours</p>
                    <p class="text-2xl font-black text-gray-900 mt-2">24/7</p>
                  </div>
                  <div class="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#A85750] transition-all duration-300 transform hover:-translate-y-1">
                    <i class="pi pi-truck text-4xl text-[#A85750] mb-3"></i>
                    <p class="text-sm text-gray-600 font-semibold uppercase tracking-wide">Services</p>
                    <p class="text-2xl font-black text-gray-900 mt-2">Full Range</p>
                  </div>
                </div>
              </div>

              <!-- Default State -->
              <div v-else class="bg-gradient-to-br from-gray-50 to-white p-16 rounded-3xl shadow-lg border-2 border-gray-200 text-center">
                <div class="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-[#A85750]/10 to-[#d4756c]/10 rounded-full flex items-center justify-center">
                  <i class="pi pi-map-marker text-6xl text-[#A85750]"></i>
                </div>
                <h3 class="text-3xl font-black text-gray-900 mb-4">Select a Branch</h3>
                <p class="text-gray-600 leading-relaxed text-lg max-w-md mx-auto mb-8">
                  Choose any location from the list to view complete branch details and contact information
                </p>
                <div class="inline-flex items-center gap-3 px-6 py-3 bg-[#A85750]/10 rounded-full text-[#A85750] font-bold">
                  <i class="pi pi-arrow-left animate-bounce-horizontal"></i>
                  <span>Choose a location</span>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Headquarters Card -->
    <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-6">
        <div class="max-w-5xl mx-auto">
          <div class="relative bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-[#2d2d2d] p-12 rounded-3xl shadow-2xl overflow-hidden">
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(168, 87, 80, 0.3) 1px, transparent 0); background-size: 32px 32px;"></div>
            </div>
            
            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-[#A85750] to-[#8f4740] rounded-2xl flex items-center justify-center shadow-2xl">
                  <i class="pi pi-building text-3xl text-white"></i>
                </div>
                <div>
                  <h3 class="text-3xl font-black text-white">Corporate Headquarters</h3>
                  <p class="text-gray-400 font-medium">Kolkata, West Bengal</p>
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <p class="text-[#A85750] text-sm font-bold uppercase tracking-wider mb-3">Registered Office</p>
                  <p class="text-white text-lg leading-relaxed">
                    88, Pathuria Ghat Street<br/>
                    Kolkata-700 006, INDIA
                  </p>
                </div>
                <div class="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <p class="text-[#A85750] text-sm font-bold uppercase tracking-wider mb-3">Corporate Office</p>
                  <p class="text-white text-lg leading-relaxed">
                    79, Sambhunath Pandit Street<br/>
                    Kolkata-700 020, INDIA
                  </p>
                </div>
              </div>

              <div class="flex flex-wrap gap-4">
                <a href="mailto:mkp@ashokroadlines.com" 
                   class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full border border-white/20 font-semibold transition-all duration-300">
                  <i class="pi pi-envelope"></i>
                  mkp@ashokroadlines.com
                </a>
                <a href="mailto:sundeep@ashokroadlines.com" 
                   class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full border border-white/20 font-semibold transition-all duration-300">
                  <i class="pi pi-envelope"></i>
                  sundeep@ashokroadlines.com
                </a>
                <a href="mailto:manish@ashokroadlines.com" 
                   class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full border border-white/20 font-semibold transition-all duration-300">
                  <i class="pi pi-envelope"></i>
                  manish@ashokroadlines.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedBranch = ref(null);

const branchData = {
  'Kolkata': {
    city: 'Kolkata',
    region: 'West Bengal',
    address: '79, Sambhunath Pandit Street, Kolkata-700 020',
    email: 'kolkata@ashokroadlines.com',
    phone: '+91-33-2237-5599'
  },
  'Durgapur': {
    city: 'Durgapur',
    region: 'West Bengal',
    address: 'Maa Kali Engg Complex, Samrat Hotel Faridpur, Durgapur',
    email: 'durgapur@ashokroadlines.com',
    phone: '+91-343-254-8800'
  },
  'Rourkela': {
    city: 'Rourkela',
    region: 'Odisha',
    address: 'Jain Complex, Kachery Road, Rourkela',
    email: 'rourkela@ashokroadlines.com',
    phone: '+91-661-246-5599'
  },
  'Raigarh': {
    city: 'Raigarh',
    region: 'Chhattisgarh',
    address: 'Near Laxmi Daily Needs, Transport Nagar, Patrapalli, Raigarh',
    email: 'raigarh@ashokroadlines.com',
    phone: '+91-7762-225-566'
  },
  'Bhilai': {
    city: 'Bhilai',
    region: 'Chhattisgarh',
    address: 'New Khursipar, Behind Govt. High School, Bhilai',
    email: 'bhilai@ashokroadlines.com',
    phone: '+91-788-223-4455'
  },
  'Visakhapatnam': {
    city: 'Visakhapatnam',
    region: 'Andhra Pradesh',
    address: '32/1/229 Bowdhara Road, Opp. Rajeshwari Cinema, Vizag',
    email: 'vizag@ashokroadlines.com',
    phone: '+91-891-276-5544'
  },
  'Surat': {
    city: 'Surat',
    region: 'Gujarat',
    address: '6A, Megha Towers, 2 Jade Blue Gali, Ghod Dod Rd., Surat',
    email: 'surat@ashokroadlines.com',
    phone: '+91-261-245-6677'
  },
  'Ahmedabad': {
    city: 'Ahmedabad',
    region: 'Gujarat',
    address: '6A, Megha Towers, 2 Jade Blue Gali, Ghod Dod Rd., Surat',
    email: 'surat@ashokroadlines.com',
    phone: '+91-261-245-6677'
  },
  'Vadodara': {
    city: 'Vadodara',
    region: 'Gujarat',
    address: '6A, Megha Towers, 2 Jade Blue Gali, Ghod Dod Rd., Surat',
    email: 'surat@ashokroadlines.com',
    phone: '+91-261-245-6677'
  }
};

const selectBranch = (branch) => {
  selectedBranch.value = branch;
  window.scrollTo({ top: 800, behavior: 'smooth' });
};

const getBranchInfo = (branch) => {
  return branchData[branch] || {};
};

const openContactForm = (branch) => {
  console.log('Opening contact form for:', branch);
  alert(`Contact form for ${branch} will open here`);
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
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce-horizontal {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-5px); }
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

.animate-bounce-horizontal {
  animation: bounce-horizontal 1s ease-in-out infinite;
}

.slide-fade-enter-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.slide-fade-enter-from {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
</style>
