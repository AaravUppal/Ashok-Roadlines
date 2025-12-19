import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../components/About.vue'
import NotFound from '../components/404.vue'
import ContactLanding from '../components/contactlanding.vue'
import Services from '../components/service.vue'
import Gallery from '../components/gallery.vue'

// Equipment / product pages
import TrailersOverview from '../components/equipments/TrailersOverview.vue'
import Lowbed from '../components/equipments/lowbed.vue'
import Flatbed from '../components/equipments/flatbed.vue'
import SemiLowbed from '../components/equipments/semi-lowbed.vue'
 import Lowbed16Wheeler from '../components/equipments/lowbed-16-wheeler.vue'

 import HydraulicAxles from '../components/equipments/hydraulic-axles.vue'
 import Pullers from '../components/equipments/pullers.vue'

import CranesOverview from '../components/equipments/Cranesoverview.vue'
 import CrawlerCrane from '../components/equipments/crane-crawler.vue'
import TireMountCrane from '../components/equipments/crane-tire-mount.vue'

import PickAndCarry from '../components/equipments/pick-and-carry.vue'
 import Telehandler from '../components/equipments/telehandler.vue'
import BoomPlacer from '../components/equipments/boom-placer.vue'
import LpgTanker from '../components/equipments/lpg-tanker.vue'
 import AmmoniaTanker from '../components/equipments/ammonia-tanker.vue'

import kolkata from '../components/Contact/kolkata.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/gallery', component: Gallery },

  { path: '/contact', component: ContactLanding },
  { path: '/contact/kolkata', component: kolkata },

  // Trailers
  { path: '/equipment/trailers', component: TrailersOverview },
   { path: '/equipment/trailers', component: Flatbed }, // or a general trailers overview
   { path: '/equipment/trailers/flatbed', component: Flatbed },
   { path: '/equipment/trailers/semi-lowbed', component: SemiLowbed },
  { path: '/equipment/trailers/lowbed', component: Lowbed },
   { path: '/equipment/trailers/lowbed-16-wheeler', component: Lowbed16Wheeler },

  // Hydraulic axles, pullers
   { path: '/equipment/hydraulic-axles', component: HydraulicAxles },
   { path: '/equipment/pullers', component: Pullers },

  // Cranes
  { path: '/equipment/crane', component: CranesOverview },
   { path: '/equipment/crane/crawler', component: CrawlerCrane },
  { path: '/equipment/crane/tire-mount', component: TireMountCrane },

  // Other equipment
   { path: '/equipment/pick-and-carry', component: PickAndCarry },
   { path: '/equipment/telehandler', component: Telehandler },
  { path: '/equipment/boom-placer', component: BoomPlacer },
   { path: '/equipment/lpg-tanker', component: LpgTanker },
   { path: '/equipment/ammonia-tanker', component: AmmoniaTanker },

  // 404 last
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { ...savedPosition, behavior: 'smooth' }
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
