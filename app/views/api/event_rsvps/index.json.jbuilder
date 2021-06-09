@event_rsvps.each do |rsvp_event|
    json.set! rsvp_event.id do 
        # json.eventInfo rsvp_event.event 
        json.extract! rsvp_event.event, :id, :title, :start_date
        json.imageUrl url_for(rsvp_event.event.image)
    end
end