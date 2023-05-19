import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";

const TableItem = styled.th`
  padding: 5px;
`;
const ProjectsTableRow = ({ project }) => {
  const { name, description, createdAt, id } = project;

  return (
    <tr>
      <TableItem>{name}</TableItem>
      <TableItem>{description}</TableItem>
      <TableItem>{createdAt}</TableItem>
      <TableItem>
        <Link to={`/project/${id}`}>
          <Button label="Tasks" color="blue" />
        </Link>
      </TableItem>
      <TableItem>
        <Button label="Edit" color="green" />
      </TableItem>
      <TableItem>
        <Button label="Destroy" color="red" />
      </TableItem>
    </tr>
  );
};

export default ProjectsTableRow;
