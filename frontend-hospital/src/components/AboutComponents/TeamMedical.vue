<template>
  <v-container fluid class="contenido-primary py-16">
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
              :src="medico.foto"
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
import { ref, onMounted } from 'vue'
import axios from 'axios'

const medicos = ref([])
const loading = ref(true)
const error = ref(false)
const fotoPorDefecto = new URL('@/assets/images/default_profile.jpg', import.meta.url).href

const fetchMedicos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/doctores/completo')
    // Ajustamos las rutas de las fotos si existen
    medicos.value = response.data.map((medico) => ({
      nombre: medico.nombre,
      especialidad: medico.especialidad,
      foto: medico.foto_path
        ? `http://localhost:3000/uploads/${medico.foto_path}`
        : fotoPorDefecto,
    }))
    loading.value = false
  } catch (err) {
    console.error('Error al cargar los médicos:', err)
    error.value = true
    loading.value = false
  }
}

onMounted(() => {
  fetchMedicos()
})
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
  