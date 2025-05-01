<template>
  <v-main>
    <Carousel />
    <Boxes />
    <About />
    <Services />
    <Map />
  </v-main>
</template>

<script setup>
import Carousel from '@/components/HomeComponents/Carousel.vue'
import About from '@/components/HomeComponents/About.vue';
import Services from '@/components/HomeComponents/Services.vue';
import Map from '@/components/HomeComponents/Map.vue';
import Boxes from '@/components/HomeComponents/Boxes.vue';
</script>
