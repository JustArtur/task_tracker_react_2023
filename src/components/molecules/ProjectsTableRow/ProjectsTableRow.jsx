import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import DestroyProjectWindow from "../ProjectDestroyModalWIndow";

const TableItem = styled.th`
  padding: 5px;
`;
const ProjectsTableRow = ({ project }) => {
  const { name, description, createdAt, id } = project;
  const [isDestroyModalOpen, setIsDestroyModalOpen] = useState(false);

  return (
    <>
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
          <Button onClick={() => setIsDestroyModalOpen(true)} label="Destroy" color="red" />
        </TableItem>
      </tr>
      {isDestroyModalOpen && (
        <DestroyProjectWindow
          isOpen={isDestroyModalOpen}
          projectName={name}
          setIsOpen={setIsDestroyModalOpen}
          id={id}
        />
      )}
    </>
  );
};

export default ProjectsTableRow;
