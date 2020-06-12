import React, { Component } from 'react';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import { Route, Switch, Redirect } from "react-router-dom"

const loginUrl = "http://localhost:3000/login/"
const userRecipesUrl = "http://localhost:3000/user_recipes/"



export default class App extends Component {

  state = {
    user: {}
  }
  

  login = (user) => {
    return fetch(loginUrl, {
      method: "POSt",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(result => {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user_id', result.user.id);
        this.setState({uuser: result.user})

      })
  }

  render(){
    return ( 
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/" />
          <Route path="/login" render={(props) => <Login {...props} login={this.login} />} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}


