import React from "react";
import "./TextAndIcon.css";

function TextAndIcon(props) {
  let href;
  let aria_label;
  if (props.icon.includes("envelope")) {
    href = "mailto:safety@barak.net.il";
    aria_label = "Email: safety@barak.net.il";
  } else if (props.icon.includes("phone")) {
    href = "tel:*3077";
    aria_label = "Phone: *3077";
  } else if (props.icon.includes("location")) {
    href = "https://maps.app.goo.gl/P7ZqYrTMJUhUxFQKA";
    aria_label = "Address: הגורן 8 א.ת עומר";
  } else {
    href = "tel:08-6460721";
    aria_label = "Fax: 08-6460721";
  }

  return (
    <h3 className="icon-text">
      <i className={props.icon} style={{ color: "#ffffff" }}></i>
      <a
        style={{ textDecoration: "none", color: "#ffffff" }}
        href={href}
        aria-label={aria_label}
        target="_blank"
      >
        {props.text}
      </a>
    </h3>
  );
}

export default TextAndIcon;
