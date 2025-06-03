const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const NoticiaController = require('../controllers/noticia_controller');

// Configuración del almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // Asegúrate que esta carpeta exista
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// Obtener todos los doctores
router.get('/', NoticiaController.getAll);

// Obtener todos los doctores con especialidad
router.get('/completo', NoticiaController.getAllComplete);

// Agregar noticia con imagen
router.post('/agregar', upload.single('imageFile'), NoticiaController.createNoticia);

module.exports = router;
