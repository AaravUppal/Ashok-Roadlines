<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
    
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-black via-gray-900 to-gray-900 pt-20 md:pt-32 pb-12 md:pb-24 overflow-hidden">
      
      
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div class="inline-flex items-center gap-2 mb-6 md:mb-8 bg-white/10 backdrop-blur-lg border border-white/20 px-4 md:px-6 py-2 md:py-3 rounded-full shadow-2xl">
            <div class="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#9F153E] rounded-full animate-pulse shadow-lg shadow-[#9F153E]"></div>
            <span class="text-xs md:text-sm font-extrabold tracking-widest text-white">SPECIALIZED LOGISTICS</span>
          </div>
          
          <h1 class="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 leading-tight">
            Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#9F153E]">Services</span>
          </h1>
          
          <div class="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <div class="h-0.5 w-12 md:w-16 bg-gradient-to-r from-transparent to-[#9F153E]"></div>
            <div class="w-2 md:w-3 h-2 md:h-3 bg-[#9F153E] rounded-full shadow-lg shadow-[#9F153E]/50"></div>
            <div class="h-0.5 w-12 md:w-16 bg-gradient-to-l from-transparent to-[#9F153E]"></div>
          </div>
          
          <p class="text-base md:text-xl lg:text-2xl text-gray-200 font-light px-4">
            Complete transport solutions for every industrial need
          </p>
        </div>
      </div>
      
     
    </section>

  <!-- Quick Navigation -->
<section
  class="sticky top-14 md:top-20 z-40 bg-white/70 backdrop-blur-xl border-b border-gray-200 hidden md:block"
>
  <div class="max-w-7xl mx-auto px-4 md:px-6">
    <div
      class="relative flex flex-wrap justify-center gap-2 md:gap-3 py-3 md:py-4 
             overflow-x-auto md:overflow-visible 
             no-scrollbar scroll-smooth"
    >
      <button
        v-for="service in services"
        :key="service.id"
        @click="scrollToService(service.id)"
        class="flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 ease-out whitespace-nowrap min-w-[140px] md:min-w-0 flex-shrink-0 select-none
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9F153E]/50"
        :class="
          activeService === service.id
            ? 'bg-gradient-to-r from-[#9F153E] to-[#7a0f30] text-white shadow-lg shadow-[#9F153E]/30 scale-[1.05]'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
        "
      >
        <i
          :class="service.icon"
          class="text-xs md:text-sm opacity-90 flex-shrink-0"
        ></i>
        <span class="tracking-wide">
          {{ service.title }}
        </span>
      </button>

      <!-- Mobile right fade -->
      <div
        class="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white/90 to-transparent md:hidden"
      ></div>
    </div>
  </div>
</section>





    <!-- Services -->
    <section class="py-12 md:py-20">
      <div class="container mx-auto px-4 md:px-6">
        
        <!-- Project Cargo -->
        <div :id="'service-project-cargo'" ref="projectCargoRef" class="mb-16 md:mb-32 scroll-mt-24 md:scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
            <div class="order-1 lg:order-1" data-aos="fade-right">
              <div class="inline-flex items-center gap-2 bg-[#9F153E]/10 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-4 md:mb-6 border border-[#9F153E]/20">
                <i class="pi pi-box text-[#9F153E] text-sm md:text-lg"></i>
                <span class="text-[#9F153E] font-extrabold text-xs uppercase tracking-widest">Heavy Logistics</span>
              </div>
              
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
                Project Cargo <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#9F153E] to-[#7a0f30]">Transportation</span>
              </h2>
              
              <p class="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Specialized solutions for complex project cargo from ports to remote sites. 50+ years handling critical infrastructure equipment.
              </p>

              <div class="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 group">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-check text-white text-sm md:text-lg"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1 md:mb-1.5">Steel Plant Modernization</h4>
                    <p class="text-xs md:text-sm text-gray-600">All major cargo for Rourkela Steel Plant</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 group">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-check text-white text-sm md:text-lg"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1 md:mb-1.5">Port-to-Site Coordination</h4>
                    <p class="text-xs md:text-sm text-gray-600">Complete logistics to collieries & power plants</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3 md:gap-4">
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">100+</p>
                  <p class="text-xs font-semibold opacity-90">Machines</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">50+</p>
                  <p class="text-xs font-semibold opacity-90">Years</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">20+</p>
                  <p class="text-xs font-semibold opacity-90">Clients</p>
                </div>
              </div>
            </div>

            <div class="order-2 lg:order-2" data-aos="fade-left">
              <div class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[#9F153E] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
                <div class="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-white opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
                <div class="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-[#9F153E] opacity-20 rounded-full translate-y-10 -translate-x-10"></div>
                
                <div class="relative space-y-3 md:space-y-4">
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Specialised Equipment</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Multi-Authority Coordination</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Custom Logistic Sol.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Finished Steel Movement -->
        <div :id="'service-steel-transport'" ref="steelTransportRef" class="mb-16 md:mb-32 scroll-mt-24 md:scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
            <div class="order-2 lg:order-1" data-aos="fade-right">
              <div class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[#9F153E] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
                <div class="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-white opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
                <div class="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-[#9F153E] opacity-20 rounded-full translate-y-10 -translate-x-10"></div>
                
                <div class="relative space-y-3 md:space-y-4">
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Pan India Network</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Direct Plant to Consumer</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Real-time Tracking</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2" data-aos="fade-left">
              <div class="inline-flex items-center gap-2 bg-[#9F153E]/10 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-4 md:mb-6 border border-[#9F153E]/20">
                <i class="pi pi-building text-[#9F153E] text-sm md:text-lg"></i>
                <span class="text-[#9F153E] font-extrabold text-xs uppercase tracking-widest">Industrial Transport</span>
              </div>
              
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
                Finished Steel <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#9F153E] to-[#7a0f30]">Movement</span>
              </h2>
              
              <p class="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Branch Networks at all major steel plants of India, loading 20,000MT+ per month.
              </p>

              <div class="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 group">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-check text-white text-sm md:text-lg"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1 md:mb-1.5">Branch Networks</h4>
                    <p class="text-xs md:text-sm text-gray-600">Rourkela, Bhilai, Raigarh, Durgapur, Bokaro & Vizag</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 group">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-check text-white text-sm md:text-lg"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1 md:mb-1.5">Major Clients</h4>
                    <p class="text-xs md:text-sm text-gray-600">JSPL, SAIL, L&T nationwide delivery</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3 md:gap-4">
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">20K+</p>
                  <p class="text-xs font-semibold opacity-90">MT Monthly</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">6</p>
                  <p class="text-xs font-semibold opacity-90">Plant Hubs</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">100%</p>
                  <p class="text-xs font-semibold opacity-90">On-Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ODC/OWC -->
        <div :id="'service-odc-owc'" ref="odcOwcRef" class="mb-16 md:mb-32 scroll-mt-24 md:scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
            <div class="order-1 lg:order-1" data-aos="fade-right">
              <div class="inline-flex items-center gap-2 bg-[#9F153E]/10 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-4 md:mb-6 border border-[#9F153E]/20">
                <i class="pi pi-truck text-[#9F153E] text-sm md:text-lg"></i>
                <span class="text-[#9F153E] font-extrabold text-xs uppercase tracking-widest">Specialized Cargo</span>
              </div>
              
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
                ODC & OWC <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#9F153E] to-[#7a0f30]">Transport</span>
              </h2>
              
              <p class="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                50+ years expertise in overdimensional cargo. Customized low bed trailers for extreme loads with complete route planning.
              </p>

              <div class="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 group">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-check text-white text-sm md:text-lg"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1 md:mb-1.5">Custom Low Bed Trailers</h4>
                    <p class="text-xs md:text-sm text-gray-600">Specialized equipment for extreme dimensions</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 group">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-check text-white text-sm md:text-lg"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1 md:mb-1.5">Multi-Authority Coordination</h4>
                    <p class="text-xs md:text-sm text-gray-600">Railway, PWD, electrical & local administration</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3 md:gap-4">
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">50+</p>
                  <p class="text-xs font-semibold opacity-90">Years</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">500MT+</p>
                  <p class="text-xs font-semibold opacity-90">moved</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">100%</p>
                  <p class="text-xs font-semibold opacity-90">Safe</p>
                </div>
              </div>
            </div>

            <div class="order-2 lg:order-2" data-aos="fade-left">
              <div class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[#9F153E] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
                <div class="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-white opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
                <div class="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-[#9F153E] opacity-20 rounded-full translate-y-10 -translate-x-10"></div>
                
                <div class="relative space-y-3 md:space-y-4">
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Low bed trailers</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Hydraulic axles</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Expert Route Planning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bulk LPG Movement -->
        <div :id="'service-lpg-transport'" ref="lpgTransportRef" class="mb-16 md:mb-32 scroll-mt-24 md:scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
            <div class="order-2 lg:order-1" data-aos="fade-right">
              <div class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[#9F153E] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
                <div class="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-white opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
                <div class="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-[#9F153E] opacity-20 rounded-full translate-y-10 -translate-x-10"></div>
                
                <div class="relative space-y-3 md:space-y-4">
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Movement in India and Nepal</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">OMC Certified Tankers</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Constant safety inspections</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2" data-aos="fade-left">
              <div class="inline-flex items-center gap-2 bg-[#9F153E]/10 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-4 md:mb-6 border border-[#9F153E]/20">
                <i class="pi pi-circle text-[#9F153E] text-sm md:text-lg"></i>
                <span class="text-[#9F153E] font-extrabold text-xs uppercase tracking-widest">Energy Transport</span>
              </div>
              
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
                Bulk LPG <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#9F153E] to-[#7a0f30]">Movement</span>
              </h2>
              
              <p class="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                75+ Specialised LPG Tankers serving all Oil Marketing Companies (OMCs) across India and Nepal.
              </p>

              <div class="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 group">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-check text-white text-sm md:text-lg"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1 md:mb-1.5">All Major OMCs</h4>
                    <p class="text-xs md:text-sm text-gray-600">IOCL, HPCL & BPCL to bottling plants</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 group">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-check text-white text-sm md:text-lg"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1 md:mb-1.5">Safety-First Operations</h4>
                    <p class="text-xs md:text-sm text-gray-600">GPS tracking & temperature monitoring</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3 md:gap-4">
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">75+</p>
                  <p class="text-xs font-semibold opacity-90">Tankers</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">18-21MT</p>
                  <p class="text-xs font-semibold opacity-90">Tankers</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">3</p>
                  <p class="text-xs font-semibold opacity-90">Major OMCs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bridge Girder -->
        <div :id="'service-bridge-girder'" ref="bridgeGirderRef" class="mb-16 md:mb-32 scroll-mt-24 md:scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
            <div class="order-1 lg:order-1" data-aos="fade-right">
              <div class="inline-flex items-center gap-2 bg-[#9F153E]/10 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-4 md:mb-6 border border-[#9F153E]/20">
                <i class="pi pi-directions text-[#9F153E] text-sm md:text-lg"></i>
                <span class="text-[#9F153E] font-extrabold text-xs uppercase tracking-widest">Infrastructure</span>
              </div>
              
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
                Bridge Girder & <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#9F153E] to-[#7a0f30]">Segments</span>
              </h2>
              
              <p class="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Pioneers in Eastern India for transportation of Girders & Segments for Bridges, Flyovers and ROBs. We have transported more than 5,000 Segments and Girders.
              </p>

              <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-blue-200 mb-6 md:mb-8 shadow-lg">
                <h4 class="font-black text-gray-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3 text-base md:text-lg">
                  <div class="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-star-fill text-white text-sm"></i>
                  </div>
                  Notable Projects
                </h4>
                <div class="grid grid-cols-2 gap-2 md:gap-3">
                  <span class="bg-white px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl text-gray-700 font-semibold text-xs md:text-sm shadow-sm hover:shadow-md transition-shadow">VIP Road Flyover</span>
                  <span class="bg-white px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl text-gray-700 font-semibold text-xs md:text-sm shadow-sm hover:shadow-md transition-shadow">Gujarat HSR</span>
                  <span class="bg-white px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl text-gray-700 font-semibold text-xs md:text-sm shadow-sm hover:shadow-md transition-shadow">Tallah ROB</span>
                  <span class="bg-white px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl text-gray-700 font-semibold text-xs md:text-sm shadow-sm hover:shadow-md transition-shadow">Patna-Gaya Road</span>
                </div>
              </div>

              <div class="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 group">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-check text-white text-sm md:text-lg"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1 md:mb-1.5">Specialized Equipment</h4>
                    <p class="text-xs md:text-sm text-gray-600">Hydraulic axles, pullers & 16-wheeler low beds</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 group">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-check text-white text-sm md:text-lg"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1 md:mb-1.5">Capability of handling 125' Length & 150MT + Weight</h4>
                    <p class="text-xs md:text-sm text-gray-600">125' + length | 150 MT + weight capability</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3 md:gap-4">
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">5000+</p>
                  <p class="text-xs font-semibold opacity-90">Girders</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">125'+</p>
                  <p class="text-xs font-semibold opacity-90">Length</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">150MT+</p>
                  <p class="text-xs font-semibold opacity-90">Capability</p>
                </div>
              </div>
            </div>

            <div class="order-2 lg:order-2" data-aos="fade-left">
              <div class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[#9F153E] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
                <div class="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-white opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
                <div class="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-[#9F153E] opacity-20 rounded-full translate-y-10 -translate-x-10"></div>
                
                <div class="relative space-y-3 md:space-y-4">
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Hydraulic Axles</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Pullers Available</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">16 Wheeler Low Bed Trailers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Container Services -->
        <div :id="'service-container'" ref="containerRef" class="mb-16 md:mb-32 scroll-mt-24 md:scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
            <div class="order-2 lg:order-1" data-aos="fade-right">
              <div class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[#9F153E] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
                <div class="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-white opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
                <div class="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-[#9F153E] opacity-20 rounded-full translate-y-10 -translate-x-10"></div>
                
                <div class="relative space-y-3 md:space-y-4">
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">TEU & FEU Handling</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Port Infrastructure</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Since 1974</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2" data-aos="fade-left">
              <div class="inline-flex items-center gap-2 bg-[#9F153E]/10 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-4 md:mb-6 border border-[#9F153E]/20">
                <i class="pi pi-inbox text-[#9F153E] text-sm md:text-lg"></i>
                <span class="text-[#9F153E] font-extrabold text-xs uppercase tracking-widest">Container Logistics</span>
              </div>
              
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
                Container <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#9F153E] to-[#7a0f30]">Services</span>
              </h2>
              
              <p class="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Comprehensive container transport solutions from major ports. Full and empty container handling with complete documentation support.
              </p>

              <div class="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 group">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-check text-white text-sm md:text-lg"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1 md:mb-1.5">Port Operations</h4>
                    <p class="text-xs md:text-sm text-gray-600">Kolkata, Haldia, Paradip & Vizag ports</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 group">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-check text-white text-sm md:text-lg"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1 md:mb-1.5">Full Documentation</h4>
                    <p class="text-xs md:text-sm text-gray-600">Customs clearance & paperwork support</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3 md:gap-4">
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">4</p>
                  <p class="text-xs font-semibold opacity-90">Major Ports</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">Industry</p>
                  <p class="text-xs font-semibold opacity-90">Trusted</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">24/7</p>
                  <p class="text-xs font-semibold opacity-90">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Lifting Services -->
        <div :id="'service-lifting'" ref="liftingRef" class="mb-16 md:mb-32 scroll-mt-24 md:scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
            <div class="order-1 lg:order-1" data-aos="fade-right">
              <div class="inline-flex items-center gap-2 bg-[#9F153E]/10 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-4 md:mb-6 border border-[#9F153E]/20">
                <i class="pi pi-arrow-up text-[#9F153E] text-sm md:text-lg"></i>
                <span class="text-[#9F153E] font-extrabold text-xs uppercase tracking-widest">Heavy Lifting</span>
              </div>
              
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
                Lifting <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#9F153E] to-[#7a0f30]">Services</span>
              </h2>
              
              <p class="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                Our Crane delivers high-capacity lifting solutions, featuring cranes capable of handling loads of up to 150 MT, supported by versatile telehandlers with a 17-metre reach.
              </p>
              
              <p class="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Cranes and Telehandlers offered at a rental agreement to major clients Pan India.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 text-center group">
                  <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-cog text-white text-xl md:text-2xl"></i>
                  </div>
                  <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1">Tyre-Mounted</h4>
                  <p class="text-xs md:text-sm text-gray-600">Crane</p>
                </div>

                <div class="p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 text-center group">
                  <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-cog text-white text-xl md:text-2xl"></i>
                  </div>
                  <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1">Crawler</h4>
                  <p class="text-xs md:text-sm text-gray-600">Crane</p>
                </div>

                <div class="p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9F153E]/20 text-center group">
                  <div class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i class="pi pi-arrow-up-right text-white text-xl md:text-2xl"></i>
                  </div>
                  <h4 class="font-bold text-sm md:text-base text-gray-900 mb-1">17-metre</h4>
                  <p class="text-xs md:text-sm text-gray-600">Telehandler</p>
                </div>
              </div>
            </div>

            <div class="order-2 lg:order-2" data-aos="fade-left">
              <div class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[#9F153E] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
                <div class="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-white opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
                <div class="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-[#9F153E] opacity-20 rounded-full translate-y-10 -translate-x-10"></div>
                
                <div class="relative space-y-3 md:space-y-4">
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">150 MT Capacity</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">17m Reach Telehandler</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Rental Agreements Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Construction Services -->
        <div :id="'service-construction'" ref="constructionRef" class="mb-16 md:mb-32 scroll-mt-24 md:scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
            <div class="order-2 lg:order-1" data-aos="fade-right">
              <div class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[#9F153E] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
                <div class="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-white opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
                <div class="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-[#9F153E] opacity-20 rounded-full translate-y-10 -translate-x-10"></div>
                
                <div class="relative space-y-3 md:space-y-4">
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">42 Metre Reach</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Efficient Concrete Placement</span>
                  </div>
                  <div class="flex items-center gap-2 md:gap-3 text-white">
                    <div class="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <i class="pi pi-check text-[#9F153E] text-sm"></i>
                    </div>
                    <span class="font-semibold text-sm md:text-base">Rental Agreements Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2" data-aos="fade-left">
              <div class="inline-flex items-center gap-2 bg-[#9F153E]/10 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-4 md:mb-6 border border-[#9F153E]/20">
                <i class="pi pi-building text-[#9F153E] text-sm md:text-lg"></i>
                <span class="text-[#9F153E] font-extrabold text-xs uppercase tracking-widest">Construction</span>
              </div>
              
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
                Construction <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#9F153E] to-[#7a0f30]">Services</span>
              </h2>
              
              <p class="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                Boom-Placer services provides efficient, high-reach concrete placement and pumping solutions.
              </p>
              
              <p class="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                Boom-placers offered at a rental agreement to major clients Pan India.
              </p>
              
              <p class="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed font-semibold">
                Boom-Placers with a reach of 42 Metres.
              </p>

              <div class="grid grid-cols-3 gap-3 md:gap-4">
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">42m</p>
                  <p class="text-xs font-semibold opacity-90">Reach</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">Pan</p>
                  <p class="text-xs font-semibold opacity-90">India</p>
                </div>
                <div class="text-center p-3 md:p-5 bg-gradient-to-br from-[#9F153E] to-[#7a0f30] rounded-xl md:rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p class="text-2xl md:text-3xl font-black mb-1 md:mb-2">Rental</p>
                  <p class="text-xs font-semibold opacity-90">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const services = ref([
  { id: 'project-cargo', title: 'Project Cargo', icon: 'pi pi-box' },
  { id: 'steel-transport', title: 'Steel Transport', icon: 'pi pi-building' },
  { id: 'odc-owc', title: 'ODC/OWC', icon: 'pi pi-truck' },
  { id: 'lpg-transport', title: 'LPG Transport', icon: 'pi pi-circle' },
  { id: 'bridge-girder', title: 'Bridge Girder', icon: 'pi pi-directions' },
  { id: 'container', title: 'Container', icon: 'pi pi-inbox' },
  { id: 'lifting', title: 'Lifting', icon: 'pi pi-arrow-up' },
  { id: 'construction', title: 'Construction', icon: 'pi pi-building' }
]);

const activeService = ref('project-cargo');

const scrollToService = (serviceId) => {
  const element = document.getElementById(`service-${serviceId}`);
  if (element) {
    const offset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const handleScroll = () => {
  const scrollPosition = window.scrollY + 200;

  for (const service of services.value) {
    const element = document.getElementById(`service-${service.id}`);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeService.value = service.id;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
