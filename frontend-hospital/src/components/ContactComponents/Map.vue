<template>
  <v-container class="contenido">
    <v-card>
      <v-card-text>
        <div class="map-wrapper">
          <div class="map-overlay"></div>
          <div ref="mapContainer" class="map-container"></div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'LeafletMapComponent',
  setup() {
    const mapContainer = ref(null)
    let map = null

    const lat = -19.0284288
    const lng = -65.2567895

    onMounted(() => {
      if (mapContainer.value) {
        map = L.map(mapContainer.value).setView([lat, lng], 16)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map)

        const popupContent = `
          <strong>Hospital Universitario de Sucre</strong><br/>
          Sincelejo, Sucre, Colombia<br/>
          <a href="https://www.google.com/maps/place/Hospital+Universitario+de+USFX/@-19.0284718,-65.2582832,17z/data=!3m1!4b1!4m6!3m5!1s0x93fbc8c60c733af5:0x6aa55dbd09615ef9!8m2!3d-19.0284718!4d-65.2569957!16s%2Fg%2F1tjyptfr?entry=ttu&g_ep=EgoyMDI1MDYwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank">
            <button style="margin-top: 8px; padding: 6px 10px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
              Ir a Google Maps
            </button>
          </a>
        `

        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(popupContent)
          .openPopup()
      }
    })

    onUnmounted(() => {
      if (map) {
        map.remove()
      }
    })

    return { mapContainer }
  }
}
</script>

<style scoped>
.contenido {
  margin-top: 70px 0;
  max-width: 1200px;
}

.map-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
}

.map-container {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* sombra oscura */
  z-index: 2;
  pointer-events: none; /* permite interactuar con el mapa */
}
</style>
