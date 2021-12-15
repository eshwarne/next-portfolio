export type SkillPropsType = {
  title: string;
  tools: string[];
};

export const Skill = ({ title, tools }: SkillPropsType) => {
  return (
    <div>
      <h3>{title}</h3>
      {tools.map((tool) => (
        <li>{tool}</li>
      ))}
    </div>
  );
};
