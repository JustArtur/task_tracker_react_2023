// eslint-disable-next-line import/no-extraneous-dependencies
import { useMutation } from "@apollo/client";
import projects from "../../graphql/queries/projects";
import createProject from "../../graphql/queries/createProject";

const useCreateProject = () => {
  const [mutation, mutationState] = useMutation(createProject, {
    refetchQueries: [{ query: projects }],
  });

  const mutate = async ({ name, description }) => {
    const createProjectInput = {
      name,
      description,
    };

    try {
      await mutation({ variables: { input: createProjectInput } });
    } catch (error) {
      console.error(error);
    }
  };

  return [mutate, mutationState];
};

export default useCreateProject;
