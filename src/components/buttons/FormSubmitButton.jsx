const FormSubmitButton = ({ text = "Submit", handleClick }) => (
  <button type="submit" className="btn btn--submit" onClick={handleClick}>
    {text}
  </button>
);

export default FormSubmitButton;
