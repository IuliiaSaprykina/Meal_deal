import React from "react";
import FavoriteCard from "./FavoriteCard"

export default function FavoriteItem ({ showFavorites, deleteFavorite, favorites }) {

    const getRecipes = showFavorites.map(e => {
        return e.recipes
    })
    
    let recipeArr = []
    const getInfo = getRecipes.forEach(e=> {
        return recipeArr = e
    })

    const getRecipeInfo = recipeArr.map((el, i) => <FavoriteCard key={i} {...el} deleteFavorite={deleteFavorite} favorites={favorites}/>)
   
    return(
        <div className="favorites-list">
            {getRecipeInfo}
        </div> 
    )
}