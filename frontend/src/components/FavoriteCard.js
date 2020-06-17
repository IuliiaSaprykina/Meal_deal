import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import ReactPlayer from "react-player";
// import YouTube from 'react-youtube';
// import "node_modules/video-react/dist/video-react.css"; 

export default function FavoriteCard ({id, strMeal, strInstructions, strYoutube, strMealThumb, deleteFavorite, favorites, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20}) {

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

    // const opts = {
    //     height: '390',
    //     width: '640',
    //     playerVars: {
    //       // https://developers.google.com/youtube/player_parameters
    //       autoplay: 1,
    //     },
    //   };

    // let video_id = strYoutube.split('v=')[1];
    // let ampersandPosition = video_id.indexOf('&');
    // if(ampersandPosition != -1) {
    //     video_id = video_id.substring(0, ampersandPosition);
    // }   

    return(
        <ReactCardFlip isFlipped={isFlipped} fliDirection="vertical">
            <div className="front-favorite-recipe-card" onClick={handleClick}>
                <h4>{strMeal}</h4>
                <img className="recipe-card-image" src={strMealThumb} alt=""/>
                <button className="delete-recipe" onClick={handleDelete}>Delete recipe</button>
            </div>
            <div className="back-favorite-recipe-card" onClick={handleClick}>
                <p className="ingredients">Ingredients: {strIngredient1} {strMeasure1} <br></br>
                     {strIngredient2} {strMeasure2} <br></br>
                     {strIngredient3} {strMeasure3} <br></br>
                     {strIngredient4} {strMeasure4} <br></br>
                     {strIngredient5} {strMeasure5} <br></br>
                     {strIngredient6} {strMeasure6} <br></br>
                     {strIngredient7} {strMeasure7} <br></br>
                     {strIngredient8} {strMeasure8} <br></br>
                     {strIngredient9} {strMeasure9} <br></br>
                     {strIngredient10} {strMeasure10} <br></br>
                     {strIngredient11} {strMeasure11} <br></br>
                     {/* {strIngredient12} {strMeasure12} <br></br>
                     {strIngredient13} {strMeasure13} <br></br>
                     {strIngredient14} {strMeasure14} <br></br>
                     {strIngredient15} {strMeasure15} <br></br> */}
                     {/* {strIngredient16} {strMeasure16} <br></br>
                     {strIngredient17} {strMeasure17} <br></br>
                     {strIngredient18} {strMeasure18} <br></br>
                     {strIngredient19} {strMeasure19} <br></br>
                     {strIngredient20} {strMeasure20} <br></br> */}
                </p>
                <p>{strInstructions}</p>
                <ReactPlayer
                    className="player"
                    url={strYoutube}
                />
                {/* <video src={strYoutube} width="600" height="300" controls="controls" autoplay="true" /> */}
                {/* <a href={strYoutube} target="_blank" rel="noopener noreferrer">Go to watch video</a> */}
            </div>
        </ReactCardFlip>
    )
}