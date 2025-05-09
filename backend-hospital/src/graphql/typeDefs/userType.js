const { gql } = require('graphql-tag');

module.exports = gql`
  type User {
    id: ID!
    name: String
    email: String
  }

  input UserInput {
    name: String
    email: String
  }

  extend type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  extend type Mutation {
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
    deleteUser(id: ID!): Boolean
  }
`;
