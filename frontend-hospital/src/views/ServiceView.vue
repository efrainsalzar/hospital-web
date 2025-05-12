<template>
  <v-main>
    <Home />
    <CardService />
    <Cta />
    <!-- otras secciones -->
  </v-main>
</template>

<script setup>
import Home from '@/components/ServiceComponents/Home.vue';
import CardService from '@/components/ServiceComponents/CardService.vue';
import Cta from '@/components/shared/cta.vue';

</script>