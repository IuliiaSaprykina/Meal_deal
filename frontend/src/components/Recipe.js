import React from "react";
import RecipeCard from "./RecipeCard"


const Recipe = ({recipes}) => {
  const showRecipes = () => recipes.map((recipe, i) => <RecipeCard key={i} recipe={recipe.recipe} />)
  // console.log(recipes)
  return (
    <div className="recipe-list">
     {showRecipes()}
    </div>
  );
};

export default Recipe;