import React, { Component } from "react"
import NewUserForm from "./NewUserForm";

const usersUrl ="http://localhost:3000/users";


export default class Login extends Component {

    state = {
        username: "",
        password: "",
        users: []
    }

    componentDidMount(){
        this.getUsers()
    }
    
    getUsers = () => {
        fetch(usersUrl)
          .then(response => response.json())
          .then(users => this.setState({users}))
    }
    
    
    addUser = (user) => {
        this.setState({
          users: [...this.state.users, user]
        })
    
        let newUser = {
          ...user
        }
    
        fetch(usersUrl, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.login(this.state)
            .then(() => this.props.history.push('/'))
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <label>Username</label>
                    <input name="username" id="username"value={this.state.username} onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit" id="submit" value="Login"/>
                </form>
                <NewUserForm users={this.state.users} addUser={this.addUser} />
            </>
        )
    }
}