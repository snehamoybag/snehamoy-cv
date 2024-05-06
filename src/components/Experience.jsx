import { useState } from "react";
import initialExpData from "../data/experience";
import EditButton from "./buttons/EditButton";
import EditModal from "./EditModal";

const Experience = () => {
  const [experienceData, setExperienceData] = useState(initialExpData);

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

  const [expFieldsData, setExpFieldsData] = useState(experienceData);

  const handleExpFieldChange = (event, index, propertyName) => {
    const copyOfPrevFieldsData = JSON.parse(JSON.stringify(expFieldsData));

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
      <fieldset key={index}>
        <label htmlFor={jobTitleId}>
          Job Title:
          <input
            type="text"
            name={jobTitleId}
            id={jobTitleId}
            value={job}
            onChange={(e) => handleExpFieldChange(e, index, "job")}
          />
        </label>
        <label htmlFor={startYearId}>
          Start Year:
          <input
            type="text"
            name={startYearId}
            id={startYearId}
            value={startYear}
            onChange={(e) => handleExpFieldChange(e, index, "startYear")}
          />
        </label>
        <label htmlFor={endYearId}>
          End Year:
          <input
            type="text"
            name={endYearId}
            id={endYearId}
            value={endYear}
            onChange={(e) => handleExpFieldChange(e, index, "endYear")}
          />
        </label>
      </fieldset>
    );
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleEditModalState = () => setIsEditModalOpen(!isEditModalOpen);

  const handleEditModalFormSubmit = () => {
    setExperienceData(expFieldsData);
    toggleEditModalState();
  };

  return (
    <section className="experience">
      <h2>
        <span>Experience</span>
        <EditButton handleClick={toggleEditModalState} />
      </h2>
      <ol>{experienceItems}</ol>
      {isEditModalOpen && (
        <EditModal
          id="experience-edit-modal"
          title="Edit Experience"
          handleFormSubmit={handleEditModalFormSubmit}
          handleCancel={toggleEditModalState}
        >
          {editModalFields}
        </EditModal>
      )}
    </section>
  );
};

export default Experience;
