import React from "react";
import FavoriteItem from "./FavoriteItem";
import { NavLink } from "react-router-dom";


export default function Favorites ({user, deleteFavorite, favorites, recipes}) {

    const showFavorites = recipes.map((recipe, i) => <FavoriteItem key={i} {...recipe} deleteFavorite={deleteFavorite} favorites={favorites} />)
   
    return(
        <div className="favorite">
            <h3>Your favorite meals</h3>
            <NavLink className="go-back" to="/">Go Back</NavLink>
            <div className="favorites-list"> 
                {showFavorites}
            </div>
        </div>
    )

}