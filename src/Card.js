import React from "react";
import "./Card.css";

const Card = (props) => {
  const { titleFront, titleBack, recipeText, imageUrl } = props;
  return (
    <div className="card">
      <div className="myCard">
        <div className="innerCard">
          <div className="frontSide">
            <img src={imageUrl} alt={titleFront} className="card-image" />
            <p className="title-front">{titleFront}</p>
            <p className="title-back">{titleBack}</p>
          </div>
          <div className="backSide">
            <p className="title">{recipeText}</p>
            <button className="btn">Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
