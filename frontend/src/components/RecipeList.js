import React from "react";
import RecipeCard from "./RecipeCard"


const RecipeList = ({recipes}) => {
  // console.log(recipes)
  const showRecipes = () => recipes.map(recipe => <RecipeCard key={recipe.idMeal} recipe={recipe}/>)
  // console.log(recipes)
  return (
    <div className="recipe-list">
     {showRecipes()}
    </div>
  );
};

export default RecipeList;