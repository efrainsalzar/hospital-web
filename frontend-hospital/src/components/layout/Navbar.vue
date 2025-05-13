<template>
  <!-- Top Bar Emergencias -->
  <v-app-bar :color="topBar.color" density="compact" height="45" scroll-behavior="hide" scroll-threshold="50">
    <v-container class="d-flex justify-end text-caption font-weight-medium">
      {{ topBar.text }}
    </v-container>
  </v-app-bar>

  <!-- Main Navigation -->
  <v-app-bar :color="navBar.color" elevation="1" height="90">
    <v-container class="d-flex align-center px-6">
      <!-- Logo -->
      <router-link to="/" class="text-decoration-none d-flex flex-column">
        <div class="d-flex align-center">
          <span class="text-h4 font-weight-bold text-primary">{{ logo.main }}</span>
          <span class="text-h4 font-weight-bold text-success">{{ logo.alt }}</span>
          <span class="text-h5 font-weight-bold bg-success px-1">&nbsp;{{ logo.symbol }}&nbsp;</span>
        </div>
        <div class="text-h7 text-grey-darken-1 mt-1">{{ logo.subtitle }}</div>
      </router-link>

      <v-spacer></v-spacer>

      <!-- Desktop Menu -->
      <div class="d-none d-md-flex">
        <v-btn
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          variant="text"
          class="font-weight-medium"
          color="black"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <!-- Mobile Nav Icon -->
      <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = !drawer" />
    </v-container>
  </v-app-bar>

  <!-- Drawer Menu for Mobile -->
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list>
      <v-list-item
        v-for="(item, i) in menuItems"
        :key="i"
        :to="item.to"
        :title="item.title"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { layoutData } from './LayoutData';

const drawer = ref(false);

const logo = layoutData.logo;
const topBar = layoutData.topBar;
const navBar = layoutData.navBar;
const menuItems = layoutData.menuItems;
</script>


<style scoped>
.v-list-item {
  padding: 16px 24px;
}
</style>
