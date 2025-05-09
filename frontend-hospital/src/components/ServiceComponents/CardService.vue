<template>
  <v-container class="contenido">
    <div
      v-for="(dpto, index) in departamentosHospital"
      :key="index"
      class="departamento-seccion mb-12"
    >
      <h2 class="departamento-nombre text-h5 font-weight-bold mb-6">
        {{ dpto.nombre }}
      </h2>

      <v-row>
        <v-col
          v-for="(servicio, sIndex) in dpto.servicios"
          :key="sIndex"
          cols="12" md="6" lg="4"
        >
          <v-card class="service-card d-flex flex-column fill-height pa-4">
            <v-img :src="servicio.imagen" height="160px" class="mb-4" />

            <v-card-title class="servicio-titulo text-center text-h6 font-weight-bold mb-2">
              {{ servicio.titulo }}
            </v-card-title>

            <v-card-text class="text-body-2">
              <p class=" descripcion mb-2">{{ servicio.descripcion }}</p>
              <p><strong>Fichas:</strong> {{ servicio.fichasDiarias ?? 'Sin límite' }}</p>
              <p><strong>Horario:</strong><br> {{ servicio.horario }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import departamentosHospital from '@/components/ServiceComponents/infoServicies';
</script>

<style scoped>
.contenido {
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 16px;
}

/* Sección de cada departamento */
.departamento-nombre {
  border-bottom: 4px solid #8df0928c;
  padding-bottom: 4px;

}

/* Estilos de la card */
.service-card {
  background-color: #f5f7fa;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: background-color 0.3s ease, transform 0.3s ease;
  color: #2E3A59;
  max-width: 360px;
}

.service-card:hover {
  background-color: #283593;
  color: white;
}

/* Título del servicio */
.servicio-titulo {
  border-bottom: 3px solid #75cf7c;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.service-card:hover .servicio-titulo {
  color: #66BB6A;
  border-color: #66BB6A;
}
</style>
