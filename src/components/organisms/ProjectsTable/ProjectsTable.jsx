import styled from "styled-components";
// import Button from "../../atoms/Button";
import ProjectTableRow from "../../molecules/ProjectsTableRow";
import Projects from "./mockProjects";

const Table = styled.table`
  width: 100%;
`;

const ProjectsTable = () => {
  return (
    <Table>
      <tr>
        <th> Name </th>
        <th> Description </th>
        <th> Created At </th>
      </tr>
      <tbody>
        {Projects.map((project) => (
          <ProjectTableRow project={project} />
        ))}
      </tbody>
    </Table>
  );
};

export default ProjectsTable;
