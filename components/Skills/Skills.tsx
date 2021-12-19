import { Skill, SkillPropsType } from "./Skill";
import styles from "./Skills.module.scss";

export const Skills = ({ skills }: { skills: SkillPropsType[] }) => {
  return (
    <div className={styles.skills}>
      <span className={styles.skills__locator} id="skills"></span>
      <h1 className={styles.skills__title}>Skills Stack</h1>
      <div className={`${styles.skills__gallery}`}>
        {skills.map((skill) => (
          <Skill title={skill.title} tools={skill.tools} key={skill.title} />
        ))}
      </div>
    </div>
  );
};
