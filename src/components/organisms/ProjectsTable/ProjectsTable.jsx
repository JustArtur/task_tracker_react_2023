import styled from "styled-components";
// import Button from "../../atoms/Button";
import ProjectTableRow from "../../molecules/ProjectsTableRow";
import Projects from "./mockProjects";

const Table = styled.table`
  width: 90%;
  margin-top: 1rem;
`;

const TableHeader = styled.tr`
  margin: 10px;
  font-weight: bold;
  font-size: large;
`;

const ProjectsTable = () => {
  return (
    <Table>
      <TableHeader>
        <th> Name </th>
        <th> Description </th>
        <th> Created At </th>
      </TableHeader>
      <tbody>
        {Projects.map((project) => (
          <ProjectTableRow key={project.id} project={project} />
        ))}
      </tbody>
    </Table>
  );
};

export default ProjectsTable;
