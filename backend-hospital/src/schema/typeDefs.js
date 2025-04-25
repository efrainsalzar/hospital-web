const { gql } = require('graphql-tag');

// Definición del esquema GraphQL
const typeDefs = gql`
  type User {
    id: Int
    name: String
    email: String
  }

  type Query {
    users: [User]
    user(id: Int): User
  }
`;

module.exports = typeDefs;
