import { useState } from "react";
import initialAboutData from "../data/about";
import "../styles/About.css";
import EditButton from "./buttons/EditButton";
import EditModal from "./EditModal";

const About = () => {
  const [aboutData, setAboutData] = useState(initialAboutData);

  const aboutParagraphEls = aboutData
    .filter((string) => string) // filter empty strings
    .map((string, index) => <p key={index}>{string}</p>);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleEditModalState = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const [editValue, setEditValue] = useState(aboutData.join("\n"));

  const handleEditInputChange = (event) => {
    setEditValue(event.target.value);
  };

  const editModalInput = (
    <label htmlFor="about">
      <textarea
        name="about"
        id="about"
        cols="30"
        rows="10"
        value={editValue}
        onChange={handleEditInputChange}
      />
    </label>
  );

  const handleFormSubmit = () => {
    setAboutData(editValue.split("\n"));
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
          {editModalInput}
        </EditModal>
      )}
    </section>
  );
};

export default About;
