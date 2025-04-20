import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import DoctoresView from '../views/DoctoresView.vue'
import ContactoView from '../views/ContactoView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/nosotros', name: 'Nosotros', component: NosotrosView },
  { path: '/servicios', name: 'Servicios', component: ServiciosView },
  { path: '/doctores', name: 'Doctores', component: DoctoresView },
  { path: '/contacto', name: 'Contacto', component: ContactoView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
