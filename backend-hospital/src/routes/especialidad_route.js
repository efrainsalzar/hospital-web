const express = require('express');
const router = express.Router();
const EspecialidadController = require('../controllers/especialidad_controller');

// Obtener todas las especialidades
router.get('/', EspecialidadController.getAll);

// Obtener todas las especialidades con departamento
router.get('/completo', EspecialidadController.getAllComplete);

module.exports = router;