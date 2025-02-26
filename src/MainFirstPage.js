import React, { useState, useEffect } from "react";
import "./MainFirstPage.css";
import Navbar from "./Navbar";
import NavbarContainer from "./NavbarContainer";

function MainFirstPage() {
  const [navbarDisplay, setNavbarDisplay] = useState(window.innerWidth > 481);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth <= 481 && navbarDisplay) {
        setNavbarDisplay(false);
      } else if (window.innerWidth > 481 && !navbarDisplay) {
        setNavbarDisplay(true);
      }
    };

    window.addEventListener("resize", checkScreen);

    // Check screen size on initial render
    checkScreen();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, [navbarDisplay]);

  return (
    <div className="main-first-page">
      {navbarDisplay ? <Navbar /> : <NavbarContainer />}
      <div className="main-first-page-text">
        <h1>זיו מערכות תוכנה</h1>
        <h3>
        מערכת זיו היא הפתרון המתקדם ביותר לניהול ציי רכב, המבטיח שליטה מלאה ויעילות מרבית. בעזרת המערכת, תוכלו לחסוך בעלויות תפעול מיותרות, לנהל בקלות דוחות, לתזמן טיפולים, לעקוב אחרי רישיונות ובדיקות תקופתיות, ולהבטיח ניהול חלק ובטוח של כל רכבי החברה.
        </h3>
      </div>
    </div>
  );
}

export default MainFirstPage;
