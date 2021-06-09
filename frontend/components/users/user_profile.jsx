import React from 'react'
import EventIndexItem from '../events/event_index_item';
    class UserProfile extends React.Component {
        constructor(props) {
            super(props)

        }
    componentDidMount() {
        this.props.fetchEventRsvps()
    }

    render() {
        if (this.props.currentUser === undefined) return null;

        return(
            <div>
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

                <div className="events-attending">
                    <h2>Events coming up</h2>
                    <ul>
                        {this.props.eventRsvps.map(event => (
                            <EventIndexItem key={event.id} event={event} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
export default UserProfile