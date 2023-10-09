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
          titleFront="BAKED GNOCCHI"
          recipeText="Click For Recipe"
          imageUrl="./images/baked-gnocchi.jpg
          "
          // button="Recipe"
        />
        <Card
          titleFront="PASTA BAKE WITH SAUSAGE"
          recipeText="Click For Recipe"
          imageUrl="https://www.aheadofthyme.com/wp-content/uploads/2022/01/beef-stroganoff-683x1024.jpg"
        />
        <Card
          titleFront="PESTO PENNE PASTA"
          recipeText="Click For Recipe"
          imageUrl="./images/pesto-penne-pasta.jpg"
        />

        <Card
          titleFront="FETTUCCINE ALFREDO"
          recipeText="Click For Recipe"
          imageUrl="./images/fettuccine-alfredo.jpg"
        />
        <Card
          titleFront="CHEESY TORTELLINI"
          recipeText="Click For Recipe"
          imageUrl="./images/cheesy-tortellini-.jpg"
        />
        <Card
          titleFront="SHRIMP ALFREDO"
          recipeText="Click For Recipe"
          imageUrl="./images/shrimp-alfredo.jpg"
        />
        <Card
          titleFront="SPAGHETTI AND MEATBALLS"
          recipeText="Click For Recipe"
          imageUrl="./images/spaghetti-and-meatballs.jpg"
        />
        <Card
          titleFront="VEGETARIAN BOLOGNESE"
          recipeText="Click For Recipe"
          imageUrl="./images/vegetarian-bolognese.jpg"
        />
      </div>
    </div>
  );
};

export default App;
