import { connect } from 'react-redux';
import EventShow from './event_show';
import {withRouter} from 'react-router-dom'
import {fetchEvent, fetchEvents, updateEvent, deleteEvent} from '../../actions/event_actions'
import { fetchUser } from '../../actions/session_actions';
import {createEventRsvp, deleteEventRsvp} from '../../actions/rsvp_actions'
import {openModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => ({
    events: Object.values(state.entities.events),
    event: state.entities.events[ownProps.match.params.eventId],
    eventRSVPs: state.entities.eventRSVP,
    currentUser: state.session.id
})

const mDTP = (dispatch) => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    updateEvent: event => dispatch(updateEvent(event)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    createEventRsvp: event => dispatch(createEventRsvp(event)),
    deleteEventRsvp: eventRSVPId => dispatch(deleteEventRsvp(eventRSVPId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))

})

export default withRouter((connect(mSTP, mDTP)(EventShow)))