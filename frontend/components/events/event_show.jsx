import React from 'react';
import { createEventRsvp } from '../../actions/rsvp_actions';
import EventIndexItem from './event_index_item';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
        this.RsvpEvent = this.RsvpEvent.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    RsvpEvent() {
        let newRsvp = {
            userId: this.props.currentUser,
            eventId: this.props.event.id
        }
        this.props.createEventRsvp(newRsvp)
    }

    showDeleteEvent() {
        console.log("delete", this.props.currentUser, this.props.event.author_id)
        if(this.props.currentUser == this.props.event.author_id) {
            return <button onClick={this.handleDelete} className="rsvp-button">Delete Event</button>
        } else {
            return ""
        }
    }

    handleDelete() {
        this.props.deleteEvent(this.props.event.id)
        .then(() => this.props.history.push('/'))
            // .then(() => window.location.reload());
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId)
        .then(() => this.setState({ loading: false}));

        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) return null;
        if (this.props.event === undefined) return null;
        // console.log(this.props.event.start_date.toLocaleDateString('en-US', {month: 'long', day: 'numeric'}))
        return (
            <div className="event-show-container">
                <section className="event-show">
                    <div className="event-show-top">
                        <figure>
                            <img src={this.props.event.imageUrl} alt="event pic" className="event-show-image"/>
                        </figure>
                        <div className="top-side">
                            <h4 className="event-show-date">{this.props.event.start_date}</h4>
                            <h2 className="event-show-title">{this.props.event.title}</h2>
                            <h3 className="event-show-author">by {this.props.event.author}</h3>
                        </div>
                    </div>
                    <div className="event-show-mid">
                        {/* {this.props.currentUser == this.props.event.author_id ? <button onClick={this.props.deleteEvent(this.props.event.id)} className="rsvp-button">Delete Event</button> : ""} */}
                        {this.showDeleteEvent()}
                        <button onClick={this.RsvpEvent} className="rsvp-button">RSVP</button>
                    </div>
                    <div className="event-show-bottom">
                       <div className="bottom-left">
                            <h2 className="event-show-title">{this.props.event.title}</h2>
                            <h1 className="event-show-header">About this event</h1>
                            <h4 className="event-show-description">{this.props.event.description}</h4>
                       </div>
                        <div className="bottom-right">Location {this.props.event.location}</div>
                    </div>
                </section>
            </div>
        )
    }
}
export default EventShow