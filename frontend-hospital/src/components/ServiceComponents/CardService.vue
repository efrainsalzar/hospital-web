<template>
    <v-card @click="expandido = !expandido" class="hoverable mb-4" elevation="3">
      <v-img :src="servicio.imagen" height="200px"></v-img>
      <v-card-title>{{ servicio.titulo }}</v-card-title>
      <v-card-text>
        {{ servicio.descripcion }}
        <v-expand-transition>
          <div v-if="expandido" class="mt-2">
            <p><strong>Horario:</strong> {{ servicio.horario }}</p>
            <p><strong>Fichas por día:</strong> {{ servicio.fichasDiarias }}</p>
            <p><strong>Doctores:</strong></p>
            <ul>
              <li v-for="doc in servicio.doctores" :key="doc">{{ doc }}</li>
            </ul>
          </div>
        </v-expand-transition>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "TarjetaServicio",
    props: {
      servicio: Object
    },
    data() {
      return {
        expandido: false
      };
    }
  };
  </script>
  