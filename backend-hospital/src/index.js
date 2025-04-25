const express = require('express');
const { createHandler } = require('graphql-http'); // Usamos graphql-http para manejar GraphQL
const schema = require('./schema/typeDefs');  // Importa los tipos de GraphQL
const resolvers = require('./resolvers/userResolvers'); // Importa los resolvers
const cors = require('cors');


app.use(cors());
const app = express();

// Configuración de GraphQL
app.use('/graphql', createHandler({
  schema,     // Esquema GraphQL
  resolvers,  // Resolvers que definen cómo manejar las consultas
}));

// Configuración del servidor
app.listen(4000, () => {
  console.log('Servidor corriendo en http://localhost:4000/graphql');
});
