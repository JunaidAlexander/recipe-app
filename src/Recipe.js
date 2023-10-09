import React from "react";
import "./Recipe.css";

export const Recipe = () => {
	return (
		<div className="recipe-item">
			<img src="./images/creamy-tomato-pasta.jpg" alt="creamy tomato pasta" />
			<h2>Pasta Bake With Sausage</h2>
			<p>ingredients</p>
			<ul className="">
				<li className="recipe-ingredients" />
				<li className="recipe-ingredients" />
				<li className="recipe-ingredients" />
				<li className="recipe-ingredients" />
				<li className="recipe-ingredients" />
			</ul>
		</div>
	);
};
