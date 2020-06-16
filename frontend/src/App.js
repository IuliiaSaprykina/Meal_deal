import React, { Component } from 'react';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import { Route, Switch, Redirect } from "react-router-dom"
import Signup from './components/Signup';
import Favorites from "./components/Favorites";


((nm, tm) => {
  const lStorage = localStorage;
  const sStorage = sessionStorage;
  const tabId = sStorage.getItem(tm)
    || ((newId) => {
      sStorage.setItem(tm, newId);
      return newId;
    })((Math.random() * 1e8).toFixed());
  const update = (setTabValue) => {
    let currentValue = JSON.parse(lStorage.getItem(nm) || '{}');
    const arrValue: number[] = Object.values(currentValue);
    if (setTabValue
      && typeof currentValue[tabId] === 'undefined'
      && !arrValue.reduce((sum, current) => { return sum + current; }, 0)) {
      lStorage.clear();
      currentValue = {};
    }
    currentValue[tabId] = setTabValue;
    lStorage.setItem(nm, JSON.stringify(currentValue));
  };
  update(1);
  window.onbeforeunload = () => { update(0); };
})('tabs', 'tabid');

const recipesUrl = "http://localhost:3000/recipes/";
const favoritesUrl = "http://localhost:3000/user_recipes/"


export default class App extends Component {

  state = {
    favorites: [],
    recipes: []
  }

  componentDidMount(){
    this.getRecipes();
    this.getFavorites();
  }

  getRecipes = () => {
    fetch(recipesUrl)
    .then(response => response.json())
    .then(response => this.setState({
      recipes: response
    }))
  }

  getFavorites = () => {
    fetch(favoritesUrl, { 
      method: 'GET',
      headers: {
        'Content-type' : 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(result => this.setState({favorites: result}))
  }

  addToFavorite = (recipeId, userId) => {
    const favorite = {
      userRecipe:{
        recipe_id: recipeId,
        user_id: +userId
      }
    }
    console.log(favorite)
    this.setState({
      favorites: [...this.state.favorites, favorite]
    })

    fetch(favoritesUrl, {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(favorite)
    })
  }

  addRecipe = (recipe) => {
    this.setState({
      recipes: [...this.state.recipes, recipe]
    })

    fetch(recipesUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipe)
    })
      .then(response => response.json())
      .then(recipe => {
        this.addToFavorite(recipe.id, localStorage.getItem("user_id"))
      })
  }

  render(){
    return ( 
      <div className="App">
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/signup" render={(props) => <Signup {...props} />} />
          <Route path="/favorites" render={(props) => <Favorites favorites={this.state.favorites} recipes={this.state.recipes} {...props} />} />
          <PrivateRoute exact path="/" addRecipe={this.addRecipe} addToFavorite={this.addToFavorite}/>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}


