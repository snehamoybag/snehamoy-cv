const AboutEditField = ({ label, id, value, handleChange }) => (
  <fieldset>
    <label htmlFor={id}>
      {label}
      <textarea
        name={id}
        id={id}
        value={value}
        onChange={(e) => handleChange(e)}
        cols="30"
        rows="10"
      />
    </label>
  </fieldset>
);

export default AboutEditField;
