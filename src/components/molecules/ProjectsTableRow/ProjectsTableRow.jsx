import React from "react";
// import styled from "styled-components";
import Button from "../../atoms/Button";

const ProjectsTableRow = ({ project }) => {
  const { name, description, createdAt } = project;

  return (
    <tr>
      <th>{name}</th>
      <th>{description}</th>
      <th>{createdAt}</th>
      <th>
        <Button label="Tasks" color="blue" />
      </th>
      <th>
        <Button label="Edit" color="green" />
      </th>
      <th>
        <Button label="Destroy" color="red" />
      </th>
    </tr>
  );
};

export default ProjectsTableRow;
