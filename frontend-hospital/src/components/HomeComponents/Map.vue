<template>
  <v-container class="py-5">
    <v-row align="center">
      <!-- Mapa interactivo como imagen -->
      <v-col md="6" class="mb-4 mb-md-0">
        <a
          href="https://maps.app.goo.gl/MrEZHyetiCLagtfE6"
          target="_blank"
          class="d-block position-relative"
        >
          <v-img
            :src="mapImage"
            alt="Ubicación del Hospital"
            max-height="400"
            contain
            class="rounded-lg shadow-lg"
          ></v-img>
        </a>
      </v-col>

      <!-- Información de contacto -->
      <v-col md="6">
        <h3 class="mb-3 font-weight-bold">Contáctanos</h3>
        <v-list class="text-muted">
          <v-list-item>
            <strong>Dirección:</strong> Avenida Villar, Sucre, Bolivia
          </v-list-item>
          <v-list-item>
            <strong>📞 Teléfono:</strong> (591) 4-1234567
          </v-list-item>
          <v-list-item>
            <strong>📧 Email:</strong> contacto@hospital.com
          </v-list-item>
          <v-list-item>
            <strong>🕒 Horario:</strong> Lunes a Viernes - 08:00 a 18:00
          </v-list-item>
        </v-list>
        <v-btn color="primary" class="mt-3">Enviar mensaje</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const mapImage = new URL('@/assets/images/ubicacion.png', import.meta.url).href;
</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
}

</style>
