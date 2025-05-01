<template>
  <v-container class="mt-10 mb-10 px-8">
    <v-row class="d-flex justify-center">
      <!-- Texto -->
      <v-col cols="12" md="6" class="mb-6 mb-md-0">
        <div class="text-h4 font-weight-bold mb-4">Acerca del Hospital</div>
        <p class="text-body-1 mb-4">
          Fundado con una profunda vocación de servicio, el Hospital Universitario Dr. Antón Boel Villadsen es un pilar fundamental en la atención médica de Sucre y la región. Combinamos una rica historia con la constante actualización de nuestros servicios y la dedicación de un equipo de profesionales altamente calificados para brindar una atención integral y de calidad a nuestros pacientes.
        </p>
        <v-btn to="/about" color="primary" class="mt-2"
        style="border-bottom: 4px solid #4CAF50; top: -5px;">Leer más</v-btn>
      </v-col>

      <!-- Imagen -->
      <v-col cols="12" md="6" class="text-center mb-6 mb-md-0">
        <v-img :src="hospitalImage" alt="Hospital" max-width="100%" max-height="300" contain></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const hospitalImage = new URL('@/assets/images/hospital1.jpg', import.meta.url).href;
</script>

<style scoped>
</style>
