import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-content">
        <Link to={"/"} className="logo">
          LOGO
        </Link>
        <div className="nav-list">
          <Link to={"login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
