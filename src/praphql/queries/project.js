// eslint-disable-next-line import/no-extraneous-dependencies
import { gql } from "@apollo/client";

export default gql`
  query Project($projectId: ID!) {
    project(id: $projectId) {
      createdAt
      description
      id
      name
      updatedAt
      tasks {
        createdAt
        deadlineAt
        description
        id
        state
        title
        updatedAt
      }
    }
  }
`;
