import React from "react";
import "./ContactFirstPage.css";
import ContactForm from "./ContactForm";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";

function ContactFirstPage() {
  return (
    <div className="contact-first-page">
      <Navbar />
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
