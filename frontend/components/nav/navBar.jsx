import React from 'react'
import { NavLink } from 'react-router-dom'
import Greeting from '../greeting/greeting'

class NavBar extends React.Component {

    // display () {
    //     current_user ? (
    //         <Link to="/logout">Logout</Link>
    //     ) : (
    //         <Link to="/signup">Sign Up</Link>
    //     )
    // }

    render() {
        return (
            <header className="nav-bar">
                <h1 className="main-logo">FermentSite</h1>
                <div className="nav-links">
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>
            </header>
        )
    }
}
export default NavBar