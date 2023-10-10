import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
<<<<<<< HEAD
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

=======
  const { titleFront, titleBack, recipeText, imageUrl, dishName } = props;
>>>>>>> 33d1598c5732d3145956173071d0e3b458c59e86
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
<<<<<<< HEAD
            <button onClick={addRecipe}>Click for recipe</button>
          </div>
        </div>
=======
            <button className="btn">Recipe</button>
          </div>
        </div>
        <h5 className="dish">{dishName}</h5>
>>>>>>> 33d1598c5732d3145956173071d0e3b458c59e86
      </div>
    </div>
  );
};

export default Card;
