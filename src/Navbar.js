import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <li>
        <Link to="/" className="nav-link">ראשי</Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">אודות התוכנה</Link>
      </li>
      <li>
        <a href="https://www.safety-car.co.il/" target="_blank" className="nav-link">
          תעבורה על בטוח
        </a>
      </li>
      <li>
        <Link to="/contact" className="nav-link">צור קשר</Link>
      </li>
      <li>
        <Link to="/" className="nav-link-img" aria-label="Go to homepage">
          <img src="/media/ZivLogo.png" alt="ziv-logo"/>
        </Link>
      </li>
    </nav>
  );
}

export default Navbar;