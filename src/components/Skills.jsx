import { useState } from "react";
import skills from "../data/skills";
import EditButton from "./buttons/EditButton";
import EditModal from "./EditModal";

const Skills = () => {
  const [skillsData, setSkillsData] = useState(skills);

  const skillItems = skillsData.map((skill, index) => {
    return (
      <li key={index}>
        <p>
          {skill.title}: {skill.skills}
        </p>
      </li>
    );
  });

  const [editFieldsDData, setEditFieldsData] = useState(skillsData);

  const handleEditFieldChange = (event, index, propertyName) => {
    const copyOfPrevEditFieldsData = JSON.parse(
      JSON.stringify(editFieldsDData),
    );

    const editedSkill = copyOfPrevEditFieldsData[index];
    editedSkill[propertyName] = event.target.value;

    const newEditFieldsData = copyOfPrevEditFieldsData;
    setEditFieldsData(newEditFieldsData);
  };

  const skillsEditFields = editFieldsDData.map((skill, index) => {
    const titleId = "skillTitle-" + index;
    const descId = "skillDesc-" + index;

    return (
      <fieldset key={index}>
        <label htmlFor={titleId}>
          Skill type:
          <input
            type="text"
            id={titleId}
            name={titleId}
            value={skill.title}
            onChange={(e) => handleEditFieldChange(e, index, "title")}
          />
        </label>
        <label htmlFor={descId}>
          Skill description:
          <textarea
            name={descId}
            id={descId}
            value={skill.skills}
            onChange={(e) => handleEditFieldChange(e, index, "skills")}
            cols="30"
            rows="10"
          />
        </label>
      </fieldset>
    );
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleEditModalState = () => setIsEditModalOpen(!isEditModalOpen);

  const handleEditFormSubmit = () => {
    setSkillsData(editFieldsDData);
    toggleEditModalState();
  };

  return (
    <section className="skills">
      <h2>
        <span>Skills</span>
        <EditButton handleClick={toggleEditModalState} />
      </h2>
      <ul>{skillItems}</ul>
      {isEditModalOpen && (
        <EditModal
          id="skills-edit-modal"
          title="Edit Skills"
          handleFormSubmit={handleEditFormSubmit}
          handleCancel={toggleEditModalState}
        >
          {skillsEditFields}
        </EditModal>
      )}
    </section>
  );
};

export default Skills;
