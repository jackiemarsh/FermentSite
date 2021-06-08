# json.event do
    # json.set! @event.id do
        json.partial! "/api/events/event", event: @event
        json.imageUrl url_for(@event.image) if @event.image.attached?
        json.author @event.user.username
    # end
    # end
    # json.extract! @event, :title, :start_date, :description, :image 