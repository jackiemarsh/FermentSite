import * as RsvpApiUtil from '../util/rsvp_api_util'

export const RECEIVE_EVENT_RSVP = 'RECEIVE_EVENT_RSVP'
export const REMOVE_EVENT_RSVP = 'REMOVE_EVENT_RSVP'

const receiveEventRSVP = (eventRSVP) => ({
    type: RECEIVE_EVENT_RSVPS,
    eventRSVP
});

const removeEventRSVP = (eventRSVPId) => ({
    type: RECEIVE_EVENT_RSVPS,
    eventRSVPId
});

export const createEventRsvp = (eventRSVP) => dispatch => (
    RsvpApiUtil.createEventRsvp(eventRSVP)
    .then((eventRSVP) => dispatch(receiveEventRSVP(eventRSVP)))
)

export const deleteEventRsvp = (eventRSVPId) => dispatch => (
    RsvpApiUtil.deleteEventRsvp(eventRSVPId)
    .then((eventRSVPId) => dispatch(removeEventRSVP(eventRSVPId)))
)
