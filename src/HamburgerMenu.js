import React, { useState } from "react";
import "./HamburgerMenu.css";

function HamburgerMenu(props) {
  return (
    <>
      {/* <i id="hamburger_menu" className="fa-solid fa-bars" aria-hidden="true" onClick={props.onClick}></i> */}
      <div id="hamburger_menu" aria-hidden="true" onClick={props.onClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default HamburgerMenu;