import React from 'react';
import { Link } from 'react-router-dom'
// import Modal from '../modal'

class EventShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
        this.createRsvp = this.createRsvp.bind(this)
        this.deleteRsvp = this.deleteRsvp.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        // this.props.fetchEventRsvps();
        window.scrollTo(0,0)
        this.props.fetchEvent(this.props.match.params.eventId)
        this.props.fetchUser(this.props.match.params.userId)
            .then(() => this.setState({ loading: false}))
           

        this.setState({ loading: false });
    }

    showRSVP() {
        let rsvps = Object.values(this.props.eventRSVPs)
        for(let i = 0; i<rsvps.length; i++) {
            if (rsvps[i].event_id == this.props.event.id) {
                 return <button onClick={this.deleteRsvp} className="rsvp-button">Delete RSVP</button>
            } 
        }
        if (this.props.currentUser) { 
        return <button onClick={this.createRsvp} className="rsvp-button">RSVP</button>
        }
    }

    createRsvp() {
        let newRsvp = {
            userId: this.props.currentUser,
            eventId: this.props.event.id
        }
        this.props.createEventRsvp(newRsvp)
            .then(this.props.openModal('success'))
            .then(() => this.props.history.push(`/users/${this.props.currentUser}`))
            .then(() => window.location.reload());
    }

    deleteRsvp(e) {
        e.preventDefault();
         this.props.deleteEventRsvp(this.props.event.id)
            .then(this.props.openModal('success'))
            .then(() => this.props.history.push(`/users/${this.props.currentUser}`))
            .then(() => window.location.reload());
    }

    showDeleteEvent() {
        if(this.props.currentUser == this.props.event.author_id) {
            return <button onClick={this.handleDelete} className="rsvp-button">Delete Event</button>
        } else {
            return ""
        }
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteEvent(this.props.event.id)
            .then(this.props.openModal('success'))
            .then(() => this.props.history.push('/users/${this.props.currentUser}'))
            .then(() => window.location.reload());
    }

    // handleEdit(e) {
    //     e.preventDefault();
    //     this.props.history.push(`/events/${e.currentTarget.value}/edit`);
    // }

    showEdit() {
        let userId = this.props.currentUser;
        let ownerId = this.props.event.author_id;
        if (userId === ownerId) {
            return (
                <Link to={`/events/${this.props.event.id}/edit`} className="rsvp-button-container">
                    <button className="rsvp-button">Edit Event</button>
                </Link>
                )
        }
    }

    render() {
        if (this.state.loading) return null;
        if (this.props.event === undefined) return null;
        return (
            <div className="event-show-container">
                <section className="event-show">
                    <div className="event-show-top">
                        {/* <figure> */}
                        <div className="top-img">
                            <img src={this.props.event.imageUrl} alt="event pic" className="event-show-image"/>
                        {/* </figure> */}
                        </div>
                        <div className="top-side">
                            <h4 className="event-show-date">{this.props.event.start_date}</h4>
                            <h2 className="event-show-title">{this.props.event.title}</h2>
                            <h3 className="event-show-author">by {this.props.event.author}</h3>
                        </div>
                    </div>
                    <div className="event-show-mid">
                        {this.showDeleteEvent()}
                        {this.showRSVP()}
                        {this.showEdit()}
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