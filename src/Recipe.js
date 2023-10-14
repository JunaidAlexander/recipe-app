import React, { useState } from "react";
import "./Recipe.css";

const Recipe = () => {
	const recipeData = [
		{
			uuid: 1,
			id: 1,
			title: "Pasta Bake With Sausage",
			ingredients: [
				"1 pound dry penne pasta",
				"1 pound Italian sausage",
				"1 onion, chopped",
				"1 (26 ounce) jar spaghetti sauce",
				"1 (16 ounce) container cottage cheese",
				"2 cups shredded mozzarella cheese",
				"1/2 cup grated Parmesan cheese"
			]
		},
		{
			uuid: 2,
			id: 2,
			title: "Creamy Tomato Pasta",
			ingredients: [
				"1 pound dry penne pasta",
				"1 pound Italian sausage",
				"1 onion, chopped",
				"1 (26 ounce) jar spaghetti sauce",
				"1 (16 ounce) container cottage cheese",
				"2 cups shredded mozzarella cheese",
				"1/2 cup grated Parmesan cheese"
			]
		}
	];

	const [selectedRecipe, setSelectedRecipe] = useState(null);

	const handleRecipeClick = uuid => {
		setSelectedRecipe(recipeData.find(recipe => recipe.uuid === uuid));
	};

	return (
		<div>
			<div className="recipe-list">
				{/* {recipeData.map(recipe =>
					<div
						key={recipe.uuid}
						className="recipe-item"
						onClick={() => handleRecipeClick(recipe.uuid)}
					>
						<img
							src={`./images/${recipe.title.replace(/\s/g, "-")}.jpg`}
							alt={recipe.title}
						/>
						<h2>
							{recipe.title}
						</h2>
					</div>
				)}
			</div>
			<div className="recipe-details">
				{selectedRecipe &&
					<div>
						<h2>
							{selectedRecipe.title}
						</h2>
						<p>Ingredients</p>
						<ul>
							{selectedRecipe.ingredients.map((ingredient, index) =>
								<li key={index} className="recipe-ingredients">
									{ingredient}
								</li>
							)}
						</ul>
						<button>Back</button>
					</div>}
			</div> */}
		</div>
	);
};

export default Recipe;
