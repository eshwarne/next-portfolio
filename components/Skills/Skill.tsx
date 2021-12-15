import styles from "./Skill.module.scss";
export type SkillPropsType = {
  title: string;
  tools: string[];
};

export const Skill = ({ title, tools }: SkillPropsType) => {
  return (
    <div className={styles.skills__skill_item}>
      <h3 className={styles.skills__skill_item__title}>{title}</h3>
      <div className={styles.skills__skill_item__tools}>
        {tools.map((tool) => (
          <li className={styles.skills__skill_item__tool} key={tool}>
            {tool}
          </li>
        ))}
      </div>
    </div>
  );
};
