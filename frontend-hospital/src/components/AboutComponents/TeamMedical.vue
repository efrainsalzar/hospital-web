<template>
  <v-container fluid class="contenido-primary py-16">
    <v-container class="contenido">
      <h2 class="text-h4 font-weight-bold pb-15 text-white">Nuestro departamento de médicos</h2>
      <v-row>
        <v-col v-for="(medico, index) in medicos" :key="index" cols="12" sm="6" md="2" class="d-flex">
          <v-card class="medico-card d-flex flex-column" elevation="4">
            <v-img :src="medico.foto" alt="Foto del médico" height="150" cover></v-img>
            <div class="pa-2 text-center nombre-medico">
              {{ medico.nombre }}
            </div>
            <v-card-subtitle class="text-center text-body-2 especialidad-medico pb-2">
              {{ medico.especialidad }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="loading" justify="center" class="mt-8">
        <v-progress-circular indeterminate color="white"></v-progress-circular>
      </v-row>
      <v-row v-if="error" justify="center" class="mt-8">
        <v-alert type="error" dense>
          No se pudieron cargar los datos de los médicos. Por favor, inténtelo más tarde.
        </v-alert>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Referencias reactivas
const medicos = ref([])
const loading = ref(true)
const error = ref(false)

// Foto por defecto si no existe la foto del médico
// Asegúrate de que esta ruta sea correcta para tu estructura de proyecto
const fotoPorDefecto = new URL('@/assets/images/default_profile.jpg', import.meta.url).href

// Función para cargar los médicos
const fetchMedicos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/doctores/completo')
    medicos.value = response.data.map((medico) => ({
      nombre: medico.nombre,
      especialidad: medico.especialidad,
      // Asegúrate de que 'foto_path' exista en tu respuesta de la API
      foto: medico.foto_path ? `http://localhost:3000/uploads/${medico.foto_path}` : fotoPorDefecto,
    }))
    loading.value = false
  } catch (err) {
    console.error('Error al cargar los médicos:', err)
    error.value = true
    loading.value = false
  }
}

// Cargar los médicos al montar el componente
onMounted(fetchMedicos)
</script>

<style scoped>
.contenido-primary {
  background-color: #283593;
}

.contenido {
  max-width: 1200px; /* Puedes ajustar esto según tu diseño */
}

.v-img {
  border-bottom: #76ff03 1px solid; /* Un color verde lima, considera si encaja con el diseño general */
}

.medico-card {
  border-radius: 10px;
  width: 100%; /* Ocupa todo el ancho de la columna */
  /* La altura se manejará con flexbox para que todas sean iguales */
  /* No es necesario max-width ni max-height aquí si quieres que se ajusten al grid */
  overflow: hidden; /* Para asegurar que el contenido no se desborde del border-radius */
}

.nombre-medico {
  font-weight: bold;
  line-height: 1.3; /* Ajusta para mejor legibilidad */
  word-wrap: break-word; /* Permite que palabras largas se rompan */
  white-space: normal; /* Permite que el texto se ajuste a múltiples líneas */
  min-height: 40px; /* Establece una altura mínima para el nombre, ajusta según necesidad */
  display: flex;
  align-items: center; /* Centra verticalmente si el texto es corto */
  justify-content: center; /* Centra horizontalmente */
}

.especialidad-medico {
  line-height: 1.2;
  word-wrap: break-word;
  white-space: normal;
  min-height: 30px; /* Establece una altura mínima para la especialidad, ajusta según necesidad */
  display: flex;
  align-items: center; /* Centra verticalmente si el texto es corto */
  justify-content: center; /* Centra horizontalmente */
}
</style>