<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-black via-gray-900 to-gray-900 pt-24 pb-16 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-[#9F153E] rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-[#9F153E] rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div class="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-full shadow-2xl">
            <div class="w-2.5 h-2.5 bg-[#9F153E] rounded-full animate-pulse shadow-lg shadow-[#9F153E]"></div>
            <span class="text-sm font-extrabold tracking-widest text-white">PROJECT PORTFOLIO</span>
          </div>
          
          <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#9F153E]">Projects</span>
          </h1>
          
          <div class="flex items-center justify-center gap-3 mb-8">
            <div class="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#9F153E]"></div>
            <div class="w-3 h-3 bg-[#9F153E] rounded-full shadow-lg shadow-[#9F153E]/50"></div>
            <div class="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#9F153E]"></div>
          </div>
          
          <p class="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Landmark infrastructure movements across bridges, roads, rail and industrial projects
          </p>
        </div>
      </div>
    </section>

    <!-- Navigation Tabs -->
    <nav class="top-0 z-50 w-full bg-gray-900 backdrop-blur-xl border-b border-gray-800 shadow-2xl">
      <div class="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div class="relative flex w-full bg-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
          <button
            @click="activeTab = 'past'"
            :class="[
              'w-1/2 h-20 flex items-center justify-center font-black text-xl uppercase tracking-widest transition-all duration-500 relative',
              activeTab === 'past'
                ? 'bg-gradient-to-r from-[#9F153E] to-[#7a0f30] text-white shadow-2xl shadow-[#9F153E]/40'
                : 'text-gray-300 hover:text-white hover:bg-gray-800/70 border-r border-gray-600'
            ]"
          >
            Past Projects
          </button>

          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none z-20"></div>

          <button
            @click="activeTab = 'current'"
            :class="[
              'w-1/2 h-20 flex items-center justify-center font-black text-xl uppercase tracking-widest transition-all duration-500 relative',
              activeTab === 'current'
                ? 'bg-gradient-to-l from-[#9F153E] to-[#7a0f30] text-white shadow-2xl shadow-[#9F153E]/40'
                : 'text-gray-300 hover:text-white hover:bg-gray-800/70'
            ]"
          >
            Current Projects
          </button>
        </div>
      </div>
    </nav>

    <!-- Filter Section -->
    <section class="py-8 bg-white/50 backdrop-blur-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <!-- Search Bar -->
          <div class="relative w-full md:w-96">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search projects or locations..."
              class="w-full px-5 py-3 pl-12 rounded-xl border-2 border-gray-200 focus:border-[#9F153E] focus:outline-none transition-all duration-300 bg-white shadow-sm"
            />
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          <!-- Type Filter -->
          <div class="flex items-center gap-2 flex-wrap">
            <button
              v-for="type in projectTypes"
              :key="type"
              @click="selectedType = type"
              :class="[
                'px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300',
                selectedType === type
                  ? 'bg-[#9F153E] text-white shadow-lg shadow-[#9F153E]/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              ]"
            >
              {{ type === 'all' ? 'All Types' : type }}
            </button>
          </div>
        </div>

        <!-- Results Count -->
        <div class="mt-4 flex items-center gap-2 text-[#9F153E]">
          <div class="w-2 h-2 bg-[#9F153E] rounded-full animate-pulse"></div>
          <span class="text-sm font-bold uppercase tracking-wider">
            {{ filteredProjects.length }} {{ activeTab === 'past' ? 'Past Projects' : 'Current Projects' }}
          </span>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="(project, index) in filteredProjects"
            :key="project.projectName"
            :data-index="index"
            class="project-card group relative rounded-2xl border-2 border-gray-200/50 bg-white p-6 shadow-lg hover:shadow-2xl hover:border-[#9F153E]/40 transition-all duration-700 hover:-translate-y-3 overflow-hidden"
          >
            <!-- Animated Background -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#9F153E]/0 via-[#9F153E]/5 to-[#9F153E]/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            <div class="relative flex flex-col h-full">
              <!-- Header -->
              <div class="flex items-start gap-4 mb-4">
                <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9F153E] to-[#7a0f30] flex items-center justify-center text-white shadow-xl shadow-[#9F153E]/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <span class="text-2xl font-black">{{ index + 1 }}</span>
                </div>
                
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-black text-gray-900 group-hover:text-[#9F153E] transition-all duration-300 mb-2 leading-tight line-clamp-2">
                    {{ project.projectName }}
                  </h3>
                  
                  <div class="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase text-[#9F153E]/90 bg-[#9F153E]/10 px-3 py-1.5 rounded-lg group-hover:bg-[#9F153E]/20 transition-all duration-300">
                    {{ project.information.projectType }}
                  </div>
                </div>
              </div>

              <!-- Location -->
              <div class="mb-4 p-3 bg-gray-50 rounded-xl group-hover:bg-[#9F153E]/5 transition-all duration-300">
                <div class="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Location
                </div>
                <div class="text-sm font-semibold text-gray-800">
                  {{ project.information.location }}
                </div>
              </div>

              <!-- Scope -->
              <div class="mb-4 flex-1">
                <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Scope</div>
                <div class="text-sm text-gray-700 leading-relaxed line-clamp-3">
                  {{ project.information.scope }}
                </div>
              </div>

              <!-- Footer -->
              <div class="pt-4 border-t-2 border-gray-100 group-hover:border-[#9F153E]/20 transition-all duration-300">
                <div class="flex items-center justify-between">
                  <div :class="[
                    'flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-lg',
                    activeTab === 'current'
                      ? 'text-[#9F153E] bg-[#9F153E]/10'
                      : 'text-gray-500 bg-gray-100'
                  ]">
                    <span v-if="activeTab === 'current'" class="w-2 h-2 bg-[#9F153E] rounded-full animate-pulse"></span>
                    <span>{{ activeTab === 'current' ? 'In Progress' : 'Completed' }}</span>
                  </div>

                  <div v-if="project.information.capacityHandled || project.information.equipmentUsed || project.information.specialization || project.information.remarks"
                       class="text-xs text-gray-500 font-medium group-hover:text-[#9F153E] transition-colors duration-300 truncate max-w-[140px]">
                    {{ project.information.capacityHandled || project.information.equipmentUsed || project.information.specialization || project.information.remarks }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Hover Accent -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9F153E]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0"></div>
          </article>
        </div>

        <!-- Info Callout -->
        <div v-if="activeTab === 'current'" class="mt-16">
          <div class="rounded-2xl border-2 border-dashed border-[#9F153E]/40 bg-gradient-to-br from-[#9F153E]/5 via-[#9F153E]/10 to-[#9F153E]/5 p-10 hover:bg-[#9F153E]/15 hover:border-[#9F153E]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl text-center">
            <div class="flex flex-col md:flex-row items-center justify-center gap-6">
              <div class="w-16 h-16 rounded-full bg-[#9F153E]/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-10 h-10 text-[#9F153E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-black text-[#9F153E] mb-2">Need Detailed Reports?</h3>
                <p class="text-base text-[#9F153E]/90 font-medium leading-relaxed max-w-md mx-auto">
                  Detailed project case studies, timelines, and execution reports available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const activeTab = ref('past')
const searchQuery = ref('')
const selectedType = ref('all')

const pastProjects = ref([
  {
    projectName: "VIP Road Flyover",
    information: {
      location: "Kolkata, West Bengal",
      projectType: "Bridge / Flyover Girder Transportation",
      scope: "Transportation of bridge girders and segments",
      capacityHandled: "Up to 125 ft length and 150 MT weight"
    }
  },
  {
    projectName: "Budge Budge Flyover",
    information: {
      location: "Kolkata, West Bengal",
      projectType: "Flyover Girder Transportation",
      scope: "Movement of heavy bridge girders and segments",
      equipmentUsed: "Hydraulic axles, pullers, low bed trailers"
    }
  },
  {
    projectName: "Garden Reach Flyover",
    information: {
      location: "Kolkata, West Bengal",
      projectType: "Flyover Infrastructure Transport",
      scope: "Transportation of girders for flyover construction",
      specialization: "ODC and heavy girder handling"
    }
  },
  {
    projectName: "Baharagora–Singara Road Project",
    information: {
      location: "Odisha and West Bengal",
      projectType: "Road Infrastructure Project",
      scope: "Transportation of bridge girders and segments",
      remarks: "Executed across state boundaries"
    }
  },
  {
    projectName: "Ghoshpukur–Salsalabari Road Project",
    information: {
      location: "Siliguri, West Bengal",
      projectType: "Road Infrastructure",
      scope: "Heavy girder and segment transportation",
      challenges: "Hilly terrain and restricted routes"
    }
  },
  {
    projectName: "Ishwar Gupta Setu Project",
    information: {
      location: "Kalyani, West Bengal",
      projectType: "Bridge Project",
      scope: "Bridge girder transportation",
      capacityHandled: "Heavy and oversized girders"
    }
  },
  {
    projectName: "Mecon Roundabout Flyover Project",
    information: {
      location: "Ranchi, Jharkhand",
      projectType: "Urban Flyover",
      scope: "Transportation of flyover girders",
      specialization: "Precision handling in urban conditions"
    }
  },
  {
    projectName: "Tallagh ROB Project",
    information: {
      location: "Kolkata, West Bengal",
      projectType: "Rail Over Bridge (ROB)",
      scope: "Transportation of ROB girders and segments",
      equipmentUsed: "16-wheeler low bed trailers and hydraulic axles"
    }
  },
  {
    projectName: "Patna–Gaya Road Project",
    information: {
      location: "Gaya, Bihar",
      projectType: "Road Infrastructure",
      scope: "Bridge and road project cargo transportation",
      coverage: "Intercity heavy cargo movement"
    }
  },
  {
    projectName: "High Speed Railway Project",
    information: {
      location: "Gujarat",
      projectType: "Railway Infrastructure",
      scope: "Transportation of heavy and oversized railway components",
      specialization: "High-precision project cargo handling"
    }
  },
  {
    projectName: "Rourkela Steel Plant Over Dimensional Cargo Transport (1990–1991)",
    information: {
      location: "Kolkata Port to Rourkela Steel Plant, Odisha",
      projectType: "ODC Transportation",
      scope: "27 ft x 16.4 ft x 18.11 ft cargo weighing 41.46 MT",
      challenges: "Electrical adjustments, bridge constraints, 250-ton crane operations",
      specialization: "Featured in CMO News (SAIL) in 1991"
    }
  }
])

const currentProjects = ref([
  {
    projectName: "Eastern Freight Corridor",
    information: {
      location: "Multiple states, India",
      projectType: "Dedicated Freight Corridor",
      scope: "Viaduct segments and bridge girder transportation",
      equipmentUsed: "Multi-axle modular trailers (20+ axles)"
    }
  },
  {
    projectName: "Coastal Highway Bridge Works",
    information: {
      location: "Gujarat Coastal Region",
      projectType: "Highway Bridge Construction",
      scope: "Precast bridge segments and heavy equipment movement",
      capacityHandled: "200+ MT segments, 40m+ lengths"
    }
  },
  {
    projectName: "Metro Rail Phase 3",
    information: {
      location: "Delhi NCR",
      projectType: "Metro Viaduct Project",
      scope: "Night movements of metro segments with police escort",
      specialization: "Urban night logistics with traffic management"
    }
  },
  {
    projectName: "Nuclear Power Plant Equipment",
    information: {
      location: "Kaiga, Karnataka",
      projectType: "Heavy Equipment Transport",
      scope: "Reactor components and turbine transportation",
      capacityHandled: "350 MT reactor vessel, 18m x 5m dimensions"
    }
  },
  {
    projectName: "Industrial Windmill Transport",
    information: {
      location: "Tamil Nadu",
      projectType: "Renewable Energy Project",
      scope: "Wind turbine blades and tower sections",
      equipmentUsed: "Extendable low-bed trailers with SPMT"
    }
  },
  {
    projectName: "Defense Corridor Project",
    information: {
      location: "Uttar Pradesh",
      projectType: "Strategic Equipment Movement",
      scope: "Classified defense equipment transport",
      remarks: "High-security escorted movements"
    }
  }
])

const activeProjects = computed(() => {
  return activeTab.value === 'past' ? pastProjects.value : currentProjects.value
})

const projectTypes = computed(() => {
  const types = new Set(activeProjects.value.map(p => p.information.projectType))
  return ['all', ...Array.from(types)]
})

const filteredProjects = computed(() => {
  return activeProjects.value.filter(project => {
    const matchesSearch = project.projectName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         project.information.location.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesType = selectedType.value === 'all' || project.information.projectType === selectedType.value
    return matchesSearch && matchesType
  })
})

const handleScroll = () => {
  const elements = document.querySelectorAll('.project-card')
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.8 && !el.classList.contains('animate-in')) {
      el.classList.add('animate-in')
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  setTimeout(handleScroll, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.project-card {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.project-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>