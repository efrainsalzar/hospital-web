<template>
  <v-carousel height="700px" hide-delimiter-background show-arrows>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.image"
      cover
    >
      <div class="slide-caption">
        <v-container fill-height class="d-flex align-center justify-center text-center">
          <v-sheet class="pa-4" color="rgba(0, 0, 0, 0.5)" rounded>
            <h2 class="text-white">{{ slide.title }}</h2>
            <p class="text-white">{{ slide.description }}</p>
          </v-sheet>
        </v-container>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const slides = [
  {
    image: new URL('@/assets/images/hospital1.jpg', import.meta.url).href,
    alt: 'Instalaciones modernas',
    title: 'Instalaciones Modernas',
    description: 'Contamos con tecnología de punta para el cuidado de tu salud.',
  },
  {
    image: new URL('@/assets/images/hospital2.jpg', import.meta.url).href,
    alt: 'Atención personalizada',
    title: 'Atención Personalizada',
    description: 'Nuestro equipo está comprometido con cada paciente.',
  },
  {
    image: new URL('@/assets/images/hospital3.jpg', import.meta.url).href,
    alt: 'Profesionales capacitados',
    title: 'Profesionales Capacitados',
    description: 'Médicos especializados y en constante actualización.',
  },
];
</script>

<style scoped>
.slide-caption {
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
}
</style>
