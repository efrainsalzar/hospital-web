<template>
    <section class="container py-5">
      <div class="row align-items-center">
        <!-- Mapa interactivo como imagen -->
        <div class="col-md-6 mb-4 mb-md-0">
          <a
            href="https://maps.app.goo.gl/MrEZHyetiCLagtfE6"
            target="_blank"
            class="d-block position-relative"
          >
            <img
              src="@/assets/images/ubicacion.png"
              alt="Ubicación del Hospital"
              class="img-fluid rounded shadow"
            />
            <div class="map-overlay position-absolute top-0 start-0 w-100 h-100 rounded"></div>
          </a>
        </div>
  
        <!-- Información de contacto -->
        <div class="col-md-6">
          <h3 class="mb-3 fw-bold">Contáctanos</h3>
          <ul class="list-unstyled text-muted">
            <li class="mb-2">
              <strong>📍 Dirección:</strong> Avenida Villar, Sucre, Bolivia
            </li>
            <li class="mb-2">
              <strong>📞 Teléfono:</strong> (591) 4-1234567
            </li>
            <li class="mb-2">
              <strong>📧 Email:</strong> contacto@hospital.com
            </li>
            <li class="mb-2">
              <strong>🕒 Horario:</strong> Lunes a Viernes - 08:00 a 18:00
            </li>
          </ul>
          <button class="btn btn-primary mt-3">Enviar mensaje</button>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .map-overlay {
    background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1));
    pointer-events: none;
  }
  </style>
  