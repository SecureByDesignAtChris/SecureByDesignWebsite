import React from "react";
import "./Button.css";

const onMouseEnter = (event) => {
  const el = event.target;
};

const onMouseOut = (event) => {
  const el = event.target;
};

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        onMouseEnter={(event) => onMouseEnter(event)}
        onMouseOut={(event) => onMouseOut(event)}
      >
        {text}
      </a>
    </div>
  );
}
