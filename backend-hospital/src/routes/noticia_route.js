const express = require('express');
const router = express.Router();
const NoticiaController = require('../controllers/noticia_controller');

// Obtener todos los doctores
router.get('/', NoticiaController.getAll);

// Obtener todos los doctores con especialidad
router.get('/completo', NoticiaController.getAllComplete);


module.exports = router;
