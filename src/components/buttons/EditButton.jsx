const EditButton = ({ handleClick }) => {
  return (
    <button type="button" className="btn--edit" onClick={handleClick}>
      Edit
    </button>
  );
};
export default EditButton;
