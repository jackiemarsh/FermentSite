@events.each do |event|
    json.set! event.id do
      json.partial! 'event', event: event
      json.imageUrl url_for(event.image) if event.image.attached?
    end
end