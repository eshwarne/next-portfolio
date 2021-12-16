import { useEffect, useState } from "react";
import { Skill, SkillPropsType } from "./Skill";
import styles from "./Skills.module.scss";

export const Skills = () => {
  const [skills, setSkills] = useState<SkillPropsType[]>([]);
  useEffect(() => {
    const getSkillsData = async () => {
      const data = await fetch("/api/skills");
      const skillsData = await data.json();
      setSkills(skillsData.skills);
    };
    getSkillsData();
  }, []);
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
