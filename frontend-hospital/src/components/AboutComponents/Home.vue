<script setup>
import Hero from '@/components/shared/Hero.vue';

const image = new URL('@/assets/images/hospital1.jpg', import.meta.url).href;
</script>

<template>
  <Hero
    :image="image"
    title="Nosotros"
    main="Hospital USFX"
    description="Inicio / Acerca de Hospital USFX"
  />
</template>
