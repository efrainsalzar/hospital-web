<script setup>
import Hero from '@/components/shared/Hero.vue';

const image = new URL('@/assets/images/news_3.webp', import.meta.url).href;
</script>

<template>
  <Hero
    :image="image"
    title="Contacto"
    main="Hospital USFX"
    description="Inicio / Contacto Hospital USFX"
  />
</template>
