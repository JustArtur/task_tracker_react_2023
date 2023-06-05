// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery } from "@apollo/client";

import Projects from "../../praphql/queries/projects";

const useProjects = () => {
  const { data, loading, error } = useQuery(Projects, {
    fetchPolicy: "cache-and-network",
  });
  return {
    projects: data?.projects || [],
    loading,
    error,
  };
};

export default useProjects;
