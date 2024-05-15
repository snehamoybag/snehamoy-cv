import { useState } from "react";
import initialContactData from "../data/contact";
import EditModal from "./EditModal";
import ContactEditField from "./ContactEditField";
import SectionHeading from "./SectionHeading";
import deepCopy from "../utils/deepCopy";
import getNonEmptyDataItems from "../utils/getNonEmptyDataItems";
import "../styles/contact.css";

class ContactDataItem {
  constructor(type = "", address = "") {
    this.type = type;
    this.address = address;
  }
}

const Contact = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleEditModalState = () => setIsEditModalOpen(!isEditModalOpen);

  const [contactData, setContactData] = useState(initialContactData);

  const contactItems = contactData.map((contact, index) => {
    const { type, address } = contact;
    let iconClassName = "icon-default";

    if (type.startsWith("phone") || type.startsWith("Phone")) {
      iconClassName = "icon-phone";
    } else if (type.startsWith("email") || type.startsWith("Email")) {
      iconClassName = "icon-email";
    }

    const listItemClassName = `contact__list-item ${iconClassName}`;

    return (
      <li key={index} className={listItemClassName}>
        <p>
          {type} : <span className="spaced-chars">{address}</span>
        </p>
      </li>
    );
  });

  const editFieldsDefaultDataValue =
    initialContactData && initialContactData.length > 0
      ? initialContactData
      : [new ContactDataItem()];

  const [editFieldsData, setEditFieldsData] = useState(
    editFieldsDefaultDataValue,
  );

  const handleEditFieldsChange = (event, index, propertyName) => {
    const copyOfPrevEditFieldsData = deepCopy(editFieldsData);
    const editedData = copyOfPrevEditFieldsData[index];

    editedData[propertyName] = event.target.value;
    const updatedEditFieldsData = copyOfPrevEditFieldsData;

    setEditFieldsData(updatedEditFieldsData);
  };

  const editFieldItems = editFieldsData.map((contact, index) => {
    const contactTypeInputId = `contact_field_${contact.type}_${index}`;
    const contactAddressInputId = `contact_field_${contact.address}_${index}`;

    return (
      <ContactEditField
        key={index}
        typeLabel={"Contact type:"}
        tyoeId={contactTypeInputId}
        typeValue={contact.type}
        handleTyoeChange={(e) => handleEditFieldsChange(e, index, "type")}
        addressLabel={"Contact address:"}
        addressId={contactAddressInputId}
        addressValue={contact.address}
        handleAddressChange={(e) => handleEditFieldsChange(e, index, "address")}
      />
    );
  });

  const handleAddMore = () => {
    const copyOfPrevEditFieldsData = deepCopy(editFieldsData);

    copyOfPrevEditFieldsData.push(new ContactDataItem());

    const updatedEditFieldsData = copyOfPrevEditFieldsData;
    setEditFieldsData(updatedEditFieldsData);
  };

  const handleFormSubmit = () => {
    const copyOfPrevEditFiledsData = deepCopy(editFieldsData);

    const nonEmptyDataItems = getNonEmptyDataItems(copyOfPrevEditFiledsData);

    setContactData(nonEmptyDataItems);
    setEditFieldsData(nonEmptyDataItems);
    toggleEditModalState();
  };

  const handleFormCancel = () => {
    const copyOfContactData = deepCopy(contactData);

    setEditFieldsData(copyOfContactData);
    toggleEditModalState();
  };

  const handleContentReset = () => {
    setContactData(initialContactData);
    setEditFieldsData(editFieldsDefaultDataValue);
  };

  // contact component
  return (
    <section className="contact">
      <SectionHeading
        title={"Contact"}
        handleEditButtonClick={toggleEditModalState}
        handleResetButtonClick={handleContentReset}
      />
      <ul className="contact__list">{contactItems}</ul>
      {isEditModalOpen && (
        <EditModal
          id="edit-contact-modal"
          title="Edit Contact"
          handleFormSubmit={handleFormSubmit}
          handleCancel={handleFormCancel}
          handleAddMore={handleAddMore}
        >
          {editFieldItems}
        </EditModal>
      )}
    </section>
  );
};

export default Contact;
