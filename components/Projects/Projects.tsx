import { useEffect, useState } from "react";

import { ProjectItem, ProjectType } from "./ProjectItem";
import styles from "./Projects.module.scss";

export const Projects = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <div className={styles.projects}>
      <span className={styles.projects__locator} id="projects"></span>
      <h2 className={styles.projects__title}>Projects</h2>
      <div className={styles.projects__gallery}>
        {projects.map((project) => (
          <ProjectItem projectItem={project} key={project.name} />
        ))}
      </div>
    </div>
  );
};
