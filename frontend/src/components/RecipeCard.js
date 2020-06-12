import React from "react"

export default function RecipeCard (props) {
    const {label, image, calories} = props.recipe
    let x = Math.round(calories, 0.5)
    return(
        <li className="recipe-card">
            <h2>{label}</h2>
            <p>Calories per meal: {x}</p>
            <img src={image} alt=""/>
        </li>
    )
}