<template>
  <div class="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
    <!-- Premium Hero Section -->
    <section class="relative h-screen bg-gradient-to-t from-gray-900 via-gray-950 to-black overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
        <div class="w-full max-w-7xl mx-auto">
          <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] animate-fade-in-up tracking-tight" style="animation-delay: 0.1s">
            Built on<br/>
            <span class="relative inline-block">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#9F153E] via-[#d4756c] to-[#9F153E]">Legacy & Trust</span>
              <div class="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#9F153E] to-transparent"></div>
            </span>
          </h1>
          
          <p class="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mb-12 animate-fade-in-up font-light" style="animation-delay: 0.2s">
            From a visionary's dream in 1974 to becoming Eastern India's most diversified transport group—our journey epitomizes dedication, innovation, and an unwavering commitment to excellence.
          </p>

          <!-- Elegant Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="text-center md:text-left">
              <div class="text-3xl sm:text-4xl font-black text-white mb-1">51+</div>
              <div class="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Years</div>
            </div>
            <div class="text-center md:text-left">
              <div class="text-3xl sm:text-4xl font-black text-white mb-1">225+</div>
              <div class="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Fleet</div>
            </div>
            <div class="text-center md:text-left">
              <div class="text-3xl sm:text-4xl font-black text-white mb-1">5000+</div>
              <div class="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Girders</div>
            </div>
            <div class="text-center md:text-left">
              <div class="text-3xl sm:text-4xl font-black text-white mb-1">20+</div>
              <div class="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">PSU Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Founder Section -->
    <section class=" sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <!-- Subtle Background Elements -->
      <div class="absolute top-20 left-0 w-72 h-72 bg-[#9F153E] opacity-5 rounded-full filter blur-3xl"></div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <!-- Founder Image - Full Card Image -->
          <div class="lg:col-span-2 order-2 lg:order-1">
            <div class="relative group">
              <!-- Background Accent -->
              <div class="absolute -inset-4 bg-gradient-to-br from-[#9F153E]/20 via-[#d4756c]/10 to-transparent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              
              <!-- Main Card - Full Image Background -->
              <div class="relative bg-gradient-to-br from-gray-900/80 to-[#2d2d2d]/80 rounded-3xl overflow-hidden shadow-2xl h-[450px] sm:h-[500px]">
                <!-- Full Card Image -->
                <div class="absolute inset-0">
                  <img 
                    :src="founderImage" 
                    :alt="founderName"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <!-- Dark Overlay Gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/20 to-transparent"></div>                
                <!-- Info Card Overlay -->
                <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div class="flex items-center gap-3 mb-3">
                  </div>
                  <h3 class="text-2xl sm:text-3xl font-black text-white mb-2 drop-shadow-lg">{{ founderName }}</h3>
                  <p class="text-white font-bold text-base sm:text-lg mb-4 drop-shadow-lg">Founder & Visionary</p>
                  <div class="inline-flex items-center gap-2 px-4 py-2 bg-[#9F153E]/20 backdrop-blur-sm rounded-full border border-[#9F153E]/30 drop-shadow-lg">
                    <i class="pi pi-calendar text-[#9F153E] text-sm"></i>
                    <span class="text-white text-sm font-semibold">Founded 1974</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Founder's Story - Premium Typography -->
          <div class="lg:col-span-3 space-y-8 order-1 lg:order-2">
            <!-- Section Header -->
            <div>
              <div class="inline-flex items-center gap-3 mb-6">
                <div class="w-12 h-px bg-gradient-to-r from-[#9F153E] to-transparent"></div>
                <span class="text-[#9F153E] font-bold text-xs uppercase tracking-[0.3em]">The Visionary</span>
              </div>
              <h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                A Dream That<br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#9F153E] to-[#d4756c]">Shaped an Industry</span>
              </h2>
            </div>

            <!-- Premium Content Blocks -->
            <div class="space-y-6">
              <div class="relative pl-8 border-l-2 border-[#9F153E]/30">
                <div class="absolute -left-[9px] top-0 w-4 h-4 bg-[#9F153E] rounded-full"></div>
                <p class="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  In <strong class="font-bold text-gray-900">1974</strong>, Mr. Mahesh Kumar Periwal embarked on a journey with a singular vision: to redefine logistics excellence in Eastern India. Armed with determination and an unwavering commitment to quality, he secured the company's first contract from <strong class="font-semibold text-[#9F153E]">Heavy Engineering Corporation Ltd., Ranchi</strong>—a prestigious Public Sector Undertaking that entrusted him with their most critical transportation needs.
                </p>
              </div>

              <div class="relative pl-8 border-l-2 border-[#9F153E]/30">
                <div class="absolute -left-[9px] top-0 w-4 h-4 bg-[#9F153E] rounded-full"></div>
                <p class="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  What began as a modest operation has evolved into a legacy spanning five decades. Through strategic expansion, relentless innovation, and an uncompromising focus on safety and reliability, Mr. Periwal transformed Ashok Roadlines into Eastern India's most diversified transport group—a testament to visionary leadership and operational excellence.
                </p>
              </div>

              <div class="relative pl-8 border-l-2 border-transparent">
                <p class="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Today, the company serves over 20 major corporate clients, including India's most respected PSUs and private enterprises. From <strong class="font-semibold text-gray-900">SAIL and Larsen & Toubro</strong> to <strong class="font-semibold text-gray-900">IOCL and Coal India Ltd</strong>, the trust these organizations place in Ashok Roadlines reflects the enduring values instilled by its founder.
                </p>
              </div>
            </div>

            <!-- Premium Quote Card -->
            <div class="relative mt-12 p-6 sm:p-8 bg-gradient-to-br from-[#9F153E]/5 via-[#d4756c]/5 to-transparent rounded-2xl border-l-4 border-[#9F153E]">
              <i class="pi pi-quote-left text-4xl sm:text-5xl text-[#9F153E]/20 absolute top-4 left-4"></i>
              <blockquote class="relative z-10 pl-8">
                <p class="text-lg sm:text-xl text-gray-800 font-medium italic leading-relaxed mb-4">
                  "Excellence is not a destination—it's a journey of continuous improvement, unwavering dedication, and an absolute commitment to our clients' success."
                </p>
                <footer class="text-sm text-gray-600 font-semibold">
                  — The Foundation of Ashok Roadlines
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Timeline Section -->
    <section class="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden">
      <div class="absolute inset-0 opacity-30">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.02) 1px, transparent 0); background-size: 32px 32px;"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-3 mb-6">
            <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#9F153E] to-transparent"></div>
            <span class="text-[#9F153E] font-bold text-xs uppercase tracking-[0.3em]">Our Journey</span>
            <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#9F153E] to-transparent"></div>
          </div>
          <h2 class="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Five Decades of <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#9F153E] to-[#d4756c]">Milestones</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Every chapter in our story reflects our commitment to innovation, excellence, and industry leadership
          </p>
        </div>

        <!-- Premium Timeline -->
        <div class="max-w-6xl mx-auto relative">
          <!-- Central Timeline Line -->
          <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#9F153E] via-[#d4756c] to-[#9F153E] transform -translate-x-1/2"></div>

          <div class="space-y-24">
            <!-- 1974 - Foundation -->
            <div class="relative grid lg:grid-cols-2 gap-8 items-center">
              <div class="lg:text-right lg:pr-16">
                <div class="inline-block lg:block">
                  <span class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9F153E] to-[#8f4740] text-white font-black text-sm rounded-full shadow-lg mb-4">
                    <i class="pi pi-flag"></i>
                    1974
                  </span>
                </div>
                <h3 class="text-3xl font-black text-gray-900 mb-4">The Foundation</h3>
                <p class="text-lg text-gray-600 leading-relaxed font-light">
                  Ashok Roadlines established by Mr. Mahesh Kumar Periwal. First contract secured from Heavy Engineering Corporation Ltd., Ranchi, marking the beginning of a legendary partnership with India's PSUs.
                </p>
              </div>
              <div class="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-[#9F153E] to-[#8f4740] rounded-full items-center justify-center shadow-2xl ring-8 ring-white">
                <i class="pi pi-star-fill text-3xl text-white"></i>
              </div>
              <div class="lg:pl-16">
                <div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-[#9F153E]/10 rounded-xl flex items-center justify-center">
                      <i class="pi pi-building text-[#9F153E] text-xl"></i>
                    </div>
                    <div>
                      <p class="text-sm font-bold text-gray-500 uppercase">First Client</p>
                      <p class="text-lg font-black text-gray-900">HEC Ranchi</p>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm">A prestigious PSU that became the cornerstone of our enduring legacy</p>
                </div>
              </div>
            </div>

            <!-- 1991 - Historic Achievement -->
            <div class="relative grid lg:grid-cols-2 gap-8 items-center">
              <div class="lg:col-start-2 lg:pl-16 order-2 lg:order-1">
                <div class="inline-block lg:block">
                  <span class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-sm rounded-full shadow-lg mb-4">
                    <i class="pi pi-trophy"></i>
                    1991
                  </span>
                </div>
                <h3 class="text-3xl font-black text-gray-900 mb-4">Historic Achievement</h3>
                <p class="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                  Featured in <strong class="font-semibold text-gray-900">SAIL's CMO News</strong> for successfully transporting overdimensional cargo weighing 41.46 MT over a 5-month journey from Kolkata Port to Rourkela Steel Plant.
                </p>
                <div class="grid grid-cols-3 gap-3">
                  <div class="bg-amber-50 p-4 rounded-xl text-center border border-amber-200">
                    <p class="text-2xl font-black text-amber-700">27'</p>
                    <p class="text-xs text-amber-600 uppercase font-semibold">Length</p>
                  </div>
                  <div class="bg-amber-50 p-4 rounded-xl text-center border border-amber-200">
                    <p class="text-2xl font-black text-amber-700">16.4'</p>
                    <p class="text-xs text-amber-600 uppercase font-semibold">Width</p>
                  </div>
                  <div class="bg-amber-50 p-4 rounded-xl text-center border border-amber-200">
                    <p class="text-2xl font-black text-amber-700">18.11'</p>
                    <p class="text-xs text-amber-600 uppercase font-semibold">Height</p>
                  </div>
                </div>
              </div>
              <div class="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full items-center justify-center shadow-2xl ring-8 ring-white order-1">
                <i class="pi pi-shield text-3xl text-white"></i>
              </div>
              <div class="lg:pr-16 order-3 lg:order-2">
                <div class="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200 shadow-lg">
                  <h4 class="font-black text-xl text-gray-900 mb-3">Engineering Marvel</h4>
                  <ul class="space-y-2 text-sm text-gray-700">
                    <li class="flex items-start gap-2">
                      <i class="pi pi-check-circle text-amber-600 mt-0.5"></i>
                      <span>250-tonne capacity crane mobilized</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="pi pi-check-circle text-amber-600 mt-0.5"></i>
                      <span>11 bridges with low side walls crossed</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="pi pi-check-circle text-amber-600 mt-0.5"></i>
                      <span>Multiple railway and electrical line adjustments</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="pi pi-check-circle text-amber-600 mt-0.5"></i>
                      <span>Coordination with 5+ government authorities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 2000s - Diversification -->
            <div class="relative grid lg:grid-cols-2 gap-8 items-center">
              <div class="lg:text-right lg:pr-16">
                <div class="inline-block lg:block">
                  <span class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9F153E] to-[#8f4740] text-white font-black text-sm rounded-full shadow-lg mb-4">
                    <i class="pi pi-truck"></i>
                    2000s
                  </span>
                </div>
                <h3 class="text-3xl font-black text-gray-900 mb-4">Strategic Expansion</h3>
                <p class="text-lg text-gray-600 leading-relaxed font-light">
                  Introduced specialized equipment including Hydraulic Axles, Low Bed Trailers, and became pioneers in LPG Bulk and Anhydrous Liquid Ammonia transportation across Eastern India.
                </p>
              </div>
              <div class="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-[#9F153E] to-[#8f4740] rounded-full items-center justify-center shadow-2xl ring-8 ring-white">
                <i class="pi pi-cog text-3xl text-white"></i>
              </div>
              <div class="lg:pl-16">
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <i class="pi pi-circle text-3xl text-[#9F153E] mb-3"></i>
                    <p class="font-black text-gray-900 mb-1">LPG Transport</p>
                    <p class="text-xs text-gray-600">All major OMCs</p>
                  </div>
                  <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <i class="pi pi-database text-3xl text-[#9F153E] mb-3"></i>
                    <p class="font-black text-gray-900 mb-1">Ammonia Gas</p>
                    <p class="text-xs text-gray-600">Industry pioneers</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2010s - Infrastructure Leader -->
            <div class="relative grid lg:grid-cols-2 gap-8 items-center">
              <div class="lg:col-start-2 lg:pl-16 order-2 lg:order-1">
                <div class="inline-block lg:block">
                  <span class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9F153E] to-[#8f4740] text-white font-black text-sm rounded-full shadow-lg mb-4">
                    <i class="pi pi-directions"></i>
                    2010s
                  </span>
                </div>
                <h3 class="text-3xl font-black text-gray-900 mb-4">Infrastructure Pioneer</h3>
                <p class="text-lg text-gray-600 leading-relaxed font-light">
                  Established as Eastern India's leading girder transporter with 5000+ girders successfully moved. Major projects include VIP Road, Garden Reach Flyovers, and Gujarat High Speed Railway.
                </p>
              </div>
              <div class="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-[#9F153E] to-[#8f4740] rounded-full items-center justify-center shadow-2xl ring-8 ring-white order-1">
                <i class="pi pi-map text-3xl text-white"></i>
              </div>
              <div class="lg:pr-16 order-3 lg:order-2">
                <div class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div class="text-center mb-6">
                    <div class="text-6xl font-black text-[#9F153E] mb-2">5000+</div>
                    <p class="text-sm font-bold text-gray-600 uppercase tracking-wider">Girders Transported</p>
                  </div>
                  <div class="pt-6 border-t border-gray-200 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p class="text-2xl font-black text-gray-900">125'</p>
                      <p class="text-xs text-gray-500 uppercase">Max Length</p>
                    </div>
                    <div>
                      <p class="text-2xl font-black text-gray-900">150 MT</p>
                      <p class="text-xs text-gray-500 uppercase">Max Weight</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2024 - Present -->
            <div class="relative grid lg:grid-cols-2 gap-8 items-center">
              <div class="lg:text-right lg:pr-16">
                <div class="inline-block lg:block">
                  <span class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-sm rounded-full shadow-lg mb-4 animate-pulse">
                    <i class="pi pi-star-fill"></i>
                    2024
                  </span>
                </div>
                <h3 class="text-3xl font-black text-gray-900 mb-4">Industry Leadership</h3>
                <p class="text-lg text-gray-600 leading-relaxed font-light">
                  Recognized as <strong class="font-bold text-[#9F153E]">THE MOST DIVERSIFIED TRANSPORT GROUP</strong> in Eastern India with 225+ vehicles, 9 strategic branches, serving 20+ major corporate clients across all critical sectors.
                </p>
              </div>
              <div class="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full items-center justify-center shadow-2xl ring-8 ring-white animate-pulse-slow">
                <i class="pi pi-crown text-3xl text-white"></i>
              </div>
              <div class="lg:pl-16">
                <div class="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-2xl shadow-2xl text-white">
                  <h4 class="text-2xl font-black mb-6">Complete Ecosystem</h4>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                      <p class="text-3xl font-black mb-1">225+</p>
                      <p class="text-xs uppercase tracking-wide">Vehicles</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                      <p class="text-3xl font-black mb-1">9</p>
                      <p class="text-xs uppercase tracking-wide">Branches</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                      <p class="text-3xl font-black mb-1">20+</p>
                      <p class="text-xs uppercase tracking-wide">PSU Clients</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                      <p class="text-3xl font-black mb-1">24/7</p>
                      <p class="text-xs uppercase tracking-wide">Operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Fleet Section -->
    <section class="py-20 sm:py-24 md:py-32 bg-gradient-to-t from-gray-900 via-gray-950 to-black relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(168, 87, 80, 0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-[#9F153E] rounded-full filter blur-3xl opacity-20"></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-3 mb-6">
            <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#9F153E] to-transparent"></div>
            <span class="text-[#9F153E] font-bold text-xs uppercase tracking-[0.3em]">Our Assets</span>
            <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#9F153E] to-transparent"></div>
          </div>
          <h2 class="text-5xl md:text-6xl font-black text-white mb-6">
            225+ Specialized <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#9F153E] to-[#d4756c]">Vehicles</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            A comprehensive fleet engineered for excellence, equipped to handle every transport challenge with precision and reliability
          </p>
        </div>

        <!-- Premium Fleet Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div v-for="(item, index) in fleetData" :key="index"
               class="group relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-[#9F153E]/50 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
            <!-- Icon -->
            <div class="w-16 h-16 bg-gradient-to-br from-[#9F153E] to-[#8f4740] rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <i :class="item.icon" class="text-3xl text-white"></i>
            </div>
            
            <!-- Number -->
            <div class="text-6xl font-black text-white mb-3 group-hover:text-[#9F153E] transition-colors">
              {{ item.count }}
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-black text-white mb-3">{{ item.title }}</h3>
            
            <!-- Description -->
            <p class="text-sm text-gray-400 leading-relaxed">{{ item.description }}</p>
            
            <!-- Hover Effect -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#9F153E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import founderImage from '/assets/dadu.jpeg';

const fleetData = ref([
  { count: '72', title: 'Trailers', icon: 'pi pi-truck', description: 'Standard and specialized trailers for diverse cargo' },
  { count: '52', title: 'Hydraulic Axles', icon: 'pi pi-cog', description: 'Advanced multi-axle systems with spacers & bolsters' },
  { count: '75', title: 'LPG Tankers', icon: 'pi pi-circle', description: 'Bulk LPG transportation for all major OMCs' },
  { count: '7', title: 'Cranes', icon: 'pi pi-wrench', description: 'Including crawler cranes for heavy lifting' },
  { count: '5', title: 'Low Bed Trailers', icon: 'pi pi-car', description: '16-wheeler specialized for ODC operations' },
  { count: '7', title: 'Pullers', icon: 'pi pi-forward', description: 'Prime movers for heavy-duty towing' },
  { count: '7', title: 'Ammonia Tankers', icon: 'pi pi-database', description: 'Pioneers in anhydrous liquid ammonia transport' },
  { count: '225+', title: 'Total Fleet', icon: 'pi pi-th-large', description: 'Complete logistics solutions under one roof' },
]);

const founderName = ref('Mr. Mahesh Kumar Periwal');
</script>

<style scoped>
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

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

@keyframes pulse-slow {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}
</style>
