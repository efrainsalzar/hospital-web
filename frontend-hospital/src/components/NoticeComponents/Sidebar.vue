<template>
  <!-- Sidebar -->
  <v-col cols="12" md="4">
    <div class="sidebar">

      <!-- Search -->
      <div class="sidebar_search mb-6">
        <v-text-field v-model="searchQuery" placeholder="Search" append-inner-icon="mdi-magnify" dense hide-details solo
          color="success"></v-text-field>
      </div>

      <!-- Categories -->
      <div class="sidebar_section mb-6">
        <div class="sidebar_section_title">
          <div class="sidebar_title">Categorias</div>
        </div>
        <ul>
          <li v-for="(cat, i) in categories" :key="i"><a href="#">{{ cat }}</a></li>
        </ul>
      </div>

      <!-- Archives -->
      <div class="sidebar_section mb-6">
        <div class="sidebar_section_title">
          <div class="sidebar_title">Archivos</div>
        </div>
        <ul>
          <li v-for="(archive, i) in archives" :key="i"><a href="#">{{ archive }}</a></li>
        </ul>
      </div>

      <!-- Working Hours -->
      <v-card v-for="(card, i) in infoCards" :key="i" class="info-card mb-4" color="indigo-darken-3" elevation="3">
        <v-card-item>
          <div class="text-white d-flex align-center justify-center pb-2">
            <v-icon>mdi-clock-time-four</v-icon>
          </div>
          <v-card-title class="text-white text-h6">{{ card.title }}</v-card-title>
        </v-card-item>
        <v-card-text class="text-white">
          <template v-if="card.lines">
            <div v-for="(line, j) in card.lines" :key="j" class="d-flex justify-space-between mb-2">
              <span>{{ line.day }}</span>
              <span>{{ line.time }}</span>
            </div>
          </template>
          <template v-else>
            <p v-if="card.phone" class="text-h5  text-light-green-accent-3 mb-2">
              {{ card.phone }}
            </p>
            <p v-for="(text, j) in card.description" :key="j">{{ text }}</p>
          </template>
        </v-card-text>
      </v-card>

      <!-- Ad -->
      <div class="ad d-flex flex-column align-items-center justify-content-end">
        <div class="ad_background" :style="`background-image: url('${ad.imagen}')`"></div>
        <div class="ad_content">
          <div class="ad_text" v-html="ad.text"></div>
          <div class="button ad_button"><a :href="ad.link">leer mas</a></div>
        </div>
      </div>
        <v-btn to="/notice/nueva" color="primary" class="mt-2">
          Nueva noticia
        </v-btn>
    </div>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')

const categories = [
  'Articulos de Salud',
  'Terapia',
  'Informacion General',
  'Sin Categoría',
]

const archives = [
  'Diciembre 2017',
  'Enero 2018',
  'Febrero 2018',
  'Marzo 2018',
]
const infoCards = ref([
  {
    title: 'Horario de Atención',
    lines: [
      { day: 'Lunes – Viernes', time: '7:00 – 19:00' },
      { day: 'Sábado', time: '8:00 – 14:00' },
      { day: 'Domingo', time: '24 horas' }
    ]
  }])

const ad = {
  imagen: new URL('@/assets/images/cirugia.webp', import.meta.url).href,
  text: 'ven y hazte un chequeo gratis',
  link: '#',
}
</script>

<style scoped>
/* Sidebar */
.sidebar_title {
  font-weight: 600;
  font-size: 16px;
  border-bottom: 2px solid #2ecc71;
  padding-bottom: 8px;
  margin-bottom: 12px;
}

.sidebar_section ul {
  padding-left: 0;
  list-style: none;
}

.sidebar_section ul li a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.sidebar_section ul li a:hover {
  color: #2ecc71;
}

/* Ad styles */
.ad {
  position: relative;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
}

.ad_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
}

.ad_content {
  position: relative;
  z-index: 2;
  color: white;
  padding: 20px;
}

.ad_text span {
  font-weight: bold;
  color: #2ecc71;
}

.ad_button a {
  color: white;
  background-color: #2ecc71;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
}

.info-card {
  border-radius: 6px;
  border-bottom: 4px solid #76ff03;
  /* Verde más natural */
  padding: 5px 25px;
  height: 200px;
}
</style>
