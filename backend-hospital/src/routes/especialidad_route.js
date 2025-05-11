const express = require('express');
const router = express.Router();
const EspecialidadController = require('../controllers/especialidad_controller');

// Obtener todas las especialidades
router.get('/', EspecialidadController.getAll);

// Obtener una especialidad por su ID
router.get('/:id', EspecialidadController.getById);

// Crear una nueva especialidad
router.post('/', EspecialidadController.create);

// Actualizar una especialidad
router.put('/:id', EspecialidadController.update);

// Eliminar una especialidad
router.delete('/:id', EspecialidadController.deleteEspecialidad);

module.exports = router;
