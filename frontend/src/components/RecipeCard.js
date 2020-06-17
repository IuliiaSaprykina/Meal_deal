import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';


export default function RecipeCard ({recipe, addRecipe}) {
    const {strMeal, strInstructions, strYoutube, strMealThumb, strIngredient1} = recipe
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    const handleRecipeToFavorites = (event) => {
        event.stopPropagation();
        console.log(recipe)
        addRecipe(recipe);
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
                    <p>{strIngredient1}</p>
                    <a href={strYoutube} target="_blank" rel="noopener noreferrer">Go to watch video</a>
                </div>
            </div>
        </ReactCardFlip>
    )
}