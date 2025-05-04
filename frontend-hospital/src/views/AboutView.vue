<template>
  <v-main>
    <Home />
    <About />
    <VisionMision />
    <TeamMedical />
    <Valores />
    <!--<GeneralAbout />-->
    
  </v-main>
</template>

<script setup>
import Home from '@/components/AboutComponents/Home.vue';
import About from '@/components/AboutComponents/About.vue';
import VisionMision from '@/components/AboutComponents/VisionMision.vue';
import TeamMedical from '@/components/AboutComponents/TeamMedical.vue';
import Valores from '@/components/AboutComponents/Valores.vue';
import GeneralAbout from '@/components/AboutComponents/GeneralAbout.vue';
</script>