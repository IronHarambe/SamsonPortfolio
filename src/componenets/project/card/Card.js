import React from "react";
import "./Card.scss";

function Card({ title, description, image }) {
  return (
    <div className="card">
      <div className="card__wrapper">
        <img src={image} alt="" />
        <div className="card__content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
