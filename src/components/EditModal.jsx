import FormSubmitButton from "./buttons/FormSubmitButton";
import FormCancelButton from "./buttons/FormCancelButton";
import AddMoreButton from "./buttons/AddMoreButton";
import "../styles/edit-modal.css";
import "../styles/txt.css";

const EditModal = ({
  id,
  title,
  handleFormSubmit,
  handleCancel,
  handleAddMore,
  children,
}) => {
  let isChildrenAvailable = false;

  if (Array.isArray(children) && children.length > 0) {
    isChildrenAvailable = true;
  } else if (!Array.isArray(children)) {
    isChildrenAvailable = Boolean(children);
  }

  return (
    <>
      <dialog id={id} className="edit-modal" open>
        <h2 className="edit-modal__title">{title}</h2>

        <form action="/" className="edit-modal__form">
          {isChildrenAvailable ? (
            children
          ) : (
            <p className="edit-modal__empty-content txt txt--big">
              Error 404: no contents to edit!
            </p>
          )}
        </form>
        <div className="edit-modal__buttons-wrapper">
          {isChildrenAvailable && (
            <FormSubmitButton handleClick={handleFormSubmit} />
          )}
          <FormCancelButton handleClick={handleCancel} />
          {handleAddMore && <AddMoreButton handleClick={handleAddMore} />}
        </div>
      </dialog>
      {/* custom styled backdrop since inbuild dialog::backdrop only works with showModal() function */}
      <div className="edit-modal__backdrop"></div>
    </>
  );
};

export default EditModal;
