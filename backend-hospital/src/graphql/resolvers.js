const User = require('../models/User');

// Definir los resolvers para GraphQL
const resolvers = {
  // Consultas
  getUsers: async () => {
    return await User.findAll();
  },
  
  getUser: async ({ id }) => {
    return await User.findById(id);
  },
  
  /*// Mutaciones
  createUser: async ({ input }) => {
    return await User.create(input);
  },
  
  updateUser: async ({ id, input }) => {
    return await User.update(id, input);
  },
  
  deleteUser: async ({ id }) => {
    return await User.delete(id);
  }*/
};

module.exports = resolvers;