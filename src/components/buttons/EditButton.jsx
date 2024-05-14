import "../../styles/btn.css";
import "../../styles/sr-only.css";

const EditButton = ({ text = "Edit", handleClick }) => {
  return (
    <button
      type="button"
      className="btn btn--edit"
      title={text}
      onClick={handleClick}
    >
      <span className="sr-only">{text}</span>
    </button>
  );
};
export default EditButton;
