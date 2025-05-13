<template>
  <v-container class="contenido py-0">
    <v-row justify="center" align="stretch" class="ma-0">
      <v-col v-for="(item, index) in cards" :key="index" cols="12" md="4" class="d-flex">
        <v-card class="info-card fill-height">
          <div class="text-center">
            <v-icon size="48" class="mb-2">{{ item.icon }}</v-icon>
            <v-card-title class="text-h5">{{ item.title }}</v-card-title>
          </div>

          <v-card-text>
            <template v-if="item.contentType === 'schedule'">
              <div v-for="(line, i) in item.content" :key="i" class="info-row">
                <span class="label">{{ line.label }}</span>
                <span>{{ line.time }}</span>
              </div>
            </template>

            <template v-else-if="item.contentType === 'emergency'">
              <div class="text-success text-h5 font-weight-bold mb-2 text-center">
                {{ item.content.phone }}
              </div>
              <p>{{ item.content.description }}</p>
            </template>

            <template v-else-if="item.contentType === 'location'">
              <div v-for="(line, i) in item.content" :key="i" class="mb-2">
                {{ line }}
              </div>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const cards = [
  {
    title: 'Horario de atención',
    icon: 'mdi-clock-outline',
    contentType: 'schedule',
    content: [
      { label: 'Lunes - Viernes', time: '8:00 - 19:00' },
      { label: 'Sábado', time: '9:30 - 17:00' },
      { label: 'Domingo', time: '9:30 - 15:00' }
    ]
  },
  {
    title: 'Ubicación',
    icon: 'mdi-map-marker-outline',
    contentType: 'location',
    content: [
      'Av. de la Salud #123, Zona Central',
      'Frente al Hospital General',
      'Sucre, Bolivia'
    ]
  },
  {
    title: 'Emergencias',
    icon: 'mdi-bell-outline',
    contentType: 'emergency',
    content: {
      phone: '+56 273 45678 235',
      description: 'Para emergencias médicas, por favor, llame al número destacado. Indique claramente su ubicación y la naturaleza de la emergencia para que podamos coordinar la ayuda eficientemente.'
    }
  }
];
</script>

<style scoped>
.contenido {
  max-width: 1200px;
}

.info-card {
  background-color: #283593;
  color: white;
  padding: 1.5rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 6px solid #4CAF50;
  max-width: 350px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  top: -60px;
}

.info-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.label {
  font-weight: bold;
}
</style>
