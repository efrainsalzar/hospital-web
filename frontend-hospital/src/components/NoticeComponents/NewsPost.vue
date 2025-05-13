<template>
  <v-col cols="12" md="8">
    <div
      v-for="(post, index) in paginatedPosts"
      :key="index"
      class="news-post mb-8"
    >
      <div class="news-image">
        <img :src="post.imagen" alt="Imagen de la noticia" />
        <div class="news-date">
          <div class="day">{{ post.date.day }}</div>
          <div class="month">{{ post.date.month }}</div>
        </div>
      </div>

      <div class="news-body">
        <h3 class="news-title">
          <a>{{ post.title }}</a>
        </h3>

        <ul class="news-meta">
          <li><span>Por </span><a>{{ post.author }}</a></li>
        </ul>

        <p class="news-summary">{{ post.summary }}</p>

        <div class="news-link">
          <a href="#">Read More</a>
        </div>
      </div>
    </div>

    <!-- Paginación -->
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      class="d-flex justify-center mt-6"
      color="success"
    />
  </v-col>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

// Imagen por defecto
const imagen_defecto = new URL('@/assets/images/cirugia.webp', import.meta.url).href

// Noticias obtenidas del backend
const newsPosts = ref([])

// Lógica para paginación
const currentPage = ref(1)
const itemsPerPage = 3

const totalPages = computed(() => Math.ceil(newsPosts.value.length / itemsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return newsPosts.value.slice(start, end)
})

// Obtener datos desde tu API al montar
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/noticias/completo') // Cambia al endpoint real

    // Adaptar datos al formato que espera tu template
    newsPosts.value = response.data.map(item => {
      const fecha = new Date(item.fecha)
      return {
        title: item.titulo,
        summary: item.contenido,
        date: {
          day: fecha.getDate().toString().padStart(2, '0'),
          month: fecha.toLocaleString('es-ES', { month: 'short' }).toUpperCase()
        },
        author: item.doctor,
        imagen: imagen_defecto // Usando la imagen por defecto
      }
    })
  } catch (error) {
    console.error('Error cargando noticias:', error)
  }
})
</script>


<style scoped>
.news-post {
  background-color: #f8f9fa;

  overflow: hidden;
}

.news-image {
  position: relative;
}
.news-image img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}
.news-date {
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: #2ecc71;
  color: #fff;
  padding: 8px 10px;
  border-radius: 2px;
  text-align: center;
  font-weight: bold;
}
.news-date .day {
  font-size: 20px;
}
.news-date .month {
  font-size: 12px;
  text-transform: uppercase;
}
.news-body {
  padding: 24px;
}
.news-title a {
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  color: #2c3e50;
}
.news-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 12px 0;
  list-style: none;
}
.news-meta a {
  color: #2ecc71;
  font-weight: 500;
  text-decoration: none;
}
.news-summary {
  color: #444;
}
.news-link a {
  color: #2ecc71;
  font-weight: bold;
  text-decoration: none;
}
</style>
