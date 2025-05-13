const express = require('express');
const router = express.Router();
const DoctorController = require('../controllers/doctor_controller');

// Obtener todos los doctores
router.get('/', DoctorController.getAll);

// Obtener todos los doctores con especialidad
router.get('/completo', DoctorController.getAllComplete);

// Obtener todos los doctores con especialidad y horarios
router.get('/horarios', DoctorController.getAllHorarios);

module.exports = router;
