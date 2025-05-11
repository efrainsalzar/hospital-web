// src/controllers/especialidad_controller.js
const EspecialidadModel = require('../models/especialidad_model');

// Obtener todas las especialidades
const getAll = async (req, res) => {
  try {
    const especialidades = await EspecialidadModel.getAllEspecialidades();
    res.status(200).json(especialidades);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las especialidades', error });
  }
};

// Obtener una especialidad por ID
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const especialidad = await EspecialidadModel.getEspecialidadById(id);
    if (especialidad) {
      res.status(200).json(especialidad);
    } else {
      res.status(404).json({ message: 'Especialidad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la especialidad', error });
  }
};

// Crear una nueva especialidad
const create = async (req, res) => {
  const especialidad = req.body;
  try {
    const result = await EspecialidadModel.createEspecialidad(especialidad);
    res.status(201).json({ message: 'Especialidad creada exitosamente', especialidad });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la especialidad', error });
  }
};

// Actualizar una especialidad
const update = async (req, res) => {
  const { id } = req.params;
  const especialidad = req.body;
  try {
    const result = await EspecialidadModel.updateEspecialidad(id, especialidad);
    res.status(200).json({ message: 'Especialidad actualizada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la especialidad', error });
  }
};

// Eliminar una especialidad
const deleteEspecialidad = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await EspecialidadModel.deleteEspecialidad(id);
    res.status(200).json({ message: 'Especialidad eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la especialidad', error });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteEspecialidad,
};
