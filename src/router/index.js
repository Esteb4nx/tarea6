import FavView from '@/views/FavView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favoritos',
    name: 'favs',
    component: FavView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
