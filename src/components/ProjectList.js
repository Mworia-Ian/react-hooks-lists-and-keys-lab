import React from "react";
import ProjectItem from "./ProjectItem";
import user from "../data/user";

function ProjectList({ projects }) {
  const projectlist = user.projects.map((projectsitems, id) => {
    return <li key = {projectsitems.id}> 
    name = {projectsitems.name} 
    about = {projectsitems.about}
    technologies = {projectsitems.technologies}
    </li>
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectlist}</div>
    </div>
  );
}

export default ProjectList;
