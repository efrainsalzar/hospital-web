const { gql } = require('graphql-tag');

module.exports = gql`
  type Doctor {
    id: ID!
    name: String
    specialty: String
    photo_url: String
    schedule: String
    status: String
  }

  input DoctorInput {
    name: String
    specialty: String
    photo_url: String
    schedule: String
    status: String
  }

  extend type Query {
    getDoctors: [Doctor]
    getDoctor(id: ID!): Doctor
  }

  extend type Mutation {
    createDoctor(input: DoctorInput): Doctor
    updateDoctor(id: ID!, input: DoctorInput): Doctor
    deleteDoctor(id: ID!): Boolean
  }
`;
