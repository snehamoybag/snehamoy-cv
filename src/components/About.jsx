import { useState } from "react";
import initialAboutData from "../data/about";
import EditButton from "./buttons/EditButton";
import ResetButton from "./buttons/ResetButton";
import EditModal from "./EditModal";
import AboutEditField from "./AboutEditField";
import removeEmptyStrings from "../utils/removeEmptyStrings";
import "../styles/about.css";

const About = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleEditModalState = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const defaultValeOfAboutData = removeEmptyStrings(initialAboutData);
  const [aboutData, setAboutData] = useState(defaultValeOfAboutData);

  const aboutParagraphEls = aboutData.map((string, index) => (
    <p key={index} className="about__paragraph">
      {string}
    </p>
  ));

  const defautEditFieldValue = initialAboutData.join("\n");
  const [editFieldValue, setEditFieldValue] = useState(defautEditFieldValue);

  const handleEditInputChange = (event) => {
    setEditFieldValue(event.target.value);
  };

  const handleFormSubmit = () => {
    const arrOfParagraphs = removeEmptyStrings(editFieldValue.split("\n"));

    setAboutData(arrOfParagraphs);
    setEditFieldValue(arrOfParagraphs.join("\n")); // to match with rendered data
    toggleEditModalState();
  };

  const handleContentReset = () => {
    setAboutData(defaultValeOfAboutData);
    setEditFieldValue(defautEditFieldValue);
  };

  return (
    <section className="about">
      {aboutParagraphEls}
      <div className="about__buttons-wrapper">
        <EditButton handleClick={toggleEditModalState} />
        <ResetButton handleClick={handleContentReset} />
      </div>
      {isEditModalOpen && (
        <EditModal
          id="about-edit-modal"
          title="Edit About"
          handleFormSubmit={handleFormSubmit}
          handleCancel={toggleEditModalState}
        >
          <AboutEditField
            label={"(type after a new line to render a new paragraph)"}
            id="about-edit"
            value={editFieldValue}
            handleChange={handleEditInputChange}
          />
        </EditModal>
      )}
    </section>
  );
};

export default About;
