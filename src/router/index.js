import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../components/About.vue'
import NotFound from '../components/404.vue'
import contactlanding from '../components/contactlanding.vue'
import services from '../components/service.vue'
import gallery from '../components/gallery.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/about', component: About },
  { path: '/services', component: services },
  { path: '/gallery', component: gallery },
  { path: '/contact', component: contactlanding },
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