import React, { Component } from 'react';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import { Route, Switch, Redirect } from "react-router-dom"
import Signup from './components/Signup';


export default class App extends Component {

  render(){
    return ( 
      <div className="App">
        <Switch>
          {/* <Route path="/" render={(props) => <Authenticate {...props} />} /> */}
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/signup" render={(props) => <Signup {...props} />} />
          <PrivateRoute exact path="/"/>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}


