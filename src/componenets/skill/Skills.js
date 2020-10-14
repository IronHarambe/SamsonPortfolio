import React from "react";
import Skill from "./skill/Skill";
import "./Skills.scss";

function Skills() {
  return (
    <div className="skills">
      <h1>Check out my Skills!</h1>
      <div className="skill__wrapper">
        <h2>Front-End</h2>
        <div className="frontend">
          <Skill title="HTML" image="/images/skill/html.png"></Skill>
          <Skill title="CSS" image="/images/skill/css.png"></Skill>
          <Skill title="Javascript" image="/images/skill/js.png"></Skill>
          <Skill title="React" image="/images/skill/react.png"></Skill>
          <Skill title="Sass" image="/images/skill/sass.png"></Skill>
          <Skill title="Bootstrap" image="/images/skill/bootstrap.png"></Skill>
          <Skill title="Node" image="/images/skill/node.png"></Skill>
          <Skill title="Git" image="/images/skill/git.png"></Skill>
        </div>

        <h2>Other</h2>
        <div className="other">
          <Skill title="Adobe XD" image="/images/skill/other/adobe.jpg"></Skill>
          <Skill
            title="Firebase"
            image="/images/skill/other/firebase.png"
          ></Skill>
          <Skill title="Unity" image="/images/skill/other/unity.jpg"></Skill>
        </div>
      </div>
    </div>
  );
}

export default Skills;
