import { connect } from 'react-redux';
import { fetchEventRsvps, deleteEventRsvp } from '../../actions/rsvp_actions';
import UserProfile from './user_profile';
import { withRouter } from 'react-router-dom';


const mSTP = (state) => ({
    events: Object.values(state.entities.events),
    eventRsvps: Object.values(state.entities.eventRSVPS),
    currentUser: state.session.id
});

const mDTP = (dispatch) => ({
    fetchEventRsvps: () => dispatch(fetchEventRsvps()),
    deleteEventRsvp: eventRSVPId => dispatch(deleteEventRsvp(eventRSVPId))
});

export default withRouter(connect(mSTP, mDTP)(UserProfile));
