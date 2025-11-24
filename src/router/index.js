import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../components/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  // Smooth scroll behavior
  scrollBehavior(to, from, savedPosition) {
    // When using browser back/forward buttons
    if (savedPosition) {
      return { ...savedPosition, behavior: 'smooth' }
    }

    // If navigating to a hash (#about, #services, etc.)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // Default: scroll to top smoothly on every route change
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router