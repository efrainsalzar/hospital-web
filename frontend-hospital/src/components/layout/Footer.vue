<template>
  <v-footer class="text-white py-6" style="background-color: #060b3a;">
    <v-container class="contenido">
      <v-row class="pb-5">
        <!-- Logo y descripción -->
        <v-col cols="12" md="4">
          <div class="pb-8">
            <router-link to="/" class="text-decoration-none">
              <div class="d-flex align-center">
                <span class="text-h4 font-weight-bold text-primary">{{ layoutData.logo.main }}</span>
                <span class="text-h4 font-weight-bold text-success">{{ layoutData.logo.alt }}</span>
                <span class="text-h5 font-weight-bold bg-success px-1 mx-1 text-white">{{ layoutData.logo.symbol }}</span>
              </div>
              <div class="text-h7 text-grey-darken-1 mt-1">{{ layoutData.logo.subtitle }}</div>
            </router-link>
          </div>

          <div class="d-flex"><span class="text-caption pr-2">{{ layoutData.description }}</span></div>

          <!-- Contactos -->
          <div class="pt-5">
            <div class="d-flex align-center mb-2">
              <v-icon icon="mdi-phone" size="x-large" class="text-success" />
              <span class="text-caption pl-2">{{ layoutData.contact.phone }}</span>
            </div>
            <div class="d-flex align-center mb-2">
              <v-icon icon="mdi-email" size="x-large" class="text-success" />
              <span class="text-caption pl-2">{{ layoutData.contact.email }}</span>
            </div>
            <div class="d-flex align-center mb-2">
              <v-icon icon="mdi-map-marker" size="x-large" class="text-success" />
              <span class="text-caption pl-2">{{ layoutData.contact.address }}</span>
            </div>
          </div>
        </v-col>

        <!-- Enlaces -->
        <v-col cols="12" md="4" class="enlaces d-flex flex-column">
          <h5 class="text-h6 text-white">Enlaces</h5>
          <ul class="footer-links pt-5">
            <li v-for="(link, i) in layoutData.menuItems" :key="i">
              <router-link :to="link.to" class="footer-link">
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </v-col>

        <!-- Redes sociales -->
        <v-col cols="12" md="4" class="enlaces">
          <h5 class="text-h6 text-white">Síguenos</h5>
          <v-row class="d-flex pt-5" dense>
            <v-col
              v-for="(social, i) in layoutData.social"
              :key="i"
              class="d-flex"
            >
              <v-btn icon variant="text" :href="social.url" :aria-label="social.name" target="_blank">
                <v-icon :icon="social.icon" />
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="my-4" />

      <!-- Pie inferior -->
      <v-row>
        <v-col cols="12" md="6" class="text-center text-md-start text-caption">
          © {{ new Date().getFullYear() }} {{ layoutData.copyright }}
        </v-col>
        <v-col cols="12" md="6" class="text-center text-md-end text-caption">
          <router-link
            v-for="(item, i) in layoutData.legal"
            :key="i"
            :to="item.to"
            class="footer-link mx-2"
          >
            {{ item.label }}
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>



<script setup>
import { layoutData } from './LayoutData';

const footerData = {
  logo: layoutData.logo,
  description: 'Hospital Universitario San Francisco Xavier, comprometido con la salud de nuestra comunidad.',
  contact: layoutData.contact,
  links: layoutData.footerLinks,
  social: layoutData.social,
  legal: layoutData.legal,
  copyright: layoutData.copyright
};
</script>

<style scoped>
.contenido {
  max-width: 1200px;
}
.text-caption {
  color: #ccc;
}
.enlaces {
  margin-top: 3rem;
  padding-left: 50px;
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-links li {
  margin-bottom: 8px;
}
.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}
.footer-links a:hover {
  color: rgb(102, 194, 105);
  text-decoration: underline;
}
.footer-link {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}
.footer-link:hover {
  color: rgb(102, 194, 105);
  text-decoration: underline;
}
.enlaces .v-btn .v-icon {
  color: #ccc;  /* Color de hover */
}
.enlaces .v-btn .v-icon:hover {
  color: rgba(76, 175, 80, 1);
}
</style>
