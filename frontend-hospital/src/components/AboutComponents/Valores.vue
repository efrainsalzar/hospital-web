<template>
    <v-container class="contenido py-15" fluid>
      <h2 class="text-h4 font-weight-bold mb-10">Valores</h2>
      <v-row justify="center" align="center" dense>
        <v-col
          v-for="(valor, index) in valores"
          :key="index"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card class=" card pa-4 text-center">
            <v-icon size="48" color="primary" class="mb-4">{{ valor.icono }}</v-icon>
            <h3 class="text-h6 font-weight-medium">{{ valor.titulo }}</h3>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  const valores = [
    {
      titulo: 'Compromiso con la excelencia médica',
      icono: 'mdi-stethoscope',
    },
    {
      titulo: 'Humanización de la atención',
      icono: 'mdi-hand-heart',
    },
    {
      titulo: 'Ética profesional',
      icono: 'mdi-scale-balance',
    },
    {
      titulo: 'Formación académica continua',
      icono: 'mdi-school',
    },
    {
      titulo: 'Investigación e innovación',
      icono: 'mdi-lightbulb-on-outline',
    },
    {
      titulo: 'Trabajo en equipo',
      icono: 'mdi-account-group',
    },
    {
      titulo: 'Responsabilidad social',
      icono: 'mdi-earth',
    },
    {
      titulo: 'Equidad y accesibilidad',
      icono: 'mdi-access-point',
    },
  ];
  </script>
  
  <style scoped>
  .contenido{
    max-width: 1200px;
  }
  .card {
    max-width: 250px;
    height: 150px;
  }
  h2 {
    color: #2c3e50;
  }
  </style>
  