import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';


export default function RecipeCard ({recipe, addRecipe, addToFavorite}) {
    const {strMeal, strInstructions, strYoutube, strMealThumb} = recipe
    // let x = Math.round(calories, 0.5)
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    const handleRecipeToFavorites = (event) => {
        event.stopPropagation();
        // console.log(event)
        addRecipe(recipe);
        // addToFavorite(recipe.idMeal, localStorage.getItem("user_id"))
    }

    return(
        <ReactCardFlip isFlipped={isFlipped} fliDirection="vertical">
            <div>
                <div className="front-recipe-card" onClick={handleClick}>
                    <button className="add-recipe" onClick={handleRecipeToFavorites}>Add to favorite</button>
                    <h4>{strMeal}</h4>
                    <img className="recipe-card-image" src={strMealThumb} alt=""/>
                </div>
            </div>
            <div>
                <div className="back-recipe-card" onClick={handleClick}>
                    <p>{strInstructions}</p>
                    <a href={strYoutube} target="_blank">Go to watch video</a>
                </div>
            </div>
        </ReactCardFlip>
    )
}