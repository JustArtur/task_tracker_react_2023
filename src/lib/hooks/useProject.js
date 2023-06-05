// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery } from "@apollo/client";

import Project from "../../graphql/queries/project";

const useProject = () => {
  const { data, loading, error } = useQuery(Project, {
    fetchPolicy: "cache-and-network",
  });
  return {
    projects: data?.projects || [],
    loading,
    error,
  };
};

export default useProject;
