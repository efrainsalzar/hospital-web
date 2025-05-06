<template>
    <v-container class="contenido py-0">
      <v-row justify="center" align="stretch" class="ma-0">
        <!-- Reutilización para los 3 cuadros -->
        <v-col
          v-for="(item, index) in cards"
          :key="index"
          cols="12"
          md="4"
          class="d-flex"
        >
          <v-card
            color="#283593"
            class="text-white py-4 px-9 d-flex flex-column justify-space-between fill-height card-hover"
            style="border-bottom: 6px solid #4CAF50; top: -60px; max-width:350px ;"
          >
            <div class="text-center">
              <v-icon size="48" class="mb-2">{{ item.icon }}</v-icon>
              <v-card-title class="text-h5 justify-center">{{ item.title }}</v-card-title>
            </div>
            <v-card-text class="text-left">
              <template v-if="item.contentType === 'schedule'">
                <div class="d-flex justify-space-between mb-2">
                  <div class="font-weight-bold">Lunes - Viernes</div>
                  <div>8.00 - 19.00</div>
                </div>
                <div class="d-flex justify-space-between mb-2">
                  <span class="font-weight-bold">Sábado</span>
                  <span>9.30 - 17.00</span>
                </div>
                <div class="d-flex justify-space-between">
                  <span class="font-weight-bold">Domingo</span>
                  <span>9.30 - 15.00</span>
                </div>
              </template>
              <template v-else-if="item.contentType === 'emergency'">
                <div class="text-success text-h5 font-weight-bold mb-2 text-center">+56 273 45678 235</div>
                <p >Para emergencias médicas, por favor, llame al número destacado. Indique claramente su ubicación y la naturaleza de la emergencia para que podamos coordinar la ayuda de la manera más eficiente posible.</p>
              </template>
              <template v-else>
                <div class="mb-2">Av. de la Salud #123, Zona Central</div>
                <div class="mb-2">Frente al Hospital General</div>
                <div class="mb-2">Sucre, Bolivia</div>
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
      title: 'Horario de atencion',
      icon: 'mdi-clock-outline',
      contentType: 'schedule',
    },
    {
      title: 'Ubicacion',
      icon: 'mdi-map-marker-outline',
      contentType: 'text',
    },
    {
      title: 'Emergencias',
      icon: 'mdi-bell-outline',
      contentType: 'emergency',
    },
  ];
  </script>
  
  <style scoped>

.contenido{
  max-width: 1200px;
}
  /* Agregar efecto hover a las tarjetas */
  .card-hover {

    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card-hover:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7); /* Agregar sombra */
  }
  </style>
  