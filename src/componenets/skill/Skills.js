import React from "react";
import Skill from "./skill/Skill";
import "./Skills.scss";

function Skills() {
  return (
    <div className="skills">
      <h1>Check out my Skills!</h1>
      <div className="skill__wrapper">
        <Skill title="HTML" image="/images/ill.jpg"></Skill>
        <Skill title="CSS" image="/images/ill.jpg"></Skill>
        <Skill title="JS" image="/images/ill.jpg"></Skill>
      </div>
    </div>
  );
}

export default Skills;
