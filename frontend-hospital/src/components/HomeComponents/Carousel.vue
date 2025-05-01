<template>
  <div class="hero-section">
    <v-img :src="slide.image" height="80vh" cover>
      <div class="caption-left">
        <v-container fill-height class="d-flex align-center">
          <v-sheet class="pa-10 caption-box" elevation="0">
            <h1 class="text-white font-weight-bold text-h2 text-md-h1">{{ slide.title }}</h1>
            <p class="text-white text-subtitle-1 text-md-h5 mt-4">{{ slide.description }}</p>
          </v-sheet>
        </v-container>
      </div>
    </v-img>
  </div>
</template>

<script setup>
const slide = {
  image: new URL('@/assets/images/hospital3.jpg', import.meta.url).href,
  title: 'Medicina con vocación',
  description: 'Brindamos atención con profesionalismo y compromiso humano.',
};
</script>

<style scoped>
.caption-left {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  display: flex;
  align-items: center;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent);
  z-index: 1;
}

.caption-box {
  background-color: transparent;
}

.hero-section {
  position: relative;
}

</style>
