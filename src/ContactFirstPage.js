import React, { useState, useEffect } from "react";
import "./ContactFirstPage.css";
import ContactForm from "./ContactForm";
import Navbar from "./Navbar";
import NavbarContainer from "./NavbarContainer";
import ContactUs from "./ContactUs";

function ContactFirstPage() {
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
    checkScreen();
    return () => window.removeEventListener("resize", checkScreen);
  }, [navbarDisplay]);

  return (
    <div className="contact-first-page">
      {navbarDisplay ? <Navbar /> : <NavbarContainer />}
      
      <div className="contact-hero">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="hero-content">
          <h2>צור קשר</h2>
          <h3 style={{color: "white"}}>אנחנו כאן כדי לעזור לך לנהל את צי הרכב שלך בצורה חלקה, יעילה וחסכונית. השאר את פרטיך וניצור איתך קשר עם הפתרונות המותאמים ביותר לצרכים שלך.</h3>
        </div>
      </div>

      <div className="form-container">
        <div className="form-header">
          <h3>השאירו פרטים</h3>
          <p>נחזור אליכם בהקדם עם כל המידע הנדרש</p>
        </div>
        <ContactForm />
      </div>

      <ContactUs />
    </div>
  );
}

export default ContactFirstPage;
