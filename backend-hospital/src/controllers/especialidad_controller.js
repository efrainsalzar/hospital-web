const Especialdad = require('../models/especialidad_model');

// Obtener todas las especialidades
const getAll = async (req, res) => {
  try {
    const especialidades = await Especialdad.getAllEspecialidades();
    res.status(200).json(especialidades);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las especialidades', error });
  }
};

// Obtener todas las especialidades con departamento
const getAllComplete = async (req, res) => {
  try {
    const especialidades = await Especialdad.getAllEspecialidadesComplete();
    res.status(200).json(especialidades);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las especialidades con departamento', error });
  }
};



module.exports = {
  getAll,
  getAllComplete,
};