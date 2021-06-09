export const createEventRsvp = (event_rsvp) => (
    $.ajax({
        method: 'POST',
        url: `/api/event_rsvps`,
        data: {event_rsvp}
    })
)

export const deleteEventRsvp = (event_rsvpId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/event_rsvps/${event_rsvpId}`
    })
)