const EducationEditField = ({
  descLabel,
  descId,
  descValue,
  handleDescChange,
  startYearLabel,
  startYearId,
  startYearValue,
  handleStartYearChagne,
  endYearLabel,
  endYearId,
  endYearValue,
  handleEndYearChange,
}) => (
  <fieldset>
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
    <label htmlFor={startYearId}>
      {startYearLabel}
      <input
        type="text"
        name={startYearId}
        id={startYearId}
        value={startYearValue}
        onChange={handleStartYearChagne}
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

export default EducationEditField;
