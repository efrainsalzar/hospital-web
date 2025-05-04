<template>
    <v-container class="contenido py-16" fluid>
      <!-- Visión -->
        <v-row class="align-center mb-16 d-flex justify-space-between">
          <!-- Texto -->
          <v-col cols="12" md="5">
            <h2 class="text-h4 font-weight-bold mb-4">{{ vision.titulo }}</h2>
            <p class="text-body-1 text-justify">{{ vision.descripcion }}</p>
          </v-col>
          
          <!-- Imagen -->
          <v-col cols="12" md="6">
              <v-img
              :src="vision.image"
              alt="Visión del Hospital"
              max-height="300"
              cover
              ></v-img>
            </v-col>
        </v-row>
  
      <!-- Misión -->
      <v-row class="align-center mb-16 d-flex justify-space-between">
        <!-- Imagen -->
        <v-col cols="12" md="6" class="d-flex">
          <v-img
            :src="mision.image"
            alt="Misión del Hospital"
            max-height="300"
            cover
          ></v-img>
        </v-col>
  
        <!-- Texto -->
        <v-col cols="12" md="5">
          <h2 class="text-h4 font-weight-bold mb-4">{{ mision.titulo }}</h2>
          <p class="text-body-1 text-justify">{{ mision.descripcion }}</p>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  const vision = {
    titulo: 'Visión',
    descripcion:
      'El Hospital Universitario, tiene como misión la provisión de servicios de salud especializados para la atención médica de alta calidad, eficiente y segura de la población de Sucre y sus provincias, integrando funciones de investigación y docencia, vinculado académicamente a la Universidad San Francisco Xavier y fomentando su marcada vocación de hospital de referencia nacional para determinados servicios de alta cualificación asistencial y tecnológica.',
    image: new URL('@/assets/images/serviciosHospital.webp', import.meta.url).href,
  };
  
  const mision = {
    titulo: 'Misión',
    descripcion:
      'Ser la primera opción de hospitalización y de atención especializada para la población, con calidad técnica, confortabilidad de sus instalaciones, el respeto a la cultura, autonomía y privacidad de sus usuarios. Ser un hospital técnicamente avanzado, permanentemente preocupado por la innovación y el desarrollo científico con un claro compromiso con la docencia y la investigación como instrumentos claves para el progreso, cuantitativo y cualitativo, de su oferta asistencial y, en consecuencia, del bienestar de la sociedad.',
    image: new URL('@/assets/images/serviciosHospital.webp', import.meta.url).href,
  };
  </script>
  
  <style scoped>
  .contenido {
    max-width: 1200px;
  }
  .v-img {
    border-radius: 2px;
    
  }
  </style>
  