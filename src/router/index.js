import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Listar from'../components/Listar.vue'
import Editar from'../components/Listar.vue'
import Crear from'../components/Listar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listar',
    name: 'Listar',
    component: Listar
  },
  {
    path: '/editar',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
