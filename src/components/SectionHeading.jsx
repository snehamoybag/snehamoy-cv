import EditButton from "./buttons/EditButton";
import ResetButton from "./buttons/ResetButton";
import "../styles/section-heading.css";

const SectionHeading = ({
  title,
  handleEditButtonClick,
  handleResetButtonClick,
}) => (
  <div className="section-heading">
    <h2 className="section-heading__title">{title}</h2>
    <div className="section-heading__buttons-wrapper">
      <EditButton handleClick={handleEditButtonClick} />
      <ResetButton handleClick={handleResetButtonClick} />
    </div>
  </div>
);

export default SectionHeading;
