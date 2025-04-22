import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServiceView from '../views/ServiceView.vue'
import DoctorsView from '../views/DoctorsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'Nosotros', component: AboutView },
  { path: '/service', name: 'Servicios', component: ServiceView },
  { path: '/doctors', name: 'Doctores', component: DoctorsView },
  { path: '/contact', name: 'Contacto', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
