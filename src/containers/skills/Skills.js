import React from "react";
import "./Skills.css";
import { skills } from "../../portfolio";
import SkillSection from "./SkillSection";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="skills-outer">
      {skills.softwareSkills.map((skill, i) => {
        return (
          <div className="main" id="skills" key={i}>
            <SkillSection theme={theme} skill={skill} />
          </div>
        );
      })}
    </div>
  );
}
