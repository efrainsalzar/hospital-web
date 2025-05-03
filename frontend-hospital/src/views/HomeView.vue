<template>
  <v-main>
    <Presentacion />
    <Boxes />
    <About />
    <Departament />
    <Service />
  </v-main>
</template>

<script setup>
import Presentacion from '@/components/HomeComponents/Presentacion.vue'
import About from '@/components/HomeComponents/About.vue';
import Departament from '@/components/HomeComponents/Departament.vue';
import Service from '@/components/HomeComponents/Service.vue';
import Boxes from '@/components/HomeComponents/Boxes.vue';
</script>
