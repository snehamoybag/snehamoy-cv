import { useState } from "react";
import skills from "../data/skills";

const Skills = () => {
  const [skillsData, setSkillsData] = useState(skills);

  const skillItems = skillsData.map((skill) => {
    const skillTitle = skill.title;
    const skillsText = skill.skills.join(", ");

    return (
      <li key={skillTitle}>
        <p>
          {skillTitle}: {skillsText}
        </p>
      </li>
    );
  });

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>{skillItems}</ul>
    </section>
  );
};

export default Skills;
