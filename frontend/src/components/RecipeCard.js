import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';


export default function RecipeCard ({recipe}) {
    const {strMeal, strInstructions, strYoutube, strMealThumb} = recipe
    // let x = Math.round(calories, 0.5)
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return(
        <ReactCardFlip isFlipped={isFlipped} fliDirection="vertical">
            <div>
                <li className="front-recipe-card" onClick={handleClick}>
                    <button className="add-recipe" onClick={console.log("WTF")}>Add to favorite</button>
                    <h2>{strMeal}</h2>
                    <img className="recipe-card-image" src={strMealThumb} alt=""/>
                </li>
            </div>
            <div>
                <li className="back-recipe-card" onClick={handleClick}>
                    <p>{strInstructions}</p>
                    <a href={strYoutube} target="_blank">Go to watch video</a>
                </li>
            </div>
        </ReactCardFlip>
    )
}