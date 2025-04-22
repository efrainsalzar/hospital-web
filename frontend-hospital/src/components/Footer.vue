<template>
    <footer class="footer text-white pt-5 pb-3">
      <div class="container">
        <div class="row">
          <!-- Logo y breve descripción -->
          <div class="col-md-3 mb-4">
            <!--<img src="/logo-hospital-blanco.png" alt="Logo Hospital" class="mb-3" style="max-width: 150px;" />-->
            <p class="small">
              Hospital Universitario San Francisco Xavier, comprometido con la salud de nuestra comunidad.
            </p>
          </div>
  
          <!-- Enlaces importantes -->
          <div class="col-md-3 mb-4">
            <h5>Enlaces</h5>
            <ul class="list-unstyled">
              <li><a href="/nosotros" class="footer-link">Sobre Nosotros</a></li>
              <li><a href="/servicios" class="footer-link">Servicios Médicos</a></li>
              <li><a href="/doctores" class="footer-link">Especialistas</a></li>
              <li><a href="/contacto" class="footer-link">Contacto</a></li>
              <li><a href="/citas" class="footer-link">Citas Online</a></li>
            </ul>
          </div>
  
          <!-- Contacto -->
          <div class="col-md-3 mb-4">
            <h5>Contacto</h5>
            <ul class="list-unstyled small">
              <li>Avenida Villar, Sucre - Bolivia</li>
              <li>📞 (591) 4-1234567</li>
              <li>📧 contacto@hospital.com</li>
              <li>🕒 Lun - Vie: 08:00 a 18:00</li>
            </ul>
          </div>
  
          <!-- Redes sociales -->
          <div class="col-md-3 mb-4">
            <h5>Síguenos</h5>
            <div class="d-flex gap-3">
              <a href="#" class="text-white fs-4"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-white fs-4"><i class="bi bi-instagram"></i></a>
              <a href="#" class="text-white fs-4"><i class="bi bi-whatsapp"></i></a>
              <a href="#" class="text-white fs-4"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
  
        <hr class="border-top border-light" />
  
        <div class="row">
          <div class="col-md-6 text-center text-md-start small">
            © {{ new Date().getFullYear() }} Hospital San Francisco Xavier. Todos los derechos reservados.
          </div>
          <div class="col-md-6 text-center text-md-end small">
            <a href="#" class="footer-link">Aviso de privacidad</a> |
            <a href="#" class="footer-link">Términos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  // No necesitas lógica aquí
  </script>
  
  <style scoped>
  .footer {
    background-color: #101820;
  }
  
  .footer-link {
    color: #ccc;
    text-decoration: none;
  }
  
  .footer-link:hover {
    color: #ffffff;
    text-decoration: underline;
  }
  </style>
  