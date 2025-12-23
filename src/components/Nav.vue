<template>
  <nav
    class="sticky top-0 w-full z-50 transition-all duration-300"
    :class="[
      scrolled ? 'bg-white backdrop-blur-lg shadow-xl' : 'bg-white backdrop-blur-md shadow-lg'
    ]"
  >
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link
          to="/"
          class="flex items-center gap-3 cursor-pointer transform transition-all duration-300 hover:scale-105 group"
        >
          <img
            src="/assets/logo.png"
            alt="Ashok Roadlines"
            class="h-14 w-auto relative z-10 drop-shadow-2xl transition-transform duration-300"
          />
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-1">
          <router-link
            to="/"
            class="relative px-4 py-2 text-gray-700 font-bold text-sm uppercase tracking-wide hover:text-[#9F153E] transition-all duration-300 group"
            active-class="text-[#9F153E]"
          >
            <span class="relative z-10">Home</span>
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#9F153E] to-[#c96860] transition-all duration-300 ease-out group-hover:w-full rounded-full"
            ></span>
          </router-link>

          <router-link
            to="/about"
            class="relative px-4 py-2 text-gray-700 font-bold text-sm uppercase tracking-wide hover:text-[#9F153E] transition-all duration-300 group"
            active-class="text-[#9F153E]"
          >
            <span class="relative z-10">About</span>
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#9F153E] to-[#c96860] transition-all duration-300 ease-out group-hover:w-full rounded-full"
            ></span>
          </router-link>

          <!-- Equipment mega menu -->
          <div
            class="relative group/equipment"
            @mouseenter="handleEquipmentEnter"
            @mouseleave="handleEquipmentLeave"
          >
            <button
              class="relative px-4 py-2 text-gray-700 font-bold text-sm uppercase tracking-wide hover:text-[#9F153E] transition-all duration-300 flex items-center gap-2 group"
              :class="{ 'text-[#9F153E]': showEquipmentMenu || $route.path.startsWith('/equipment') }"
            >
              <span class="relative z-10">Equipment</span>
              <i
                class="pi pi-chevron-down text-xs transition-all duration-300"
                :class="{ 'rotate-180': showEquipmentMenu }"
              ></i>
              <span
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#9F153E] to-[#c96860] transition-all duration-300 ease-out group-hover:w-full rounded-full"
              ></span>
            </button>

            <!-- Desktop dropdown -->
            <transition name="dropdown">
              <div
                v-show="showEquipmentMenu"
                class="absolute top-full left-0 pt-4 w-80 z-50"
              >
                <div
                  class="bg-white/98 backdrop-blur-xl shadow-2xl border border-gray-200/50 rounded-2xl overflow-visible"
                >
                  <div class="p-3 space-y-1">
                    <!-- Trailers (overview + submenu) -->
                    <div
                      class="group/item relative"
                      @mouseenter="activeEquipment = 'trailers'"
                      @mouseleave="clearActiveEquipment"
                    >
                      <router-link
                        to="/equipment/trailers"
                        class="flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 text-gray-700 font-semibold text-sm group/link"
                        :class="activeEquipment === 'trailers' || $route.path.startsWith('/equipment/trailers')
                          ? 'bg-gradient-to-r from-[#9F153E]/10 to-[#c96860]/10 text-[#9F153E]'
                          : 'hover:bg-gray-50'"
                      >
                        <div class="flex items-center gap-3">
                          <div
                            class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9F153E]/20 to-[#c96860]/20 flex items-center justify-center group-hover/link:scale-110 transition-transform"
                          >
                            <i class="pi pi-truck text-[#9F153E] text-sm"></i>
                          </div>
                          <span>Trailers</span>
                        </div>
                        <i
                          class="pi pi-chevron-right text-xs opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"
                        ></i>
                      </router-link>

                      <!-- Trailers submenu -->
                      <transition name="submenu">
                        <div
                          v-show="activeEquipment === 'trailers'"
                          class="absolute left-full top-0 ml-2 w-72 bg-white/98 backdrop-blur-xl shadow-2xl border border-gray-200/50 rounded-2xl overflow-hidden z-50"
                        >
                          <div class="p-3 space-y-1">
                            <router-link
                              to="/equipment/trailers/flatbed"
                              class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-[#9F153E]/10 hover:to-[#c96860]/10 transition-all duration-300 text-sm text-gray-700 hover:text-[#9F153E] font-medium group/sub"
                            >
                              <div
                                class="w-1.5 h-1.5 rounded-full bg-[#9F153E] group-hover/sub:scale-150 transition-transform"
                              ></div>
                              Flatbed Trailer
                            </router-link>
                            <router-link
                              to="/equipment/trailers/semi-lowbed"
                              class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-[#9F153E]/10 hover:to-[#c96860]/10 transition-all duration-300 text-sm text-gray-700 hover:text-[#9F153E] font-medium group/sub"
                            >
                              <div
                                class="w-1.5 h-1.5 rounded-full bg-[#9F153E] group-hover/sub:scale-150 transition-transform"
                              ></div>
                              Semi Lowbed Trailer
                            </router-link>
                            <router-link
                              to="/equipment/trailers/lowbed"
                              class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-[#9F153E]/10 hover:to-[#c96860]/10 transition-all duration-300 text-sm text-gray-700 hover:text-[#9F153E] font-medium group/sub"
                            >
                              <div
                                class="w-1.5 h-1.5 rounded-full bg-[#9F153E] group-hover/sub:scale-150 transition-transform"
                              ></div>
                              Lowbed Trailer
                            </router-link>
                            <router-link
                              to="/equipment/trailers/lowbed-16-wheeler"
                              class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-[#9F153E]/10 hover:to-[#c96860]/10 transition-all duration-300 text-sm text-gray-700 hover:text-[#9F153E] font-medium group/sub"
                            >
                              <div
                                class="w-1.5 h-1.5 rounded-full bg-[#9F153E] group-hover/sub:scale-150 transition-transform"
                              ></div>
                              Lowbed 16 Wheeler
                            </router-link>
                          </div>
                        </div>
                      </transition>
                    </div>

                    <!-- Hydraulic axles -->
                    <router-link
                      to="/equipment/hydraulic-axles"
                      class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#9F153E]/10 hover:to-[#c96860]/10 transition-all duration-300 text-gray-700 hover:text-[#9F153E] font-semibold text-sm group/link"
                      @mouseenter="activeEquipment = null"
                    >
                      <div
                        class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9F153E]/20 to-[#c96860]/20 flex items-center justify-center group-hover/link:scale-110 transition-transform"
                      >
                        <i class="pi pi-cog text-[#9F153E] text-sm"></i>
                      </div>
                      <span>Hydraulic Axles</span>
                    </router-link>

                    <!-- Pullers -->
                    <router-link
                      to="/equipment/pullers"
                      class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#9F153E]/10 hover:to-[#c96860]/10 transition-all duration-300 text-gray-700 hover:text-[#9F153E] font-semibold text-sm group/link"
                      @mouseenter="activeEquipment = null"
                    >
                      <div
                        class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9F153E]/20 to-[#c96860]/20 flex items-center justify-center group-hover/link:scale-110 transition-transform"
                      >
                        <i class="pi pi-arrows-h text-[#9F153E] text-sm"></i>
                      </div>
                      <span>Pullers</span>
                    </router-link>

                    <!-- Cranes (overview + submenu) -->
                    <div
                      class="group/item relative"
                      @mouseenter="activeEquipment = 'crane'"
                      @mouseleave="clearActiveEquipment"
                    >
                      <router-link
                        to="/equipment/crane"
                        class="flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 text-gray-700 font-semibold text-sm group/link"
                        :class="activeEquipment === 'crane' || $route.path.startsWith('/equipment/crane')
                          ? 'bg-gradient-to-r from-[#9F153E]/10 to-[#c96860]/10 text-[#9F153E]'
                          : 'hover:bg-gray-50'"
                      >
                        <div class="flex items-center gap-3">
                          <div
                            class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9F153E]/20 to-[#c96860]/20 flex items-center justify-center group-hover/link:scale-110 transition-transform"
                          >
                            <i class="pi pi-sitemap text-[#9F153E] text-sm"></i>
                          </div>
                          <span>Crane</span>
                        </div>
                        <i
                          class="pi pi-chevron-right text-xs opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"
                        ></i>
                      </router-link>

                      <!-- Crane submenu -->
                      <transition name="submenu">
                        <div
                          v-show="activeEquipment === 'crane'"
                          class="absolute left-full top-0 ml-2 w-72 bg-white/98 backdrop-blur-xl shadow-2xl border border-gray-200/50 rounded-2xl overflow-hidden z-50"
                        >
                          <div class="p-3 space-y-1">
                            <router-link
                              to="/equipment/crane/crawler"
                              class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-[#9F153E]/10 hover:to-[#c96860]/10 transition-all duration-300 text-sm text-gray-700 hover:text-[#9F153E] font-medium group/sub"
                            >
                              <div
                                class="w-1.5 h-1.5 rounded-full bg-[#9F153E] group-hover/sub:scale-150 transition-transform"
                              ></div>
                              Crawler Crane
                            </router-link>
                            <router-link
                              to="/equipment/crane/tire-mount"
                              class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-[#9F153E]/10 hover:to-[#c96860]/10 transition-all duration-300 text-sm text-gray-700 hover:text-[#9F153E] font-medium group/sub"
                            >
                              <div
                                class="w-1.5 h-1.5 rounded-full bg-[#9F153E] group-hover/sub:scale-150 transition-transform"
                              ></div>
                              Tire Mount Crane
                            </router-link>
                          </div>
                        </div>
                      </transition>
                    </div>

                    <!-- Pick and carry -->
                    <router-link
                      to="/equipment/pick-and-carry"
                      class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#9F153E]/10 hover:to-[#c96860]/10 transition-all duration-300 text-gray-700 hover:text-[#9F153E] font-semibold text-sm group/link"
                      @mouseenter="activeEquipment = null"
                    >
                      <div
                        class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9F153E]/20 to-[#c96860]/20 flex items-center justify-center group-hover/link:scale-110 transition-transform"
                      >
                        <i class="pi pi-box text-[#9F153E] text-sm"></i>
                      </div>
                      <span>Pick and Carry</span>
                    </router-link>

                    <!-- Telehandler -->
                    <router-link
                      to="/equipment/telehandler"
                      class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#9F153E]/10 hover:to-[#c96860]/10 transition-all duration-300 text-gray-700 hover:text-[#9F153E] font-semibold text-sm group/link"
                      @mouseenter="activeEquipment = null"
                    >
                      <div
                        class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9F153E]/20 to-[#c96860]/20 flex items-center justify-center group-hover/link:scale-110 transition-transform"
                      >
                        <i class="pi pi-forward text-[#9F153E] text-sm"></i>
                      </div>
                      <span>Telehandler</span>
                    </router-link>

                    <!-- Boom placer -->
                    <router-link
                      to="/equipment/boom-placer"
                      class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#9F153E]/10 hover:to-[#c96860]/10 transition-all duration-300 text-gray-700 hover:text-[#9F153E] font-semibold text-sm group/link"
                      @mouseenter="activeEquipment = null"
                    >
                      <div
                        class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9F153E]/20 to-[#c96860]/20 flex items-center justify-center group-hover/link:scale-110 transition-transform"
                      >
                        <i class="pi pi-th-large text-[#9F153E] text-sm"></i>
                      </div>
                      <span>Boom Placer</span>
                    </router-link>

                    <!-- LPG -->
                    <router-link
                      to="/equipment/lpg-tanker"
                      class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#9F153E]/10 hover:to-[#c96860]/10 transition-all duration-300 text-gray-700 hover:text-[#9F153E] font-semibold text-sm group/link"
                      @mouseenter="activeEquipment = null"
                    >
                      <div
                        class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9F153E]/20 to-[#c96860]/20 flex items-center justify-center group-hover/link:scale-110 transition-transform"
                      >
                        <i class="pi pi-circle text-[#9F153E] text-sm"></i>
                      </div>
                      <span>LPG Tanker</span>
                    </router-link>

                    <!-- Ammonia -->
                    <router-link
                      to="/equipment/ammonia-tanker"
                      class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#9F153E]/10 hover:to-[#c96860]/10 transition-all duration-300 text-gray-700 hover:text-[#9F153E] font-semibold text-sm group/link"
                      @mouseenter="activeEquipment = null"
                    >
                      <div
                        class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9F153E]/20 to-[#c96860]/20 flex items-center justify-center group-hover/link:scale-110 transition-transform"
                      >
                        <i class="pi pi-database text-[#9F153E] text-sm"></i>
                      </div>
                      <span>Ammonia Tanker</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <router-link
            to="/services"
            class="relative px-4 py-2 text-gray-700 font-bold text-sm uppercase tracking-wide hover:text-[#9F153E] transition-all duration-300 group"
            active-class="text-[#9F153E]"
          >
            <span class="relative z-10">Services</span>
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#9F153E] to-[#c96860] transition-all duration-300 ease-out group-hover:w-full rounded-full"
            ></span>
          </router-link>

          <!-- NEW: Projects (desktop) -->
          <router-link
            to="/projects"
            class="relative px-4 py-2 text-gray-700 font-bold text-sm uppercase tracking-wide hover:text-[#9F153E] transition-all duration-300 group"
            active-class="text-[#9F153E]"
          >
            <span class="relative z-10">Projects</span>
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#9F153E] to-[#c96860] transition-all duration-300 ease-out group-hover:w-full rounded-full"
            ></span>
          </router-link>

          <router-link
            to="/gallery"
            class="relative px-4 py-2 text-gray-700 font-bold text-sm uppercase tracking-wide hover:text-[#9F153E] transition-all duration-300 group"
            active-class="text-[#9F153E]"
          >
            <span class="relative z-10">Gallery</span>
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#9F153E] to-[#c96860] transition-all duration-300 ease-out group-hover:w-full rounded-full"
            ></span>
          </router-link>

          <!-- Contact CTA -->
          <router-link
            to="/contact"
            class="relative ml-3 px-6 py-3 bg-gradient-to-r from-[#9F153E] via-[#c96860] to-[#9F153E] bg-size-200 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2.5 group overflow-hidden"
          >
            <span
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shimmer-fast"
            ></span>
            <div class="relative z-10 flex items-center gap-2.5">
              <i class="pi pi-phone text-base animate-pulse"></i>
              <span>Contact</span>
            </div>
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="toggleMenu"
          class="p-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#9F153E] hover:to-[#c96860] rounded-xl transition-all duration-300 lg:hidden border-2 border-gray-200 hover:border-[#9F153E] shadow-md hover:shadow-xl"
          aria-label="Toggle menu"
        >
          <i
            :class="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'"
            class="text-xl transition-all duration-300"
            :style="{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }"
          ></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="mobile-menu">
        <div v-show="mobileMenuOpen" class="lg:hidden pb-4">
          <div class="flex flex-col space-y-2 pt-4 border-t-2 border-gray-200">
            <router-link
              to="/"
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3.5 text-gray-700 font-bold uppercase text-sm tracking-wide hover:text-white hover:bg-gradient-to-r hover:from-[#9F153E] hover:to-[#c96860] rounded-xl transition-all duration-300 border-2 border-transparent hover:border-[#9F153E] group"
              :class="{ 'text-white bg-gradient-to-r from-[#9F153E] to-[#c96860] border-[#9F153E]': $route.path === '/' }"
            >
              <i class="pi pi-home text-base group-hover:scale-110 transition-transform"></i>
              Home
            </router-link>

            <router-link
              to="/about"
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3.5 text-gray-700 font-bold uppercase text-sm tracking-wide hover:text-white hover:bg-gradient-to-r hover:from-[#9F153E] hover:to-[#c96860] rounded-xl transition-all duration-300 border-2 border-transparent hover:border-[#9F153E] group"
              :class="{ 'text-white bg-gradient-to-r from-[#9F153E] to-[#c96860] border-[#9F153E]': $route.path === '/about' }"
            >
              <i class="pi pi-info-circle text-base group-hover:scale-110 transition-transform"></i>
              About Us
            </router-link>

            <!-- Mobile equipment accordion -->
            <div class="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50">
              <button
                @click="mobileEquipmentOpen = !mobileEquipmentOpen"
                class="flex items-center justify-between w-full px-4 py-3.5 text-gray-700 font-bold uppercase text-sm tracking-wide hover:text-[#9F153E] hover:bg-white transition-all duration-300"
              >
                <div class="flex items-center gap-3">
                  <i class="pi pi-wrench text-base"></i>
                  Equipment
                </div>
                <i
                  class="pi pi-chevron-down text-xs transition-transform duration-300"
                  :class="{ 'rotate-180': mobileEquipmentOpen }"
                ></i>
              </button>

              <transition name="accordion">
                <div v-show="mobileEquipmentOpen" class="bg-white">
                  <!-- Trailers group -->
                  <div class="border-t-2 border-gray-100">
                    <button
                      @click="mobileTrailersOpen = !mobileTrailersOpen"
                      class="flex items-center justify-between w-full px-6 py-3 text-gray-700 font-semibold text-sm hover:text-[#9F153E] hover:bg-gray-50 transition-all duration-300"
                    >
                      <span>Trailers</span>
                      <i
                        class="pi pi-chevron-down text-xs transition-transform duration-300"
                        :class="{ 'rotate-180': mobileTrailersOpen }"
                      ></i>
                    </button>

                    <transition name="accordion">
                      <div v-show="mobileTrailersOpen" class="bg-gray-50">
                        <router-link
                          to="/equipment/trailers"
                          @click="closeMobileMenu"
                          class="block px-8 py-2.5 text-gray-700 text-sm font-semibold hover:text-[#9F153E] hover:bg-white transition-all duration-300 border-l-4 border-transparent hover:border-[#9F153E]"
                        >
                          Trailers Overview
                        </router-link>
                        <router-link
                          to="/equipment/trailers/flatbed"
                          @click="closeMobileMenu"
                          class="block px-8 py-2.5 text-gray-600 text-sm hover:text-[#9F153E] hover:bg-white transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#9F153E]"
                        >
                          Flatbed Trailer
                        </router-link>
                        <router-link
                          to="/equipment/trailers/semi-lowbed"
                          @click="closeMobileMenu"
                          class="block px-8 py-2.5 text-gray-600 text-sm hover:text-[#9F153E] hover:bg-white transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#9F153E]"
                        >
                          Semi Lowbed
                        </router-link>
                        <router-link
                          to="/equipment/trailers/lowbed"
                          @click="closeMobileMenu"
                          class="block px-8 py-2.5 text-gray-600 text-sm hover:text-[#9F153E] hover:bg-white transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#9F153E]"
                        >
                          Lowbed Trailer
                        </router-link>
                        <router-link
                          to="/equipment/trailers/lowbed-16-wheeler"
                          @click="closeMobileMenu"
                          class="block px-8 py-2.5 text-gray-600 text-sm hover:text-[#9F153E] hover:bg-white transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#9F153E]"
                        >
                          Lowbed 16 Wheeler
                        </router-link>
                      </div>
                    </transition>
                  </div>

                  <!-- Hydraulic axles -->
                  <div class="border-t-2 border-gray-100">
                    <router-link
                      to="/equipment/hydraulic-axles"
                      @click="closeMobileMenu"
                      class="flex items-center px-6 py-3 text-gray-700 font-semibold text-sm hover:text-[#9F153E] hover:bg-gray-50 transition-all duration-300"
                    >
                      Hydraulic Axles
                    </router-link>
                  </div>

                  <!-- Pullers -->
                  <div class="border-t-2 border-gray-100">
                    <router-link
                      to="/equipment/pullers"
                      @click="closeMobileMenu"
                      class="flex items-center px-6 py-3 text-gray-700 font-semibold text-sm hover:text-[#9F153E] hover:bg-gray-50 transition-all duration-300"
                    >
                      Pullers
                    </router-link>
                  </div>

                  <!-- Cranes group -->
                  <div class="border-t-2 border-gray-100">
                    <button
                      @click="mobileCraneOpen = !mobileCraneOpen"
                      class="flex items-center justify-between w-full px-6 py-3 text-gray-700 font-semibold text-sm hover:text-[#9F153E] hover:bg-gray-50 transition-all duration-300"
                    >
                      <span>Crane</span>
                      <i
                        class="pi pi-chevron-down text-xs transition-transform duration-300"
                        :class="{ 'rotate-180': mobileCraneOpen }"
                      ></i>
                    </button>

                    <transition name="accordion">
                      <div v-show="mobileCraneOpen" class="bg-gray-50">
                        <router-link
                          to="/equipment/crane"
                          @click="closeMobileMenu"
                          class="block px-8 py-2.5 text-gray-700 text-sm font-semibold hover:text-[#9F153E] hover:bg-white transition-all duration-300 border-l-4 border-transparent hover:border-[#9F153E]"
                        >
                          Crane Overview
                        </router-link>
                        <router-link
                          to="/equipment/crane/crawler"
                          @click="closeMobileMenu"
                          class="block px-8 py-2.5 text-gray-600 text-sm hover:text-[#9F153E] hover:bg-white transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#9F153E]"
                        >
                          Crawler Crane
                        </router-link>
                        <router-link
                          to="/equipment/crane/tire-mount"
                          @click="closeMobileMenu"
                          class="block px-8 py-2.5 text-gray-600 text-sm hover:text-[#9F153E] hover:bg-white transition-all duration-300 font-medium border-l-4 border-transparent hover:border-[#9F153E]"
                        >
                          Tire Mount Crane
                        </router-link>
                      </div>
                    </transition>
                  </div>

                  <!-- Remaining equipment -->
                  <div class="border-t-2 border-gray-100">
                    <router-link
                      to="/equipment/pick-and-carry"
                      @click="closeMobileMenu"
                      class="flex items-center px-6 py-3 text-gray-700 font-semibold text-sm hover:text-[#9F153E] hover:bg-gray-50 transition-all duration-300"
                    >
                      Pick and Carry
                    </router-link>
                  </div>

                  <div class="border-t-2 border-gray-100">
                    <router-link
                      to="/equipment/telehandler"
                      @click="closeMobileMenu"
                      class="flex items-center px-6 py-3 text-gray-700 font-semibold text-sm hover:text-[#9F153E] hover:bg-gray-50 transition-all duration-300"
                    >
                      Telehandler
                    </router-link>
                  </div>

                  <div class="border-t-2 border-gray-100">
                    <router-link
                      to="/equipment/boom-placer"
                      @click="closeMobileMenu"
                      class="flex items-center px-6 py-3 text-gray-700 font-semibold text-sm hover:text-[#9F153E] hover:bg-gray-50 transition-all duration-300"
                    >
                      Boom Placer
                    </router-link>
                  </div>

                  <div class="border-t-2 border-gray-100">
                    <router-link
                      to="/equipment/lpg-tanker"
                      @click="closeMobileMenu"
                      class="flex items-center px-6 py-3 text-gray-700 font-semibold text-sm hover:text-[#9F153E] hover:bg-gray-50 transition-all duration-300"
                    >
                      LPG Tanker
                    </router-link>
                  </div>

                  <div class="border-t-2 border-gray-100">
                    <router-link
                      to="/equipment/ammonia-tanker"
                      @click="closeMobileMenu"
                      class="flex items-center px-6 py-3 text-gray-700 font-semibold text-sm hover:text-[#9F153E] hover:bg-gray-50 transition-all duration-300"
                    >
                      Ammonia Tanker
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>

            <router-link
              to="/services"
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3.5 text-gray-700 font-bold uppercase text-sm tracking-wide hover:text-white hover:bg-gradient-to-r hover:from-[#9F153E] hover:to-[#c96860] rounded-xl transition-all duration-300 border-2 border-transparent hover:border-[#9F153E] group"
              :class="{ 'text-white bg-gradient-to-r from-[#9F153E] to-[#c96860] border-[#9F153E]': $route.path === '/services' }"
            >
              <i class="pi pi-briefcase text-base group-hover:scale-110 transition-transform"></i>
              Services
            </router-link>

            <!-- NEW: Projects (mobile) -->
            <router-link
              to="/projects"
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3.5 text-gray-700 font-bold uppercase text-sm tracking-wide hover:text-white hover:bg-gradient-to-r hover:from-[#9F153E] hover:to-[#c96860] rounded-xl transition-all duration-300 border-2 border-transparent hover:border-[#9F153E] group"
              :class="{ 'text-white bg-gradient-to-r from-[#9F153E] to-[#c96860] border-[#9F153E]': $route.path === '/projects' }"
            >
              <i class="pi pi-folder text-base group-hover:scale-110 transition-transform"></i>
              Projects
            </router-link>

            <router-link
              to="/gallery"
              @click="closeMobileMenu"
              class="flex items-center gap-3 px-4 py-3.5 text-gray-700 font-bold uppercase text-sm tracking-wide hover:text-white hover:bg-gradient-to-r hover:from-[#9F153E] hover:to-[#c96860] rounded-xl transition-all duration-300 border-2 border-transparent hover:border-[#9F153E] group"
              :class="{ 'text-white bg-gradient-to-r from-[#9F153E] to-[#c96860] border-[#9F153E]': $route.path === '/gallery' }"
            >
              <i class="pi pi-images text-base group-hover:scale-110 transition-transform"></i>
              Gallery
            </router-link>

            <!-- Mobile contact -->
            <router-link
              to="/contact"
              @click="closeMobileMenu"
              class="flex items-center justify-center gap-3 px-4 py-4 bg-gradient-to-r from-[#9F153E] via-[#c96860] to-[#9F153E] text-white font-black uppercase text-sm tracking-wider rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mt-3 relative overflow-hidden group"
            >
              <span
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shimmer-fast"
              ></span>
              <i class="pi pi-phone text-base animate-pulse relative z-10"></i>
              <span class="relative z-10">Contact Us</span>
            </router-link>
          </div>
        </div>
      </transition>
    </div>

    <!-- Scroll progress bar -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
      <div
        class="h-full bg-gradient-to-r from-[#9F153E] via-[#c96860] to-[#9F153E] transition-all duration-150 ease-out shadow-lg relative overflow-hidden"
        :style="{ width: scrollProgress + '%' }"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer"
        ></div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const scrollProgress = ref(0)
const scrolled = ref(false)
const showEquipmentMenu = ref(false)
const activeEquipment = ref(null)

const mobileEquipmentOpen = ref(false)
const mobileTrailersOpen = ref(false)
const mobileCraneOpen = ref(false)

let equipmentTimeout = null

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    mobileEquipmentOpen.value = false
    mobileTrailersOpen.value = false
    mobileCraneOpen.value = false
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileEquipmentOpen.value = false
  mobileTrailersOpen.value = false
  mobileCraneOpen.value = false
}

const handleEquipmentEnter = () => {
  if (equipmentTimeout) {
    clearTimeout(equipmentTimeout)
    equipmentTimeout = null
  }
  showEquipmentMenu.value = true
}

const handleEquipmentLeave = () => {
  equipmentTimeout = setTimeout(() => {
    showEquipmentMenu.value = false
    activeEquipment.value = null
  }, 150)
}

const clearActiveEquipment = () => {
  setTimeout(() => {
    if (activeEquipment.value !== 'trailers' && activeEquipment.value !== 'crane') {
      activeEquipment.value = null
    }
  }, 50)
}

const updateScrollProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY
  const trackLength = documentHeight - windowHeight
  const progress = (scrollTop / trackLength) * 100
  scrollProgress.value = Math.min(progress, 100)
  scrolled.value = scrollTop > 50
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
  if (equipmentTimeout) clearTimeout(equipmentTimeout)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.submenu-enter-active,
.submenu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.submenu-enter-from,
.submenu-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes shimmer-fast {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-shimmer {
  animation: shimmer 3s infinite;
}
.animate-shimmer-fast {
  animation: shimmer-fast 0.8s;
}
.bg-size-200 {
  background-size: 200% auto;
}
</style>

<style>
.horizontal-scroll {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: auto;
}
</style>
