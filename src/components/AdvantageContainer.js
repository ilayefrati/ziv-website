import React from "react";
import "../styles/AdvantageContainer.css";
import { Link } from "react-router-dom";

function AdvantageContainer(props) {
  return (
    <Link to={props.link}>
      <div className="advantage-container">
        <i className={props.icon}></i>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <h4>למידע נוסף &gt;</h4>
        </div>
    </Link>
  );
}

export default AdvantageContainer;
