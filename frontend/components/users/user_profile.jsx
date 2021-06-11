import React from 'react'
import EventIndexItem from '../events/event_index_item';
import CreateEventFormContainer from '../events/create_event_container'
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {
        constructor(props) {
            super(props)
        this.filterEvents = this.filterEvents.bind(this)
        }

    componentDidMount() {
        this.props.fetchEventRsvps()
        this.props.fetchEvents()
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

    render() {
        if (this.props.currentUser === undefined) return null;

        return(
            <div className="profile-container">
                <h1 className="page-header">Account Information</h1>
                <div className="account-info">
                    <div className="user-email">
                        <h3 className="account-email">Account email address</h3>
                        <h4>{this.props.currentUser.email}</h4>
                    </div>
                    <div className="account-photo">
                        <h3>Profile Photo</h3>
                        <figure>
                            {/* <img src={this.props.event.imageUrl} alt="event pic" className="event-show-img"/> */}
                        </figure>
                    </div>
                </div>

                <div>
                    {/* <CreateEventFormContainer /> */}
                    <Link to="/event/create" className="button-submit">Create Event</Link>
                </div>

                <div className="events-attending">
                    <h2 className="feed-header">Events coming up</h2>
                    <ul className="event-feed" className="rsvp-feed">
                        {this.props.eventRsvps.map(event => (
                            <EventIndexItem key={event.id} event={event} />
                        ))}
                    </ul>
                </div>
                <div className="events-created">
                    <h2 className="feed-header">Manage Your Events</h2>
                    <ul className="">
                       {/* {userEvents.map(event => {
                           <EventIndexItem key={event.id} event={event}/>
                       })} */}
                      
                       {this.filterEvents()}
                    </ul>
                </div>
            </div>
        )
    }
}
export default UserProfile