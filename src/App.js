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
          titleFront="Baked Gnocchi"
          recipeText="Click For Recipe"
          imageUrl="./images/baked-gnocchi.jpg
          "
          // button="Recipe"
        />
        <Card
          titleFront="PASTA BAKE WITH SAUSAGE"
          recipeText="Click For Recipe"
          imageUrl="./images/pasta-bake-with-sausage.jpg"
        />
        <Card
          titleFront="PASTA BAKE WITH SAUSAGE"
          recipeText="Click For Recipe"
          imageUrl="./images/pesto-penne-pasta.jpg"
        />

        <Card
          titleFront="PASTA BAKE WITH SAUSAGE"
          recipeText="Click For Recipe"
          imageUrl="./images/fettuccine-alfredo.jpg"
        />
        <Card
          titleFront="PASTA BAKE WITH SAUSAGE"
          recipeText="Click For Recipe"
          imageUrl="./images/cheesy-tortellini.jpg"
        />
        <Card
          titleFront="PASTA BAKE WITH SAUSAGE"
          recipeText="Click For Recipe"
          imageUrl="./images/shrimp-alfredo.jpg"
        />
        <Card
          titleFront="PASTA BAKE WITH SAUSAGE"
          recipeText="Click For Recipe"
          imageUrl="./images/spaghetti-and-meatballs.jpg"
        />
        <Card
          titleFront="PASTA BAKE WITH SAUSAGE"
          recipeText="Click For Recipe"
          imageUrl="./images/vegetarian-bolognese.jpg"
        />
      </div>
    </div>
  );
};

export default App;
