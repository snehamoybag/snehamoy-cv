import EditButton from "./buttons/EditButton";
const SectionHeading = ({ title, handleEditButtonClick }) => (
  <div className="section-heading">
    <h2 className="section-heading__title">{title}</h2>
    <EditButton handleClick={handleEditButtonClick} />
  </div>
);

export default SectionHeading;