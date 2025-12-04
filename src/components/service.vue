<template>
  <div class="min-h-screen bg-white">
    
    <!-- Hero Section -->
    <section class="relative bg-gray-900 pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#A85750] rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A85750] rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div class="inline-flex items-center gap-2 mb-6 bg-[#A85750]/20 backdrop-blur-md border border-[#A85750]/40 px-5 py-2 rounded-full">
            <div class="w-2 h-2 bg-[#A85750] rounded-full animate-pulse"></div>
            <span class="text-sm font-bold tracking-wider">SPECIALIZED LOGISTICS</span>
          </div>
          
          <h1 class="text-5xl md:text-6xl font-black mb-6">
            Our <span class="text-[#A85750]">Services</span>
          </h1>
          
          <div class="flex items-center justify-center gap-2 mb-6">
            <div class="h-px w-12 bg-[#A85750]"></div>
            <div class="w-2 h-2 bg-[#A85750] rounded-full"></div>
            <div class="h-px w-12 bg-[#A85750]"></div>
          </div>
          
          <p class="text-xl text-gray-300">
            Complete transport solutions for every industrial need
          </p>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <section class="sticky top-20 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200 z-40">
      <div class="container mx-auto px-6">
        <div class="flex overflow-x-auto no-scrollbar py-3 gap-2">
          <button
            v-for="service in services"
            :key="service.id"
            @click="scrollToService(service.id)"
            class="whitespace-nowrap px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex-shrink-0"
            :class="activeService === service.id 
              ? 'bg-[#A85750] text-white shadow-lg' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            <i :class="service.icon" class="mr-2"></i>
            {{ service.title }}
          </button>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        
        <!-- Project Cargo -->
        <div :id="'service-project-cargo'" ref="projectCargoRef" class="mb-24 scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div class="order-2 lg:order-1">
              <div class="inline-flex items-center gap-2 bg-[#A85750]/10 px-4 py-2 rounded-full mb-4">
                <i class="pi pi-box text-[#A85750]"></i>
                <span class="text-[#A85750] font-bold text-xs uppercase tracking-wider">Heavy Logistics</span>
              </div>
              
              <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Project Cargo <span class="text-[#A85750]">Transportation</span>
              </h2>
              
              <p class="text-base text-gray-600 mb-6 leading-relaxed">
                Specialized solutions for complex project cargo from ports to remote sites. 40+ years handling critical infrastructure equipment.
              </p>

              <div class="space-y-3 mb-6">
                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Mining & Power Equipment</h4>
                    <p class="text-xs text-gray-600">Draglines, dumpers, transformers & cranes</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Steel Plant Modernization</h4>
                    <p class="text-xs text-gray-600">All major cargo for Rourkela Steel Plant</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Port-to-Site Coordination</h4>
                    <p class="text-xs text-gray-600">Complete logistics to collieries & power plants</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">100+</p>
                  <p class="text-xs">Machines</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">40+</p>
                  <p class="text-xs">Years</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">24/7</p>
                  <p class="text-xs">Support</p>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <div class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl">
                <i class="pi pi-box text-[#A85750] text-8xl opacity-20"></i>
                <div class="mt-6 space-y-2">
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>Specialized Low Bed Trailers</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>Multi-Authority Coordination</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>Custom Transport Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Steel Transport -->
        <div :id="'service-steel-transport'" ref="steelTransportRef" class="mb-24 scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl">
                <i class="pi pi-building text-[#A85750] text-8xl opacity-20"></i>
                <div class="mt-6 space-y-2">
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>Pan-India Steel Delivery</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>Direct SAIL Plant Access</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>Real-time Tracking</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="inline-flex items-center gap-2 bg-[#A85750]/10 px-4 py-2 rounded-full mb-4">
                <i class="pi pi-building text-[#A85750]"></i>
                <span class="text-[#A85750] font-bold text-xs uppercase tracking-wider">Industrial Transport</span>
              </div>
              
              <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Finished Steel <span class="text-[#A85750]">Transport</span>
              </h2>
              
              <p class="text-base text-gray-600 mb-6 leading-relaxed">
                Branch networks at all major steel plant cities delivering 20,000+ MT monthly with direct SAIL plant access.
              </p>

              <div class="space-y-3 mb-6">
                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Branch Networks</h4>
                    <p class="text-xs text-gray-600">Rourkela, Bhilai, Raigarh, Durgapur, Bokaro & Vizag</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Major Clients</h4>
                    <p class="text-xs text-gray-600">JSPL, SAIL, L&T nationwide delivery</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">20K+</p>
                  <p class="text-xs">MT Monthly</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">6</p>
                  <p class="text-xs">Plant Hubs</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">100%</p>
                  <p class="text-xs">On-Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ODC/OWC -->
        <div :id="'service-odc-owc'" ref="odcOwcRef" class="mb-24 scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div class="order-2 lg:order-1">
              <div class="inline-flex items-center gap-2 bg-[#A85750]/10 px-4 py-2 rounded-full mb-4">
                <i class="pi pi-truck text-[#A85750]"></i>
                <span class="text-[#A85750] font-bold text-xs uppercase tracking-wider">Specialized Cargo</span>
              </div>
              
              <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                ODC & OWC <span class="text-[#A85750]">Transport</span>
              </h2>
              
              <p class="text-base text-gray-600 mb-6 leading-relaxed">
                40+ years expertise in overdimensional cargo. Customized low bed trailers for extreme loads with complete route planning.
              </p>

              <div class="bg-amber-50 rounded-xl p-4 border-2 border-amber-200 mb-6">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-trophy text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Featured in SAIL CMO News (1991)</h4>
                    <p class="text-xs text-gray-700">27' x 16.4' x 18.11' cargo (41.46 MT) from Kolkata to Rourkela</p>
                  </div>
                </div>
              </div>

              <div class="space-y-3 mb-6">
                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Custom Low Bed Trailers</h4>
                    <p class="text-xs text-gray-600">Specialized equipment for extreme dimensions</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Multi-Authority Coordination</h4>
                    <p class="text-xs text-gray-600">Railway, PWD, electrical & local administration</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">40+</p>
                  <p class="text-xs">Years</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">500</p>
                  <p class="text-xs">MT Capacity</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">100%</p>
                  <p class="text-xs">Safe</p>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <div class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl">
                <i class="pi pi-truck text-[#A85750] text-8xl opacity-20"></i>
                <div class="mt-6 space-y-2">
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>5 Low Bed Trailers</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>52 Hydraulic Axles</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>Expert Route Planning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- LPG Transport -->
        <div :id="'service-lpg-transport'" ref="lpgTransportRef" class="mb-24 scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl">
                <i class="pi pi-circle text-[#A85750] text-8xl opacity-20"></i>
                <div class="mt-6 space-y-2">
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>75 LPG Tankers</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>OMC Certified Drivers</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>24/7 Safety Monitoring</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="inline-flex items-center gap-2 bg-[#A85750]/10 px-4 py-2 rounded-full mb-4">
                <i class="pi pi-circle text-[#A85750]"></i>
                <span class="text-[#A85750] font-bold text-xs uppercase tracking-wider">Energy Transport</span>
              </div>
              
              <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Bulk LPG <span class="text-[#A85750]">Transport</span>
              </h2>
              
              <p class="text-base text-gray-600 mb-6 leading-relaxed">
                75 specialized bulk LPG tankers serving all major Oil Marketing Companies across Eastern India with certified drivers.
              </p>

              <div class="space-y-3 mb-6">
                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">All Major OMCs</h4>
                    <p class="text-xs text-gray-600">IOCL, HPCL & BPCL to bottling plants</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Safety-First Operations</h4>
                    <p class="text-xs text-gray-600">GPS tracking & temperature monitoring</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">75</p>
                  <p class="text-xs">Tankers</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">3</p>
                  <p class="text-xs">Major OMCs</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">24/7</p>
                  <p class="text-xs">Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bridge Girder -->
        <div :id="'service-bridge-girder'" ref="bridgeGirderRef" class="mb-24 scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div class="order-2 lg:order-1">
              <div class="inline-flex items-center gap-2 bg-[#A85750]/10 px-4 py-2 rounded-full mb-4">
                <i class="pi pi-directions text-[#A85750]"></i>
                <span class="text-[#A85750] font-bold text-xs uppercase tracking-wider">Infrastructure</span>
              </div>
              
              <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Bridge Girder & <span class="text-[#A85750]">Segments</span>
              </h2>
              
              <p class="text-base text-gray-600 mb-6 leading-relaxed">
                Pioneers in Eastern India for bridge, flyover, and ROB girders. 5000+ girders transported up to 125' long & 150 MT.
              </p>

              <div class="bg-blue-50 rounded-xl p-4 border-2 border-blue-200 mb-6">
                <h4 class="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                  <i class="pi pi-star-fill text-blue-600"></i>
                  Notable Projects
                </h4>
                <div class="grid grid-cols-2 gap-2 text-xs">
                  <span class="bg-white px-2 py-1 rounded text-gray-700">VIP Road Flyover</span>
                  <span class="bg-white px-2 py-1 rounded text-gray-700">Gujarat HSR</span>
                  <span class="bg-white px-2 py-1 rounded text-gray-700">Tallah ROB</span>
                  <span class="bg-white px-2 py-1 rounded text-gray-700">Patna-Gaya Road</span>
                </div>
              </div>

              <div class="space-y-3 mb-6">
                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Specialized Equipment</h4>
                    <p class="text-xs text-gray-600">Hydraulic axles, pullers & 16-wheeler low beds</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Capacity</h4>
                    <p class="text-xs text-gray-600">125' length | 150 MT weight capability</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">5000+</p>
                  <p class="text-xs">Girders</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">125'</p>
                  <p class="text-xs">Max Length</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">150</p>
                  <p class="text-xs">MT Capacity</p>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <div class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl">
                <i class="pi pi-directions text-[#A85750] text-8xl opacity-20"></i>
                <div class="mt-6 space-y-2">
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>52 Hydraulic Axles</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>7 Pullers Available</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>Pioneer Since 1974</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Container Services -->
        <div :id="'service-container'" ref="containerRef" class="mb-24 scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl">
                <i class="pi pi-box text-[#A85750] text-8xl opacity-20"></i>
                <div class="mt-6 space-y-2">
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>TEU & FEU Handling</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>Port Infrastructure</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>Since 1974</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="inline-flex items-center gap-2 bg-[#A85750]/10 px-4 py-2 rounded-full mb-4">
                <i class="pi pi-box text-[#A85750]"></i>
                <span class="text-[#A85750] font-bold text-xs uppercase tracking-wider">Port Operations</span>
              </div>
              
              <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Container & Port <span class="text-[#A85750]">Services</span>
              </h2>
              
              <p class="text-base text-gray-600 mb-6 leading-relaxed">
                Operating in port-based transportation since 1974. Regular TEU & FEU container transport for major PSU importers.
              </p>

              <div class="space-y-3 mb-6">
                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Major Importers</h4>
                    <p class="text-xs text-gray-600">SAIL, JSPL, L&T, Coal India, BHEL</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Port Expertise</h4>
                    <p class="text-xs text-gray-600">Dedicated infrastructure & coordination</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">51+</p>
                  <p class="text-xs">Years</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">100+</p>
                  <p class="text-xs">Daily</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">24/7</p>
                  <p class="text-xs">Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Crane Services -->
        <div :id="'service-crane'" ref="craneRef" class="mb-24 scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div class="order-2 lg:order-1">
              <div class="inline-flex items-center gap-2 bg-[#A85750]/10 px-4 py-2 rounded-full mb-4">
                <i class="pi pi-wrench text-[#A85750]"></i>
                <span class="text-[#A85750] font-bold text-xs uppercase tracking-wider">Lifting Solutions</span>
              </div>
              
              <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Crane Services & <span class="text-[#A85750]">Telehandlers</span>
              </h2>
              
              <p class="text-base text-gray-600 mb-6 leading-relaxed">
                7 specialized cranes including crawler cranes with full lifting, rigging, and on-site support.
              </p>

              <div class="space-y-3 mb-6">
                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Crawler Cranes</h4>
                    <p class="text-xs text-gray-600">Heavy-duty for extreme lifting operations</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Professional Rigging</h4>
                    <p class="text-xs text-gray-600">Certified riggers for safe operations</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div class="w-10 h-10 bg-[#A85750] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm mb-1">Multi-Purpose</h4>
                    <p class="text-xs text-gray-600">Port operations, project sites, installations</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">7</p>
                  <p class="text-xs">Cranes</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">500</p>
                  <p class="text-xs">MT Capacity</p>
                </div>
                <div class="text-center p-3 bg-[#A85750] rounded-xl text-white">
                  <p class="text-2xl font-black mb-1">24/7</p>
                  <p class="text-xs">Available</p>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <div class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl">
                <i class="pi pi-wrench text-[#A85750] text-8xl opacity-20"></i>
                <div class="mt-6 space-y-2">
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>Crawler Cranes</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>Certified Operators</span>
                  </div>
                  <div class="flex items-center gap-2 text-white text-sm">
                    <i class="pi pi-check text-[#A85750]"></i>
                    <span>On-site Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-br from-[#A85750] to-[#8f4740]">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 class="text-3xl md:text-4xl font-black mb-4">
            Need Specialized Logistics?
          </h2>
          
          <p class="text-lg mb-8">
            51 years of expertise. Let's move your business forward.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" 
               class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                      bg-white text-[#A85750] font-bold
                      transform hover:scale-105 transition-all duration-300 shadow-xl">
              <span>Get in Touch</span>
              <i class="pi pi-arrow-right"></i>
            </a>
            
            <a href="#quote" 
               class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                      border-2 border-white/30 backdrop-blur-xl font-bold
                      hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
              <i class="pi pi-file-edit"></i>
              <span>Request Quote</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const activeService = ref('')

const projectCargoRef = ref(null)
const steelTransportRef = ref(null)
const odcOwcRef = ref(null)
const lpgTransportRef = ref(null)
const bridgeGirderRef = ref(null)
const containerRef = ref(null)
const craneRef = ref(null)

const services = ref([
  { id: 'project-cargo', title: 'Project Cargo', icon: 'pi pi-box' },
  { id: 'steel-transport', title: 'Steel Transport', icon: 'pi pi-building' },
  { id: 'odc-owc', title: 'ODC/OWC', icon: 'pi pi-truck' },
  { id: 'lpg-transport', title: 'LPG Transport', icon: 'pi pi-circle' },
  { id: 'bridge-girder', title: 'Bridge Girder', icon: 'pi pi-directions' },
  { id: 'container', title: 'Container', icon: 'pi pi-box' },
  { id: 'crane', title: 'Crane Services', icon: 'pi pi-wrench' }
])

const scrollToService = (serviceId) => {
  const element = document.getElementById(`service-${serviceId}`)
  if (element) {
    const offset = 120
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const updateActiveService = () => {
  const sections = [
    { ref: projectCargoRef, id: 'project-cargo' },
    { ref: steelTransportRef, id: 'steel-transport' },
    { ref: odcOwcRef, id: 'odc-owc' },
    { ref: lpgTransportRef, id: 'lpg-transport' },
    { ref: bridgeGirderRef, id: 'bridge-girder' },
    { ref: containerRef, id: 'container' },
    { ref: craneRef, id: 'crane' }
  ]

  const scrollPosition = window.scrollY + 200

  for (const section of sections) {
    if (section.ref.value) {
      const offsetTop = section.ref.value.offsetTop
      const offsetHeight = section.ref.value.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeService.value = section.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveService)
  updateActiveService()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActiveService)
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
