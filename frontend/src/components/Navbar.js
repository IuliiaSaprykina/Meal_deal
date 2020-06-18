import React from "react"
import { Link, NavLink } from "react-router-dom"


export default function Navbar (componentDidMount) {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/login" className="log-out">Log out</Link>
                <ul className="right">
                    <li><NavLink to="/login">Home</NavLink></li>
                    <li><NavLink to="/favorites">Favorites</NavLink></li>
                </ul>
            </div>
        
        </nav>
    )
}
