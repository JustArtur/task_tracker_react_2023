// eslint-disable-next-line import/no-extraneous-dependencies
import { gql } from "@apollo/client";

export default gql`
  mutation DestroyProject($input: DestroyProjectInput!) {
    destroyProject(input: $input) {
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
