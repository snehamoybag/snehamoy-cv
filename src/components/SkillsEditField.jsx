const SkillsEditField = ({
  titleLabel,
  titleId,
  titleValue,
  handleTitleChange,
  descLabel,
  descId,
  descValue,
  handleDescChange,
}) => (
  <fieldset>
    <label htmlFor={titleId}>
      {titleLabel}
      <input
        type="text"
        id={titleId}
        name={titleId}
        value={titleValue}
        onChange={handleTitleChange}
      />
    </label>
    <label htmlFor={descId}>
      {descLabel}
      <textarea
        name={descId}
        id={descId}
        value={descValue}
        onChange={handleDescChange}
        cols="30"
        rows="10"
      />
    </label>
  </fieldset>
);

export default SkillsEditField;
