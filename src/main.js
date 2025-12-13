import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

// PrimeVue core
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'
import 'primeicons/primeicons.css'

// Tailwind
import './style.css'

// Lenis Smooth Scroll (FIXED)
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const app = createApp(App)

app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: Lara
  }
})

app.mount('#app')

// FIXED Lenis - native feel, smooth only for programmatic scrolls
const lenis = new Lenis({
  duration: 0.8,          // Reduced from 1.2 -> faster native feel
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: false,     // DISABLED - keeps native wheel speed
  smoothTouch: false,     // Native touch scroll (fast)
  wheelMultiplier: 1,
  touchMultiplier: 1,     // Reduced from 2 -> native touch speed
  infinite: false,
})

// RequestAnimationFrame loop
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
