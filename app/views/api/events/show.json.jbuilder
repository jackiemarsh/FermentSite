# json.event do
    # json.set! @event.id do
        json.partial! "/api/events/event", event: @event
        json.imageUrl url_for(@event.image) if @event.image.attached?
    # end
    # end
    # json.extract! @event, :title, :start_date, :description, :image 