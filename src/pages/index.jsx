import React, { useState } from "react";
// import styled from "styled-components";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectsTable from "../components/organisms/ProjectsTable";
import Button from "../components/atoms/Button";
import CreateProjectWindow from "../components/molecules/ProjectCreateModalWindow";

const Projects = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  return (
    <>
      <DefaultTemplate>
        <Button onClick={() => setIsCreateModalOpen(true)} label="Create Project" color="green" />
        <ProjectsTable />
      </DefaultTemplate>
      {isCreateModalOpen && <CreateProjectWindow isOpen={isCreateModalOpen} setIsOpen={setIsCreateModalOpen} />}
    </>
  );
};

export default Projects;
