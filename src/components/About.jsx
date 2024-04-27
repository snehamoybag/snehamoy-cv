import { useState } from "react";
import initialAboutText from "../data/about";
import "../styles/About.css";
import EditButton from "./buttons/EditButton";
import EditModal from "./EditModal";

const About = () => {
  const [aboutText, setAboutText] = useState(initialAboutText);

  const aboutParagraphs = aboutText
    .split("\n")
    .filter((string) => string) // filter empty strings
    .map((string) => <p key={string}>{string}</p>);

  const [textareaValue, setTextareaValue] = useState(aboutText);

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const editModalFields = (
    <label htmlFor="about">
      <textarea
        name="about"
        id="about"
        cols="30"
        rows="10"
        value={textareaValue}
        onChange={handleTextareaChange}
      />
    </label>
  );

  const handleFormSubmit = () => {
    setAboutText(textareaValue);
    setIsEditModalOpen(false); // remove modal
  };

  const handleCancel = () => {
    setIsEditModalOpen(false); // remove modaal
  };

  return (
    <section className="about">
      {aboutParagraphs}
      <EditButton handleClick={() => setIsEditModalOpen(!isEditModalOpen)} />
      {isEditModalOpen && (
        <EditModal
          id="about-edit-modal"
          title="Edit About"
          handleFormSubmit={handleFormSubmit}
          handleCancel={handleCancel}
        >
          {editModalFields}
        </EditModal>
      )}
    </section>
  );
};

export default About;
