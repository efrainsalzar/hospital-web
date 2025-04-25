const { buildSchema } = require('graphql');

// Definir el esquema GraphQL
const schema = buildSchema(`
  type User {
    id: ID!
    name: String
    email: String
  }

  input UserInput {
    name: String
    email: String
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }
`);

module.exports = schema;