const { pool } = require('../config/db');

class Doctors {
  static async findAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM doctors');
      return rows;
    } catch (error) {
      console.error('Error al obtener doctores:', error);
      throw error;
    }
  }

  static async findById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM doctors WHERE id = ?', [id]);
      return rows[0];
    } catch (error) {
      console.error(`Error al obtener doctor con id ${id}:`, error);
      throw error;
    }
  }

  static async create(doctorData) {
    try {
      const { nombre, especialidad, foto, horario, estado } = doctorData;
      const [result] = await pool.query(
        'INSERT INTO doctors (name, specialty, photo_url, schedule, status) VALUES (?, ?, ?, ?, ?)',
        [nombre, especialidad, foto, horario, estado]
      );
      const id = result.insertId;
      return { id, ...doctorData };
    } catch (error) {
      console.error('Error al crear doctor:', error);
      throw error;
    }
  }

  static async update(id, doctorData) {
    try {
      const { nombre, especialidad, foto, horario, estado } = doctorData;
      await pool.query(
        'UPDATE doctors SET name = ?, specialty = ?, photo_url = ?, schedule = ?, status = ? WHERE id = ?',
        [nombre, especialidad, foto, horario, estado, id]
      );
      return { id, ...doctorData };
    } catch (error) {
      console.error(`Error al actualizar doctor con id ${id}:`, error);
      throw error;
    }
  }

  static async delete(id) {
    try {
      const [result] = await pool.query('DELETE FROM doctors WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error al eliminar doctor con id ${id}:`, error);
      throw error;
    }
  }
}

module.exports = Doctors;
