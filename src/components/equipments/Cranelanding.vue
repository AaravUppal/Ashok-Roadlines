<template>
  <div class=" bg-gradient-to-b from-black to-gray-900  text-gray-100 py-20">
    <div class="max-w-6xl mx-auto px- py-10 lg:py-14">
      <!-- Header -->
      <header class="pb-10">
        <p class="text-xs uppercase tracking-[0.2em] text-gray-400 pb-2">
          Equipment · Cranes
        </p>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black">
          Crane Solutions Overview
        </h1>
        <p class="mt-3 text-sm sm:text-base text-gray-300 max-w-3xl">
          Lifting solutions for erection, installation and project cargo handling across sites and industrial facilities.
        </p>
      </header>

      <!-- Cards -->
      <section class="grid gap-6 md:gap-8 md:grid-cols-2">
        <!-- Crawler crane -->
        <article
          class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
        >
          <div class="md:w-1/2 bg-black/40">
            <img
              :src="images.crawler"
              alt="Crawler Crane"
              class="w-full h-52 md:h-full object-contain"
            />
          </div>
          <div class="md:w-1/2 p-5 sm:p-6 flex flex-col gap-3">
            <h2 class="text-lg sm:text-xl font-semibold">
              Crawler Crane
            </h2>
            <p class="text-sm text-gray-300">
              Track-mounted cranes for heavy lifts on challenging terrain, ideal for infrastructure and industrial projects.
            </p>
            <ul class="text-xs text-gray-300 space-y-1">
              <li>Excellent stability on uneven ground.</li>
              <li>Suited for long-duration project deployments.</li>
            </ul>
            <div class="mt-2">
              <router-link
                to="/equipment/crane/crawler"
                class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]
                       px-4 py-2 rounded-full border border-[#9F153E] bg-[#9F153E]
                       hover:bg-[#b81b4a] transition"
              >
                Learn more
                <span>→</span>
              </router-link>
            </div>
          </div>
        </article>

        <!-- Tire mount crane -->
        <article
          class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
        >
          <div class="md:w-1/2 bg-black/40">
            <img
              :src="images.tireMount"
              alt="Tire Mount Crane"
              class="w-full h-52 md:h-full object-contain"
            />
          </div>
          <div class="md:w-1/2 p-5 sm:p-6 flex flex-col gap-3">
            <h2 class="text-lg sm:text-xl font-semibold">
              Tire Mount Crane
            </h2>
            <p class="text-sm text-gray-300">
              Road-mobile cranes, offering faster deployment between sites for erection and material handling.
            </p>
            <ul class="text-xs text-gray-300 space-y-1">
              <li>Flexible movement between multiple job locations.</li>
              <li>Efficient for industrial and urban project work.</li>
            </ul>
            <div class="mt-2">
              <router-link
                to="/equipment/crane/tire-mount"
                class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]
                       px-4 py-2 rounded-full border border-[#9F153E] bg-[#9F153E]
                       hover:bg-[#b81b4a] transition"
              >
                Learn more
                <span>→</span>
              </router-link>
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup>
const images = {
  crawler: '/assets/equipments/crawlercrane.jpeg',
  tireMount: '/assets/equipments/tyremountcrane.jpeg',
  overview: '/assets/equipment/cranes/overview.png'
}
</script>
