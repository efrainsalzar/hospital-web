const mysql = require('mysql2');  // Usamos mysql2 para promesas y conexiones más eficientes

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // Usuario de la base de datos
  password: '',       // Contraseña si es necesario
  database: 'hospital' // Nombre de la base de datos
});

// Verificación de la conexión
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos MySQL como id ' + db.threadId);
});

module.exports = db;
