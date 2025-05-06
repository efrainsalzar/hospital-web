<template>
    <v-container fluid class=" contenido-primary py-16">
    <v-container class="contenido">
      <h2 class="text-h4 font-weight-bold pb-15 text-white">Nuestro departamento de médicos</h2>
      <v-row>
        <v-col
          v-for="(medico, index) in medicos"
          :key="index"
          cols="12"
          sm="6"
          md="2"
        >
          <v-card class="medico-card" elevation="4">
            <v-img
              :src="medico.foto || fotoPorDefecto"
              alt="Foto del médico"
              height="150"
              cover
            ></v-img>
            <v-card-title class="text-center text-h6">{{ medico.nombre }}</v-card-title>
            <v-card-subtitle class="text-center text-body-2">{{ medico.especialidad }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</v-container>
  </template>
  
  <script setup>
  const fotoPorDefecto = new URL('@/assets/images/default_profile.jpg', import.meta.url).href;
  
  const medicos = [
    {
      nombre: 'Dra. María González',
      especialidad: 'Pediatría',
      foto: new URL('@/assets/images/DrGonzales.png', import.meta.url).href,
    },
    {
      nombre: 'Dr. Carlos López',
      especialidad: 'Cardiología',
      foto: '', // sin foto, se usará imagen por defecto
    },
    {
      nombre: 'Dra. Luisa Ortega',
      especialidad: 'Ginecología',
      foto: new URL('@/assets/images/DrOrtega.png', import.meta.url).href,
    },
    {
      nombre: 'Dr. Jorge Méndez',
      especialidad: 'Medicina Interna',
      foto: '', // sin foto
    },
    {
      nombre: 'Dra. Ana Torres',
      especialidad: 'Dermatología',
      foto: new URL('@/assets/images/DrTorres.png', import.meta.url).href,
    },
    {
      nombre: 'Dr. Luis Pérez',
      especialidad: 'Traumatología',
      foto: '', // sin foto
    },
    {
      nombre: 'Dra. Patricia Ruiz',
      especialidad: 'Oftalmología',
      foto: new URL('@/assets/images/DrRuiz.png', import.meta.url).href,
    },
    {
      nombre: 'Dr. Andrés Ramírez',
      especialidad: 'Neurología',
      foto: '', // sin foto
    },
    {
      nombre: 'Dra. Sofía Castro',
      especialidad: 'Endocrinología',
      foto: new URL('@/assets/images/DrCastro.png', import.meta.url).href,
    },
    {
      nombre: 'Dr. Javier Torres',
      especialidad: 'Gastroenterología',
      foto: '', // sin foto
    },
    {
      nombre: 'Dra. Valeria López',
      especialidad: 'Psiquiatría',
      foto: new URL('@/assets/images/DrLopez.png', import.meta.url).href,
    },
    {
      nombre: 'Dr. Felipe Martínez',
      especialidad: 'Urología',
      foto: '', // sin foto
    },
    {
      nombre: 'Dra. Gabriela Fernández',
      especialidad: 'Anestesiología',
      foto: new URL('@/assets/images/DrFernandez.png', import.meta.url).href,
    },
    {
      nombre: 'Dr. Samuel Castro',
      especialidad: 'Cirugía General',
      foto: '', // sin foto
    },
    {
      nombre: 'Dra. Mariana Salazar',
      especialidad: 'Radiología',
      foto: new URL('@/assets/images/DrSalazar.png', import.meta.url).href,
    },
    {
      nombre: 'Dr. Nicolás Herrera',
      especialidad: 'Otorrinolaringología',
      foto: '', // sin foto
    },
  ];
  </script>
  
  <style scoped>

  .contenido-primary {
    background-color: #283593;
  }
  .contenido{
    max-width: 1200px;
  }
  .v-img{
    border-bottom: #76ff03 1px solid;
  }
  .medico-card {
    border-radius: 16px;
    max-width: 200px;
    max-height: 300px;
  }
  </style>
  