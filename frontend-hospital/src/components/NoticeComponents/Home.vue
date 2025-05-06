<script setup>
import Hero from '@/components/shared/Hero.vue';

const image = new URL('@/assets/images/cirugia.webp', import.meta.url).href;
</script>

<template>
  <Hero
    :image="image"
    title="Noticias"
    main="Hospital USFX"
    description="Inicio / Noticias Hospital USFX"
  />
</template>
