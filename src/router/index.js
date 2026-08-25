import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'
import Ia from '../Ia.vue'
import Layout from '../pub/layouts/Layout.vue'

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
  ]
})

export default router