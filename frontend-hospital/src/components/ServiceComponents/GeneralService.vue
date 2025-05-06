<template>
  <v-container class="contenido">
    <v-row>
      <v-col
        v-for="(servicio, index) in servicios"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <TarjetaServicio :servicio="servicio" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import serviciosBase from "./infoServicies.js";
import TarjetaServicio from "./CardService.vue";

export default {
  name: "ServiciosHospital",
  components: {
    TarjetaServicio
  },
  data() {
    return {
      servicios: serviciosBase
    };
  }
};
</script>

<style scoped>
.contenido {
  max-width: 1200px;
}
</style>
