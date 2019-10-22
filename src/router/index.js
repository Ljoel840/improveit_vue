import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/deportistas',
    name: 'deportistas',
    component: () => import('@/views/Deportistas.vue')
  },
  // {
  //   path: '/marcas',
  //   name: 'marcas',
  //   component: () => import('../views/Marcas.vue')
  // },
  // {
  //   path: '/eventos',
  //   name: 'eventos',
  //   component: () => import('../views/Eventos.vue')
  // },
  // {
  //   path: '/asesoramiento',
  //   name: 'asesoramiento',
  //   component: () => import('../views/Asesoramiento.vue')
  // },
  // {
  //   path: '/startups',
  //   name: 'startups',
  //   component: () => import('../views/Startups.vue')
  // },
  // {
  //   path: '/contacto',
  //   name: 'contacto',
  //   component: () => import('../views/Contacto.vue')
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
