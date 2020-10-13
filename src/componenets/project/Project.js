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
            Check out my projects! The projects are my attempt at creating
            websites that can solve real world problems.
          </p>
        </div>
        <div className="cards">
          <Card
            title="JTravels"
            description="Brochure type websites for travelling to Japan!"
            image="/images/projects/jtravel.PNG"
          ></Card>
            <Card
            title="ART NATION"
            description="Shopping e-commerse website for purchase of painting. Has add cart and checkout functions."
            image="/images/projects/home2.PNG"
          ></Card>
            <Card
            title="Old Portfolio"
            description="First portfolio website using html, css and js. "
            image="/images/projects/old.PNG"
          ></Card>
       
          
        </div>
      </div>
    </div>
  );
}

export default Project;
