import React from "react";
import FavoriteItem from "./FavoriteItem";
import { NavLink } from "react-router-dom";


export default function Favorites ({users, deleteFavorite, favorites}) {

    const userId = localStorage.getItem("user_id")
    const showFavorites = users.filter(user => user.id === +userId)
    // console.log(showFavorites)
   
    return(
            <div className="favorites-list"> 
                <h3>Your favorite meals</h3>
                <li className="go-back-link"><NavLink to="/">Go Back</NavLink></li>
                <FavoriteItem showFavorites = {showFavorites} favorites={favorites} deleteFavorite={deleteFavorite}/>
            </div>
    )

}