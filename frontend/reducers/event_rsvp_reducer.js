import { RECEIVE_EVENT_RSVPS, RECEIVE_EVENT_RSVP, REMOVE_EVENT_RSVP } from '../actions/rsvp_actions'

const EventRsvpsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_EVENT_RSVPS:
            return action.eventRSVPS
        case RECEIVE_EVENT_RSVP:
            nextState[action.eventRSVP.id] = action.eventRSVP;
            return nextState
        case REMOVE_EVENT_RSVP:
            delete nextState[action.eventRSVPId];
            return nextState;
        default:
            return state;
    }
}

export default EventRsvpsReducer