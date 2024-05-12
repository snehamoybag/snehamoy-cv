import { useState } from "react";
import initialSkillsData from "../data/skills";
import EditModal from "./EditModal";
import SkillsEditField from "./SkillsEditField";
import SectionHeading from "./SectionHeading";
import deepCopy from "../utils/deepCopy";
import getNonEmptyDataItems from "../utils/getNonEmptyDataItems";

class SkillsDataItem {
  constructor(title = "", description = "") {
    this.title = title;
    this.description = description;
  }
}

const Skills = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleEditModalState = () => setIsEditModalOpen(!isEditModalOpen);

  const [skillsData, setSkillsData] = useState(initialSkillsData);

  const skillItems = skillsData.map((skill, index) => {
    return (
      <li key={index}>
        <p>
          {skill.title}: {skill.description}
        </p>
      </li>
    );
  });

  const [editFieldsData, setEditFieldsData] = useState(
    initialSkillsData && initialSkillsData.length > 0
      ? initialSkillsData
      : [new SkillsDataItem()],
  );

  const handleEditFieldChange = (event, index, propertyName) => {
    const copyOfPrevEditFieldsData = deepCopy(editFieldsData);
    const editedSkill = copyOfPrevEditFieldsData[index];

    editedSkill[propertyName] = event.target.value;

    const newEditFieldsData = copyOfPrevEditFieldsData;
    setEditFieldsData(newEditFieldsData);
  };

  const skillsEditFields = editFieldsData.map((skill, index) => {
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

  const handleAddMore = () => {
    const copyOfPrevEditFieldsData = deepCopy(editFieldsData);

    copyOfPrevEditFieldsData.push(new SkillsDataItem());

    const updatedEditFieldsData = copyOfPrevEditFieldsData;
    setEditFieldsData(updatedEditFieldsData);
  };

  const handleEditFormSubmit = () => {
    const copyOfFieldsData = deepCopy(editFieldsData);
    const nonEmptyEditFieldsData = getNonEmptyDataItems(copyOfFieldsData);

    setSkillsData(nonEmptyEditFieldsData);
    setEditFieldsData(nonEmptyEditFieldsData);
    toggleEditModalState();
  };

  const handleEditFormCancel = () => {
    const copyOfSkillsData = deepCopy(skillsData);

    setEditFieldsData(copyOfSkillsData);
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
          handleCancel={handleEditFormCancel}
          handleAddMore={handleAddMore}
        >
          {skillsEditFields}
        </EditModal>
      )}
    </section>
  );
};

export default Skills;
