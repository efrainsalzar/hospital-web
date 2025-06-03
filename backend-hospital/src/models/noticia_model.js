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
            n.imagen_path,
            DATE(n.fecha_publicacion) AS fecha,
            d.nombre AS doctor
        FROM noticias n
        JOIN doctores d ON n.id_doctor = d.id
        ORDER BY n.fecha_publicacion DESC;
      `,
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

// Crear una nueva noticia
const createNoticia = (noticia) => {
  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO noticias (titulo, contenido, imagen_path, id_doctor)
      VALUES (?, ?, ?, ?)
    `;
    const values = [
      noticia.titulo,
      noticia.contenido,
      noticia.imagen_path,
      noticia.id_doctor,
    ];

    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve(result.insertId); // Retorna el ID insertado
    });
  });
};




module.exports = {
  getAllNotices,
  getAllNoticesComplete,
  createNoticia
};
