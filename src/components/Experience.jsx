import { useState } from "react";
import experience from "../data/experience";

const Experience = () => {
  const [experienceData, setExperienceData] = useState(experience);

  const experienceItems = experienceData.map((experience) => {
    const { job, startYear, endYear } = experience;

    return (
      <li key={job + startYear + endYear}>
        <p>{job}</p>
        <p className="small-text">
          {startYear} to {endYear}
        </p>
      </li>
    );
  });

  return (
    <section className="experience">
      <h2>Experience</h2>
      <ol>{experienceItems}</ol>
    </section>
  );
};

export default Experience;
