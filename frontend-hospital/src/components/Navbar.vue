<template>
  <div>
    <!-- Top Bar with Emergency Contact -->
    <v-app-bar app color="#263477"density="compact"height="40"  scroll-behavior="hide" scroll-threshold="50">
      <v-container class="d-flex justify-end">
          For Emergencies: +563 47558 623
      </v-container>
    </v-app-bar>

    <!-- Main Navigation -->
    <v-app-bar app color="white"elevation="1"height="80">
      <v-container class="d-flex align-center px-6">
        <!-- Logo -->
        <router-link to="/" class="text-decoration-none d-flex align-center">
          <div class="d-flex align-center">
            <span class="text-h5 font-weight-bold text-primary">Hosp</span>
            <span class="text-h5 font-weight-bold text-success">ital</span>
            <v-icon color="success" size="small" class="ml-1">mdi-plus</v-icon>
          </div>
          <div class="text-caption text-grey-darken-1 ml-2">Universitario SFX</div>
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
  </div>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);

const navItems = [
  { title: 'Home', to: '/' },
  { title: 'About us', to: '/about' },
  { title: 'Services', to: '/service' },
  { title: 'News', to: '/notice' },
  { title: 'Contact', to: '/contact' }
];
</script>

<style scoped>
.emergency-btn {
  font-weight: 500;
}

@media (max-width: 960px) {
  .emergency-btn {
    font-size: 0.8rem;
  }
}
</style>