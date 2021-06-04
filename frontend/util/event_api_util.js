export const fetchEvents = () => (   
    $.ajax({
      method: 'GET',
      url: `/api/events`,
      error: (err) => console.log(err)
    })
);

  export const fetchEvent = (eventId) => (
      $.ajax({
          method: `GET`,
          url: `/api/events/${eventId}`
      })
  );

  export const createEvent = (event) => (
    $.ajax({
        method: `POST`,
        url: `/api/events/${event}`,
        data: { event }
    })
);

export const updateEvent = (event) => (
    $.ajax({
        method: `PATCH`,
        url: `/api/events/${event.id}`,
        data: { event }
    })
);

export const deleteEvent = (eventId) => (
    $.ajax({
        method: `DELETE`,
        url: `/api/events`
    })
);