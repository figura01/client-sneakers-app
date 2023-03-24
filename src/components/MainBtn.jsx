import { Link } from "react-router-dom";
import "../styles/MainBtn.css";

const MainBtn = ({ title }) => {
  return (
    <Link to={`#`} className="main-btn">
      {title}
    </Link>
  );
};

export default MainBtn;
