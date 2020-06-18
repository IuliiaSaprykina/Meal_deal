import React, { Component } from "react";
import {Link} from "react-router-dom"

const initailizeState = {
    username: "",
    password: ""
}



export default class Login extends Component {

    state = initailizeState

    componentDidMount() {
        if (localStorage.token) {
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state)
        this.setState(initailizeState);
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
                    <Link to="/signup">Create a new user</Link>
                    <input type="submit" id="submit" value="Login"/>
                    { this.props.alert ? <p>{this.props.alert}</p> : null}
                </form>
            </>
        )
    }
}