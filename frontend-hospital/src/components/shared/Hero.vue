<template>
    <section class="hero-section">
      <v-img :src="image" height="450" cover class="hero-img">
        <div class="overlay"></div>
        <v-container class="fill-height d-flex align-center">
          <div class="hero-caption">
            <h2 class="text-white font-weight-bold text-h4 text-md-h3">
              {{ title }}
              <span class="text-success ms-2">{{ main }}</span>
            </h2>
            <p class="text-white text-subtitle-1 font-weight-medium mt-3">
              {{ description }}
            </p>
          </div>
        </v-container>
      </v-img>
    </section>
  </template>
  
  <script setup>
  defineProps({
    image: String,
    title: String,
    main: String,
    description: String
  });
  </script>
  
  <style scoped>
  .overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
  .hero-section {
    position: relative;
  }
  .hero-caption {
    max-width: 1000px;
    padding: 2rem;
    background-color: transparent;
    z-index: 1;
  }
  </style>
  