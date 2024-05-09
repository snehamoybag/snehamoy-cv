import { useState } from "react";
import initialEducationData from "../data/education";
import EditButton from "./buttons/EditButton";
import EditModal from "./EditModal";
import EducationEditField from "./EducationEditField";
import SectionHeading from "./SectionHeading";

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

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleEditModalState = () => setIsEditModalOpen(!isEditModalOpen);

  const handleFormSubmit = () => {
    setEducationData(eduFieldsData);
    toggleEditModalState();
  };

  return (
    <section className="education">
      <SectionHeading
        title={"Education"}
        handleEditButtonClick={toggleEditModalState}
      />
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
