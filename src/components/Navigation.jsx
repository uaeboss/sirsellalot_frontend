import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-content">
        <h1>LOGO</h1>
        <div className="nav-list">
          <Link>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
