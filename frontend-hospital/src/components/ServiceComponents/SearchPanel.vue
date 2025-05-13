<template>
  <div>
    <v-row v-if="resultados.length > 0">
      <v-col
        v-for="(servicio, i) in resultados"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
      >
        <CardService :servicio="servicio" />
      </v-col>
    </v-row>

    <div v-else class="text-center text-body-1 py-10 text-grey">
      No se encontraron resultados para tu búsqueda.
    </div>

    <div class="d-flex justify-center mt-6">
      <v-btn color="secondary" variant="outlined" @click="$emit('volver')">
        Volver a departamentos
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import CardService from './CardService.vue'

defineProps({
  resultados: {
    type: Array,
    default: () => []
  }
})
</script>
