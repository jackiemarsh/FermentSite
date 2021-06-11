json.extract! user, :id, :username, :email, :created_at, :image
json.imageUrl url_for(user.image) if user.image.attached?
# json.events user.events.pluck(:id)
