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


// Obtener un doctor por ID
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await DoctorModel.getDoctorById(id);
    if (doctor) {
      res.status(200).json(doctor);
    } else {
      res.status(404).json({ message: 'Doctor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el doctor', error });
  }
};

// Crear un nuevo doctor
const create = async (req, res) => {
  const doctor = req.body;
  try {
    const result = await DoctorModel.createDoctor(doctor);
    res.status(201).json({ message: 'Doctor creado exitosamente', doctor });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el doctor', error });
  }
};

// Actualizar un doctor
const update = async (req, res) => {
  const { id } = req.params;
  const doctor = req.body;
  try {
    const result = await DoctorModel.updateDoctor(id, doctor);
    res.status(200).json({ message: 'Doctor actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el doctor', error });
  }
};

// Eliminar un doctor
const deleteDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await DoctorModel.deleteDoctor(id);
    res.status(200).json({ message: 'Doctor eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el doctor', error });
  }
};

module.exports = {
  getAll,
  getAllComplete,
  getById,
  create,
  update,
  deleteDoctor,
};
