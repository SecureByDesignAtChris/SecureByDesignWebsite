import React from "react";
import "./Greeting.css";
import { greeting } from "../../portfolio";
import Button from "../../components/button/Button";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <div>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className="greeting-text"
                style={{ color: theme.expTxtColor }}
              >
                {greeting.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {props.greetingText}
              </p>
              {props.showButton && (
                <div className="button-greeting-div">
                  <Button text="Læs mere" href="ydelser" />
                </div>
              )}
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="SecureByDesign logo"
              src={require("../../assets/images/securebydesign_logo.svg")}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
