import FormSubmitButton from "./buttons/FormSubmitButton";
import FormCancelButton from "./buttons/FormCancelButton";
import AddMoreButton from "./buttons/AddMoreButton";
import "../styles/EditModal.css";

const EditModal = ({
  id,
  title,
  handleFormSubmit,
  handleCancel,
  handleAddMore,
  children,
}) => {
  const isChildrenAvailable = children && children.length > 0;

  return (
    <>
      <dialog id={id} className="edit-modal" open>
        <h2 className="edit-modal__title">{title}</h2>

        <form action="/" className="edit-modal__form">
          {isChildrenAvailable ? (
            children
          ) : (
            <p>
              <span className="text--big">Error 404</span>: No contents to edit
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
