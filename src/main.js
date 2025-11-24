import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

// PrimeVue core
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'
import 'primeicons/primeicons.css'

// Tailwind
import './style.css'

const app = createApp(App)

app.use(router)   // ← THIS IS REQUIRED

app.use(PrimeVue, {
  theme: {
    preset: Lara
  }
})

app.mount('#app')