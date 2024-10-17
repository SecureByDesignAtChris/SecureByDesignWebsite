import React, { Component } from "react";
import "./ydelser.css";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import { skills } from "../../portfolio";

const GetYdelse = (skill, i) => {
  var even = i % 2 === 0;

  return (
    <div>
      {i !== 0 && (
        <div>
          <hr className="divider"></hr>
        </div>
      )}
      {even && (
        <div className="ydelserContainer" key={i}>
          <div className="ydelse">
            <div className="ydelse-text-div">
              <h1 className="ydelse-heading">{skill.skillName}</h1>
              <ul>
                {skill.text.map((t, j) => {
                  return <li className="ydelse-text">{t}</li>;
                })}
              </ul>
            </div>
            <div className="ydelse-image-div">
              {skill.image && (
                <img
                  className="ydelse-image"
                  src={skill.image}
                  alt={skill.skillName}
                />
              )}
            </div>
          </div>
        </div>
      )}
      {even === false && (
        <div className="ydelserContainer" key={i}>
          <div className="ydelse">
            <div className="ydelse-image-div">
              {skill.image && (
                <img
                  className="ydelse-image"
                  src={skill.image}
                  alt={skill.skillName}
                />
              )}
            </div>
            <div className="ydelse-text-div">
              <h1 className="ydelse-heading">{skill.skillName}</h1>
              <ul>
                {skill.text.map((t, j) => {
                  return <li className="ydelse-text">{t}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

class Ydelser extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting
          theme={this.props.theme}
          showButton={false}
          greetingText={
            "SecureByDesign tilbyder en række ydelser til sikkerheds- or privatiseringsoptimering hos din virksomhed"
          }
        />
        {skills.softwareSkills.map((skill, i) => {
          return GetYdelse(skill, i);
        })}
      </div>
    );
  }
}

export default Ydelser;
