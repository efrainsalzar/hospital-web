const { pool } = require('../config/db');

class User {
  // Obtener todos los usuarios
  static async findAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM users');
      return rows;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error;
    }
  }

  // Obtener un usuario por ID
  static async findById(id) {
    try {
      const [rows] = await pool.query(
        'SELECT * FROM users WHERE id = ?', 
        [id]
      );
      return rows[0];
    } catch (error) {
      console.error(`Error al obtener usuario con id ${id}:`, error);
      throw error;
    }
  }

  // Crear un nuevo usuario
  static async create(userData) {
    try {
      const { nombre, email, telefono, direccion } = userData;
      const [result] = await pool.query(
        'INSERT INTO users (name, email) VALUES (?, ?, ?, ?)',
        [nombre, email, telefono, direccion]
      );
      
      const id = result.insertId;
      return { id, ...userData };
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }

  // Actualizar un usuario
  static async update(id, userData) {
    try {
      const { nombre, email, telefono, direccion } = userData;
      await pool.query(
        'UPDATE users SET name = ?, email = ? WHERE id = ?',
        [nombre, email, telefono, direccion, id]
      );
      
      return { id, ...userData };
    } catch (error) {
      console.error(`Error al actualizar usuario con id ${id}:`, error);
      throw error;
    }
  }

  // Eliminar un usuario
  static async delete(id) {
    try {
      const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error al eliminar usuario con id ${id}:`, error);
      throw error;
    }
  }
}

module.exports = User;