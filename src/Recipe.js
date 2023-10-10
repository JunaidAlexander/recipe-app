import React from "react";
import "./Recipe.css";
import { useState } from "react";
import { Route } from "react-router-dom";




export const Recipe = () => {


  // const recipeData = [
  //    id: 1,
  //   title: "Pasta Bake With Sausage",
  //   ingredients: [
  //     "1 pound dry penne pasta",
  //     "1 pound Italian sausage",
  //     "1 onion, chopped",
  //     "1 (26 ounce) jar spaghetti sauce",
  //     "1 (16 ounce) container cottage cheese",
  //     "2 cups shredded mozzarella cheese",
  //     "1/2 cup grated Parmesan cheese"
  //   ],

  //   id: 2,
  //   title: "Creamy Tomato Pasta",
  //   ingredients: [
  //     "1 pound dry penne pasta",
  //     "1 pound Italian sausage",
  //     "1 onion, chopped",
  //     "1 (26 ounce) jar spaghetti sauce",
  //     "1 (16 ounce) container cottage cheese",
  //     "2 cups shredded mozzarella cheese",
  //     "1/2 cup grated Parmesan cheese"
  //   ],
  // ]



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



