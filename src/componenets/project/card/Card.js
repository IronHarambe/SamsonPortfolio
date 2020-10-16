import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Card.scss";

function Card({ title, description, image, href }) {
  return (
    <div className="card">
      <div className="card__wrapper">
        <img src={image} alt="" />
        <div className="card__content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className="git">
       <a href={href} target="_blank"><FaGithub className="git__icon"></FaGithub></a>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
