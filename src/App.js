import React from "react";
import Card from "./Card";
import Header from "./Header";
import "./App.css";
import "./Card.css";

const App = () => {
	return (
		<div>
			<Header />

			<div>
				<Card
					titleFront="PASTA BAKE WITH SAUSAGE"
					titleBack="Hover Me"
					recipeText="Click For Recipe"
					imageUrl="./images/creamy-tomato-pasta.jpg"
					// button="Click for Recipe"
				/>
				<Card
					titleFront="PASTA BAKE WITH SAUSAGE"
					titleBack="Hover Me"
					recipeText="Click For Recipe"
					imageUrl="./images/pasta-bake-with-sausage.jpg"
				/>
				<Card
					titleFront="PASTA BAKE WITH SAUSAGE"
					titleBack="Hover Me"
					recipeText="Click For Recipe"
					imageUrl="./images/pesto-penne-pasta.jpg"
				/>

				<Card
					titleFront="PASTA BAKE WITH SAUSAGE"
					titleBack="Hover Me"
					recipeText="Click For Recipe"
					imageUrl="./images/fettuccine-alfredo.jpg"
				/>
        <Card
					titleFront="PASTA BAKE WITH SAUSAGE"
					titleBack="Hover Me"
					recipeText="Click For Recipe"
					imageUrl="./images/cheesy-tortellini.jpg"
				/>
        <Card
					titleFront="PASTA BAKE WITH SAUSAGE"
					titleBack="Hover Me"
					recipeText="Click For Recipe"
					imageUrl="./images/shrimp-alfredo.jpg"
				/>
			</div>
		</div>
	);
};

export default App;
