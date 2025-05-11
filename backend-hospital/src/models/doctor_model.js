// src/models/doctor_model.js
const db = require('../config/db');

// Obtener todos los doctores
const getAllDoctors = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM doctor', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Obtener todos los doctores con especialidad usando promise
const getAllDoctorsComplete = () => {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT doctor.id, doctor.nombre, doctor.foto_url, especialidad.nombre AS especialidad_nombre FROM doctor JOIN especialidad ON doctor.id_especialidad = especialidad.id;',
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};


// Obtener un doctor por ID
const getDoctorById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM doctor WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

// Crear un nuevo doctor
const createDoctor = (doctor) => {
  return new Promise((resolve, reject) => {
    const { nombre, foto_url, id_especialidad } = doctor;
    db.query(
      'INSERT INTO doctor (nombre, foto_url, id_especialidad) VALUES (?, ?, ?)',
      [nombre, foto_url, id_especialidad],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

// Actualizar un doctor
const updateDoctor = (id, doctor) => {
  return new Promise((resolve, reject) => {
    const { nombre, foto_url, id_especialidad } = doctor;
    db.query(
      'UPDATE doctor SET nombre = ?, foto_url = ?, id_especialidad = ? WHERE id = ?',
      [nombre, foto_url, id_especialidad, id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

// Eliminar un doctor
const deleteDoctor = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM doctor WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = {
  getAllDoctors,
  getAllDoctorsComplete,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
