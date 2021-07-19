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
        this.props.processLogout()
            .then(() => this.props.history.push('/'))
      }

    sessionView() {

        // console.log(this.props.currentUser, "this is my user")
        if (this.props.currentUser) {
            return (
                <hgroup className="header-group">
                    <NavLink to="/event/create" className="nav-create-submit"><i className="fas fa-plus"></i> Create an event</NavLink>
                        <button className="logout-button" onClick={this.handleClick}> <i className="fas fa-sign-out-alt"></i>Log Out</button>
                    <NavLink to={`/users/${this.props.currentUser.id}`} className="header-name"><i className="far fa-user-circle user-icon"></i> {this.props.currentUser.username}</NavLink>
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
                <div className="left-nav"> 
                    <span className="about-links">
                        <a href="https://github.com/jackiemarsh"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/jackie-marsh-a988874b/"><i className="fab fa-linkedin"></i></a>
                    </span> 
                        <NavLink to="/" className="main-logo">fermentsite</NavLink>
                </div>
                <div className="session-view">
                    {this.sessionView()}
                </div>
            </header>
        )
    }
}
export default NavBar