const mysql = require('mysql2/promise');

// Configuración de la conexión MySQL
const dbConfig = {
  host: 'localhost',
  user: 'root',     // Tu usuario de MySQL (predeterminado en XAMPP)
  password: '',     // Tu contraseña (vacía por defecto en XAMPP)
  database: 'hospital'
};

// Crear pool de conexiones para mejor rendimiento
const pool = mysql.createPool(dbConfig);

// Función para probar la conexión
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Conexión a MySQL establecida correctamente');
    connection.release();
    return true;
  } catch (error) {
    console.error('Error al conectar a MySQL:', error);
    return false;
  }
}

module.exports = {
  pool,
  testConnection
};