import React from "react";
import FavoriteItem from "./FavoriteItem"


export default function Favorites ({favorites, recipes, users}) {
    const userId = localStorage.getItem("user_id")
    
    console.log("favorites: ", favorites)
    // console.log("recipes: ", recipes)
    // console.log("users: ", users)
    const showFavorites = favorites.filter(favorite => favorite.user_id === +userId)
    // <FavoriteItem {...favorite} recipes={recipes} users={users}/>})
    console.log(showFavorites)
    return(
            <div className="favorites-list"> 
                <h3>These your favorite meals</h3>
                <FavoriteItem showFavorites = {showFavorites}  recipes={recipes}/>
            </div>
    )

}