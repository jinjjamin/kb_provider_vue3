import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'
import Ia from '../Ia.vue'
import Layout from '../pub/layouts/Layout.vue'
import Program from '../pub/views/Program.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: Layout
    },
    {
      path: '/ia',
      component: Ia
    },

    {
      path: '/program',
      component: Program
    }
  ]
})

export default router