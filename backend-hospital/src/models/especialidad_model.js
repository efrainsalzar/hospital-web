const db = require('../config/db');

// Obtener todas las especialidades
const getAllEspecialidades = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM especialidades', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};


const getAllEspecialidadesComplete = () => {
  return new Promise((resolve, reject) => {
    db.query(
      ` SELECT  
            d.nombre AS departamento,
            e.nombre,
            e.descripcion
        FROM especialidades e
        JOIN departamentos d ON e.id_departamento = d.id;
      `,
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};


module.exports = {
    getAllEspecialidades,
    getAllEspecialidadesComplete

};