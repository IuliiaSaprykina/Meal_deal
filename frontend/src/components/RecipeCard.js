import React from "react"

export default function RecipeCard ({recipe}) {
    const {strMeal, strInstructions, strYoutube, strMealThumb} = recipe
    // let x = Math.round(calories, 0.5)
    console.log(recipe)
    return(
        <li className="recipe-card">
            <button className="add-recipe" onClick={console.log("WTF")}>Add to favorite</button>
            <h2>{strMeal}</h2>
            <p>{strInstructions}</p>
            <img className="recipe-card-image" src={strMealThumb} alt=""/>
        </li>
    )
}