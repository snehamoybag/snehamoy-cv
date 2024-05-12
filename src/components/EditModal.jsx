import FormSubmitButton from "./buttons/FormSubmitButton";
import FormCancelButton from "./buttons/FormCancelButton";
import AddMoreButton from "./buttons/AddMoreButton";

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
    <dialog id={id} className="edit-modal" open>
      <h2>{title}</h2>

      <form action="/">
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
  );
};

export default EditModal;
