import { connect } from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/event_actions';
import EventIndex from './event_index';
import { withRouter } from 'react-router-dom';


const mSTP = (state) => ({
    events: Object.values(state.entities.events),
    currentUser: state.session
});

const mDTP = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: eventId => dispatch(fetchEvent(eventId))
});

export default withRouter(connect(mSTP, mDTP)(EventIndex));
