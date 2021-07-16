import { connect } from 'react-redux';
import { updateEvent, fetchEvent } from '../../actions/event_actions';
import EditEventForm from './edit_event';


const mSTP = (state, ownProps) => {
    return ({
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.entities.users[state.session.id]
    });
};

const mDTP = (dispatch) => ({
    updateEvent: event => dispatch(updateEvent(event)),
    fetchEvent: eventId => dispatch(fetchEvent(eventId))
});

export default connect(mSTP, mDTP)(EditEventForm);