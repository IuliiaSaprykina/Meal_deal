# Meal deal


Collect your favorite recipes

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## General info
I like tasty food, I like eat it and I like to cook something delicious.
Collect your favorite recipes, watch how to cook it and manage your favorite list.

## Intro Video
[Meal Deal on YouTube](https://youtu.be/yR55QixnOYo)

## Technologies
* ActiveRecord - version 6.0.2.2
* Rails - version 6.0.2 
* Ruby - version 2.6.1 and 2.6.5
* SQLite3 - version 1.4
* React 
* React-FlipCard
* React-PlayVideo
* Intagrated API 

## Setup
To run this project, install it locally by cloning the GitHub repository and typing:
Open two command terminals. 
On the first one, navigate to the backend folder and run 
```rails s```
On the second terminal, navigate to the frontend folder and run
```npm start```

## Code Examples
```
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
```

## Features
* You can create a new user
* You can log in
* Look through recent recipes
* Search through all recipes
* Add recipe to your favorites
* Watch video how to cook 
* Delete recipe from your favorites

## Status
Project is finished. 

## Contact
Created by [Iuliia Saprykina](https://www.linkedin.com/in/iuliia-saprykina-ab3351100) 




