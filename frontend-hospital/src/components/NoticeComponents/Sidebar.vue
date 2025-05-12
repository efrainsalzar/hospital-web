<!-- src/components/Sidebar.vue -->
<template>
<!-- Sidebar -->
      <v-col cols="12" md="4">
        <div class="sidebar">

          <!-- Search -->
          <div class="sidebar_search mb-6">
            <v-text-field
              v-model="searchQuery"
              placeholder="Search"
              append-inner-icon="mdi-magnify"
              dense
              hide-details
              solo
              color="success"
            ></v-text-field>
          </div>

          <!-- Categories -->
          <div class="sidebar_section mb-6">
            <div class="sidebar_section_title">
              <div class="sidebar_title">Categories</div>
            </div>
            <ul>
              <li v-for="(cat, i) in categories" :key="i"><a href="#">{{ cat }}</a></li>
            </ul>
          </div>

          <!-- Archives -->
          <div class="sidebar_section mb-6">
            <div class="sidebar_section_title">
              <div class="sidebar_title">Archives</div>
            </div>
            <ul>
              <li v-for="(archive, i) in archives" :key="i"><a href="#">{{ archive }}</a></li>
            </ul>
          </div>

          <!-- Working Hours -->
          <div class="sidebar_section mb-6">
            <div class="sidebar_section_title">
              <div class="sidebar_title">Working Hours</div>
            </div>
            <ul>
              <li v-for="(hour, i) in workingHours" :key="i" class="d-flex justify-space-between">
                <span>{{ hour.day }}</span><span>{{ hour.hours }}</span>
              </li>
            </ul>
          </div>

          <!-- Ad -->
          <div class="ad d-flex flex-column align-items-center justify-content-end">
            <div class="ad_background" :style="`background-image: url('${ad.imagen}')`"></div>
            <div class="ad_content">
              <div class="ad_text" v-html="ad.text"></div>
              <div class="button ad_button"><a :href="ad.link">read more</a></div>
            </div>
          </div>
        </div>
      </v-col>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')

const categories = [
  'Medical Articles',
  'Therapy',
  'Useful Information',
  'Uncategorized',
]

const archives = [
  'December 2017',
  'January 2018',
  'February 2018',
  'March 2018',
]

const workingHours = [
  { day: 'Monday – Friday', hours: '8.00 – 19.00' },
  { day: 'Saturday', hours: '9.30 – 17.00' },
  { day: 'Sunday', hours: '9.30 – 15.00' },
]

const ad = {
  imagen: new URL('@/assets/images/cirugia.webp', import.meta.url).href,
  text: 'Come and take a <span>free screening</span>',
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
</style>