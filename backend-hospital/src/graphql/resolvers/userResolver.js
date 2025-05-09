const User = require('../../models/User');

module.exports = {
  Query: {
    getUsers: async () => await User.findAll(),
    getUser: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_, { input }) => await User.create(input),
    updateUser: async (_, { id, input }) => await User.update(id, input),
    deleteUser: async (_, { id }) => await User.delete(id),
  }
};
