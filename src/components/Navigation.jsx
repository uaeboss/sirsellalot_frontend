import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <h1>LOGO</h1>
      <div className="nav-list">
        <Link>Register</Link>
        <Link>Login</Link>
      </div>
    </div>
  );
};

export default Navigation;
