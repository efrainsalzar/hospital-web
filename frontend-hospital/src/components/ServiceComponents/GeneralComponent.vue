<template>
    <v-container class="contenido">
        <!-- Buscador -->
        <Search v-model="search" @buscar="handleBuscar" @clear="handleClear" />

        <!-- Cargando -->
        <v-progress-linear v-if="loading" color="primary" indeterminate class="mb-8" />

        <!-- Error -->
        <v-alert v-if="error" type="error" variant="tonal" closable class="mb-8">
            {{ error }}
        </v-alert>

        <!-- Resultados filtrados -->
        <SearchPanel v-if="mostrarResultados" :resultados="filteredServicios" @volver="mostrarResultados = false" />

        <!-- Panel de departamentos -->
        <DepartamentPanel v-else-if="departamentos.length > 0" :departamentos="departamentos" />

        <!-- Estado vacío -->
        <v-card v-else-if="!loading && departamentos.length === 0" class="pa-6 text-center">
            <v-card-title class="text-h5 mb-2">No hay servicios disponibles</v-card-title>
            <v-card-text>
                No se encontraron servicios o especialidades para mostrar. Por favor, intenta más tarde.
            </v-card-text>
            <v-card-actions class="justify-center">
                <v-btn color="primary" @click="fetchServicios">Reintentar</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

import Search from './Search.vue'
import SearchPanel from './SearchPanel.vue'
import DepartamentPanel from './DepartamentPanel.vue'

const departamentos = ref([])
const allServicios = ref([])

const search = ref('')
const mostrarResultados = ref(false)
const loading = ref(false)
const error = ref(null)

const defaultImage = new URL('@/assets/images/servicios.jpg', import.meta.url).href
const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

const fetchServicios = async () => {
    loading.value = true
    error.value = null
    allServicios.value = []
    departamentos.value = []

    try {
        const { data: especialidades } = await axios.get(`${apiBaseUrl}/especialidades/completo`)
        const map = {}

        especialidades.forEach((esp) => {
            if (!esp || !esp.nombre || !esp.departamento) return

            const servicio = {
                titulo: esp.nombre,
                descripcion: esp.descripcion || 'Sin descripción disponible',
                imagen: esp.imagen || defaultImage,
                departamento: esp.departamento
            }

            if (!map[esp.departamento]) {
                map[esp.departamento] = {
                    nombre: esp.departamento,
                    servicios: []
                }
            }

            map[esp.departamento].servicios.push(servicio)
            allServicios.value.push(servicio)
        })

        departamentos.value = Object.values(map)
    } catch (err) {
        console.error('Error al cargar servicios:', err)
        error.value = 'No se pudieron cargar los servicios. Intenta más tarde.'
    } finally {
        loading.value = false
    }
}

const filteredServicios = computed(() => {
    if (!search.value.trim()) return []
    const term = search.value.toLowerCase().trim()
    return allServicios.value.filter((s) =>
        s.titulo.toLowerCase().includes(term) ||
        s.descripcion.toLowerCase().includes(term) ||
        s.departamento.toLowerCase().includes(term)
    )
})

function handleBuscar() {
    if (search.value.trim()) {
        mostrarResultados.value = true
    }
}

function handleClear() {
    search.value = ''
    mostrarResultados.value = false
}

onMounted(fetchServicios)
</script>

<style scoped>
.contenido {
    max-width: 1200px;
    margin: 0 auto;
    padding: 70px 16px;
}
</style>
