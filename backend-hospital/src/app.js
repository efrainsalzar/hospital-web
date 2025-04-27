const express = require('express');
const cors = require('cors');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const { testConnection } = require('./config/db');

const app = express();
const PORT = process.env.PORT;

// Middleware para parsear JSON
app.use(express.json());

// --- Usa cors ---
app.use(cors({
  origin: 'http://localhost:5173', // Permite solo tu frontend
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));

// Probar la conexión a la base de datos al iniciar
(async () => {
  const connected = await testConnection();
  if (!connected) {
    console.error('No se pudo conectar a la base de datos. Verifica tu configuración de XAMPP y MySQL.');
    process.exit(1);
  }
})();

// Configurar el endpoint GraphQL
app.use('/graphql', createHandler({
  schema: schema,
  rootValue: resolvers,
  formatError: (error) => {
    console.error('Error en GraphQL:', error);
    return {
      message: error.message,
      locations: error.locations,
      path: error.path
    };
  }
}));

// Ruta básica para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('API del Hospital funcionando correctamente. Usa /graphql para consultas.');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`GraphQL disponible en http://localhost:${PORT}/graphql`);
});