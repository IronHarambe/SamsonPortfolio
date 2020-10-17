/* Individual Skill component, which contains an image and title */
import React from "react";
import "./Skill.scss";

function Skill({ title, image }) {
  return (
    <div className="skill">
      <img src={image} alt="" />
      <h5>{title}</h5>
    </div>
  );
}

export default Skill;
