const ExperienceEditField = ({
  titleLabel,
  titleId,
  titleValue,
  handleTitleChange,
  startYearLabel,
  startYearId,
  startYearValue,
  handleStartYearChange,
  endYearLabel,
  endYearId,
  endYearValue,
  handleEndYearChange,
}) => (
  <fieldset>
    <label htmlFor={titleId}>
      {titleLabel}
      <input
        type="text"
        name={titleId}
        id={titleId}
        value={titleValue}
        onChange={handleTitleChange}
      />
    </label>
    <label htmlFor={startYearId}>
      {startYearLabel}
      <input
        type="text"
        name={startYearId}
        id={startYearId}
        value={startYearValue}
        onChange={handleStartYearChange}
      />
    </label>
    <label htmlFor={endYearId}>
      {endYearLabel}
      <input
        type="text"
        name={endYearId}
        id={endYearId}
        value={endYearValue}
        onChange={handleEndYearChange}
      />
    </label>
  </fieldset>
);

export default ExperienceEditField;
