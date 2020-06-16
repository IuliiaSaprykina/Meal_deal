import React, { Component } from "react"

const usersUrl = "http://localhost:3000/users/"

const initailizeState = {
    username: "",
    password: "", 
    error: ""
}

export default class Signup extends Component {
    state = initailizeState

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();



        fetch(usersUrl, {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({user: this.state})
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({error: ""})
                    return response.json()
                } else if (response.status === 401){
                    throw new Error("This user already exists")
                }
            })
            .then(result => {
                localStorage.setItem("token", result.token)
                this.setState({initailizeState})
            })
            .then(() => this.props.history.push('/'))
            // .then(console.log(this.props.history))
            .catch(error => this.setState({error: error.message}));
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
                    { this.state.error ? <p>{this.state.error}</p> : null}
                    <input type="submit" value="Sign Up" />
                </form>
            </>
        )
    }
}