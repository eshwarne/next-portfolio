import styles from "./ProjectItem.module.scss";

export type ProjectType = {
  name: string;
  description: string;
  technologies: string[];
  isInProd: boolean;
  isOpenSource: boolean;
  prodUrl?: string;
  sourceUrl?: string;
};
type ProjectItemPropsType = {
  projectItem: ProjectType;
};
export const ProjectItem = ({ projectItem }: ProjectItemPropsType) => {
  const getProdUrl = (project: ProjectType) => {
    if (project.isInProd) {
      return { href: projectItem.prodUrl };
    }
    return {};
  };
  const getSourceUrl = (project: ProjectType) => {
    if (project.isOpenSource) {
      return { href: projectItem.sourceUrl };
    }
    return {};
  };
  return (
    <div className={styles.project__item}>
      <div className={styles.project__main}>
        <h3 className={styles.project__name}>{projectItem.name}</h3>
        <p className={styles.project__description}>{projectItem.description}</p>
        <div className={styles.button__group}>
          <div>
            <a
              {...getProdUrl(projectItem)}
              target="_blank"
              rel="noreferrer"
              className={`${styles.button} ${
                !projectItem.isInProd && styles["button--disabled"]
              }`}
            >
              View
            </a>
          </div>
          <div>
            <a
              {...getSourceUrl(projectItem)}
              target="_blank"
              rel="noreferrer"
              className={`${styles.button} ${
                !projectItem.isOpenSource && styles["button--disabled"]
              }`}
            >
              Source
            </a>
          </div>
        </div>
      </div>
      <div className={styles.project__tech_stack}>
        <span style={{ marginBottom: "5px" }}>Tech Stack</span>
        {projectItem.technologies.map((technology) => {
          return (
            <div className={styles.project__technology} key={technology}>
              {technology}
            </div>
          );
        })}
      </div>
    </div>
  );
};
