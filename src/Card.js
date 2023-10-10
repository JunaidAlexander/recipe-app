import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const { titleFront, titleBack, recipeText, imageUrl } = props;

  // Define state to hold the list of recipes
  const [recipes, setRecipes] = useState([]);

  // Function to add a new recipe to the list
  const addRecipe = () => {
    const newRecipe = {
      title: titleFront,
      shortDescription: titleBack,
      ingredients: recipeText,
      imageUrl: imageUrl,
    };

    // Use the spread operator to create a new array with the new recipe
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

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
            <button onClick={addRecipe}>Click for recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
