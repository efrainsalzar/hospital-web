<template>
  <v-container class="contenido">
    <v-expansion-panels multiple>
      <v-expansion-panel
        v-for="(dpto, index) in departamentosHospital"
        :key="index"
        class="mb-6"
      >
        <v-expansion-panel-title class="departamento-nombre text-h5">
          {{ dpto.nombre }}
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <v-row>
            <v-col
              v-for="(servicio, sIndex) in dpto.servicios"
              :key="sIndex"
              cols="12" md="6" lg="4"
            >
              <v-card class="service-card d-flex flex-column fill-height pa-1">
                <v-img
                  :src="servicio.imagen"
                  width="100%"
                  height="150"
                  class="mb-4"
                  cover
                />

                <v-card-title class="servicio-titulo text-center text-h6 font-weight-bold mb-2">
                  {{ servicio.titulo }}
                </v-card-title>

                <v-card-text class="text-body-2">
                  <p class="descripcion mb-2">{{ servicio.descripcion }}</p>
                  <p><strong>Fichas:</strong> {{ servicio.fichasDiarias ?? 'Sin límite' }}</p>
                  <p><strong>Horario:</strong><br> {{ servicio.horario }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
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

.departamento-nombre {
  padding-bottom: 4px;
  background-color: #283593;
  color: white;
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
  color: #75cf7c;
  border-color: #28a745;
}
</style>
