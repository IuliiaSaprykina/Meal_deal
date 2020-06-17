import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';

export default function FavoriteItem (props) {

    const showFavorite = props.showFavorite

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    // console.log(props)
    // console.log(props.recipes)
    // const {favorite} = props;
    // const { recipes } = props.recipes;
    // console.log("favorite:", favorite)    
    // console.log("recipes:", recipes)
    // console.log("props:", props)

    // const lookThroughRecipes = props.recipes.filter(recipe => recipe.id === props.recipe_id)
    // console.log(lookThroughRecipes)
    const {strMeal, strInstructions, strYoutube, strMealThumb} = props.recipes
    

    return(
        <ReactCardFlip isFlipped={isFlipped} fliDirection="vertical">
        <div>
            <div className="front-recipe-card" onClick={handleClick}>
                {/* <button className="add-recipe" onClick={handleRecipeToFavorites}>Add to favorite</button> */}
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