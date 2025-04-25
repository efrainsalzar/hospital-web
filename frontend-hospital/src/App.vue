<template>
  <div id="app">
    <Navbar />
    <v-container class="py-10" />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.py-10 {
  margin-top: 15px !important;
}
</style>