import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const { titleFront, titleBack, recipeText, imageUrl, dishName } = props;

  const [recipes, setRecipes] = useState([]);

  const addRecipe = () => {
    const newRecipe = {
      title: titleFront,
      shortDescription: titleBack,
      ingredients: recipeText,
      imageUrl: imageUrl,
    };

    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  return (
    <div className="card">
      <div className="myCard">
        <div className="innerCard">
          <div className="frontSide">
            <img src={imageUrl} alt={titleFront} className="card-image" />
            <p className="title-front">{titleFront}</p>
            <p className ="title-back">{titleBack}</p>
          </div>
          <div className="backSide">
            <p className="title">{recipeText}</p>
            <button className="btn" onClick={addRecipe}>Recipe</button>
          </div>
        </div>
        <h5 className="dish">{dishName}</h5>
      </div>
    </div>
  );
};

export default Card;
