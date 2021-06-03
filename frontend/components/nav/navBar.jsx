import React from 'react'
import { NavLink } from 'react-router-dom'
// import GreetingContainer from '../greeting/greeting_container'

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        // this.state = this.props.currentUser
        this.sessionView = this.sessionView.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.processLogout();
      }

    sessionView() {

        console.log(this.props.currentUser, "this is my user")
        if (this.props.currentUser) {
            return (
                <hgroup className="header-group">
                    <h2 className="header-name">Cheers, {this.props.currentUser.username}!</h2>
                    <button className="nav-links" onClick={this.handleClick}>Log Out</button>
                    {/* <NavLink to="/" className="nav-links">Log Out</NavLink> */}
                </hgroup>
            )
        } else {
            return (
            <div className="nav-links">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
            )
        }
    }

    render() {

        return (
            <header className="nav-bar">
                
                    <NavLink to="/" className="main-logo">fermentsite</NavLink>
                
                <div>
                    {this.sessionView()}
                </div>
            </header>
        )
    }
}
export default NavBar