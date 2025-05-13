<!--
  Componente: Departamento de Médicos
  Descripción: Muestra una sección con tarjetas informativas de departamentos médicos, cada una con su imagen, nombre y médico asignado. Incluye una tarjeta extra con descripción institucional y botón a "Ver más".
-->
<template>
  <v-container fluid class="contenido-primary">
    <v-container class="contenido py-0">
      <v-row fluid>
        <v-col class="mb-md-0">
          <div class="text-white text-h4 font-weight-bold mb-4">Nuestro Departamento de Medicos</div>
        </v-col>
      </v-row>
      <v-row justify="center" align="stretch" class="ma-0 d-flex mt-10">
        
        <v-col v-for="(item, index) in cards" :key="index" cols="12" sm="6" md="3" class="d-flex">
          <v-card class="card-hover flex-grow-1">
            <v-img :src="item.image" width="100%" height="180" cover></v-img>
            <v-card-title class="text-center font-weight-bold mt-5">{{ item.dep_title }}</v-card-title>
            <v-card-subtitle class="text-center">{{ item.medic }}</v-card-subtitle>
          </v-card>
        </v-col>

        
        <v-col cols="12" sm="6" md="3">
          <v-card class="text-white pa-3 bg-transparent" style="border:none; box-shadow: none;">
            <div class="text-h6 font-weight-bold mb-3">Un enfoque centrado en la salud</div>
            <p class="text-body-1">
              En nuestro hospital, trabajamos con compromiso y pasión para ofrecer atención médica integral,
              con tecnología moderna y un equipo de profesionales altamente capacitados.
            </p>
            <v-btn class="boton mt-4" to="/about">Ver más</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
const cards = [
  {
    dep_title: 'Pediatría',
    medic: "Dr. Juan Pérez",
    image: new URL('@/assets/images/preguntas.webp', import.meta.url).href
  },
  {
    dep_title: 'Ginecología',
    medic: "Dr. Ana López",
    image: new URL('@/assets/images/ginecologia.webp', import.meta.url).href
  },
  {
    dep_title: 'Cardiología',
    medic: "Dr. Carlos Martínez",
    image: new URL('@/assets/images/cirugia.webp', import.meta.url).href
  }
]
</script>

<style scoped>
.contenido-primary {
  background: #283593;
  padding: 70px 0;
}

.contenido {
  max-width: 1200px;
}

.card-hover {
  border-bottom: 6px solid #4CAF50;
}

.boton {
  background-color: #ffffff;
  text-size-adjust: 1rem;
  font-weight: bold;
  border-bottom: #28a745 2px solid;
  transition: background-color 0.3s, color 0.3s;
}

.boton:hover {
  background-color: #28a745;
  color: white;
}
</style>
