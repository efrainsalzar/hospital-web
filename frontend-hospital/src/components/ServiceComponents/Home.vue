<script setup>
import Hero from '@/components/shared/Hero.vue';

const image = new URL('@/assets/images/hospital2.jpg', import.meta.url).href;
</script>

<template>
  <Hero
    :image="image"
    title="Servicios"
    main="Hospital USFX"
    description="Inicio / Servicios Hospital USFX"
  />
</template>
