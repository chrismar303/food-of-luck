import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import FoodDrawPage from '@/views/FoodDrawPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/food-draw',
    name: 'food-draw',
    component: FoodDrawPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
