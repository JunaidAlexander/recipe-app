import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="myCard">
        <div className="innerCard">
          <div className="frontSide">
            <p className="title-front">PASTA BAKE WITH SAUSAGE</p>
            <p className="title-back">Hover Me</p>
          </div>
          <div className="backSide">
            <p className="title">Click For Recipe</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
