import React, { Component } from 'react';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import { Route, Switch, Redirect, withRouter } from "react-router-dom"
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
const favoritesUrl = "http://localhost:3000/user_recipes/";
const profileUrl = "http://localhost:3000/profile";
const loginUrl ="http://localhost:3000/login/";
const usersUrl = "http://localhost:3000/users/"

class App extends Component {

  state = {
    favorites: [],
    recipes: [], 
    user: {},
    alert: ""
  }

  componentDidMount(){
    this.getFavorites();
    this.validateUser();
  }

  validateUser = () => {
    const token = localStorage.token
    if(token){
      fetch(profileUrl, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(response => response.json())
        .then(response => {
          this.setState({
            user: response.user,
            recipes: response.user.user.recipes
          })
        })
    }
  }

  getFavorites = () => {
    fetch(favoritesUrl, { 
      method: 'GET',
      headers: {
        'Content-type' : 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(favorites => this.setState({favorites}))
  }

  login = (user) => {
    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify({user: user})
    })
    .then(response => response.json())
    .then(response => {
      if(response.message) {
        this.setState({ alert: response.message})
      } else {
        localStorage.setItem("token", response.jwt);
        localStorage.setItem("user_id", response.user.user.id);
        this.setState({
          user: response.user,
          recipes: response.user.recipes,
          alert: ""
        })
      }
    })
    .then(() => this.props.history.push('/'))
  }

  signup = (user) => {
    fetch(usersUrl, {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify({user: user})
    })
    .then(response => response.json())
    .then(response => {
      if(response.message) {
        this.setState({ alert: response.message})
      } else {
        localStorage.setItem("token", response.jwt);
        localStorage.setItem("user_id", response.user.user.id);
      }
    })
    .then(() => this.props.history.push('/'))
  }

  addToFavorite = (recipeId, userId) => {
    const newFavorite = {
      userRecipe:{
        recipe_id: recipeId,
        user_id: +userId
      }
    }

    fetch(favoritesUrl, {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(newFavorite)
    })
      .then(response => response.json())
      .then((recipe) => this.setState({favorites: [...this.state.favorites, recipe.user_recipe]}))
  }

  addRecipe = (recipe) => {
    this.setState({
      recipes: [...this.state.recipes, recipe]
    })

    let newRecipe = {
      ...recipe
    }

    fetch(recipesUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(newRecipe)
    })
      .then(response => response.json())
      .then(recipe => {
        this.addToFavorite(recipe.id, localStorage.getItem("user_id"))
      })
  }

  deleteFavorite = (id) => {
    let favorites = this.state.favorites.filter(fav => fav.id !== id)

    this.setState({favorites})

    fetch(favoritesUrl + id, {
      method: "DELETE"
    })
  }

  render(){
    return ( 
      <div className="App">
        <Switch>
          <PrivateRoute 
            exact path="/" 
            addRecipe={this.addRecipe} 
            addToFavorite={this.addToFavorite} 
            favorites={this.state.favorites}
          />
          <Route 
            path="/login" 
            render={(props) => 
            <Login {...props} 
            login={this.login}
            alert={this.state.alert}
            />} 
          />
          <Route 
            path="/signup" 
            render={(props) => 
            <Signup {...props} 
            signup={this.signup}
            alert={this.state.alert}
            />} 
          />
          <Route 
            path="/favorites" 
            render={() => <Favorites 
                validateUser={this.validateUser}
                user={this.state.user} 
                favorites={this.state.favorites} 
                recipes={this.state.recipes}
                deleteFavorite={this.deleteFavorite}
            />} 
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}

export default  withRouter(App)

