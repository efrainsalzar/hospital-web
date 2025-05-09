const express = require('express');
const cors = require('cors');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./graphql/schema');
const { testConnection } = require('./config/db');
const path = require('path'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Permitir solo tu frontend
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));

// Configurar acceso a archivos estáticos (como imágenes) en la carpeta 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Conexión con la base de datos
(async () => {
  const connected = await testConnection();
  if (!connected) {
    console.error('No se pudo conectar a la base de datos');
    process.exit(1);
  }
})();

// Configuración de GraphQL
app.use('/graphql', createHandler({
  schema,
  graphiql: true, // Si quieres habilitar GraphiQL
  formatError: (error) => ({
    message: error.message,
    locations: error.locations,
    path: error.path
  })
}));

// Ruta básica
app.get('/', (req, res) => {
  res.send('API funcionando correctamente.');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`GraphQL disponible en http://localhost:${PORT}/graphql`);
});
