<template>
  <v-app>
    <Navbar />
    <router-view />
    <Footer />
  </v-app>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
</script>
