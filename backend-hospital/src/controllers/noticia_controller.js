const NoticiaModel = require('../models/noticia_model');

// Obtener todos los noticias
const getAll = async (req, res) => {
  try {
    const notices = await NoticiaModel.getAllNotices();
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los noticias', error });
  }
};

// Obtener todos las noticias con doctores
const getAllComplete = async (req, res) => {
  try {
    const notices = await NoticiaModel.getAllNoticesComplete();
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los noticas con doctores', error: error.message });
  }
};



// Crear una noticia
const createNoticia = async (req, res) => {
  try {
    const { title, content, id_doctor } = req.body;
    const imagen_path = req.file ? req.file.filename : '';

    console.log({ title, content, imagen_path, id_doctor });

    // Validación básica
    if (!title || !content || !imagen_path || !id_doctor) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const nuevaNoticia = {
      titulo: title,
      contenido: content,
      imagen_path,
      id_doctor: parseInt(id_doctor),
    };

    const insertId = await NoticiaModel.createNoticia(nuevaNoticia);

    res.status(201).json({ message: 'Noticia creada con éxito', id: insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la noticia', error: error.message });
  }
};


module.exports = {
  getAll,
  getAllComplete,
  createNoticia
};
