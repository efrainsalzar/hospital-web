<template>
  <v-main>
    <Presentacion />
    <Boxes />
    <About />
    <Services />
    <Map />
  </v-main>
</template>

<script setup>
import Presentacion from '@/components/HomeComponents/Presentacion.vue'
import About from '@/components/HomeComponents/About.vue';
import Services from '@/components/HomeComponents/Services.vue';
import Map from '@/components/HomeComponents/Map.vue';
import Boxes from '@/components/HomeComponents/Boxes.vue';
</script>
