<template>
    <section class="about-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <!-- Texto -->
          <div class="col-md-6 mb-4 mb-md-0">
            <h2 class="mb-3">Acerca del Hospital</h2>
            <p>
              Fundado con una profunda vocación de servicio, el Hospital Universitario Dr. Antón Boel Villadsen es un pilar fundamental en la atención médica de Sucre y la región. Combinamos una rica historia con la constante actualización de nuestros servicios y la dedicación de un equipo de profesionales altamente calificados para brindar una atención integral y de calidad a nuestros pacientes.            </p>
            <router-link to="/about" class="btn btn-primary mt-3">Leer más</router-link>
          </div>
  
          <!-- Imagen -->
          <div class="col-md-6 text-center">
            <img src="@/assets/images/hospital1.jpg" alt="Hospital" class="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .about-section {
    background-color: #f8f9fa;
  }
  
  .about-section h2 {
    font-weight: bold;
  }
  
  .about-section img {
    max-height: 300px;
    object-fit: cover;
  }
  </style>
  