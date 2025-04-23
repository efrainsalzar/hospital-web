<template>
  <v-container class="about-section py-5">
    <v-row align="center">
      <!-- Texto -->
      <v-col cols="12" md="6" class="mb-4 mb-md-0">
        <h2 class="mb-3">Acerca del Hospital</h2>
        <p>
          Fundado con una profunda vocación de servicio, el Hospital Universitario Dr. Antón Boel Villadsen es un pilar fundamental en la atención médica de Sucre y la región. Combinamos una rica historia con la constante actualización de nuestros servicios y la dedicación de un equipo de profesionales altamente calificados para brindar una atención integral y de calidad a nuestros pacientes.
        </p>
        <v-btn to="/about" color="primary" class="mt-3">Leer más</v-btn>
      </v-col>

      <!-- Imagen -->
      <v-col cols="12" md="6" class="text-center">
        <v-img :src="hospitalImage" alt="Hospital" max-height="300" contain></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

const hospitalImage = new URL('@/assets/images/hospital1.jpg', import.meta.url).href;
</script>

<style scoped>
.about-section {
  background-color: #f8f9fa;
}

.about-section h2 {
  font-weight: bold;
}
</style>
