<template>
  <v-card class="service-card d-flex flex-column fill-height pa-1">
    <v-img :src="servicio.imagen" width="100%" height="150" class="mb-4" cover />
    <v-card-title class="servicio-titulo text-center text-h6 font-weight-bold mb-2">
      {{ servicio.titulo }}
    </v-card-title>
    <v-card-text class="text-body-2">
      <p class="descripcion mb-2">{{ servicio.descripcion }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  servicio: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.service-card {
  background-color: #f5f7fa;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s ease, transform 0.3s ease;
  color: #2E3A59;
  height: 100%;
  width: 100%;
}

.service-card:hover {
  background-color: #283593;
  color: white;
  transform: translateY(-4px);
}

.servicio-titulo {
  border-bottom: 3px solid #75cf7c;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.service-card:hover .servicio-titulo {
  color: #75cf7c;
  border-color: #28a745;
}
</style>
