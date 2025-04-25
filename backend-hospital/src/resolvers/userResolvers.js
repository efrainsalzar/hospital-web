const { getUsers, getUserById } = require('../models/User'); // Importa las funciones del modelo de usuarios

const resolvers = {
  Query: {
    // Resolver para obtener todos los usuarios
    users: async () => {
      try {
        const users = await getUsers();
        return users;
      } catch (err) {
        console.error('Error en resolver users:', err);
        throw new Error('Error al obtener los usuarios');
      }
    },

    // Resolver para obtener un usuario por su ID
    user: async (_, { id }) => {
      try {
        const user = await getUserById(id);
        return user;
      } catch (err) {
        console.error('Error en resolver user:', err);
        throw new Error('Error al obtener el usuario');
      }
    },
  }
};

module.exports = resolvers;
