<!--
  Descripción: Muestra una breve introducción institucional junto con una imagen representativa y un botón para acceder a más información.
-->

<template>
  <v-container class="contenido py-10">
    <v-row class="d-flex justify-space-between">

     
      <v-col cols="12" md="6" class="mb-6 mb-md-0">
        <h2 class="text-h4 font-weight-bold mb-4">Acerca del Hospital</h2>
        <p class="text-body-1 mb-4">
          Fundado con una profunda vocación de servicio, el Hospital Universitario Dr. Antón Boel Villadsen es un pilar
          fundamental en la atención médica de Sucre y la región. Combinamos una rica historia con la constante
          actualización de nuestros servicios y la dedicación de un equipo de profesionales altamente calificados para
          brindar una atención integral y de calidad a nuestros pacientes.
        </p>
        <v-btn to="/about" color="primary" class="mt-2" style="border-bottom: 4px solid #4CAF50; top: -5px;">
          Leer más
        </v-btn>
      </v-col>

      
      <v-col cols="12" md="5" class="d-flex">
        <v-img :src="hospitalImage" alt="Hospital" style="top: -60px;" />
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
const hospitalImage = new URL('@/assets/images/doctores.webp', import.meta.url).href;
</script>

<style scoped>
.contenido {
  max-width: 1200px;
}
</style>
