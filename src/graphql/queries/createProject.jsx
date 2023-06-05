// eslint-disable-next-line import/no-extraneous-dependencies
import { gql } from "@apollo/client";

export default gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      errors {
        message
        path
      }
      project {
        createdAt
        description
        id
        name
        updatedAt
      }
    }
  }
`;
