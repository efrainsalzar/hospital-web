<template>
  <v-footer class="text-white py-6" style="background-color: #101820;">
    <v-container>
      <v-row>

        <!-- Descripción institucional -->
        <v-col cols="12" md="3">
          <p class="text-caption">
            {{ footerData.description }}
          </p>
        </v-col>

        <!-- Enlaces de navegación -->
        <v-col cols="12" md="3">
          <h5 class="text-h6 mb-2">Enlaces</h5>
          <ul class="footer-links">
            <li v-for="(link, i) in footerData.links" :key="i">
              <router-link :to="link.to">{{ link.label }}</router-link>
            </li>
          </ul>
        </v-col>

        <!-- Información de contacto -->
        <v-col cols="12" md="3" class="footer-contact">
          <h5 class="text-h6 mb-2">Contacto</h5>
          <v-list density="compact" class="px-0" bg-color="transparent">
            <v-list-item v-for="(info, i) in footerData.contact" :key="i">
              <v-list-item-title>{{ info }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Redes sociales -->
        <v-col cols="12" md="3">
          <h5 class="text-h6 mb-2">Síguenos</h5>
          <v-row class="d-flex" dense>
            <v-col cols="3" v-for="(icon, i) in footerData.socialIcons" :key="i">
              <v-btn icon variant="text" class="text-white">
                <v-icon :icon="icon" />
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

      </v-row>

      <v-divider class="my-4" />

      <!-- Pie inferior -->
      <v-row>
        <v-col cols="12" md="6" class="text-center text-md-start text-caption">
          © {{ new Date().getFullYear() }} {{ footerData.copyright }}
        </v-col>
        <v-col cols="12" md="6" class="text-center text-md-end text-caption">
          <v-btn v-for="(legal, i) in footerData.legal" :key="i" variant="text" class="footer-link">
            {{ legal }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
// Datos del footer modularizados
const footerData = {
  description: 'Hospital Universitario San Francisco Xavier, comprometido con la salud de nuestra comunidad.',
  links: [
    { label: 'Servicios', to: '/service' },
    { label: 'Nosotros', to: '/about' },
    { label: 'Noticias', to: '/notice' },
    { label: 'Contacto', to: '/contact' },
  ],
  contact: [
    'Avenida Villar, Sucre - Bolivia',
    '📞 (591) 4-1234567',
    '📧 contacto@hospital.com',
    '🕒 Lun - Vie: 08:00 a 18:00',
  ],
  socialIcons: ['mdi-facebook', 'mdi-instagram', 'mdi-whatsapp', 'mdi-linkedin'],
  legal: ['Aviso de privacidad', 'Términos de uso'],
  copyright: 'Hospital San Francisco Xavier. Todos los derechos reservados.',
};
</script>

<style scoped>
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-links li {
  margin-bottom: 0.4rem;
}
.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}
.footer-links a:hover {
  color: white;
  text-decoration: underline;
}
.footer-link {
  color: #ccc;
  text-transform: none;
  font-weight: normal;
  transition: color 0.3s ease;
}
.footer-link:hover {
  color: white;
  text-decoration: underline;
}

.footer-contact {
  color: #ccc;
}
</style>
