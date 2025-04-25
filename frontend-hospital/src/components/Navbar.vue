<template>
  <header class="fixed-header">
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">Hospital USFX</router-link>
      </div>
      <ul class="nav-links">
        <li><router-link to="/service">Servicios</router-link></li>
        <li><router-link to="/about">Nosotros</router-link></li>
        <li><router-link to="/notice">Noticias</router-link></li>
        <li><router-link to="/contact">Contacto</router-link></li>
        
        <li class="text-white">
          Logo
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// no es necesario agregar lógica aquí por ahora
</script>

<style scoped>
/* Estilos del Navbar */

.fixed-header {
  top: 0;
  left: 0;
  width: 100%;
  background-color: #16213e;
  padding: 1rem 2rem;
  position: fixed;
  z-index: 999; /* Asegura que esté por encima del contenido */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Sombra opcional para elegancia */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.logo {
  
  display: flex;
  align-items: center;
}
.logo a {
  text-decoration: none;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
}


.nav-links {
  list-style-type: none;
  display: flex;
  padding: 0;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #ffffff;
  font-size: 1rem;
}

.nav-links a:hover {
  color: #7646cf;
}
.logo a:hover {
  color: #7646cf;
}
/* Responsive: Menú en pantallas pequeñas */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .nav-links.active {
    display: flex;
  }

  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links li {
    margin-left: 0;
    margin-top: 10px;
  }

  .menu-toggle {
    display: block;
    cursor: pointer;
    color: #ffffff;
    font-size: 1.5rem;
  }
}


.search-icon {
  font-size: 1.2rem;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.3s ease;
}

.search-icon:hover {
  color: #7646cf;
}
</style>
