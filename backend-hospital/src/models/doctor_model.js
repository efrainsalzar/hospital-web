// src/models/doctor_model.js
const db = require('../config/db');

// Obtener todos los doctores
const getAllDoctors = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM doctores', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Obtener todos los doctores con especialidad usando promise
const getAllDoctorsComplete = () => {
  return new Promise((resolve, reject) => {
    db.query(
      ` SELECT  
            d.nombre, 
            d.foto_path, 
            e.nombre AS especialidad
        FROM doctores d
        JOIN especialidades e ON d.id_especialidad = e.id;
      `,
      (err, results) => {
  if (err) reject(err);
  resolve(results);
}
    );
  });
};

// obtener los horarios con los doctores y las fichas
const getAllHorarios = () => {
  return new Promise((resolve, reject) => {
    db.query(
      ` SELECT
	        d.nombre,
            e.ficha AS ficha,
            h.dias AS dias,
            h.turno_m AS turno_m,
            h.turno_t AS turno_t
        FROM doctores d 
        JOIN especialidades e ON d.id_especialidad=e.id
        JOIN horarios h ON d.id_horario=h.id;
      `,
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};


module.exports = {
  getAllDoctors,
  getAllDoctorsComplete,
  getAllHorarios
};
