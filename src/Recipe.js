import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Recipe.css";

const Recipe = () => {
	const navigate = useNavigate();
	const [selectedRecipe, setSelectedRecipe] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		setSelectedRecipe(recipeData.find(recipe => recipe.uuid === id));
		console.log(recipeData.find(recipe => recipe.uuid === id));
	}, []);

	console.log(id);
	const recipeData = [
		{
			uuid: "1",
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
			uuid: "2",
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
		},
		{
			uuid: "3",
			id: 3,
			title: "PESTO PENNE PASTA",
			ingredients: [
				"1 pound dry penne pasta",
				"2 cups fresh basil leaves",
				"2 cloves garlic",
				"1/2 cup pine nuts",
				"1/2 cup grated Parmesan cheese",
				"1/2 cup extra-virgin olive oil",
				"1/2 cup grated Pecorino Romano cheese",
				"Salt and black pepper to taste",
				"Cherry tomatoes for garnish (optional)"
			]
		},
		{
			uuid: "4",
			id: 4,
			title: "FETTUCCINE ALFREDO",
			ingredients: [
				"8 ounces fettuccine pasta",
				"1/2 cup unsalted butter",
				"1 cup heavy cream",
				"1 cup grated Parmesan cheese",
				"1/4 cup chopped fresh parsley",
				"Salt and black pepper to taste",
				"Nutmeg (optional, for flavor)"
			]
		},
		{
			uuid: "5",
			id: 5,
			title: "CHEESY TORTELLINI",
			ingredients: [
				"1 pound cheese tortellini",
				"2 cups marinara sauce",
				"1 cup shredded mozzarella cheese",
				"1/2 cup grated Parmesan cheese",
				"1/4 cup fresh basil leaves, chopped",
				"1/4 teaspoon red pepper flakes (optional, for a little heat)",
				"Salt and black pepper to taste"
			]
		},

		{
			uuid: "6",
			id: 6,
			title: "Shrimp Alfredo Pasta",
			ingredients: [
				"8 ounces fettuccine pasta",
				"1 pound large shrimp, peeled and deveined",
				"2 tablespoons butter",
				"2 cloves garlic, minced",
				"1 cup heavy cream",
				"1 cup grated Parmesan cheese",
				"1/4 cup fresh parsley, chopped",
				"Salt and black pepper to taste",
				"Red pepper flakes (optional, for some heat)"
			]
		},

		{
			uuid: "7",
			id: 7,
			title: "SPAGHETTI MEATBALLS",
			ingredients: [
				"8 ounces spaghetti pasta",
				"1/2 pound ground beef",
				"1/2 pound ground pork",
				"1/4 cup breadcrumbs",
				"1/4 cup grated Parmesan cheese",
				"1/4 cup milk",
				"1/4 cup chopped fresh parsley",
				"1/4 cup finely chopped onion",
				"1 egg",
				"1 clove garlic, minced",
				"Salt and black pepper to taste",
				"1 (24-ounce) jar of spaghetti sauce",
				"1/4 teaspoon dried basil",
				"1/4 teaspoon dried oregano",
				"1/4 teaspoon crushed red pepper flakes (optional, for some heat)"
			]
		}
	];

	const handleBackButtonClick = () => {
		setSelectedRecipe(null);
	};

	return (
		<div>
			{selectedRecipe &&
				<div className="recipe-details">
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

					<button onClick={() => navigate("/")}>Back</button>
				</div>}
		</div>
	);
};

export default Recipe;
