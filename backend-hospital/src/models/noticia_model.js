// src/models/doctor_model.js
const db = require('../config/db');

// Obtener todos los noticias
const getAllNotices = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM noticias', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Obtener todos los doctores con especialidad usando promise
const getAllNoticesComplete = () => {
  return new Promise((resolve, reject) => {
    db.query(
      ` SELECT  
	        n.titulo,
            n.contenido,
            DATE(n.fecha_publicacion) AS fecha,
            d.nombre AS doctor
        FROM noticias n
        JOIN doctores d ON n.id_doctor = d.id;
      `,
      (err, results) => {
  if (err) reject(err);
  resolve(results);
}
    );
  });
};



module.exports = {
  getAllNotices,
  getAllNoticesComplete,
};
