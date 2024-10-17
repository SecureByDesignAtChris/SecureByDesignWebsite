import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            <OverlayTrigger
              key={this.propslogo.skillName}
              placement={"top"}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <strong>{this.propslogo.skillName}</strong>
                </Tooltip>
              }
            >
              <li
                className="software-skill-inline"
                name={this.propslogo.skillName}
              >
                {this.propslogo.image && (
                  <img
                    className="skill-image"
                    src={this.propslogo.image}
                    alt={this.propslogo.skillName}
                  />
                )}
              </li>
            </OverlayTrigger>
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
