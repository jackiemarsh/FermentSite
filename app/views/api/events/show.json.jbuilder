# json.event do
    json.set! @event.id do
        json.partial! "/api/events/event", event: @event
        
    end
    # end
    # json.extract! @event, :title, :start_date, :description, :image 