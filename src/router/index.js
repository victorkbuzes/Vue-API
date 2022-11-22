import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/add',
      name: 'add',
      
      component: () => import('../views/AddProject.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      props: true,
      
      component: () => import('../views/EditProject.vue')
    }
  ]
})

export default router
