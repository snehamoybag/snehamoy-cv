import { useState } from "react";
import initialContactData from "../data/contact";
import "../styles/Contact.css";
import EditButton from "./buttons/EditButton";
import EditModal from "./EditModal";
import ContactEditField from "./ContactEditField";

const Contact = () => {
  const [contactData, setContactData] = useState(initialContactData);

  const contactItems = contactData.map((contact, index) => (
    <li key={index}>
      {contact.type}: {contact.address}
    </li>
  ));

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen);

  const [editFieldsData, setEditFieldsData] = useState(contactData);

  const handleInputChange = (event, index, contactPropertyName) => {
    const copyOfPrevEditFieldsData = JSON.parse(JSON.stringify(editFieldsData));

    const editedContact = copyOfPrevEditFieldsData[index];
    editedContact[contactPropertyName] = event.target.value;

    const newFieldsData = copyOfPrevEditFieldsData;

    setEditFieldsData(newFieldsData);
  };

  const editFields = editFieldsData.map((contact, index) => {
    const contactTypeInputId = `contact_field_${contact.type}_${index}`;
    const contactAddressInputId = `contact_field_${contact.address}_${index}`;

    return (
      <ContactEditField
        key={index}
        typeLabel={"Contact type:"}
        tyoeId={contactTypeInputId}
        typeValue={contact.type}
        handleTyoeChange={(e) => handleInputChange(e, index, "type")}
        addressLabel={"Contact address:"}
        addressId={contactAddressInputId}
        addressValue={contact.address}
        handleAddressChange={(e) => handleInputChange(e, index, "address")}
      />
    );
  });

  const handleFormSubmit = () => {
    setContactData(editFieldsData);
    toggleEditModal();
  };

  return (
    <section className="contact">
      <h2>
        <span>Contact</span>
        <EditButton handleClick={toggleEditModal} />
      </h2>
      <ul className="contact__list">{contactItems}</ul>
      {isEditModalOpen && (
        <EditModal
          id="edit-contact-modal"
          title="Edit Contact"
          handleFormSubmit={handleFormSubmit}
          handleCancel={toggleEditModal}
        >
          {editFields}
        </EditModal>
      )}
    </section>
  );
};

export default Contact;
