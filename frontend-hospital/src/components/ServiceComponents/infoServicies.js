// src/data/serviciosData.js
const servicios = [
  {
    titulo: "Medicina Interna",
    descripcion: "Diagnóstico y tratamiento integral de adultos con enfermedades internas.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    horario: "Lunes a Viernes de 08:00 a 16:00",
    fichasDiarias: 20,
    doctores: ["Dr. Carlos Méndez", "Dra. Laura Rivas"]
  },
  {
    titulo: "Pediatría",
    descripcion: "Cuidado preventivo y curativo para niños y adolescentes.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    horario: "Lunes a Sábado de 07:30 a 13:00",
    fichasDiarias: 25,
    doctores: ["Dra. Ana Salvatierra", "Dr. Jorge Linares"]
  },
  {
    titulo: "Ginecología y Obstetricia",
    descripcion: "Atención a la salud reproductiva de la mujer y control del embarazo.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    horario: "Lunes a Viernes de 08:30 a 17:00",
    fichasDiarias: 15,
    doctores: ["Dra. Verónica Villarroel", "Dr. Marco Gutiérrez"]
  },
  {
    titulo: "Traumatología y Ortopedia",
    descripcion: "Diagnóstico y tratamiento de lesiones óseas y musculares.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    horario: "Lunes a Viernes de 09:00 a 16:00",
    fichasDiarias: 20,
    doctores: ["Dr. Jaime Pérez", "Dra. Carolina Rojas"]
  },
  {
    titulo: "Neurología",
    descripcion: "Atención especializada en trastornos del sistema nervioso.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    horario: "Martes y Jueves de 10:00 a 14:00",
    fichasDiarias: 10,
    doctores: ["Dr. Enrique Salvatierra"]
  },
  {
    titulo: "Dermatología",
    descripcion: "Diagnóstico y tratamiento de afecciones cutáneas.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    horario: "Miércoles y Viernes de 08:00 a 12:30",
    fichasDiarias: 18,
    doctores: ["Dra. Isabel Vargas"]
  },
  {
    titulo: "Radiología e Imágenes",
    descripcion: "Estudios diagnósticos como rayos X, tomografías y ecografías.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    horario: "Lunes a Sábado de 07:00 a 18:00",
    fichasDiarias: 50,
    doctores: ["Técnico Luis Patiño", "Técnica Gabriela Flores"]
  },
  {
    titulo: "Fisioterapia y Rehabilitación",
    descripcion: "Terapias físicas para recuperación funcional y movilidad.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    horario: "Lunes a Viernes de 08:00 a 15:00",
    fichasDiarias: 25,
    doctores: ["Lic. Juan Condori", "Lic. Laura Medina"]
  },
  {
    titulo: "Cardiología",
    descripcion: "Diagnóstico y tratamiento de enfermedades del corazón.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    horario: "Lunes a Viernes de 09:00 a 13:00",
    fichasDiarias: 12,
    doctores: ["Dr. Álvaro Mendoza", "Dra. Cecilia Andrade"]
  },
  {
    titulo: "Psiquiatría",
    descripcion: "Evaluación y manejo de trastornos mentales y emocionales.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    horario: "Martes y Jueves de 14:00 a 18:00",
    fichasDiarias: 10,
    doctores: ["Dra. Paula Ríos"]
  },
  {
    titulo: "Nutrición y Dietética",
    descripcion: "Asesoramiento nutricional personalizado según necesidades de salud.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    horario: "Lunes, Miércoles y Viernes de 08:30 a 12:30",
    fichasDiarias: 16,
    doctores: ["Lic. Mariana Guzmán"]
  },
  {
    titulo: "Laboratorio Clínico",
    descripcion: "Análisis de muestras biológicas para apoyo diagnóstico.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    horario: "Lunes a Sábado de 07:00 a 14:00",
    fichasDiarias: 60,
    doctores: ["Bioq. Raúl Soria", "Bioq. Andrea Camacho"]
  },
  {
    titulo: "Otorrinolaringología",
    descripcion: "Tratamiento de enfermedades del oído, nariz y garganta.",
    imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
    horario: "Martes y Viernes de 10:00 a 15:00",
    fichasDiarias: 14,
    doctores: ["Dr. Miguel Flores"]
  }
];

export default servicios;