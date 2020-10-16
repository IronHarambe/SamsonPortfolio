import React from "react";
import Card from "./card/Card";
import "./Project.scss";

function Project() {
  return (
    <div className="project" id="projects">
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
            description="Brochure type websites for travelling to Japan! Created using HTML,CSS, JS!"
            image="/images/projects/jtravel.PNG"
            href="https://github.com/IronHarambe/JTravel"
          ></Card>
            <Card
            title="Art Nation"
            description="Shopping e-commerse website for purchase of painting. "
            image="/images/projects/home2.PNG"
            href="https://github.com/IronHarambe/MFashion"
          ></Card>
            <Card
            title="Old Portfolio"
            description="First portfolio website using html, css and js. "
            image="/images/projects/old.PNG"
            href="https://github.com/IronHarambe/portfolio"
          ></Card>
       
          
        </div>
      </div>
    </div>
  );
}

export default Project;
