// eslint-disable-next-line import/no-extraneous-dependencies
import { gql } from "@apollo/client";

export default gql`
  query {
    Projects {
      name
      createdAt
      description
      name
      updatedAt
    }
  }
`;
