import React from "react";
import "./Footer.css";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <p
        className="footer-text"
        style={{ color: props.theme.secondaryText }}
      ></p>
      <a
        style={{ "font-size": "10px" }}
        href="https://www.freepik.com/free-vector/computer-security-specialist-idea-digital-data-protection-safety-modern-technology-virtual-crime-prevention-antihacker-protection-information-flat-vector-illustration_26432661.htm#fromView=keyword&page=1&position=4&uuid=ff7dcd0c-56c5-49bc-bd06-51f4f62b4a94"
      >
        Images by vector4stock on Freepik
      </a>
      {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
    </div>
  );
}
