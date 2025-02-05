import React, { useState, useEffect } from "react";
import "./AboutFirstPage.css";
import Navbar from "./Navbar";
import NavbarContainer from "./NavbarContainer";

function AboutFirstPage() {
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
    <div className="about-first-page">
      {navbarDisplay ? <Navbar /> : <NavbarContainer />}
      <div className="about-first-page-text">
        <h2>אודות התוכנה</h2>
        <p>
          מערכת זיו מספקת פתרון מקיף לניהול צי הרכב ומאפשרת לחתוך בעלויות תפעול
          ולחסוך בהוצאות מיותרות​. המערכת מכילה ממשקי ניהול ידידותיים בנושאים
          כגון תקינות הרכבים, צריכת דלק, מרחק, טיפולים, אחזקה, מועדי חידוש
          רישיונות, ביטוחים, התראות, התנהגות הנהג, תיעוד מסמכים, צילומים,
          חשבונות ועוד. המערכת מתייחסת לכל הפונקציות הארגוניות כגון: קציני
          בטיחות, אנשי כספים ורכש, גורמי שכר, משאבי אנוש ונהגים​ כמו כן, המערכת
          מייצרת לארגונים חסכון רב על ידי בקרת תהליך ההזמנות, חיובי הספקים,
          ניהול סיכון בטיחותי, ניהול תחזוקה מונעת ובכך מאריכה את חיי צי הרכב.
          המערכת מאפשרת בקרה על הנהגים וכן מפעילה מערכת התראות ותזכורות
          מפותחת​​. המערכת מסייעת לקציני הרכב להגביר את הבקרה והשליטה ​לרבות:
          חידוש רישיון נהיגה, מידע תעבורתי, הצהרת בריאות, ונוהל 6. התוכנה היא
          בין המתקדמות בעולם. מערכת זיו מבוססת על טכנולוגיה מוכחת אשר נמצאת
          בשימוש כבר למעלה מ-18 שנה בציי רכב מהגדולים בארץ.
        </p>
      </div>
    </div>
  );
}

export default AboutFirstPage;
