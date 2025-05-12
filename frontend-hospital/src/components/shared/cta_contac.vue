<template>
  <section class="hero-section">
    <v-img :src="image" height="450" cover class="hero-img">
      <div class="overlay"></div>
      <v-container class="fill-height d-flex justify-center align-center">
        <div class="hero-caption text-center">
          <h2 class="text-white font-weight-bold text-h4 text-md-h3">
            {{ title }}
          </h2>
          <div class="text-white text-h6 font-weight-medium mt-2">
            {{ main }}
          </div>
          <p class="text-white text-subtitle-1 font-weight-medium mt-3">
            {{ description }}
          </p>
          <v-btn class="boton mt-10" to="/contact">
            Contacto
          </v-btn>
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
.hero-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 1px 0;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(45, 45, 140, 0.7); /* azul más oscuro, mayor opacidad */
  z-index: 1;
}

.hero-img {
  position: relative;
}

.hero-caption {
  z-index: 2;
  position: relative;
  padding: 2rem;
}
.boton{
    background-color: #262679;
    text-size-adjust: 1rem;
    color: white;
    font-weight: bold;
    border-top: #4b4b4b 1px solid;
    border-left: #4b4b4b 1px solid;
    border-right: #4b4b4b 1px solid;
    border-bottom: #28a745 2px solid;
    transition: background-color 0.3s, color 0.3s;
}
.boton:hover{
    background-color: #28a745;
    color: white;
}
</style>
