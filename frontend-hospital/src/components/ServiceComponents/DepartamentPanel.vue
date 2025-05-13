<template>
  <v-expansion-panels multiple>
    <v-expansion-panel
      v-for="(dpto, i) in departamentos"
      :key="i"
      class="mb-6"
    >
      <v-expansion-panel-title class="departamento-nombre text-h5">
        {{ dpto.nombre }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row>
          <v-col
            v-for="(servicio, j) in dpto.servicios"
            :key="j"
            cols="12"
            md="6"
            lg="4"
            class="d-flex"
          >
            <CardService :servicio="servicio" />
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import CardService from './CardService.vue'

defineProps({
  departamentos: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.departamento-nombre {
  background-color: #283593;
  color: white;
  padding-bottom: 4px;
}
</style>
