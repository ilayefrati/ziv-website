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
          מערכת זיו מספקת פתרון מקיף לניהול צי הרכב ומאפשרת לחתוך בעלויות תפעול
          ולחסוך בהוצאות מיותרות. כמו כן מבצעת בקרה ומעקב אחר דוחות, טיפולים
          לרכב, רישיונות, בדיקות תקופתיות ועוד
        </h3>
      </div>
    </div>
  );
}

export default MainFirstPage;
