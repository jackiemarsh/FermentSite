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

  export const createEvent = (event) => {
    return  $.ajax({
        method: `POST`,
        url: `/api/events`,
        data: event,
        contentType: false,
        processData: false
    })
  };

export const updateEvent = (event) => (
    $.ajax({
        method: `PATCH`,
        url: `/api/events/${event.id}`,
        data: event 
    })
);

export const deleteEvent = (eventId) => (
    $.ajax({
        method: `DELETE`,
        url: `/api/events`
    })
);
