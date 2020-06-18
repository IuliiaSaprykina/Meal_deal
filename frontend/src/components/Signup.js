import React, { Component } from "react"

const initailizeState = {
    username: "",
    password: "",
}

export default class Signup extends Component {
    state = initailizeState

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signup(this.state)
        this.setState(initailizeState);
    
    }

    render(){
        const { username, password } = this.state

        return(
            <>
                <form className="new-user-form" onSubmit={this.handleSubmit}>
                <h1>Create a new user</h1>
                    <label>Username</label>
                    <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    placeholder="username" 
                    onChange={this.handleChange}
                    />
                    <label>Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    placeholder="password" 
                    onChange={this.handleChange}
                    />
                    { this.props.alert ? <p>{this.props.alert}</p> : null}
                    <input type="submit" value="Sign Up" />
                </form>
            </>
        )
    }
}