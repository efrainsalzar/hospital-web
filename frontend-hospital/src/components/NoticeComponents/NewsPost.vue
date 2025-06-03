<template>
  <v-col cols="12" md="8">
    <!-- Paginación Superior -->
    <v-pagination v-model="currentPage" :length="totalPages" class="d-flex justify-center mt-6" color="success" />

    <!-- Noticias paginadas -->
    <div v-for="(post, index) in paginatedPosts" :key="index" class="news-post mb-8">
      <div class="news-image">
        <img :src="post.imagen" alt="Imagen de la noticia" @error="e => (e.target.src = imagenDefecto)" />
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
          <a href="#">Leer más</a>
        </div>
      </div>
    </div>

    <!-- Paginación Inferior -->
    <v-pagination v-model="currentPage" :length="totalPages" class="d-flex justify-center mt-6" color="success" />
  </v-col>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

// Estado
const newsPosts = ref([])
const currentPage = ref(1)
const itemsPerPage = 3

// Imagen por defecto
const imagenDefecto = new URL('@/assets/images/cirugia.webp', import.meta.url).href

// Computados
const totalPages = computed(() =>
  Math.ceil(newsPosts.value.length / itemsPerPage)
)

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return newsPosts.value.slice(start, start + itemsPerPage)
})

// Cargar noticias
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/noticias/completo')

    newsPosts.value = response.data.map((item) => {
      const fecha = new Date(item.fecha)
      return {
        title: item.titulo,
        summary: item.contenido,
        date: {
          day: fecha.getDate().toString().padStart(2, '0'),
          month: fecha.toLocaleString('es-ES', { month: 'short' }).toUpperCase(),
        },
        author: item.doctor,
        imagen: `http://localhost:3000/uploads/${item.imagen_path}`,
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
  gap: 8px;
  margin: 12px 0;
  padding: 0;
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
