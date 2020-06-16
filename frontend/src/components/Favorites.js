import React from "react";
import FavoriteItem from "./FavoriteItem"


export default function Favorites ({favorites, recipes}) {

    const showFavorites = favorites.map((favorite, i) => <FavoriteItem key={i} {...favorite} recipes={recipes} />)

    return(
            <div className="favorites-list"> 
                <h3>These your favorite meals</h3>
                {showFavorites}
            </div>
    )

}