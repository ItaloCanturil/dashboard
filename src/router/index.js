import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const Home = defineAsyncComponent({
  loader: () => import('../views/Home/index.vue')
})

const Credencials = defineAsyncComponent({
  loader: () => import('../views/Credencials/index.vue')
})

const Feedbacks = defineAsyncComponent({
  loader: () => import('../views/Feedbacks/index.vue')
})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: Credencials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { Home }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
