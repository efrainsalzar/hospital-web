const Doctor = require('../../models/Doctors');

module.exports = {
  Query: {
    getDoctors: async () => await Doctor.findAll(),
    getDoctor: async (_, { id }) => await Doctor.findById(id),
  },
  Mutation: {
    createDoctor: async (_, { input }) => await Doctor.create(input),
    updateDoctor: async (_, { id, input }) => await Doctor.update(id, input),
    deleteDoctor: async (_, { id }) => await Doctor.delete(id),
  }
};
