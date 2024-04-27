const EditModal = ({ id, title, handleFormSubmit, handleCancel, children }) => {
  return (
    <dialog id={id} className="edit-modal" open>
      <h2>{title}</h2>

      <form action="/">{children}</form>
      <div className="edit-modal__buttons-wrapper">
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>

        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </dialog>
  );
};

export default EditModal;
