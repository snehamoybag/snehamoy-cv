import "../../styles/btn.css";
import "../../styles/sr-only.css";

const ResetButton = ({ text = "Reset", handleClick }) => (
  <button className="btn btn--reset" title={text} onClick={handleClick}>
    <span className="sr-only">{text}</span>
  </button>
);

export default ResetButton;
