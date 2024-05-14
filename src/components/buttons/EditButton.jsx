const EditButton = ({ text = "Edit", handleClick }) => {
  return (
    <button type="button" className="btn--edit" onClick={handleClick}>
      <span className="sr-only">{text}</span>
    </button>
  );
};
export default EditButton;
