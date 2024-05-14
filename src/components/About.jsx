import { useState } from "react";
import initialAboutData from "../data/about";
import EditButton from "./buttons/EditButton";
import EditModal from "./EditModal";
import AboutEditField from "./AboutEditField";
import "../styles/about.css";

const About = () => {
  const [aboutData, setAboutData] = useState(initialAboutData);

  const aboutParagraphEls = aboutData
    .filter((string) => string) // filter empty strings
    .map((string, index) => (
      <p key={index} className="about__paragraph">
        {string}
      </p>
    ));

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleEditModalState = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const [editFieldValue, setEditFieldValue] = useState(aboutData.join("\n"));

  const handleEditInputChange = (event) => {
    setEditFieldValue(event.target.value);
  };

  const handleFormSubmit = () => {
    setAboutData(editFieldValue.split("\n"));
    toggleEditModalState();
  };

  return (
    <section className="about">
      {aboutParagraphEls}
      <EditButton handleClick={toggleEditModalState} />
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
