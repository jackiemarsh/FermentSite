class Event < ApplicationRecord
    validates :title, :description, :location, :start_date, :author_id, presence: true

    belongs_to :user, 
    foreign_key: :author_id, 
    class_name: :User

    # has_one_attached :image
    

end
