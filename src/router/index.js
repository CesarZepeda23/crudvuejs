import { createRouter, createWebHistory } from 'vue-router'
import Listar from'../components/ListaItems.vue'
import Editar from'../components/EditarForm.vue'
import Crear from'../components/CrearForm.vue'

const routes = [
  {
    path: '/',
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
