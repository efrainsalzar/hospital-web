-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-05-2025 a las 01:35:53
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hospital`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id`, `nombre`) VALUES
(1, 'Medicina Interna'),
(2, 'Cirugía'),
(3, 'Pediatría'),
(4, 'Ginecología y Obstetricia'),
(5, 'Especialidades Médicas'),
(6, 'Diagnóstico por Imágenes'),
(7, 'Odontología'),
(8, 'Oftalmología'),
(9, 'Otorrinolaringología'),
(10, 'Psicología y Salud Mental'),
(11, 'Urgencias y Emergencias'),
(99, 'Hospital');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctores`
--

CREATE TABLE `doctores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `foto_path` varchar(255) DEFAULT NULL,
  `id_especialidad` int(11) NOT NULL,
  `id_horario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `doctores`
--

INSERT INTO `doctores` (`id`, `nombre`, `foto_path`, `id_especialidad`, `id_horario`) VALUES
(1, 'Hospital', '', 1, 1),
(6, 'Dr. Juan Pérez', 'juan_perez.png', 59, 1),
(7, 'Dra. María Gómez', 'maria_gomez.png', 69, 2),
(8, 'Dr. Luis Martínez', 'luis_martinez.webp', 60, 3),
(9, 'Dra. Ana Rodríguez', 'ana_rodriguez.png', 75, 4),
(10, 'Dr. Carlos Sánchez', 'carlos_sanchez.jpg', 80, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidades`
--

CREATE TABLE `especialidades` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `ficha` int(11) NOT NULL,
  `id_departamento` int(11) NOT NULL,
  `id_horario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `especialidades`
--

INSERT INTO `especialidades` (`id`, `nombre`, `descripcion`, `ficha`, `id_departamento`, `id_horario`) VALUES
(1, 'Hospital', 'Hospital', 0, 99, 99),
(59, 'Medicina Interna', 'Atiende enfermedades comunes y crónicas en adultos.', 4, 1, 1),
(60, 'Cardiología', 'Diagnóstico y tratamiento de enfermedades del corazón.', 4, 1, 2),
(61, 'Neumología', 'Trata enfermedades del aparato respiratorio.', 7, 1, 3),
(62, 'Gastroenterología', 'Estudia el sistema digestivo y sus trastornos.', 3, 1, 4),
(63, 'Endocrinología', 'Trata desórdenes hormonales como diabetes y tiroides.', 7, 1, 5),
(64, 'Nefrología', 'Estudia el riñón y enfermedades renales.', 9, 1, 6),
(65, 'Reumatología', 'Trata enfermedades musculoesqueléticas y autoinmunes.', 7, 1, 1),
(66, 'Hematología', 'Trata trastornos de la sangre y médula ósea.', 3, 1, 2),
(67, 'Cirugía General', 'Intervenciones quirúrgicas en órganos abdominales.', 8, 2, 3),
(68, 'Cirugía Oncológica', 'Cirugía especializada en tumores y cáncer.', 5, 2, 4),
(69, 'Cirugía Vascular', 'Trata enfermedades de arterias y venas.', 5, 2, 5),
(70, 'Urología', 'Trata enfermedades del aparato urinario y reproductor masculino.', 7, 2, 6),
(71, 'Traumatología y Ortopedia', 'Trata lesiones óseas, musculares y articulares.', 3, 2, 1),
(72, 'Pediatría General', 'Atiende enfermedades en niños y adolescentes.', 5, 3, 2),
(73, 'Neonatología', 'Cuidado médico de recién nacidos, especialmente prematuros.', 7, 3, 3),
(74, 'Pediatría Cardióloga', 'Trata enfermedades cardíacas en niños.', 3, 3, 4),
(75, 'Pediatría Infectológica', 'Especialidad en enfermedades infecciosas pediátricas.', 6, 3, 5),
(76, 'Ginecología', 'Trata enfermedades del aparato reproductor femenino.', 5, 4, 6),
(77, 'Obstetricia', 'Atención médica durante el embarazo, parto y postparto.', 9, 4, 1),
(78, 'Medicina Materno-Fetal', 'Cuidado de embarazos de alto riesgo.', 7, 4, 2),
(79, 'Neurología', 'Trata enfermedades del sistema nervioso.', 10, 5, 3),
(80, 'Psiquiatría', 'Diagnóstico y tratamiento de trastornos mentales.', 6, 5, 4),
(81, 'Dermatología', 'Trata enfermedades de la piel, cabello y uñas.', 4, 5, 5),
(82, 'Infectología', 'Trata enfermedades infecciosas y tropicales.', 8, 5, 6),
(83, 'Alergología e Inmunología', 'Estudia alergias y trastornos inmunológicos.', 9, 5, 1),
(84, 'Nutrición Clínica', 'Manejo nutricional en diversas patologías.', 5, 5, 2),
(85, 'Radiología', 'Interpretación de radiografías y estudios por imágenes.', 8, 6, 3),
(86, 'Ecografía', 'Uso de ultrasonido para diagnóstico médico.', 9, 6, 4),
(87, 'Tomografía', 'Estudios por imagen en cortes transversales.', 9, 6, 5),
(88, 'Resonancia Magnética', 'Imágenes detalladas del cuerpo sin radiación.', 8, 6, 6),
(89, 'Odontología General', 'Cuidado dental básico y restaurativo.', 3, 7, 1),
(90, 'Cirugía Maxilofacial', 'Cirugías en cara, boca y mandíbulas.', 10, 7, 2),
(91, 'Ortodoncia', 'Corrige malposiciones dentales.', 9, 7, 3),
(92, 'Odontopediatría', 'Cuidado dental especializado en niños.', 5, 7, 4),
(93, 'Oftalmología General', 'Trata enfermedades y defectos visuales.', 10, 8, 5),
(94, 'Cirugía Oftalmológica', 'Procedimientos quirúrgicos en ojos.', 10, 8, 6),
(95, 'Otorrinolaringología General', 'Trata enfermedades de oído, nariz y garganta.', 10, 9, 1),
(96, 'Cirugía de Cabeza y Cuello', 'Cirugía especializada en estructuras del cuello y cabeza.', 7, 9, 2),
(97, 'Psicología Clínica', 'Evaluación y tratamiento psicológico.', 4, 10, 3),
(98, 'Psicoterapia', 'Intervención emocional y conductual.', 5, 10, 4),
(99, 'Psiquiatría', 'Atiende trastornos mentales desde la medicina.', 3, 10, 5),
(100, 'Medicina de Urgencias', 'Atención inmediata a pacientes en crisis.', 3, 11, 6),
(101, 'Medicina Crítica', 'Cuidado intensivo para pacientes graves.', 5, 11, 1),
(102, 'Atención Prehospitalaria', 'Asistencia médica antes de llegar al hospital.', 6, 11, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios`
--

CREATE TABLE `horarios` (
  `id` int(11) NOT NULL,
  `dias` varchar(50) NOT NULL,
  `turno_m` varchar(50) DEFAULT NULL,
  `turno_t` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `horarios`
--

INSERT INTO `horarios` (`id`, `dias`, `turno_m`, `turno_t`) VALUES
(1, 'Lunes a Viernes', '08:00 - 12:00', '14:00 - 18:00'),
(2, 'Lunes a Sábado', '07:00 - 11:00', '13:00 - 17:00'),
(3, 'Lunes a Viernes', '06:00 - 10:00', '15:00 - 19:00'),
(4, 'Fines de Semana', '08:00 - 14:00', NULL),
(5, 'Turno Nocturno', '20:00 - 08:00', NULL),
(6, 'Lunes a Viernes', '07:30 - 11:30', '13:30 - 17:30'),
(99, 'Hospital', 'Hospital', 'Hospital');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `contenido` text NOT NULL,
  `fecha_publicacion` datetime DEFAULT current_timestamp(),
  `id_doctor` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `contenido`, `fecha_publicacion`, `id_doctor`) VALUES
(1, 'Corte de energía programado', 'Se realizará un corte de energía eléctrica el día viernes a partir de las 14:00 en el ala este del hospital.', '2025-05-13 18:53:40', 1),
(2, 'Nueva área de pediatría', 'Se inauguró una nueva área equipada especialmente para atención pediátrica de emergencia.', '2025-05-13 18:53:40', 1),
(3, 'Campaña de vacunación', 'Desde el lunes se llevará a cabo una campaña gratuita de vacunación contra la influenza en el hospital.', '2025-05-13 18:53:40', 1),
(4, 'Mantenimiento de equipos', 'El área de electromedicina realizará una revisión completa de los equipos este fin de semana.', '2025-05-13 18:53:40', 1),
(5, 'Actualización del protocolo COVID-19', 'El protocolo de atención a pacientes con síntomas respiratorios ha sido actualizado según las nuevas recomendaciones.', '2025-05-13 18:55:20', 6),
(6, 'Charlas de salud mental', 'La Dra. Ana Martínez ofrecerá una serie de charlas sobre la importancia de la salud mental en contextos de emergencia.', '2025-05-13 18:55:30', 7),
(7, 'Nuevo equipo de rayos X en urgencias', 'Se ha instalado un nuevo equipo de rayos X de alta resolución para mejorar los diagnósticos rápidos en el área de emergencias.', '2025-05-13 18:55:36', 8);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_especialidad` (`id_especialidad`),
  ADD KEY `id_horario` (`id_horario`);

--
-- Indices de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_departamento` (`id_departamento`),
  ADD KEY `fk_horario` (`id_horario`);

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_doctor` (`id_doctor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT de la tabla `doctores`
--
ALTER TABLE `doctores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT de la tabla `horarios`
--
ALTER TABLE `horarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD CONSTRAINT `doctores_ibfk_1` FOREIGN KEY (`id_especialidad`) REFERENCES `especialidades` (`id`),
  ADD CONSTRAINT `doctores_ibfk_2` FOREIGN KEY (`id_horario`) REFERENCES `horarios` (`id`);

--
-- Filtros para la tabla `especialidades`
--
ALTER TABLE `especialidades`
  ADD CONSTRAINT `especialidades_ibfk_1` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id`),
  ADD CONSTRAINT `fk_horario` FOREIGN KEY (`id_horario`) REFERENCES `horarios` (`id`);

--
-- Filtros para la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `fk_doctor` FOREIGN KEY (`id_doctor`) REFERENCES `doctores` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
