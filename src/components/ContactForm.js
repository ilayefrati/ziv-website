import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Snackbar, Alert } from "@mui/material";
import "../styles/ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    message: "",
  });
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const formRef = useRef();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ccm8usj",
        "template_ziv",
        formRef.current,
        "nl9h2feNPFRj_ktZs"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setAlert({ open: true, message: "נשלח בהצלחה", severity: "success" });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setAlert({
            open: true,
            message: "הייתה בעיה בשליחת ההודעה",
            severity: "error",
          });
        }
      );
  }

  function handleClose() {
    setAlert({ open: false, message: "", severity: "" });
  }

  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="contact-form">
          <div>
            <label>שם מלא</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>טלפון</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>דוא"ל</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>סיבת הפנייה</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            >
              <option value="">בחר סיבת פנייה</option>
              <option value="פגישת ייעוץ">פגישת ייעוץ</option>
              <option value="רכישה">רכישה</option>
              <option value="צור קשר">צור קשר</option>
            </select>
          </div>
          <div>
            <label>הקלד את הודעתך כאן...</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            שלח
          </button>
        </div>
      </form>
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default ContactForm;
