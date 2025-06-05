<template>
  <div class="hero-section">
    <v-carousel
      height="80vh"
      hide-delimiters
      show-arrows-on-hover
      cycle
      interval="6000"
      v-model="currentSlide"
      transition="fade-transition"
      reverse-transition="fade-transition"
    >
      <v-carousel-item
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide.image"
        cover
      >
        <div class="caption-left">
          <div fill-height class="d-flex align-center m-0">
            <v-sheet class="pa-10 caption-box" elevation="0">
              <div class="slide-content">
                <div class="decorative-element"></div>
                <h1 class="text-white font-weight-bold text-h2 text-md-h1 mb-4">
                  {{ slide.title }}
                </h1>
                <p class="text-white text-subtitle-1 text-md-h5 mt-4 mb-6">
                  {{ slide.description }}
                </p>
                <v-btn
                  color="teal"
                  size="large"
                  rounded="lg"
                  class="text-none font-weight-bold px-8 py-3"
                  elevation="2"
                >
                  {{ slide.buttonText }}
                  <v-icon class="ml-2">mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-sheet>
          </div>
        </div>

        <!-- Indicadores personalizados -->
        <div class="custom-indicators">
          <div
            v-for="(_, i) in slides"
            :key="i"
            class="indicator"
            :class="{ active: i === currentSlide }"
            @click="currentSlide = i"
          ></div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)

const slides = [
  {
    image: new URL('@/assets/images/hospital3.jpg', import.meta.url).href,
    title: 'Medicina con vocación',
    description: 'Brindamos atención con profesionalismo y compromiso humano.',
    buttonText: 'Conoce Más'
  },
  {
    image: new URL('@/assets/images/pronto_soccorso_nuovo_ospedale_07.jpg', import.meta.url).href,
    title: 'Equipo Multidisciplinario',
    description: 'Especialistas altamente capacitados trabajando por tu bienestar.',
    buttonText: 'Nuestros Servicios'
  },
  {
    image: new URL('@/assets/images/shutterstock_168769238.jpg', import.meta.url).href,
    title: 'Tecnología Avanzada',
    description: 'Equipamiento de última generación para diagnósticos precisos.',
    buttonText: 'Ver Instalaciones'
  },
  {
    image: new URL('@/assets/images/yampa-valley-medical-ed-expansion-3.jpg', import.meta.url).href,
    title: 'Atención Personalizada',
    description: 'Cada paciente es único y merece un cuidado especializado.',
    buttonText: 'Agendar Cita'
  }
]
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.caption-left {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(1, 0, 77, 0.425) 50%, transparent 100%);
  z-index: 2;
}

.caption-box {
  background-color: transparent;
  position: relative;
}

.slide-content {
  position: relative;
  margin-left: 150px;
  width: 70%;
  animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.decorative-element {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #26a6a0, #4daab6);
  margin-bottom: 1.5rem;
  border-radius: 2px;
  animation: expandWidth 1s ease-out 0.3s both;
}

.custom-indicators {
  position: absolute;
  bottom: 2rem;
  left: 3rem;
  display: flex;
    margin-left: 150px;
  gap: 0.75rem;
  z-index: 3;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
}

.indicator:hover {
  background-color: rgba(255, 255, 255, 0.6);
  transform: scale(1.1);
}

.indicator.active {
  background-color: #2628a6;
  border-color: white;
  transform: scale(1.2);
}

/* Animaciones */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes expandWidth {
  from {
    width: 0;
  }
  to {
    width: 80px;
  }
}

/* Estilos del botón mejorados */
.v-btn {
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 15px rgba(38, 51, 166, 0.3) !important;
}

.v-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(38, 166, 81, 0.4) !important;
}


/* Transiciones suaves personalizadas */
:deep(.v-window-item) {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

:deep(.fade-transition-enter-active),
:deep(.fade-transition-leave-active) {
  transition: opacity 1.2s ease-in-out !important;
}

:deep(.fade-transition-enter-from),
:deep(.fade-transition-leave-to) {
  opacity: 0 !important;
}

/* Mejoras visuales para el carrusel */
:deep(.v-carousel__controls) {
  display: none;
}

:deep(.v-window__prev),
:deep(.v-window__next) {
  background: rgba(38, 125, 166, 0.8) !important;
  color: white !important;
  border-radius: 50% !important;
  width: 48px !important;
  height: 48px !important;
  margin: 0 1rem !important;
}

:deep(.v-window__prev):hover,
:deep(.v-window__next):hover {
  background: rgba(38, 166, 154, 1) !important;
  transform: scale(1.1);
}
</style>
