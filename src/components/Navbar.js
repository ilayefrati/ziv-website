import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar({darkMode=false, lightMode=false}) {
  return (
    <nav id="navbar">
      <li>
        <Link to="/" className={`nav-link ${darkMode ? 'dark-mode' : ''} ${lightMode ? 'light-mode' : ''}`}>
          ראשי
        </Link>
      </li>
      <li>
        <Link to="/about" className={`nav-link ${darkMode ? 'dark-mode' : ''} ${lightMode ? 'light-mode' : ''}`}>
          אודות התוכנה
        </Link>
      </li>
      <li>
        <a
          href="https://www.safety-car.co.il/"
          target="_blank"
          className={`nav-link ${darkMode ? 'dark-mode' : ''} ${lightMode ? 'light-mode' : ''}`}
        >
          תעבורה על בטוח
        </a>
      </li>
      <li>
        <Link to="/contact" className={`nav-link ${darkMode ? 'dark-mode' : ''} ${lightMode ? 'light-mode' : ''}`}>
          צור קשר
        </Link>
      </li>
      <li>
        <Link to="/" className="nav-link-img" aria-label="Go to homepage">
          <img
            src={`${process.env.PUBLIC_URL}/media/ZivLogo.png`}
            alt="ziv-logo"
          />
        </Link>
      </li>
    </nav>
  );
}

export default Navbar;
