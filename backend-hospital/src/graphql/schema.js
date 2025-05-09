const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInputObjectType
  } = require('graphql');
  
  const userResolver = require('./resolvers/userResolver');
  const doctorResolver = require('./resolvers/doctorResolver');
  
  // Definición de tipos (User y Doctor)
  const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      email: { type: GraphQLString }
    })
  });
  
  const DoctorType = new GraphQLObjectType({
    name: 'Doctor',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      specialty: { type: GraphQLString },
      photo_url: { type: GraphQLString },
      schedule: { type: GraphQLString },
      status: { type: GraphQLString }
    })
  });
  
  // Definición de inputs
  const UserInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: () => ({
      name: { type: GraphQLString },
      email: { type: GraphQLString }
    })
  });
  
  const DoctorInputType = new GraphQLInputObjectType({
    name: 'DoctorInput',
    fields: () => ({
      name: { type: GraphQLString },
      specialty: { type: GraphQLString },
      photo_url: { type: GraphQLString },
      schedule: { type: GraphQLString },
      status: { type: GraphQLString }
    })
  });
  
  // Consultas y Mutaciones
  const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
      getUsers: {
        type: new GraphQLList(UserType),
        resolve: userResolver.getUsers
      },
      getUser: {
        type: UserType,
        args: { id: { type: GraphQLID } },
        resolve: userResolver.getUser
      },
      getDoctors: {
        type: new GraphQLList(DoctorType),
        resolve: doctorResolver.getDoctors
      },
      getDoctor: {
        type: DoctorType,
        args: { id: { type: GraphQLID } },
        resolve: doctorResolver.getDoctor
      }
    }
  });
  
  const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser: {
        type: UserType,
        args: { input: { type: UserInputType } },
        resolve: userResolver.createUser
      },
      updateUser: {
        type: UserType,
        args: {
          id: { type: GraphQLID },
          input: { type: UserInputType }
        },
        resolve: userResolver.updateUser
      },
      deleteUser: {
        type: GraphQLString,
        args: { id: { type: GraphQLID } },
        resolve: userResolver.deleteUser
      },
      createDoctor: {
        type: DoctorType,
        args: { input: { type: DoctorInputType } },
        resolve: doctorResolver.createDoctor
      },
      updateDoctor: {
        type: DoctorType,
        args: {
          id: { type: GraphQLID },
          input: { type: DoctorInputType }
        },
        resolve: doctorResolver.updateDoctor
      },
      deleteDoctor: {
        type: GraphQLString,
        args: { id: { type: GraphQLID } },
        resolve: doctorResolver.deleteDoctor
      }
    }
  });
  
  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
  });
  