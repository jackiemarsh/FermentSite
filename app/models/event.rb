class Event < ApplicationRecord
    validates :author_id, :title, :description, :location, :start_date, presence: true

    belongs_to :user, 
    foreign_key: :author_id, 
    class_name: :user

    # has_one_attached :photo

    
end
