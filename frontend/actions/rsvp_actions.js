import * as RsvpApiUtil from '../util/rsvp_api_util'

export const RECEIVE_EVENT_RSVPS = 'RECEIVE_EVENT_RSVPS'
export const RECEIVE_EVENT_RSVP = 'RECEIVE_EVENT_RSVP'
export const REMOVE_EVENT_RSVP = 'REMOVE_EVENT_RSVP'

const receiveEventRSVPs = (eventRSVPS) => ({
    type: RECEIVE_EVENT_RSVPS,
    eventRSVPS
})

const receiveEventRSVP = (eventRSVP) => ({
    type: RECEIVE_EVENT_RSVP,
    eventRSVP
});

const removeEventRSVP = (eventRSVPId) => ({
    type: REMOVE_EVENT_RSVP,
    eventRSVPId
});

export const fetchEventRsvps = () => dispatch => (
    RsvpApiUtil.fetchEventRsvps()
    .then((eventRSVPS) => dispatch(receiveEventRSVPs(eventRSVPS)))
);

export const createEventRsvp = (eventRSVP) => dispatch => (
    RsvpApiUtil.createEventRsvp(eventRSVP)
    .then((eventRSVP) => dispatch(receiveEventRSVP(eventRSVP)))
);

export const deleteEventRsvp = (eventRSVPId) => dispatch => (
    RsvpApiUtil.deleteEventRsvp(eventRSVPId)
    .then((eventRSVPId) => dispatch(removeEventRSVP(eventRSVPId)))
);
