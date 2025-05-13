// src/controllers/doctor_controller.js
const DoctorModel = require('../models/doctor_model');

// Obtener todos los doctores
const getAll = async (req, res) => {
  try {
    const doctors = await DoctorModel.getAllDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los doctores', error });
  }
};

// Obtener todos los doctores con especialidad
const getAllComplete = async (req, res) => {
  try {
    const doctors = await DoctorModel.getAllDoctorsComplete();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los doctores con especialidad', error: error.message });
  }
};

// Obtener todos los doctores con fichas y horarios
const getAllHorarios = async (req, res) => {
  try {
    const horarios = await DoctorModel.getAllHorarios();
    res.status(200).json(horarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los horarios', error });
  }
};

module.exports = {
  getAll,
  getAllComplete,
  getAllHorarios
};
