<template>
  <v-footer class="text-white py-6" style="background-color: #101820;">
    <v-container>
      <v-row>
        <!-- Descripción -->
        <v-col cols="12" md="3">
          <p class="text-caption">
            Hospital Universitario San Francisco Xavier, comprometido con la salud de nuestra comunidad.
          </p>
        </v-col>

        <!-- Enlaces 
        <v-col cols="12" md="3">
          <h5 class="text-h6 mb-2">Enlaces</h5>
          <v-list density="compact" nav>
            <v-list-item v-for="link in footerLinks" :key="link.text" :to="link.href" class="px-0">
              <v-list-item-title class="footer-link">{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>-->

        <!-- Contacto -->
        <v-col cols="12" md="3">
          <h5 class="text-h6 mb-2">Contacto</h5>
          <v-list density="compact" class="px-0">
            <v-list-item><v-list-item-title>Avenida Villar, Sucre - Bolivia</v-list-item-title></v-list-item>
            <v-list-item><v-list-item-title>📞 (591) 4-1234567</v-list-item-title></v-list-item>
            <v-list-item><v-list-item-title>📧 contacto@hospital.com</v-list-item-title></v-list-item>
            <v-list-item><v-list-item-title>🕒 Lun - Vie: 08:00 a 18:00</v-list-item-title></v-list-item>
          </v-list>
        </v-col>

        <!-- Redes sociales -->
        <v-col cols="12" md="3">
          <h5 class="text-h6 mb-2">Síguenos</h5>
          <v-row class="d-flex" dense>
            <v-col cols="3" v-for="(icon, i) in socialIcons" :key="i">
              <v-btn icon variant="text" class="text-white">
                <v-icon :icon="icon" />
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="my-4" />

      <!-- Pie de página inferior -->
      <v-row>
        <v-col cols="12" md="6" class="text-center text-md-start text-caption">
          © {{ new Date().getFullYear() }} Hospital San Francisco Xavier. Todos los derechos reservados.
        </v-col>
        <v-col cols="12" md="6" class="text-center text-md-end text-caption">
          <v-btn variant="text" class="footer-link">Aviso de privacidad</v-btn> |
          <v-btn variant="text" class="footer-link">Términos de uso</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
const footerLinks = [
  { text: 'Sobre Nosotros', href: '/service' },
  { text: 'Servicios Médicos', href: '/service' },
  { text: 'Especialistas', href: '/service' },
  { text: 'Contacto', href: '/service' },
  { text: 'Citas Online', href: '/service' }
];

const socialIcons = ['mdi-facebook', 'mdi-instagram', 'mdi-whatsapp', 'mdi-linkedin'];
</script>

<style scoped>
.footer-link {
  color: #ccc;
  text-transform: none;
}
.footer-link:hover {
  color: white;
  text-decoration: underline;
}
</style>
