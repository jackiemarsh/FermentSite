import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import CreateEventForm from './create_event_form';


const mSTP = (state) => ({
    // event: {
    //     title: "",
    //     description: "",
    //     start_date: "",
    //     location: "",
    //     image: null,
    //     imageUrl: null,
    //     author_id: state.session.id
    // },
    currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
    createEvent: event => dispatch(createEvent(event))
});

export default connect(mSTP, mDTP)(CreateEventForm);
