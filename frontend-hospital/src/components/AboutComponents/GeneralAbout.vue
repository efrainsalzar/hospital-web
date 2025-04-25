<template>
    <v-container class="py-10">
      <!-- Frase destacada -->
      <v-row justify="center" class="mb-6">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h3 font-italic font-weight">{{ aboutData.highlight }}</h2>
        </v-col>
      </v-row>
  
      <!-- Imagen institucional + párrafo -->
      <v-row class="mb-10" align="center">
        <v-col cols="12" md="6">
          <v-img :src="aboutData.imagen" alt="Hospital" class="rounded-lg" cover height="300px" />
        </v-col>
        <v-col cols="12" md="6">
          <p class="text-body-1">{{ aboutData.intro }}</p>
        </v-col>
      </v-row>
  
      <!-- Misión y Visión -->
      <v-row class="mb-10 d-flex flex-column align-center" dense>
  <v-col cols="12" md="6">
    <v-card color="#1e1e2f" class="pa-4 text-white">
      <h3 class="text-h6 mb-2">Misión</h3>
      <p>{{ aboutData.mission }}</p>
    </v-card>
  </v-col>

  <v-col cols="12" md="6" class="mt-4">
    <v-card color="#1e1e2f" class="pa-4 text-white">
      <h3 class="text-h6 mb-2">Visión</h3>
      <p>{{ aboutData.vision }}</p>
    </v-card>
  </v-col>
</v-row>
  
      <!-- Valores institucionales -->
      <v-row>
        <v-col cols="12">
          <h3 class="text-h6 mb-4 text-center">Nuestros valores</h3>
          <v-row justify="center" dense>
            <v-col v-for="(value, i) in aboutData.values" :key="i" cols="6" md="3">
              <v-card color="#282843" class="pa-4 text-center">
                <v-icon size="36" class="mb-2">{{ value.icon }}</v-icon>
                <div class="text-subtitle-2 font-weight-medium">{{ value.name }}</div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  const aboutData = {
    highlight: "Comprometidos con tu salud, guiados por la ciencia y el corazón.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    intro: "El Hospital Universitario Dr. Antón Boel Villadsen tiene una larga y significativa trayectoria en la ciudad de Sucre, Chuquisaca, Bolivia. Desde su fundación, se ha consolidado como una institución de referencia en la prestación de servicios de salud, comprometida con el bienestar de la comunidad y la formación de futuros profesionales de la medicina.",
    mission: "El Hospital Universitario, tiene como misión la provisión de servicios de salud especializados para la atención médica de alta calidad, eficiente y segura de la población de Sucre y sus provincias, integrando funciones de investigación y docencia, vinculado académicamente a la Universidad San Francisco Xavier y fomentando su marcada vocación de hospital de referencia nacional para determinados servicios de alta cualificación asistencial y tecnológica.",
    vision: "Ser la primera opción de hospitalización y de atención especializada para la población, con calidad técnica, confortabilidad de sus instalaciones, el respeto a la cultura, autonomía y privacidad de sus usuarios. Ser un hospital técnicamente avanzado, permanentemente preocupado por la innovación y el desarrollo científico con un claro compromiso con la docencia y la investigación como instrumentos claves para el progreso, cuantitativo y cualitativo, de su oferta asistencial y, en consecuencia, del bienestar de la sociedad.",
    values: [
      { name: "Empatía", icon: "mdi-heart-outline" },
      { name: "Excelencia", icon: "mdi-star-circle" },
      { name: "Ética", icon: "mdi-scale-balance" },
      { name: "Responsabilidad", icon: "mdi-account-check" }
    ]
  }
  </script>
  
  <style scoped>

  .text-body-1{
    background: #ccc;
  }
  </style>
  