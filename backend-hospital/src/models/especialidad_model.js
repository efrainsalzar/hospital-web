// src/models/especialidad_model.js
const db = require('../config/db');

// Obtener todas las especialidades
const getAllEspecialidades = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM especialidad', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Obtener una especialidad por ID
const getEspecialidadById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM especialidad WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

// Crear una nueva especialidad
const createEspecialidad = (especialidad) => {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO especialidad (nombre) VALUES (?)',
      [especialidad.nombre],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

// Actualizar una especialidad
const updateEspecialidad = (id, especialidad) => {
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE especialidad SET nombre = ? WHERE id = ?',
      [especialidad.nombre, id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

// Eliminar una especialidad
const deleteEspecialidad = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM especialidad WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = {
  getAllEspecialidades,
  getEspecialidadById,
  createEspecialidad,
  updateEspecialidad,
  deleteEspecialidad,
};
