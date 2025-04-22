<template>
    <section class="servicios-container">
      <div
        v-for="(servicio, index) in servicios"
        :key="index"
        class="servicio-card"
      >
        <div class="imgEsp" v-if="servicio.imagen">
          <img :src="servicio.imagen" :alt="servicio.titulo" />
        </div>
        <a :href="servicio.link || '#'" class="titulo">{{ servicio.titulo }}</a>
        <div class="descripcion">{{ servicio.descripcion }}</div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ServiciosHospital",
    data() {
      return {
        servicios: [
          {
            titulo: "Medicina Interna",
            descripcion: "Diagnóstico y tratamiento integral de adultos con enfermedades internas.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Pediatría",
            descripcion: "Cuidado preventivo y curativo para niños y adolescentes.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Ginecología y Obstetricia",
            descripcion: "Atención a la salud reproductiva de la mujer y control del embarazo.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Cirugía General",
            descripcion: "Tratamientos quirúrgicos comunes como apendicitis, hernias, etc.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Traumatología y Ortopedia",
            descripcion: "Diagnóstico y tratamiento de lesiones óseas y musculares.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Cardiología",
            descripcion: "Diagnóstico y tratamiento de enfermedades del corazón.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Neurología",
            descripcion: "Atención de trastornos del sistema nervioso.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Urología",
            descripcion: "Diagnóstico y tratamiento de enfermedades del aparato urinario.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Otorrinolaringología",
            descripcion: "Tratamiento de oído, nariz y garganta.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Oftalmología",
            descripcion: "Cuidado de la salud visual.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Dermatología",
            descripcion: "Diagnóstico y tratamiento de enfermedades de la piel.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Psiquiatría",
            descripcion: "Diagnóstico y tratamiento de trastornos mentales.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Laboratorio Clínico",
            descripcion: "Análisis de muestras para apoyar el diagnóstico médico.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Radiología e Imágenes",
            descripcion: "Estudios como rayos X, ecografías y tomografías.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Farmacia Hospitalaria",
            descripcion: "Suministro y control de medicamentos a los pacientes.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Fisioterapia y Rehabilitación",
            descripcion: "Terapias para recuperación física y funcional.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Nutrición y Dietética",
            descripcion: "Evaluación y orientación nutricional para la salud.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Psicología Clínica",
            descripcion: "Apoyo psicológico en procesos de salud/enfermedad.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Emergencias (Urgencias)",
            descripcion: "Atención inmediata a pacientes en situación crítica.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Hospitalización",
            descripcion: "Estancia hospitalaria según la necesidad médica.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Terapia Intensiva (UCI)",
            descripcion: "Atención especializada para pacientes críticos.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Consulta Externa",
            descripcion: "Atención médica ambulatoria por especialidad.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Atención de Enfermería",
            descripcion: "Cuidado constante y profesional para los pacientes.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
          {
            titulo: "Trabajo Social",
            descripcion: "Apoyo en aspectos sociales y familiares del paciente.",
            imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .servicios-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    padding: 2rem;
  }
  .servicio-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    padding: 1rem;
    transition: transform 0.3s ease;
  }
  .servicio-card:hover {
    transform: translateY(-5px);
  }
  .imgEsp img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    height: 180px;
  }
  .titulo {
    font-size: 1.2rem;
    font-weight: bold;
    color: #0f3460;
    margin: 0.5rem 0;
    display: block;
    text-decoration: none;
  }
  .titulo:hover {
    color: rgb(255, 123, 123);
  }
  .descripcion {
    font-size: 0.95rem;
    color: #444;
  }
  </style>
  