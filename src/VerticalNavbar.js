import React from "react";
import "./VerticalNavbar.css";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";

function VerticalNavbar(props) {
  return (
    <nav
      id="vertical_navbar"
      // style={{ display: props.navbarDisplay ? "flex" : "none" }}
      // we removed the display propery here because the visabillity is controlled by css classes.
      className={props.navbarDisplay ? "open" : ""}
    >
      {/* <HamburgerMenu onClick={props.handleHamburgerClick} /> */}
      {/*i came to the conclution the hamburger menu dosent neccacerally have to be inside the vertical navbar (renderd inside it) because i can still controll
       the navbar visability with the css classes (like we did before with the handleHamburgerClick function) and i just need to increment the z-index of the hamburger menu.*/}
      <li>
        <Link to="/" className="vertical-nav-link">
          ראשי
        </Link>
      </li>
      <li>
        <Link to="/about" className="vertical-nav-link">
          אודות התוכנה
        </Link>
      </li>
      <li>
        <a
          href="https://www.safety-car.co.il/"
          target="_blank"
          className="vertical-nav-link"
        >
          תעבורה על בטוח
        </a>
      </li>
      <li>
        <Link to="/contact" className="vertical-nav-link">
          צור קשר
        </Link>
      </li>
      <li className="img-li">
        <Link to="/" className="vertical-nav-link-img">
          <img src="/media/ZivLogo.png" />
        </Link>
      </li>
    </nav>
  );
}

export default VerticalNavbar;
