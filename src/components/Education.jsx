import { useState } from "react";
import initialEducationData from "../data/education";
import EditModal from "./EditModal";
import EducationEditField from "./EducationEditField";
import SectionHeading from "./SectionHeading";
import deepCopy from "../utils/deepCopy";
import getNonEmptyDataItems from "../utils/getNonEmptyDataItems";
import "../styles/education.css";
import "../styles/txt.css";

class EducationDataItem {
  constructor(description = "", startYear = "", endYear = "") {
    this.description = description;
    this.startYear = startYear;
    this.endYear = endYear;
  }
}

const Education = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleEditModalState = () => setIsEditModalOpen(!isEditModalOpen);

  const [educationData, setEducationData] = useState(initialEducationData);

  const educationItems = educationData.map((eduItem, index) => (
    <div className="education__text-wrapper" key={index}>
      <p>{eduItem.description}</p>
      <p className="txt txt--small">
        {eduItem.startYear} - {eduItem.endYear || "present"}
      </p>
    </div>
  ));

  const eduFieldsDefaultDataValue =
    initialEducationData && initialEducationData.length > 0
      ? initialEducationData
      : [new EducationDataItem()];

  const [eduFieldsData, setEduFieldsData] = useState(eduFieldsDefaultDataValue);

  const handleEduFieldsChange = (event, index, eduPropertyName) => {
    const copyOfPrevEduFieldsData = deepCopy(eduFieldsData);

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
      <EducationEditField
        key={index}
        descLabel={"Description:"}
        descId={descriptionFieldId}
        descValue={description}
        handleDescChange={(e) => handleEduFieldsChange(e, index, "description")}
        startYearLabel={"Start year:"}
        startYearId={startYearId}
        startYearValue={startYear}
        handleStartYearChagne={(e) =>
          handleEduFieldsChange(e, index, "startYear")
        }
        endYearLabel={"End year:"}
        endYearId={endYearId}
        endYearValue={endYear}
        handleEndYearChange={(e) => handleEduFieldsChange(e, index, "endYear")}
      />
    );
  });

  const handleAddMore = () => {
    const copyOfPrevEduFieldsData = deepCopy(eduFieldsData);

    copyOfPrevEduFieldsData.push(new EducationDataItem());

    const updatedFieldsData = copyOfPrevEduFieldsData;
    setEduFieldsData(updatedFieldsData);
  };

  const handleFormSubmit = () => {
    const copyOfPrevEduFieldsData = deepCopy(eduFieldsData);
    const nonEmptyEduFieldsData = getNonEmptyDataItems(copyOfPrevEduFieldsData);

    setEduFieldsData(nonEmptyEduFieldsData);
    setEducationData(nonEmptyEduFieldsData);
    toggleEditModalState();
  };

  const handleFormCancel = () => {
    const copyOfPrevEducationData = deepCopy(educationData);

    setEduFieldsData(copyOfPrevEducationData);
    toggleEditModalState();
  };

  const handleContentReset = () => {
    setEducationData(initialEducationData);
    setEduFieldsData(eduFieldsDefaultDataValue);
  };

  return (
    <section className="education">
      <SectionHeading
        title={"Education"}
        handleEditButtonClick={toggleEditModalState}
        handleResetButtonClick={handleContentReset}
      />
      <ul>{educationItems}</ul>
      {isEditModalOpen && (
        <EditModal
          id="education-edit-modal"
          title="Edit Education"
          handleFormSubmit={handleFormSubmit}
          handleCancel={handleFormCancel}
          handleAddMore={handleAddMore}
        >
          {editModalFields}
        </EditModal>
      )}
    </section>
  );
};

export default Education;
