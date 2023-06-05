import React from "react";

const ProjectsInfo = (project) => {
  const { tasks } = project;
  return (
    <ul>
      {tasks.map(({ title, id }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default ProjectsInfo;
