<template>
  <div class="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100">
    <div class="max-w-6xl mx-auto px-4 py-10 lg:py-14">
      <!-- Header -->
      <header class="mb-10">
        <p class="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
          Equipment · Trailers
        </p>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black">
          Trailer Fleet Overview
        </h1>
        <p class="mt-3 text-sm sm:text-base text-gray-300 max-w-3xl">
          Configurations designed for ODC/OWC cargo, girders and heavy industrial loads across varied routes.
        </p>
      </header>

      <!-- Cards -->
      <section class="grid gap-6 md:gap-8 md:grid-cols-2">
        <!-- Flatbed -->
        <article
          class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
        >
          <div class="md:w-1/2 bg-black/40">
            <img
              :src="images.flatbed"
              alt="Flatbed Trailer"
              class="w-full h-52 md:h-full object-contain"
            />
          </div>
          <div class="md:w-1/2 p-5 sm:p-6 flex flex-col gap-3">
            <h2 class="text-lg sm:text-xl font-semibold">
              Flatbed Trailer
            </h2>
            <p class="text-sm text-gray-300">
              Versatile platform trailers for containers, steel and general project cargo with optimised deck length and load distribution.
            </p>
            <ul class="text-xs text-gray-300 space-y-1">
              <li>Ideal for steel, pipes and containerised cargo.</li>
              <li>Multiple axle combinations available.</li>
            </ul>
            <div class="mt-2">
              <router-link
                to="/equipment/trailers/flatbed"
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

        <!-- Semi Lowbed -->
        <article
          class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
        >
          <div class="md:w-1/2 bg-black/40">
            <img
              :src="images.semiLowbed"
              alt="Semi Lowbed Trailer"
              class="w-full h-52 md:h-full object-contain"
            />
          </div>
          <div class="md:w-1/2 p-5 sm:p-6 flex flex-col gap-3">
            <h2 class="text-lg sm:text-xl font-semibold">
              Semi Lowbed Trailer
            </h2>
            <p class="text-sm text-gray-300">
              Lower deck height for improved stability and clearance, suited for machinery and mid-height project cargo.
            </p>
            <ul class="text-xs text-gray-300 space-y-1">
              <li>Better centre of gravity for heavy loads.</li>
              <li>Suitable for industrial and infrastructure projects.</li>
            </ul>
            <div class="mt-2">
              <router-link
                to="/equipment/trailers/semi-lowbed"
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

        <!-- Lowbed -->
        <article
          class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
        >
          <div class="md:w-1/2 bg-black/40">
            <img
              :src="images.lowbed"
              alt="Lowbed Trailer"
              class="w-full h-52 md:h-full object-contain"
            />
          </div>
          <div class="md:w-1/2 p-5 sm:p-6 flex flex-col gap-3">
            <h2 class="text-lg sm:text-xl font-semibold">
              Lowbed Trailer
            </h2>
            <p class="text-sm text-gray-300">
              Deep-drop deck trailers for tall and heavy ODC cargo where overall height clearances are critical.
            </p>
            <ul class="text-xs text-gray-300 space-y-1">
              <li>Suited for transformers, heavy machinery, girders.</li>
              <li>Supports high-capacity, multi-axle configurations.</li>
            </ul>
            <div class="mt-2">
              <router-link
                to="/equipment/trailers/lowbed"
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

        <!-- Lowbed 16 Wheeler -->
        <article
          class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
        >
          <div class="md:w-1/2 bg-black/40">
            <img
              :src="images.lowbed16"
              alt="Lowbed 16 Wheeler"
              class="w-full h-52 md:h-full object-contain"
            />
          </div>
          <div class="md:w-1/2 p-5 sm:p-6 flex flex-col gap-3">
            <h2 class="text-lg sm:text-xl font-semibold">
              Lowbed 16 Wheeler
            </h2>
            <p class="text-sm text-gray-300">
              High-axle-count configuration for heavier payloads, distributing load efficiently across long hauls.
            </p>
            <ul class="text-xs text-gray-300 space-y-1">
              <li>Ideal for very heavy, long-distance project cargo.</li>
              <li>Engineered for demanding route and site conditions.</li>
            </ul>
            <div class="mt-2">
              <router-link
                to="/equipment/trailers/lowbed-16-wheeler"
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
// Set your image paths here (public/assets/... or src based URLs)
const images = {
  flatbed: '/assets/equipment/trailers/flatbed.png',
  semiLowbed: '/assets/equipment/trailers/semi-lowbed.png',
  lowbed: '/assets/equipments/lowbed.jpeg',
  lowbed16: '/assets/equipment/trailers/lowbed-16w.png'
}
</script>
