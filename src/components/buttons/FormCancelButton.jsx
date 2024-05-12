const FormCancelButton = ({ text = "Cancel", handleClick }) => (
  <button type="submit" className="btn btn--submit" onClick={handleClick}>
    {text}
  </button>
);

export default FormCancelButton;
