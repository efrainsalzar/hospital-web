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


module.exports = {
  getAll,
  getAllComplete
};
