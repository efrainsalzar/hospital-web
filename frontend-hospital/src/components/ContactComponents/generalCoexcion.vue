<template>
  <v-main>
    <v-container>
      <h1>Lista de Doctores</h1>

      <!-- Mensaje de carga -->
      <div v-if="loading">Cargando doctores...</div>

      <!-- Mensaje de error -->
      <div v-if="error">Hubo un error al cargar los doctores. Intenta nuevamente.</div>

      <!-- Lista de doctores -->
      <div v-if="doctors && doctors.length > 0">
        <ul>
          <li v-for="doctor in doctors" :key="doctor.id">
            <h3>{{ doctor.nombre }}</h3>
            <img 
            :src="getDoctorImage(doctor.foto_url)" 
            :alt="`Foto de ${doctor.nombre}`" 
            @error="onImageError" />

            <p><strong>Especialidad:</strong> {{ doctor.especialidad_nombre }}</p>
          </li>
        </ul>
      </div>

      <!-- Si no hay doctores -->
      <div v-else>
        <p>No se encontraron doctores.</p>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      doctors: [],
      loading: true,
      error: false,
      fotoPorDefecto: new URL('@/assets/images/default_profile.jpg', import.meta.url).href
    };
  },

  mounted() {
    this.fetchDoctors();
  },
  methods: {
    async fetchDoctors() {
      try {
        const response = await axios.get('http://localhost:3000/api/doctores/completo');
        this.doctors = response.data;
        this.loading = false;
      } catch (error) {
        console.error('Error al cargar los doctores:', error);
        this.error = true;
        this.loading = false;
      }
    },
    onImageError(event) {
      event.target.src = fotoPorDefecto;
    },
    getDoctorImage(fotoUrl) {
  return fotoUrl && fotoUrl.trim() !== '' ? fotoUrl : this.fotoPorDefecto;
}

  }
};
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

h3 {
  margin: 10px 0;
}
</style>
