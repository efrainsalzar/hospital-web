<template>
  <v-container fluid class="contenido-primary">
    <v-container class="contenido py-0">
      <v-row fluid>
        <v-col class="mb-md-0">
          <div class="text-white text-h4 font-weight-bold mb-4">Nuestros Servicios</div>
        </v-col>
      </v-row>
      <v-row justify="center" align="stretch" class="ma-0 d-flex mt-10">
        <!-- Tarjetas dinámicas -->
        <v-col
          v-for="(item, index) in cards"
          :key="index"
          cols="12"
          sm="6"
          md="3"
          class="d-flex"
          
        >
          <v-card class="card-hover flex-grow-1">
            <v-img :src="item.image" max-width="100%" height="183"></v-img>
            <v-card-title class="text-center">{{ item.title }}</v-card-title>
          </v-card>
        </v-col>

        <!-- Cuarta tarjeta con fondo transparente con texto y botón -->
        <v-col cols="12" sm="6" md="3">
          <v-card class="text-white pa-3 bg-transparent" style="border:none; box-shadow: none;">
            <div class="text-h6 font-weight-bold mb-3">Un enfoque centrado en la salud</div>
            <p class="text-body-1">
              En nuestro hospital, trabajamos con compromiso y pasión para ofrecer atención médica integral, 
              con tecnología moderna y un equipo de profesionales altamente capacitados.
            </p>
            <v-btn width="100%" color="primary" class="mt-4" to="/about">Ver más</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
const cards = [
  {
    title: 'Pediatría',
    image: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
  },
  {
    title: 'Cirugía General',
    image: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
  },
  {
    title: 'Emergencias',
    image: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href  }
]
</script>

<style scoped>
.contenido-primary {
  background: #283593;
  padding: 70px 0;
}
.contenido {
  max-width: 1200px;
}
.card-hover {
  border-bottom: 6px solid #4CAF50;
}

</style>
