<template>
  <v-container>
    <v-row>
      <!-- Formulario -->
      <v-col cols="12" md="6">
        <v-card elevation="2" class="pa-4">
          <v-card-title class="text-h5 mb-4">Crear Nueva Noticia</v-card-title>

          <v-form ref="formRef" @submit.prevent="submitPost">
            <v-text-field label="Título" v-model="form.title" :rules="[v => !!v || 'El título es requerido']" outlined
              dense class="mb-4" />

            <v-textarea label="Contenido" v-model="form.content" :rules="[v => !!v || 'El contenido es requerido']"
              outlined dense rows="6" class="mb-4" />


            <v-autocomplete label="Buscar Doctor" v-model="form.id_doctor" :items="medicos" item-title="nombre"
              item-value="id" :rules="[v => !!v || 'Debe seleccionar un doctor']" outlined dense clearable class="mb-4"
              prepend-icon="mdi-doctor" return-object @update:model-value="val => {
                form.id_doctor = val?.id || ''
                form.doctor_name = val?.nombre || ''
              }" />


            <v-file-input label="Seleccionar imagen" v-model="form.imageFile" accept="image/*"
              :rules="[v => !!v || 'Debe subir una imagen']" outlined dense class="mb-4" @change="handleImageChange"
              @click:clear="previewImage = null" show-size prepend-icon="mdi-camera" />

            <v-btn type="submit" color="success" block large>
              Agregar Noticia
            </v-btn>
          </v-form>

          <v-alert v-if="successMessage" type="success" class="mt-4" border="left" elevation="2" dismissible
            @input="successMessage = ''">
            {{ successMessage }}
          </v-alert>

          <v-alert v-if="errorMessage" type="error" class="mt-4" border="left" elevation="2" dismissible
            @input="errorMessage = ''">
            {{ errorMessage }}
          </v-alert>
        </v-card>
      </v-col>

      <!-- Vista Previa -->
      <v-col cols="12" md="6">
        <v-card elevation="2" class="pa-4">
          <v-card-title class="text-h5 mb-4">Vista Previa</v-card-title>

          <div class="news-post">
            <div class="news-image">
              <img :src="previewImage || imagenDefecto" alt="Imagen de la noticia" class="preview-img" />
              <div class="news-date">
                <div class="day">{{ currentDate.day }}</div>
                <div class="month">{{ currentDate.month }}</div>
              </div>
            </div>

            <div class="news-body">
              <h3 class="news-title">
                <a>{{ form.title || 'Título de la noticia' }}</a>
              </h3>

              <ul class="news-meta">
                <li><span>Por </span><a>{{ form.doctor_name || 'Autor' }}</a></li>
              </ul>

              <p class="news-summary">
                {{ truncatedContent || 'Aquí aparecerá el contenido de tu noticia...' }}
              </p>

              <div class="news-link">
                <a href="#">Leer más</a>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  title: '',
  content: '',
  doctor_name: '',
  id_doctor: '',
  imageFile: null
})

const formRef = ref(null)
const successMessage = ref('')
const errorMessage = ref('')
const previewImage = ref(null)


const medicos = ref([])
const error = ref(false)
const loading = ref(false)

// Imagen por defecto
const imagenDefecto = new URL('@/assets/images/cirugia.webp', import.meta.url).href

// Fecha actual para la preview
const currentDate = computed(() => {
  const fecha = new Date()
  return {
    day: fecha.getDate().toString().padStart(2, '0'),
    month: fecha.toLocaleString('es-ES', { month: 'short' }).toUpperCase(),
  }
})

// Contenido truncado para la preview
const truncatedContent = computed(() => {
  if (!form.value.content) return ''
  return form.value.content.length > 150
    ? form.value.content.substring(0, 150) + '...'
    : form.value.content
})

// Manejar cambio de imagen
const handleImageChange = (event) => {
  // Obtener el archivo del event o del v-model
  const file = event?.target?.files?.[0] || form.value.imageFile

  if (file && file instanceof File) {
    const reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target.result
    }
    reader.onerror = () => {
      console.error('Error al leer el archivo')
      previewImage.value = null
    }
    reader.readAsDataURL(file)
  } else {
    previewImage.value = null
  }
}

const fetchMedicos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/doctores/')
    medicos.value = response.data.map((medico) => ({
      id: medico.id,
      nombre: medico.nombre
    }))
  } catch (err) {
    console.error('Error al cargar los médicos:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(fetchMedicos)

const submitPost = async () => {
  const isValid = await formRef.value.validate()
  if (!isValid) return

  const formData = new FormData()
  formData.append('title', form.value.title)
  formData.append('content', form.value.content)
  formData.append('id_doctor', form.value.id_doctor)
  formData.append('imageFile', form.value.imageFile)

  try {
    await axios.post('http://localhost:3000/api/noticias/agregar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    successMessage.value = 'Noticia agregada correctamente.'
    errorMessage.value = ''

    setTimeout(() => {
      router.push('/notice')
    }, 3000);
    // Resetear formulario y preview
    form.value = {
      title: '',
      content: '',
      doctor_name: '',
      id_doctor: '',
      imageFile: null
    }
    previewImage.value = null
    formRef.value.reset()
  } catch (error) {
    console.error('Error al agregar la noticia:', error)
    errorMessage.value = 'Ocurrió un error al agregar la noticia. Intenta nuevamente.'
    successMessage.value = ''
  }
}
</script>

<style scoped>
.news-post {
  background-color: #f8f9fa;
  overflow: hidden;
  border-radius: 8px;
}

.news-image {
  position: relative;
}

.preview-img {
  width: 100%;
  height: 200px;
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
  padding: 20px;
}

.news-title a {
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #2c3e50;
  display: block;
  margin-bottom: 8px;
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
  line-height: 1.5;
  margin-bottom: 12px;
}

.news-link a {
  color: #2ecc71;
  font-weight: bold;
  text-decoration: none;
}

.news-link a:hover {
  text-decoration: underline;
}
</style>
