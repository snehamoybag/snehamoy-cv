const AddMoreButton = ({ text = "+ Add more...", handleClick }) => (
  <button className="btn btn--add-more" onClick={handleClick}>
    {text}
  </button>
);

export default AddMoreButton;
