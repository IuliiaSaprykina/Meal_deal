import React from "react";
import RecipeCard from "./RecipeCard"


const RecipeList = ({recipes, addRecipe, addToFavorite}) => {
  // console.log(recipes)
  const showRecipes = () => recipes.map(recipe => <RecipeCard key={recipe.idMeal} recipe={recipe} addRecipe={addRecipe} addToFavorite={addToFavorite}/>)
  // console.log(recipes)
  return (
    <div className="recipe-list">
     {showRecipes()}
    </div>
  );
};

export default RecipeList;