<script setup>
import Hero from '@/components/shared/cta_contac.vue';

const image = new URL('@/assets/images/news_2.webp', import.meta.url).href;
</script>

<template>
  <Hero
    :image="image"
    title="¿Tienes una emergencia médica?"
    main=" Nuestro equipo está disponible las 24 horas."
  />
</template>
