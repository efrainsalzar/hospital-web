<template>
  <v-container class="py-5 servicios-section">
    <h2 class="mb-4 text-center">Nuestros Servicios</h2>
    <v-row class="scroll-wrapper d-flex overflow-auto pb-3">
      <v-col
        v-for="(servicio, index) in servicios"
        :key="index"
        cols="12" sm="6" md="4" lg="3"
        class="d-flex justify-center"
      >
        <v-card class="mx-2 servicio-card" elevation="3">
          <v-card-title class="text-center">
            <v-icon class="display-6 text-primary mb-3">{{ servicio.icono }}</v-icon>
          </v-card-title>
          <v-card-subtitle class="text-center">{{ servicio.titulo }}</v-card-subtitle>
          <v-card-text class="text-center">{{ servicio.descripcion }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn color="primary" class="mt-4">Ver Todos los Servicios</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const servicios = [
  { titulo: 'Consulta General', descripcion: 'Atención médica primaria y seguimiento.', icono: 'mdi-heart-pulse' },
  { titulo: 'Pediatría', descripcion: 'Cuidado integral de los niños.', icono: 'mdi-bandaid' },
  { titulo: 'Laboratorio Clínico', descripcion: 'Análisis clínicos para diagnóstico.', icono: 'mdi-eyedropper' },
  { titulo: 'Radiología', descripcion: 'Rayos X, ecografías y más.', icono: 'mdi-x-ray' },
  { titulo: 'Emergencias', descripcion: 'Atención inmediata las 24h.', icono: 'mdi-alert-circle' },
  { titulo: 'Odontología', descripcion: 'Salud y estética dental.', icono: 'mdi-tooth' },
  { titulo: 'Farmacia', descripcion: 'Medicamentos y orientación farmacéutica.', icono: 'mdi-pill' }
]
</script>

<style scoped>
.servicios-section {
  background-color: #f8f9fa;
}

.scroll-wrapper {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding-bottom: 1rem;
}

.servicio-card {
  width: 250px;
  border-radius: 0.75rem;
  background-color: #ffffff;
  transition: transform 0.2s ease;
}

.servicio-card:hover {
  transform: scale(1.03);
}
</style>
