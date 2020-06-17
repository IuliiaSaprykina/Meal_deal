import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';

export default function FavoriteCard ({id, strMeal, strInstructions, strYoutube, strMealThumb, deleteFavorite, favorites}) {

    // console.log(favorites)
    // window.location.reload();

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    const handleDelete = (event) => {
        event.stopPropagation();
        const favoriteChoose = favorites.filter(fav => fav.recipe_id === id)
        console.log(favoriteChoose[0].id)
        deleteFavorite(favoriteChoose[0].id);
        window.location.reload();
    }

    return(
        <ReactCardFlip isFlipped={isFlipped} fliDirection="vertical">
            <div className="front-favorite-recipe-card" onClick={handleClick}>
                <h4>{strMeal}</h4>
                <img className="recipe-card-image" src={strMealThumb} alt=""/>
                <button className="delete-recipe" onClick={handleDelete}>Delete recipe</button>
            </div>
            <div className="back-favorite-recipe-card" onClick={handleClick}>
                <p>{strInstructions}</p>
                <a href={strYoutube} target="_blank" rel="noopener noreferrer">Go to watch video</a>
            </div>
        </ReactCardFlip>
    )
}