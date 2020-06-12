import React, { Component } from "react"

const intialState = {
    username: "",
    password: ""
}

export default class NewUserForm extends Component {

    state = intialState;

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addUser(this.state)

        this.setState(intialState)
    }

    handleChange = (event) => {
        const {name, password} = event.target;
        this.setState({
            [name]: event.target.value,
            [password]:event.target.value
        })


    }

    render(){
        return (
            <form className="new-user-form" onSubmit={this.handleSubmit}>
                <h1>Create a new user</h1>
                <label>Username</label>
                <input name="username" id="username"value={this.state.username} onChange={this.handleChange}/>
                <label>Password</label>
                <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <input type="submit" id="submit" value="Create"/>
            </form>
        )
    }
}