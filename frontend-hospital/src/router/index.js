import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import AboutView from '../views/AboutView.vue'
import NoticeView from '../views/NoticeView.vue'
import AddNewPost from '../views/AddNewPost.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/service', name: 'Servicios', component: ServiceView },
  { path: '/about', name: 'Nosotros', component: AboutView },
  { path: '/notice', name: 'Noticias', component: NoticeView },
  { path: '/notice/nueva', name: 'AddNewPost', component: AddNewPost },
  { path: '/contact', name: 'Contacto', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
})

export default router
