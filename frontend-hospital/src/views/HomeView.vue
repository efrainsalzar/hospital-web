<template>
  <v-main>
    <Presentacion />
    <BoxesInfo />
    <About />
    <Departament />
    <Service />
    <Cta />
  </v-main>
</template>

<script setup>
import Presentacion from '@/components/HomeComponents/Presentacion.vue'
import BoxesInfo from '@/components/HomeComponents/BoxesInfo.vue';
import About from '@/components/HomeComponents/About.vue';
import Departament from '@/components/HomeComponents/Departament.vue';
import Service from '@/components/HomeComponents/Service.vue';
import Cta from '@/components/shared/cta.vue';
</script>
