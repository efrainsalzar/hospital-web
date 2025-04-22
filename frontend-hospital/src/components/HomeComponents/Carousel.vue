<template>
    <div id="hospitalCarousel" class="carousel slide" data-bs-ride="carousel">
      <!-- Indicadores -->
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          type="button"
          :data-bs-target="'#hospitalCarousel'"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : null"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>
  
      <!-- Diapositivas -->
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <img :src="slide.image" class="d-block w-100" :alt="slide.alt" />
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>{{ slide.title }}</h5>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>
  
      <!-- Controles -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#hospitalCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#hospitalCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
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
  .carousel-item img {
    height: 700px;
    object-fit: cover;
  }
  
  .carousel-caption {
    bottom: 20px;
  }
  </style>
  