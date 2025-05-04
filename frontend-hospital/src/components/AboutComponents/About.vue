<template>
  <v-container class="contenido" fluid>
    <v-row class="d-flex justify-space-between">
      <!-- Sección de texto e indicadores -->
      <v-col cols="12" md="8">
        <h2 class="text-h4 font-weight-bold mb-4">
          Un equipo médico de excelencia al servicio de Sucre
        </h2>

        <div v-for="(p, i) in paragraphs" :key="i" class="text-body-1 mb-4">
          {{ p }}
        </div>

        <v-row class="mb-8" justify="center">
          <v-col
            v-for="stat in statistics"
            :key="stat.label"
            cols="6"
            sm="3"
            class="text-center"
          >
            <v-progress-circular
              :model-value="stat.value"
              :color="stat.color"
              size="100"
              width="8"
            >
              {{ stat.value }}%
            </v-progress-circular>
            <div class="mt-2 font-weight-medium">{{ stat.label }}</div>
          </v-col>
        </v-row>

        <v-btn
          color="indigo-darken-4"
          class="text-white text-uppercase font-weight-bold px-6"
          size="large"
        >
          Conocer más
        </v-btn>
      </v-col>

      <!-- Sección de tarjetas -->
      <v-col cols="12" md="3">
        <v-card
          v-for="(card, i) in infoCards"
          :key="i"
          class="info-card mb-4"
          color="indigo-darken-3"
          elevation="3"
        >
          <v-card-item>
            <v-icon :icon="card.icon" color="white" size="large" class="mb-2" />
            <v-card-title class="text-white text-h6">{{ card.title }}</v-card-title>
          </v-card-item>
          <v-card-text class="text-white">
            <template v-if="card.lines">
              <div
                v-for="(line, j) in card.lines"
                :key="j"
                class="d-flex justify-space-between mb-2"
              >
                <span>{{ line.day }}</span>
                <span>{{ line.time }}</span>
              </div>
            </template>
            <template v-else>
              <p v-if="card.phone" class="text-h5  text-light-green-accent-3 mb-2">
                {{ card.phone }}
              </p>
              <p v-for="(text, j) in card.description" :key="j">{{ text }}</p>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const paragraphs = ref([
  'El Hospital Universitario de Sucre es una institución líder en atención médica en Bolivia, con más de 45 años sirviendo a la comunidad. Contamos con profesionales formados en las mejores universidades del país y del extranjero, equipamiento de última generación y un compromiso inquebrantable con la salud y el bienestar de nuestros pacientes.',
  'Nuestro hospital está afiliado a la Universidad Mayor, Real y Pontificia de San Francisco Xavier de Chuquisaca, lo que nos permite estar a la vanguardia de la innovación médica, la investigación y la formación de nuevos profesionales de la salud. Cada año, cientos de estudiantes se preparan en nuestras instalaciones para convertirse en los médicos y enfermeros del mañana, garantizando un legado de excelencia en la atención médica boliviana.'
]);

const statistics = ref([
  { label: 'Satisfacción de Pacientes', value: 85, color: 'light-green-accent-4' },
  { label: 'Dedicación', value: 95, color: 'light-green-accent-4' },
  { label: 'Efectividad Médica', value: 90, color: 'light-green-accent-4' },
  { label: 'Profesionalismo', value: 98, color: 'light-green-accent-4' }
]);

const infoCards = ref([
  {
    icon: 'mdi-clock',
    title: 'Horario de Atención',
    lines: [
      { day: 'Lunes – Viernes', time: '7:00 – 19:00' },
      { day: 'Sábado', time: '8:00 – 14:00' },
      { day: 'Domingo (Emergencias)', time: '24 horas' }
    ]
  },
  {
    icon: 'mdi-calendar-clock',
    title: 'Citas Médicas',
    description: [
      'Para agendar su cita médica, puede comunicarse con nosotros por teléfono o acercarse a nuestro módulo de atención al paciente en horario regular.',
    ]
  },
  {
    icon: 'mdi-medical-bag',
    title: 'Emergencias',
    phone: '+591 4 64 45678',
    description: [
      'Nuestro departamento de guardia para atender cualquier urgencia médica.'
    ]
  }
]);
</script>

<style scoped>
.contenido {
  max-width: 1200px;
  padding: 70px 0;
}

.info-card {
  border-radius: 6px;
  border-bottom: 4px solid #76ff03; /* Verde más natural */
  padding: 5px 25px;
  max-width: 300px;
}

.v-progress-circular {
  font-weight: bold;
}
</style>
