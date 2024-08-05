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

    // Check screen size on initial render
    checkScreen();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, [navbarDisplay]);

  return (
    <div className="contact-first-page">
      {navbarDisplay ? <Navbar /> : <NavbarContainer />}
      <div className="contact-first-page-content">
        <h2>צור קשר</h2>
        <ContactForm />
      </div>
      {/* <img src="/media/ContactImg.jpeg" className="contact-img"/> */}
      <ContactUs />
    </div>
  );
}

export default ContactFirstPage;
