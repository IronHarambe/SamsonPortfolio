import React from "react";
import Card from "./card/Card";
import "./Project.scss";

function Project() {
  return (
    <div className="project">
      <div className="project__wrapper">
        <div className="intro">
          <h1>My Projects!</h1>
          <p>
            Check out my projects! My projects are my attempt at creating
            websites that can solve real world problems.
          </p>
        </div>
        <div className="cards">
          <Card
            title="JTravels"
            description="Brochure type websites for travelling to Japan!"
            image="/images/ill.jpg"
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default Project;
