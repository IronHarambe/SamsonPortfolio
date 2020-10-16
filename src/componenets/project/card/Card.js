import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Card.scss";

function Card({ title, description, image, href, src }) {
  return (
    <div className="card">
      <div className="card__wrapper">
      <a href={src} target="_blank" rel="noopener noreferrer"> <img src={image} alt="Projectimage"/></a>
       
        <div className="card__content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className="git">
       <a href={href} target="_blank" rel="noopener noreferrer"><FaGithub className="git__icon"></FaGithub></a>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
