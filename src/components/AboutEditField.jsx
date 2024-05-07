const AboutEditField = ({ label, id, value, handleChange }) => (
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
);

export default AboutEditField;
