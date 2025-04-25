const db = require('../config/db');

// Obtener todos los usuarios
const getUsers = async () => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM users');
    return rows;
  } catch (err) {
    console.error('Error al obtener los usuarios:', err);
    throw new Error('Error al obtener los usuarios');
  }
};

// Obtener un usuario por su ID
const getUserById = async (id) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0]; // Retorna el primer usuario encontrado
  } catch (err) {
    console.error('Error al obtener el usuario:', err);
    throw new Error('Error al obtener el usuario');
  }
};

module.exports = { getUsers, getUserById };
