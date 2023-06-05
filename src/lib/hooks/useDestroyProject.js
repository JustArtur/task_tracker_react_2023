// eslint-disable-next-line import/no-extraneous-dependencies
import { useMutation } from "@apollo/client";
import destroyProject from "../../graphql/queries/destroyProject";
import projects from "../../graphql/queries/projects";

const useDestroyProject = ({ onSubmit }) => {
  const [mutation, mutationState] = useMutation(destroyProject, {
    refetchQueries: [{ query: projects }],
    onCompleted: () => {
      onSubmit();
    },
  });

  const mutate = async ({ id }) => {
    const destroyProjectInput = {
      id,
    };

    try {
      await mutation({ variables: { input: destroyProjectInput } });
    } catch (error) {
      console.error(error);
    }
  };

  return [mutate, mutationState];
};

export default useDestroyProject;
