import React from 'react'
import EventIndexItem from '../events/event_index_item';
import CreateEventFormContainer from '../events/create_event_container'
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {
        constructor(props) {
            super(props)
        this.filterEvents = this.filterEvents.bind(this);
        this.userImage = this.userImage.bind(this);

        this.state = {loading: true};
        }

    componentDidMount() {
        this.props.fetchEventRsvps();
        this.props.fetchEvents();
        this.setState({
            loading: false,
        })
    }
  
    filterEvents() {
        if (this.props.events != undefined) {
            let userEvents = this.props.events;
            console.log(userEvents)
            return userEvents.map(event => {
                if (event.author_id === parseInt(this.props.currentUser.id)) {
                    // console.log("author:" +event.author_id)
                    // console.log("user:" +currentUser.id)
                    return <EventIndexItem key={event.id} event={event}/>;
                }
            })
        }
    }

    userImage() {
        return this.props.currentUser.imageUrl != undefined ? <img src={this.props.currentUser.imageUrl} alt="event pic" className="event-show-img"/> : <div className="event-show-img"></div>
    }

    render() {
        if (this.props.currentUser === undefined) return null;
        if (this.state.loading) {
            return null
        } else {
        return(
            <div className="user-container">
                {/* <span>Fermentsite account since {this.props.currentUser.created_at}</span> */}
                <h1 className="page-header">Account Information</h1>
                <div className="profile-box">
                    <div className="account-info">
                        <div className="user-email">
                            <h3 className="account-header">Account email address</h3>
                            <h4>{this.props.currentUser.email}</h4>
                        </div>
                        <div className="account-photo">
                            <h3 className="account-header">Profile Photo</h3>
                            <figure>
                                {this.userImage()}
                            </figure>
                        </div>
                    </div>
                </div>


                <div className="events-attending">
                    <h2 className="feed-header">Events coming up</h2>
                    <ul className="event-feed" className="rsvp-feed">
                        {this.props.eventRsvps.map(event => (
                            <EventIndexItem key={event.id} event={event} />
                        ))}
                    </ul>
                </div>
                <div className="user-create-button-container">
                    <Link to="/event/create" className="button-submit">Create Event</Link>
                </div>
                <div className="events-created">
                    <h2 className="feed-header">Manage Your Events</h2>
                    <ul className="">
                       {this.filterEvents()}
                    </ul>
                </div>
            </div>
        )
    }}
}
export default UserProfile