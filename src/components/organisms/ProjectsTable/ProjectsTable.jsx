import styled from "styled-components";
import ProjectTableRow from "../../molecules/ProjectsTableRow";
import useProjects from "../../../lib/hooks/useProjects";

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
  const { projects } = useProjects();

  return (
    <Table>
      <TableHeader>
        <th> Name </th>
        <th> Description </th>
        <th> Created At </th>
      </TableHeader>
      <tbody>
        {projects.map((project) => (
          <ProjectTableRow key={project.id} project={project} />
        ))}
      </tbody>
    </Table>
  );
};

export default ProjectsTable;
