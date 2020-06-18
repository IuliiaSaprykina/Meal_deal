import React, { useEffect } from "react";
import FavoriteItem from "./FavoriteItem";
import { NavLink } from "react-router-dom";


export default function Favorites ({user, deleteFavorite, favorites, recipes}) {

    // const userId = localStorage.getItem("user_id")
    // const showFavorites = users.filter(user => user.id === +userId)
    
    // console.log(favorites)

    // useEffect(() => {
    //     validateUser()
    //    },)
    const showFavorites = recipes.map((recipe, i) => <FavoriteItem key={i} {...recipe} deleteFavorite={deleteFavorite} favorites={favorites} />)
    // const favorite = favorites.map((fav, i) => <FavoriteItem key={i} {...fav} deleteFavorite={deleteFavorite} />)
    return(
        <div className="favorite">
            <h3>Your favorite meals</h3>
            <NavLink className="go-back" to="/">Go Back</NavLink>
            <div className="favorites-list"> 
                {showFavorites}
                {/* <FavoriteItem user = {user} favorites={favorites} deleteFavorite={deleteFavorite}/> */}
            </div>
        </div>
    )

}