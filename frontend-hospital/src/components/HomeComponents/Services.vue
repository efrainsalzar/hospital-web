<template>
    <section class="py-5 servicios-section">
      <div class="container">
        <h2 class="mb-4 text-center">Nuestros Servicios</h2>
        <div class="scroll-wrapper d-flex overflow-auto pb-3">
          <div
            v-for="(servicio, index) in servicios"
            :key="index"
            class="card mx-2 flex-shrink-0 servicio-card"
          >
            <div class="card-body text-center">
              <i :class="servicio.icono" class="display-6 text-primary mb-3"></i>
              <h5 class="card-title">{{ servicio.titulo }}</h5>
              <p class="card-text">{{ servicio.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const servicios = [
    { titulo: 'Consulta General', descripcion: 'Atención médica primaria y seguimiento.', icono: 'bi bi-heart-pulse' },
    { titulo: 'Pediatría', descripcion: 'Cuidado integral de los niños.', icono: 'bi bi-bandaid' },
    { titulo: 'Laboratorio Clínico', descripcion: 'Análisis clínicos para diagnóstico.', icono: 'bi bi-eyedropper' },
    { titulo: 'Radiología', descripcion: 'Rayos X, ecografías y más.', icono: 'bi bi-x-ray' },
    { titulo: 'Emergencias', descripcion: 'Atención inmediata las 24h.', icono: 'bi bi-exclamation-triangle' },
    { titulo: 'Odontología', descripcion: 'Salud y estética dental.', icono: 'bi bi-tooth' },
    { titulo: 'Farmacia', descripcion: 'Medicamentos y orientación farmacéutica.', icono: 'bi bi-capsule' }
  ]
  </script>
  
  <style scoped>
  .servicios-section {
    background-color: #f8f9fa;
  }
  
  .scroll-wrapper {
    scroll-snap-type: x mandatory;
  }
  
  .servicio-card {
    width: 250px;
    scroll-snap-align: start;
    border: 1px solid #dee2e6;
    border-radius: 0.75rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    background-color: #ffffff;
    transition: transform 0.2s ease;
  }
  
  .servicio-card:hover {
    transform: scale(1.03);
  }
  </style>
  