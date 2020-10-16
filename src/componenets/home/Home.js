import React from "react";
import "./Home.scss";
import { Button } from "@material-ui/core";

function Home() {
  return (
    <div className="home" id="home">
      <div className="about__wrapper">
        <div className="content">
          <h1>SAMSON JOSE</h1>
          <div className="content__text">
            <p>
              Hi, I'm an aspiring <span>software devloper</span> with an intrest
              in <span>front end development</span>. I have experience in
              creating web related projects for university and personalised
              projects. I'm pasionate about creating innovating and creative
              projects, that can engage with the users. Check out my projects
              below, as I will be updating it when I learn new tools!
            </p>
          </div>
          <Button varient="dark" className="btn">
            My Projects
          </Button>
        </div>
        <div className="picture">
          <img src="/images/ill.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
