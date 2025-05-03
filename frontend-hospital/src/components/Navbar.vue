<template>

    <!-- Top Bar with Emergency Contact -->
    <v-app-bar color="#263477"density="compact"height="45"  scroll-behavior="hide" scroll-threshold="50">
      <v-container class="d-flex justify-end">
          For Emergencies: +563 47558 623
      </v-container>
    </v-app-bar>

    <!-- Main Navigation -->
    <v-app-bar color="white"elevation="1"height="90">
      <v-container class="d-flex align-center px-6">
        <!-- Logo -->
        <router-link to="/" class="text-decoration-none d-flex flex-column">
          <div class="d-flex align-center">
            <span class="text-h4 font-weight-bold text-primary">Hosp</span>
            <span class="text-h4 font-weight-bold text-success">ital</span>
            <span class="text-h5 font-weight-bold bg-success">&nbsp;+&nbsp;</span>
          </div>
          <div class="text-h7 text-grey-darken-1 mt-1">Universitario SFX</div>
        </router-link>

        <v-spacer></v-spacer>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex">
          <v-btn
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.to"
            variant="text"
            class="font-weight-medium"
            color="black"
          >
            {{ item.title }}
          </v-btn>
        </div>

        <!-- Mobile Navigation -->
        <v-app-bar-nav-icon
          class="d-flex d-md-none"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.to"
          :title="item.title"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);

const navItems = [
  { title: 'Inicio', to: '/' },
  { title: 'Nosotros', to: '/about' },
  { title: 'Servicios', to: '/service' },
  { title: 'Noticias', to: '/notice' },
  { title: 'Contacto', to: '/contact' }
];
</script>

<style scoped>
</style>