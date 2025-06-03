<template>
  <v-container fluid class="contenido-primary py-16">
    <v-container class="contenido">
      <h2 class="text-h4 font-weight-bold pb-5 text-white">Nuestro departamento de médicos</h2>

      <!-- Navegación por páginas -->
      <v-row justify="center" class="mt-6 pb-5" v-if="totalPaginas > 1">
        <v-pagination v-model="paginaActual" :length="totalPaginas" total-visible="5" color="lime" rounded />
      </v-row>

      <v-row>
        <v-col v-for="(medico, index) in pagedMedicos" :key="index" cols="12" sm="6" md="2" class="d-flex">
          <v-card class="medico-card d-flex flex-column" elevation="4">

            <img :src="medico.foto" alt="Foto del médico" @error="e => (e.target.src = fotoPorDefecto)" />
            <div class="pa-2 text-center nombre-medico">
              {{ medico.nombre }}
            </div>
            <v-card-subtitle class="text-center text-body-2 especialidad-medico pb-2">
              {{ medico.especialidad }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>



      <!-- Indicadores de carga y error -->
      <v-row v-if="loading" justify="center" class="mt-8">
        <v-progress-circular indeterminate color="white" />
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
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const medicos = ref([])
const loading = ref(true)
const error = ref(false)

const fotoPorDefecto = new URL('@/assets/images/default_profile.jpg', import.meta.url).href

const paginaActual = ref(1)
const medicosPorPagina = 18 // 3 filas × 6 columnas (md=2 → 6 por fila)

const totalPaginas = computed(() => Math.ceil(medicos.value.length / medicosPorPagina))

const pagedMedicos = computed(() => {
  const inicio = (paginaActual.value - 1) * medicosPorPagina
  return medicos.value.slice(inicio, inicio + medicosPorPagina)
})

const fetchMedicos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/doctores/completo')
    medicos.value = response.data.map((medico) => ({
      nombre: medico.nombre,
      especialidad: medico.especialidad,
      foto: `http://localhost:3000/uploads/${medico.foto_path}`,
    }))
  } catch (err) {
    console.error('Error al cargar los médicos:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(fetchMedicos)
</script>

<style scoped>
.contenido-primary {
  background-color: #283593;
}

.contenido {
  max-width: 1200px;
}

img {
  height: 180px;
  border-bottom: #76ff03 1px solid;
  object-fit: cover;
}

.medico-card {
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
}

.nombre-medico,
.especialidad-medico {
  word-wrap: break-word;
  white-space: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nombre-medico {
  font-weight: bold;
  line-height: 1.3;
  min-height: 40px;
}

.especialidad-medico {
  line-height: 1.2;
  min-height: 30px;
}
</style>
