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
          <a href="#">{{ post.title }}</a>
        </h3>

        <ul class="news-meta">
          <li><span>By </span><a href="#">{{ post.author }}</a></li>
          <li><span>in </span>{{ post.category }}</li>
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
import { ref, computed } from 'vue'

// Lista de noticias (4 iguales como ejemplo)
const newsPosts = [
  {
    imagen: new URL('@/assets/images/cirugia.webp', import.meta.url).href,
    date: { day: '15', month: 'March' },
    title: '10 Reasons to make a check up',
    author: 'Dr. William Smith',
    category: 'Therapy',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum.',
  },
  {
    imagen: new URL('@/assets/images/cirugia.webp', import.meta.url).href,
    date: { day: '16', month: 'March' },
    title: 'Importance of Regular Exams',
    author: 'Dr. Anna López',
    category: 'Prevention',
    summary:
      'Aenean in urna facilisis, consequat erat at, lacinia felis. Pellentesque vitae elit nec turpis consectetur laoreet.',
  },
  {
    imagen: new URL('@/assets/images/cirugia.webp', import.meta.url).href,
    date: { day: '17', month: 'March' },
    title: 'Healthy Living Habits',
    author: 'Dr. Susan Lee',
    category: 'Wellness',
    summary:
      'Sed dignissim purus vel sem porttitor, et pretium augue eleifend. Vivamus sit amet nunc erat.',
  },
  {
    imagen: new URL('@/assets/images/cirugia.webp', import.meta.url).href,
    date: { day: '18', month: 'March' },
    title: 'Understanding Mental Health',
    author: 'Dr. Marco Ruiz',
    category: 'Mental Health',
    summary:
      'Fusce a dolor ac nibh fermentum efficitur. Vestibulum sit amet dolor at nulla imperdiet ullamcorper.',
  },
]

// Control de página
const currentPage = ref(1)
const itemsPerPage = 3

// Computar cuántas páginas hay
const totalPages = computed(() => Math.ceil(newsPosts.length / itemsPerPage))

// Computar qué elementos mostrar
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return newsPosts.slice(start, end)
})
</script>

<style scoped>
.news-post {
  background-color: #f8f9fa;
  border-radius: 8px;
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
  border-radius: 4px;
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
