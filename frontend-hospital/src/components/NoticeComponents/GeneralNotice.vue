<template>
  <v-container class="py-10 text-white">
    <h1 class="text-h4 font-weight-bold mb-6 text-center">Últimas Noticias</h1>

    <!-- Buscador simple -->
    <div class="mb-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Buscar noticias..."
        class="search-input"
      />
    </div>

    <!-- Lista de noticias -->
    <v-row dense>
      <v-col
        v-for="(news, index) in newsList"
        :key="index"
        cols="12"
        v-show="matchesSearch(news)"
        class="mb-6"
      >
        <v-card class="d-flex flex-row" color="#1e1e2f">
          <v-img
            :src="news.image"
            width="180"
            height="140"
            class="rounded-l-lg"
            cover
          ></v-img>

          <v-card-text class="py-4 px-6">
            <h3 class="text-h6 mb-2">{{ news.title }}</h3>
            <p class="text-caption">{{ news.summary }}</p>
            <p class="text-caption mt-2 grey--text">{{ news.date }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')

const newsList = ref([
  {
    title: 'Campaña de vacunación gratuita',
    summary: 'El hospital lanzó una nueva campaña de vacunación abierta al público durante todo abril.',
    date: '2025-04-15',
    image: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
},
  {
    title: 'Nueva unidad de cuidados intensivos inaugurada',
    summary: 'Se habilitaron 10 camas con tecnología de punta para la atención en UCI.',
    date: '2025-04-10',
    image: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
},
  {
    title: 'Semana de salud mental en el hospital',
    summary: 'Charlas gratuitas y orientación psicológica del 22 al 26 de abril.',
    date: '2025-04-08',
    image: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
}
])

// Función declarada fuera del script setup, pero usable en el template
function matchesSearch(news) {
  const query = searchQuery.value.toLowerCase()
  return (
    news.title.toLowerCase().includes(query) ||
    news.summary.toLowerCase().includes(query)
  )
}
</script>

<style scoped>
.search-input {
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: #3a3a3a;
  color: white;
  font-size: 16px;
}
.search-input::placeholder {
  color: #bbb;
}
.v-card {
  transition: box-shadow 0.3s ease;
}
.v-card:hover {
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
}
</style>
