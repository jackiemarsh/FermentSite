class EventRsvp < ApplicationRecord
    validates :event_id, :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :event,
        foreign_key: :event_id,
        class_name: :Event
end
