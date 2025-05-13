<template>
  <v-container class="contenido">
    <v-row class="d-flex justify-space-between">
        <NewsPost />
        <Sidebar />
    </v-row>
  </v-container>
</template>

<script setup>
import NewsPost from '@/components/NoticeComponents/NewsPost.vue'
import Sidebar from  '@/components/NoticeComponents/Sidebar.vue'

</script>

<style scoped>  
.contenido {
  padding: 70px 0;
  max-width: 1200px;
  
}
</style>