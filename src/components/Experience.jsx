import { useState } from "react";
import initialExpData from "../data/experience";
import EditModal from "./EditModal";
import ExperienceEditField from "./ExperienceEditField";
import SectionHeading from "./SectionHeading";
import getNonEmptyDataItems from "../utils/getNonEmptyDataItems";
import deepCopy from "../utils/deepCopy";
import "../styles/experience.css";
import "../styles/txt.css";

class ExperienceDataItem {
  constructor(job = "", startYear = "", endYear = "") {
    this.job = job;
    this.startYear = startYear;
    this.endYear = endYear;
  }
}

const Experience = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleEditModalState = () => setIsEditModalOpen(!isEditModalOpen);

  const [experienceData, setExperienceData] = useState(initialExpData);

  const experienceItems = experienceData.map((experience) => {
    const { job, startYear, endYear } = experience;

    return (
      <li key={job + startYear + endYear} className="experience__list-item">
        <p>{job}</p>
        <p className="txt txt--small">
          {startYear} to {endYear}
        </p>
      </li>
    );
  });

  const expFieldsDefaultDataValue =
    initialExpData && initialExpData.length > 0
      ? initialExpData
      : [new ExperienceDataItem()];

  const [expFieldsData, setExpFieldsData] = useState(expFieldsDefaultDataValue);

  const handleExpFieldChange = (event, index, propertyName) => {
    const copyOfPrevFieldsData = deepCopy(expFieldsData);

    const editedData = copyOfPrevFieldsData[index];
    editedData[propertyName] = event.target.value;

    const newFieldsData = copyOfPrevFieldsData;
    setExpFieldsData(newFieldsData);
  };

  const editModalFields = expFieldsData.map((exp, index) => {
    const { job, startYear, endYear } = exp;

    const jobTitleId = "job_" + index;
    const startYearId = "startYear_" + index;
    const endYearId = "endYear_" + index;

    return (
      <ExperienceEditField
        key={index}
        titleLabel={"Job title:"}
        titleId={jobTitleId}
        titleValue={job}
        handleTitleChange={(e) => handleExpFieldChange(e, index, "job")}
        startYearLabel={"Start year:"}
        startYearId={startYearId}
        startYearValue={startYear}
        handleStartYearChange={(e) =>
          handleExpFieldChange(e, index, "startYear")
        }
        endYearLabel={"End year:"}
        endYearId={endYearId}
        endYearValue={endYear}
        handleEndYearChange={(e) => handleExpFieldChange(e, index, "endYear")}
      />
    );
  });

  const handleAddMore = () => {
    const copyOfPrevExpFieldsData = deepCopy(expFieldsData);

    copyOfPrevExpFieldsData.push(new ExperienceDataItem());

    const updatedFieldsData = copyOfPrevExpFieldsData;
    setExpFieldsData(updatedFieldsData);
  };

  const hanldeEditFormSubmit = () => {
    const copyOfExpFieldsData = deepCopy(expFieldsData);
    const nonEmptyExpFieldData = getNonEmptyDataItems(copyOfExpFieldsData);

    setExperienceData(nonEmptyExpFieldData);
    setExpFieldsData(nonEmptyExpFieldData);
    toggleEditModalState();
  };

  const handleEditFormCancel = () => {
    const copyOfExpData = deepCopy(experienceData);

    setExpFieldsData(copyOfExpData);
    toggleEditModalState();
  };

  const handleContentReset = () => {
    setExperienceData(initialExpData);
    setExpFieldsData(expFieldsDefaultDataValue);
  };

  // Experience component
  return (
    <section className="experience">
      <SectionHeading
        title={"Experience"}
        handleEditButtonClick={toggleEditModalState}
        handleResetButtonClick={handleContentReset}
      />
      <ol className="experience__list">{experienceItems}</ol>
      {isEditModalOpen && (
        <EditModal
          id="experience-edit-modal"
          title="Edit Experience"
          handleFormSubmit={hanldeEditFormSubmit}
          handleCancel={handleEditFormCancel}
          handleAddMore={handleAddMore}
        >
          {editModalFields}
        </EditModal>
      )}
    </section>
  );
};

export default Experience;
