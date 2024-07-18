import React from "react";
import "./ContactUs.css";
import TextAndIcon from "./TextAndIcon";

function ContactUs() {
  let icon_list = [
    { icon: "fa-regular fa-envelope", text: "מייל: safety@barak.net.il" },
    { icon: "fa-solid fa-phone", text: "טלפון: 3077*" },
    { icon: "fa-solid fa-print", text: "פקס: 08-6460721" },
    { icon: "fa-solid fa-location-dot", text: "כתובת: הגורן 6 א.ת עומר" },
  ];
  return (
    <div className="contact-us">
      <div className="details">
        {icon_list.map((icon_obj, index) => {
          return (
            <TextAndIcon
              key={index}
              icon={icon_obj.icon}
              text={icon_obj.text}
            />
          );
        })}
      </div>
      <hr className="contact-us-line"/>
      <div className="credit">
        <p>פותח ע"י עילי אפרתי</p>
        <a
          aria-label="Phone: 0533409049"
          href="tel:0533409049"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-phone" style={{ color: "#ffffff" }}></i>
          <span className="visually-hidden">Phone</span>
        </a>
        <a
          aria-label="LinkedIn: Ilay Efrati"
          href="https://www.linkedin.com/in/ilay-efrati-9b1a62279/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin" style={{ color: "#ffffff" }}></i>
          <span className="visually-hidden">LinkedIn</span>
          {/* <!-- חייב לשים טקסט בשביל הנגישות לאלה ששומעים מהמסך - את הטקסט הזה אי אפשר לראות בגלל הקלאס --> */}
        </a>
        <a
          aria-label="Github: ilayefrati"
          href="https://github.com/ilayefrati"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github" style={{ color: "#ffffff" }}></i>
          <span className="visually-hidden">Github</span>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;