const express = require('express');
const router = express.Router();
const DoctorController = require('../controllers/doctor_controller');

// Obtener todos los doctores
router.get('/', DoctorController.getAll);

// Obtener todos los doctores con especialidad
router.get('/completo', DoctorController.getAllComplete);


// Obtener un doctor por su ID
router.get('/:id', DoctorController.getById);

// Crear un nuevo doctor
router.post('/', DoctorController.create);

// Actualizar un doctor
router.put('/:id', DoctorController.update);

// Eliminar un doctor
router.delete('/:id', DoctorController.deleteDoctor);

module.exports = router;
