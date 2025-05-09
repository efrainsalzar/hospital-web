const departamentosHospital = [
  {
    nombre: "Departamento de Pediatría",
    descripcion_d: "Atención médica especializada para niños y adolescentes. Incluye consultas, hospitalización y vacunación. Contamos con un equipo de pediatras altamente capacitados y tecnología avanzada para garantizar la salud y bienestar de los más pequeños.",
    servicios: [
      {
        titulo: "Consulta pediátrica general",
        descripcion: "Atención médica integral para niños y adolescentes.",
        horario: "Lunes a Viernes, 08:00 a 12:00",
        fichasDiarias: 20,
        doctores: ["Dra. Carla Sánchez", "Dr. Jorge Medina"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-baby-face'
        
      },
      {
        titulo: "Hospitalización pediátrica",
        descripcion: "Internación para tratamiento continuo de pacientes pediátricos.",
        horario: "24 horas",
        fichasDiarias: 'S/N',
        doctores: ["Dra. Melisa Choque"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-hospital-building'
      },
      {
        titulo: "Vacunación pediátrica",
        descripcion: "Aplicación del esquema nacional de inmunización infantil.",
        horario: "Lunes a Viernes, 08:00 a 14:00",
        fichasDiarias: 50,
        doctores: ["Enf. Luis Romero"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-syringe'
      }
    ]
  },
  {
    nombre: "Departamento de Ginecología y Obstetricia",
    descripcion_d: "Atención integral en salud reproductiva femenina. Ofrecemos servicios de ginecología, obstetricia y planificación familiar. Nuestro equipo de especialistas está comprometido con el bienestar de la mujer en todas las etapas de su vida.",
    servicios: [
      {
        titulo: "Consulta ginecológica",
        descripcion: "Control y diagnóstico de la salud reproductiva femenina.",
        horario: "Lunes a Viernes, 08:00 a 16:00",
        fichasDiarias: 25,
        doctores: ["Dra. Mariana Valdivia"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-syringe'
      },
      {
        titulo: "Control prenatal",
        descripcion: "Seguimiento médico durante el embarazo.",
        horario: "Martes y Jueves, 09:00 a 13:00",
        fichasDiarias: 15,
        doctores: ["Dra. Silvia Zambrana"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-baby-carriage'
      },
      {
        titulo: "Parto y cesáreas",
        descripcion: "Atención especializada para el nacimiento de bebés.",
        horario: "24 horas",
        fichasDiarias: null,
        doctores: ["Dr. Iván Torrico"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-hospital-building'
      }
    ]
  },
  {
    nombre: "Departamento de Medicina Interna",
    descripcion_d: "Atención médica integral para adultos. Diagnóstico y tratamiento de enfermedades crónicas y agudas. Nuestro equipo de médicos internistas está capacitado para manejar una amplia variedad de condiciones médicas.",
    servicios: [
      {
        titulo: "Consulta de medicina interna",
        descripcion: "Evaluación y manejo de enfermedades crónicas en adultos.",
        horario: "Lunes a Viernes, 08:00 a 12:00",
        fichasDiarias: 30,
        doctores: ["Dr. Ricardo Bustillos"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-stethoscope'
      },
      {
        titulo: "Hospitalización clínica médica",
        descripcion: "Cuidado hospitalario para pacientes con enfermedades complejas.",
        horario: "24 horas",
        fichasDiarias: null,
        doctores: ["Dra. Julia Rojas"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-hospital-building'
      }
    ]
  },
  {
    nombre: "Departamento de Cirugía",
    descripcion_d: "Atención quirúrgica especializada. Realizamos procedimientos quirúrgicos programados y de emergencia. Nuestro equipo de cirujanos está altamente capacitado en diversas especialidades. Contamos con tecnología avanzada para garantizar la seguridad y eficacia de cada intervención.",
    servicios: [
      {
        titulo: "Cirugía general",
        descripcion: "Procedimientos quirúrgicos comunes como apendicectomías o hernias.",
        horario: "Lunes a Viernes, 08:00 a 16:00",
        fichasDiarias: 10,
        doctores: ["Dr. Walter Camacho"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-scalpel'
      },
      {
        titulo: "Cirugía laparoscópica",
        descripcion: "Cirugía mínimamente invasiva para recuperación rápida.",
        horario: "Miércoles y Viernes, 08:00 a 14:00",
        fichasDiarias: 6,
        doctores: ["Dra. Lizeth Vargas"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-scalpel'
      }
    ]
  },
  {
    nombre: "Departamento de Cardiología",
    descripcion_d: "Atención especializada en enfermedades del corazón. Realizamos estudios diagnósticos y tratamientos para diversas patologías cardíacas. Nuestro equipo de cardiólogos está comprometido con la salud cardiovascular de nuestros pacientes. Contamos con tecnología avanzada para garantizar diagnósticos precisos y tratamientos efectivos.",
    servicios: [
      {
        titulo: "Consulta cardiológica",
        descripcion: "Evaluación y tratamiento de enfermedades cardíacas.",
        horario: "Lunes a Viernes, 09:00 a 13:00",
        fichasDiarias: 15,
        doctores: ["Dr. Alberto Flores"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-heart-pulse',
      },
      {
        titulo: "Hemodinamia",
        descripcion: "Cateterismo cardíaco y procedimientos invasivos del corazón.",
        horario: "Según programación",
        fichasDiarias: null,
        doctores: ["Dr. Erick Mendoza"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-heart-pulse',
      }
    ]
  },
  {
    nombre: "Departamento de Nefrología",
    descripcion_d: "Atención especializada en enfermedades renales. Realizamos diagnóstico y tratamiento de patologías renales. Nuestro equipo de nefrólogos está capacitado para manejar condiciones complejas relacionadas con los riñones. Contamos con tecnología avanzada para garantizar la salud renal de nuestros pacientes.",
    servicios: [
      {
        titulo: "Consulta nefrológica",
        descripcion: "Tratamiento de enfermedades renales.",
        horario: "Lunes a Viernes, 08:00 a 12:00",
        fichasDiarias: 10,
        doctores: ["Dr. Mario Cárdenas"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-kidney'
      },
      {
        titulo: "Hemodiálisis",
        descripcion: "Filtración de sangre en pacientes con insuficiencia renal.",
        horario: "Turnos programados, Lunes a Sábado",
        fichasDiarias: null,
        doctores: ["Lic. Maribel Ortega"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-kidney'
      }
    ]
  },
  {
    nombre: "Departamento de Imagenología",
    descripcion_d: "Atención especializada en diagnóstico por imagen. Realizamos estudios de rayos X, ecografías y tomografías. Nuestro equipo de radiólogos está capacitado para interpretar imágenes médicas y colaborar con otros departamentos en el diagnóstico y tratamiento de enfermedades.",
    servicios: [
      {
        titulo: "Rayos X y ecografías",
        descripcion: "Diagnóstico por imagen para múltiples patologías.",
        horario: "Lunes a Viernes, 08:00 a 16:00",
        fichasDiarias: 40,
        doctores: ["Dr. Sergio Villarroel"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-radiology'
      }
    ]
  },
  {
    nombre: "Departamento de Laboratorio Clínico",
    descripcion_d: "Atención especializada en análisis clínicos. Realizamos pruebas de laboratorio para diagnóstico y seguimiento de enfermedades. Nuestro equipo de bioquímicos está capacitado para realizar análisis precisos y oportunos. Contamos con tecnología avanzada para garantizar la calidad de nuestros resultados.",
    servicios: [
      {
        titulo: "Laboratorio clínico general",
        descripcion: "Análisis de sangre, orina y otras muestras biológicas.",
        horario: "Lunes a Sábado, 07:00 a 13:00",
        fichasDiarias: 100,
        doctores: ["Bioq. Ana Laura Morales"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-radiology'
      }
    ]
  },
  {
    nombre: "Departamento de Psicología",
    descripcion_d: "Atención psicológica especializada. Realizamos evaluaciones y tratamientos para diversas condiciones psicológicas. Nuestro equipo de psicólogos está capacitado para brindar apoyo emocional y terapias personalizadas. Contamos con un enfoque integral para el bienestar mental de nuestros pacientes.",
    servicios: [
      {
        titulo: "Atención psicológica clínica",
        descripcion: "Diagnóstico y apoyo emocional a pacientes.",
        horario: "Lunes a Viernes, 08:00 a 14:00",
        fichasDiarias: 10,
        doctores: ["Psic. Daniela Ramos"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-brain'
      }
    ]
  },
  {
    nombre: "Departamento de Nutrición",
    descripcion_d: "Atención nutricional especializada. Realizamos evaluaciones y planes de alimentación personalizados. Nuestro equipo de nutricionistas está capacitado para brindar asesoramiento en diversas condiciones de salud. Contamos con un enfoque integral para el bienestar nutricional de nuestros pacientes.",
    servicios: [
      {
        titulo: "Consulta nutricional",
        descripcion: "Asesoramiento y planes de alimentación personalizados.",
        horario: "Lunes, Miércoles y Viernes, 09:00 a 13:00",
        fichasDiarias: 12,
        doctores: ["Lic. Pablo Arce"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-brain'
      }
    ]
  },
  {
    nombre: "Departamento de Odontología",
    descripcion_d: "Atención odontológica especializada. Realizamos tratamientos dentales preventivos y restaurativos. Nuestro equipo de odontólogos está capacitado para brindar atención integral en salud bucal. Contamos con tecnología avanzada para garantizar la salud dental de nuestros pacientes.",
    servicios: [
      {
        titulo: "Atención odontológica general",
        descripcion: "Tratamientos dentales preventivos y restaurativos.",
        horario: "Lunes a Sábado, 08:00 a 12:00",
        fichasDiarias: 20,
        doctores: ["Dra. Claudia Herrera"],
        imagen: new URL('@/assets/images/serviciosHospital.png', import.meta.url).href,
        icon: 'mdi-tooth'
      }
    ]
  }
];

export default departamentosHospital;