import React, { Component } from "react";
import {Link} from "react-router-dom"

const loginUrl ="http://localhost:3000/login/";

const initailizeState = {
    username: "",
    password: "",
    error: ""
   
}



export default class Login extends Component {

    state = initailizeState

    componentDidMount() {
        if (localStorage.token) {
            localStorage.removeItem("token");
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({error: ""})
                    return response.json()
                } else if (response.status === 401){
                    throw new Error("Check your username or password")
                }
            })
            .then(result => {
                localStorage.setItem("token", result.token);
                this.setState({initailizeState})
            })
            .then(() => this.props.history.push('/'))
            // .then(console.log(this.props.history))
            .catch(error => this.setState({error: error.message}));
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
                    { this.state.error ? <p>{this.state.error}</p> : null}
                    {/* { console.log(this.state.error)} */}

                </form>
            </>
        )
    }
}