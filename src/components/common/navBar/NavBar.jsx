import { useState } from "react";
import { Link } from "react-router";
import "./NavBar.css";
import "boxicons";

export default function NavBar() {
  const [login, setLogin] = useState(true);

  return (
    <nav className="navBar-container">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        KOULCHI BATEL
      </Link>

      {/* Navigation */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Products">Products</Link>
        </li>

        <li>
          <Link to="/About">About Us</Link>
        </li>

        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      {/* Actions */}
      <div className="logo-container">
        <box-icon className="icone" name="search"></box-icon>

        <box-icon className="icone" name="globe"></box-icon>

        <box-icon
          className={`icone ${login ? "hide" : "active"}`}
          name="user"
        ></box-icon>

        <div className={`login ${login ? "active" : "hide"}`}>
          <button>Sign In</button>
          <button>Log In</button>
        </div>
      </div>
    </nav>
  );
}
