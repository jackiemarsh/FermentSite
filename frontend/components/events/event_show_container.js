import { connect } from 'react-redux';
import EventShow from './event_show';
import {withRouter} from 'react-router-dom'
import {fetchEvent, fetchEvents, deleteEvent} from '../../actions/event_actions'
import {createEventRsvp} from '../../actions/rsvp_actions'

const mSTP = (state, ownProps) => ({
    events: Object.values(state.entities.events),
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.session.id
})

const mDTP = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    createEventRsvp: event => dispatch(createEventRsvp(event))
})

export default (connect(mSTP, mDTP)(EventShow))