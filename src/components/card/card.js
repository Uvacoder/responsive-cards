import React from "react";
import "./card.css";
export default function card(props) {
  return (
    <div className="card">
      <div className="card__info">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <img
        src="https://freeaussiestock.com/free/Victoria/Melbourne/slides/federation_square.jpg"
        alt="federation square"
      ></img>
    </div>
  );
}
