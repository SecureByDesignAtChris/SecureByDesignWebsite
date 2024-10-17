import React, { Component } from "react";
import "./Skills.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class SkillSection extends Component {
  render() {
    return (
      <Link to={"/ydelser"}>
        <Card hoverable>
          <div className="skills-main-div">
            <div className="skills-text-div">
              <h1 className="skills-heading">{this.props.skill.skillName}</h1>
            </div>
            <div className="skills-image-div">
              {this.props.skill.image && (
                <img
                  className="skill-image"
                  src={this.props.skill.image}
                  alt={this.props.skill.skillName}
                />
              )}
            </div>
          </div>
        </Card>
      </Link>
    );
  }
}

export default SkillSection;
