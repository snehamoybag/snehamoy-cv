import "../../styles/btn.css";

const FormCancelButton = ({ text = "Cancel", handleClick }) => (
  <button type="submit" className="btn btn--cancel" onClick={handleClick}>
    {text}
  </button>
);

export default FormCancelButton;
