import { useState } from "react";
import initialEducationData from "../data/education";
import EditButton from "./buttons/EditButton";
import EditModal from "./EditModal";

const Education = () => {
  const [educationData, setEducationData] = useState(initialEducationData);

  const educationItems = educationData.map((eduItem, index) => (
    <div className="education__wrapper" key={index}>
      <p>{eduItem.description}</p>
      <p className="text---small">
        {eduItem.startYear} - {eduItem.endYear}
      </p>
    </div>
  ));

  const [eduFieldsData, setEduFieldsData] = useState(educationData);

  const handleEduFieldsChange = (event, index, eduPropertyName) => {
    const copyOfPrevEduFieldsData = JSON.parse(JSON.stringify(eduFieldsData));

    const editedEduItem = copyOfPrevEduFieldsData[index];
    editedEduItem[eduPropertyName] = event.target.value;

    const newFieldsData = copyOfPrevEduFieldsData;

    setEduFieldsData(newFieldsData);
  };

  const editModalFields = eduFieldsData.map((eduItem, index) => {
    const { description, startYear, endYear } = eduItem;

    const descriptionFieldId = "description_" + index;
    const startYearId = "startYear" + index;
    const endYearId = "endYear" + index;

    return (
      <fieldset key={index}>
        <label htmlFor={descriptionFieldId}>
          Description:
          <textarea
            name={descriptionFieldId}
            id={descriptionFieldId}
            value={description}
            onChange={(e) => handleEduFieldsChange(e, index, "description")}
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor={startYearId}>
          Start Year:
          <input
            type="text"
            name={startYearId}
            id={startYearId}
            value={startYear}
            onChange={(e) => handleEduFieldsChange(e, index, "startYear")}
          />
        </label>
        <label htmlFor={endYearId}>
          End Year:
          <input
            type="text"
            name={endYearId}
            id={endYearId}
            value={endYear}
            onChange={(e) => handleEduFieldsChange(e, index, "endYear")}
          />
        </label>
      </fieldset>
    );
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleEditModalState = () => setIsEditModalOpen(!isEditModalOpen);

  const handleFormSubmit = () => {
    setEducationData(eduFieldsData);
    toggleEditModalState();
  };

  return (
    <section className="education">
      <h2>
        <span>Education</span> <EditButton handleClick={toggleEditModalState} />
      </h2>
      <ul>{educationItems}</ul>
      {isEditModalOpen && (
        <EditModal
          id="education-edit-modal"
          title="Edit Education"
          handleFormSubmit={handleFormSubmit}
          handleCancel={toggleEditModalState}
        >
          {editModalFields}
        </EditModal>
      )}
    </section>
  );
};

export default Education;
