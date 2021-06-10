import { connect } from 'react-redux';
import { fetchEventRsvps, deleteEventRsvp } from '../../actions/rsvp_actions';
import { fetchEvents } from '../../actions/event_actions';
import UserProfile from './user_profile';


const mSTP = (state) => ({
    events: Object.values(state.entities.events),
    eventRsvps: Object.values(state.entities.eventRSVP),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEventRsvps: () => dispatch(fetchEventRsvps()),
    deleteEventRsvp: eventRSVPId => dispatch(deleteEventRsvp(eventRSVPId))
});

export default connect(mSTP, mDTP)(UserProfile);
