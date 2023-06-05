import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import Button from "../components/atoms/Button";
import ProjectInfo from "../components/organisms/ProjectInfo/project";
import useProject from "../lib/hooks/useProject";

const Wrapper = styled.div`
  padding: 10px;
`;

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = useProject({ projectId: id });
  return (
    <DefaultTemplate>
      <Wrapper>
        <Button label="Go back" color="orange" onClick={() => navigate(-1)} />
      </Wrapper>
      <Wrapper>Задачи проекта {id}</Wrapper>
      {project?.name && <ProjectInfo project={project} />}
    </DefaultTemplate>
  );
};

export default ProjectPage;
