import { useState } from "react";
import skills from "../data/skills";
import EditButton from "./buttons/EditButton";
import EditModal from "./EditModal";
import SkillsEditField from "./SkillsEditField";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  const [skillsData, setSkillsData] = useState(skills);

  const skillItems = skillsData.map((skill, index) => {
    return (
      <li key={index}>
        <p>
          {skill.title}: {skill.description}
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
    const { title, description } = skill;

    const titleId = "skillTitle-" + index;
    const descId = "skillDesc-" + index;

    return (
      <SkillsEditField
        key={index}
        titleLabel={"Skill type:"}
        titleId={titleId}
        titleValue={title}
        handleTitleChange={(e) => handleEditFieldChange(e, index, "title")}
        descLabel={"Skill description:"}
        descId={descId}
        descValue={description}
        handleDescChange={(e) => handleEditFieldChange(e, index, "description")}
      />
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
      <SectionHeading
        title={"Skills"}
        handleEditButtonClick={toggleEditModalState}
      />
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
