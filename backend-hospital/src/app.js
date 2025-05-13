const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json()); // Para manejar JSON en las solicitudes

// Rutas
const doctorRoutes = require('./routes/doctor_route');
const especialidadRoutes = require('./routes/especialidad_route');
const noticaRoutes = require('./routes/noticia_route');

// src/app.js o src/index.js
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/api/doctores', doctorRoutes);
app.use('/api/especialidades', especialidadRoutes);
app.use('/api/noticias', noticaRoutes);


module.exports = app;
