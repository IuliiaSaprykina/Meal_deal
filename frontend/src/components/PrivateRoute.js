import React from "react"
import Home from "./Home"
import { Route, Redirect } from "react-router-dom"


export default function PrivateRoute (props) {
    return <Route {...props} render={(routerProps) => {
        return localStorage.token ? <Home {...routerProps} addRecipe={props.addRecipe} addToFavorite={props.addToFavorite} favorites={props.favorites}/> : <Redirect to="/login"/>
    }} />
}